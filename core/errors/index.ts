import type { ZodFormattedError } from "zod";

export class BaseError extends Error {
  constructor(
    readonly errorCode: number,
    message?: string,
  ) {
    super(message);
  }
}

export class ValidationError<T> extends BaseError {
  constructor(readonly validationError: ZodFormattedError<T>) {
    super(422, "Validation error.");
  }
}
