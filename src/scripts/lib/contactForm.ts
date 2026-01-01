import { actions, isInputError } from "astro:actions";
import { showToast } from "@scripts/lib/toast";
import { showError, validateInput } from "@scripts/utils/validations";
import { contactFields } from "@scripts/validations/contactFields";

(() => {
    const form = document.querySelector("#contact-form") as HTMLFormElement;
    const inputsElements = form.querySelectorAll(".input__box input, .input__box textarea") as NodeListOf<
        HTMLInputElement | HTMLTextAreaElement
    >;
    const inputs = Array.from(inputsElements);

    inputs.forEach((input) => {
        input.setCustomValidity(" ");
        input.addEventListener("blur", () => validateInput(input, contactFields[input.name].errors));
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await actions.sendContact(new FormData(form));
            
            if (isInputError(error)) {
                Object.entries(error.fields).forEach(([fieldName, messages]) => {
                    const input = inputs.find((el) => el.name === fieldName) as HTMLInputElement | HTMLTextAreaElement;
                    showError(input, messages[0]);
                });
                return;
            }

            if (error) throw error;

            form.reset();

            showToast({
                type: "success",
                title: data?.title || "¡Mensaje enviado!",
                message: data?.message || "Gracias por contactarnos. Nos comunicaremos contigo pronto.",
            });
        } catch (err) {
            console.error(err);
            showToast({
                type: "error",
                title: "Error al enviar el mensaje",
                message: "No se pudo enviar el mensaje. Por favor, intenta nuevamente más tarde.",
            });
        }
    });
})();
