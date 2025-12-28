import type { APIResponse } from "@definitions/sharedTypes";
import { contactFields } from "@scripts/sections/handleContactFields";
import { validateInput } from "@scripts/utils/validations";
import { sendContactEmail } from "@scripts/utils/email";
import { formDataEntryToString } from "@scripts/utils/formattings";
import { debounce } from "@scripts/utils/debounces";
// import { showToast } from "@scripts/utils/toasts";

(() => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const inputs = form.querySelectorAll(".input__box input, .input__box textarea") as NodeListOf<HTMLInputElement>;
    const paragraphs = form.querySelectorAll(".error__message") as NodeListOf<HTMLParagraphElement>;
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

        // if (!response.success) return showToast({ type: "error", title: response.title, message: response.message });

        // showToast({ type: "success", title: response.title, message: response.message });
        form.reset();
    };

    form.addEventListener("submit", (e) => submitHandler(e));

    inputs.forEach((input, index) => input.addEventListener("input", () => debouncedValidation(input, index)));

    sendButton.addEventListener("click", () => inputs.forEach((input, index) => errorHandler(input, index)));
})();
