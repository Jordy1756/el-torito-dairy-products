import type { ErrorTypes } from "@definitions/sharedTypes";

export type ContactField = {
    name: string;
    pattern: RegExp;
    minLength: number;
    maxLength: number;
    errors: ErrorTypes;
    flex?: number;
};
