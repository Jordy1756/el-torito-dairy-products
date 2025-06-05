export type ErrorTypes = {
    valueMissing?: string;
    tooShort?: string;
    patternMismatch?: string;
};

export type APIResponse = {
    success: boolean;
    message: string;
};
