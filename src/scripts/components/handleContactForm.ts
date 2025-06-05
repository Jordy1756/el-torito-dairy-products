import type { APIResponse } from "@definitions/sharedTypes";
import { contactFields } from "@definitions/contactFieldTypes";
import { validateInput } from "@scripts/utils/validateInput";
import { showToast } from "@scripts/utils/handleToast";
import { sendContactEmail } from "@scripts/utils/sendEmail";
import { formDataEntryToString } from "@scripts/utils/convertToString";
import { debounce } from "@scripts/utils/debounce";

export const initContactForm = () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const inputs = form.querySelectorAll("div > input, div > textarea") as NodeListOf<HTMLInputElement>;
    const paragraphs = form.querySelectorAll("div > p") as NodeListOf<HTMLParagraphElement>;
    const sendButton = form.querySelector("button[type='submit']") as HTMLButtonElement;

    const errorHandler = (input: HTMLInputElement, index: number) =>
        (paragraphs[index].textContent = validateInput(input, contactFields[input.name].errors));

    const debouncedValidation = debounce((input: HTMLInputElement, index: number) => errorHandler(input, index), 300);

    const submitHandler = async (e: Event) => {
        e.preventDefault();

        const data = Object.fromEntries(
            [...new FormData(form)].map(([key, value]) => [key, formDataEntryToString(value)])
        );

        const response: APIResponse = await (await sendContactEmail(data)).json();

        if (response.success) {
            showToast(response.message, "success");
            form.reset();
        } else showToast(response.message, "error");
    };

    form.addEventListener("submit", (e) => submitHandler(e));

    inputs.forEach((input, index) => input.addEventListener("input", () => debouncedValidation(input, index)));

    sendButton.addEventListener("click", () => inputs.forEach((input, index) => errorHandler(input, index)));
};
