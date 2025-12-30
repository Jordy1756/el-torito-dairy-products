import type { InputErrorTypes } from "@scripts/types/input";

export interface ContactField {
    id: string;
    name: string;
    label: string;
    pattern: RegExp;
    minLength: number;
    maxLength: number;
    errors: InputErrorTypes;
}
