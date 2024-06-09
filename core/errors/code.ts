export type CodeDescription = {
  code: number;
  message: string;
};

export const VALIDATION_ERROR: CodeDescription = {
  code: 422,
  message: "Validation error",
};
