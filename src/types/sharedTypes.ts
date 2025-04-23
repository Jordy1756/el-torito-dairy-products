export type ErrorTypes = {
    valueMissing?: string;
    tooShort?: string;
    patternMismatch?: string;
};

export type APIResponse = {
    success: boolean;
    message: string;
};

export type Images = Record<string, ImageMetadata>;

export type OptimizedImages = Record<string, string>;
