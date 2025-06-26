import { MAILGUN_API_KEY, MAILGUN_DOMAIN } from "@config/environment";
import FormData from "form-data";
import Mailgun from "mailgun.js";

export const sendContactEmail = async ({
    name,
    lastName,
    email,
    subject,
    message,
}: Record<string, string>): Promise<Response> => {
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
                <p>${message}</p>
            `,
        });

        if (!response.status || response.status !== 200) throw new Error("Failed to send email");

        return new Response(
            JSON.stringify({
                success: true,
                title: "¡Mensaje enviado!",
                message: "Gracias por contactarnos. Nos comunicaremos contigo pronto.",
            })
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                success: false,
                title: "No se pudo enviar",
                message: "Ocurrió un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
            })
        );
    }
};
