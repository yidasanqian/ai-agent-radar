/**
 * Shared retry helpers for transient HTTP/network failures.
 */

export interface ErrorWithStatus extends Error {
  status?: number;
}

export interface RetryOptions {
  label: string;
  retries: number;
  baseDelayMs: number;
  shouldRetry: (err: unknown) => boolean;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createHttpError(message: string, status: number): ErrorWithStatus {
  const err = new Error(message) as ErrorWithStatus;
  err.status = status;
  return err;
}

export function getErrorStatus(err: unknown): number | undefined {
  return typeof (err as { status?: unknown })?.status === "number"
    ? ((err as { status?: number }).status ?? undefined)
    : undefined;
}

export function isRetryableHttpError(err: unknown): boolean {
  const status = getErrorStatus(err);
  if (typeof status === "number") return status === 429 || status >= 500;

  if (err instanceof DOMException && err.name === "AbortError") return true;
  return err instanceof Error;
}

export async function withRetry<T>(operation: () => Promise<T>, options: RetryOptions): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await operation();
    } catch (err) {
      if (attempt >= options.retries || !options.shouldRetry(err)) throw err;

      const wait = options.baseDelayMs * 2 ** attempt;
      console.error(
        `  [${options.label}] retry ${attempt + 1}/${options.retries} in ${wait / 1000}s: ${err}`,
      );
      await sleep(wait);
    }
  }
}
