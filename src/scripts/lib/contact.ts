import { actions, isInputError } from "astro:actions";
import { showToast } from "@scripts/lib/toast";

(() => {
    const form = document.querySelector("#contact-form") as HTMLFormElement;
    const inputsElements = form.querySelectorAll(".input__box input, .input__box textarea") as NodeListOf<
        HTMLInputElement | HTMLTextAreaElement
    >;
    const inputs = Array.from(inputsElements);

    const getErrorMessageElement = (input: HTMLInputElement | HTMLTextAreaElement) =>
        input.closest(".input__box")?.querySelector(".error__message") as HTMLSpanElement;

    inputs.forEach((input) => {
        input.addEventListener("blur", async () => {
            await handleTest(input);
        });
    });

    const handleTest = async (input?: HTMLInputElement | HTMLTextAreaElement) => {
        try {
            const { data, error } = await actions.sendContact(new FormData(form));

            if (isInputError(error)) {
                if (input) {
                    const fieldName = input.name as keyof typeof error.fields;
                    const messages = error.fields[fieldName];
                    input.closest(".input__box")?.classList.add("error");
                    getErrorMessageElement(input).textContent = messages?.join(", ") || "";
                } else {
                    Object.entries(error.fields).forEach(([fieldName, messages]) => {
                        const input = inputs.find((el) => el.name === fieldName);
                        input?.closest(".input__box")?.classList.add("error");
                        getErrorMessageElement(input!).textContent = messages.join(", ");
                    });
                }

                return;
            }

            if (error) throw error;

            form.reset();

            showToast({
                type: data?.type || "success",
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
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        await handleTest();
    });
})();
