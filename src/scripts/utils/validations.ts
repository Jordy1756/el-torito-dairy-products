import type { InputErrorTypes } from "@scripts/types/input";

export const validateInput = (input: HTMLInputElement | HTMLTextAreaElement, errors: InputErrorTypes): void => {
    for (const [validity, message] of Object.entries(errors)) {
        if (input.validity[validity as keyof ValidityState]) {
            input.setCustomValidity(" ");
            showError(input, message);
            return;
        }
    }

    input.setCustomValidity("");
    clearError(input);
};

export const showError = (input: HTMLInputElement | HTMLTextAreaElement, message: string) => {
    const inputBox = input.closest(".input__box") as HTMLDivElement;
    const errorMessage = inputBox.querySelector(".error__message") as HTMLSpanElement;
    inputBox.classList.add("error");
    errorMessage.textContent = message;
};

export const clearError = (input: HTMLInputElement | HTMLTextAreaElement) => {
    const inputBox = input.closest(".input__box") as HTMLDivElement;
    const errorMessage = inputBox.querySelector(".error__message") as HTMLSpanElement;
    inputBox.classList.remove("error");
    errorMessage.textContent = "";
};
