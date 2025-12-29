import { MAILGUN_API_KEY, MAILGUN_DOMAIN } from "@scripts/config/environment";
import type { ToastType } from "@scripts/types/toast";
import { ActionError } from "astro:actions";
import Mailgun from "mailgun.js";

interface ContactEmailParams {
    name: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactEmailResponse {
    type: ToastType;
    title: string;
    message: string;
}

export const sendContactEmail = async ({
    name,
    lastName,
    email,
    subject,
    message,
}: ContactEmailParams): Promise<ContactEmailResponse> => {
    const fullName = `${name} ${lastName}`;

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: "api",
        key: MAILGUN_API_KEY,
    });

    try {
        const response = await mg.messages.create(MAILGUN_DOMAIN, {
            from: `${fullName} <${email}>`,
            to: ["Yordi Castro Rojas <jordycastro1756@gmail.com>"],
            subject,
            text: `${message}\n\n${fullName}`,
            html: `
                <div style="padding: 20px;">
                    <p>${message}</p>
                </div>
            `,
        });

        if (!response.status || response.status !== 200) throw new Error("Mailgun API returned non-200 status");

        return {
            type: "success",
            title: "¡Mensaje enviado!",
            message: "Gracias por contactarnos. Nos comunicaremos contigo pronto.",
        };
    } catch (error) {
        throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "No se pudo enviar el mensaje. Por favor, intenta nuevamente más tarde.",
        });
    }
};
