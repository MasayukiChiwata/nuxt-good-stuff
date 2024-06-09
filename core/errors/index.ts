export class BaseError extends Error {
  constructor(
    readonly errorCode: number,
    message?: string,
  ) {
    super(message);
  }
}

export type ValidationIssue = {
  path: (string | number)[];
  message: string;
};
export class ValidationError extends BaseError {
  constructor(readonly issues: ValidationIssue[]) {
    super(422, "Validation error.");
  }
}
