import type { ZodObject } from "zod";
import { ZodError } from "zod";

export const validateField = (input: HTMLInputElement | HTMLTextAreaElement, schema: ZodObject<any>) => {
    try {
        schema.shape[input.name].parse(input.value);
        clearError(input);
    } catch (err: any) {
        if (!(err instanceof ZodError)) return;

        console.log({ issues: err.issues });
        showError(input, err.issues[0].message);
    }
};

export const clearError = (input: HTMLInputElement | HTMLTextAreaElement) => {
    const inputBox = input.closest(".input__box") as HTMLDivElement;
    const errorMessage = inputBox.querySelector(".error__message") as HTMLSpanElement;
    inputBox.classList.remove("error");
    errorMessage.textContent = "";
};

export const showError = (input: HTMLInputElement | HTMLTextAreaElement, message: string) => {
    const inputBox = input.closest(".input__box") as HTMLDivElement;
    const errorMessage = inputBox.querySelector(".error__message") as HTMLSpanElement;
    inputBox.classList.add("error");
    errorMessage.textContent = message;
};
