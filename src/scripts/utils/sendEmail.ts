import { MAILGUN_API_URL, MAILGUN_HEADERS } from "@scripts/config/configEmail";

export const sendContactEmail = async ({
    name,
    lastName,
    email,
    subject,
    message,
}: Record<string, string>): Promise<Response> => {
    const fullName = `${name} ${lastName}`;
    try {
        const response = await fetch(MAILGUN_API_URL, {
            method: "POST",
            headers: MAILGUN_HEADERS,
            body: new URLSearchParams({
                from: `${fullName} <${email}>`,
                to: "jordycastro1756@gmail.com",
                subject: subject,
                text: `${message}\n\n${fullName}`,
                html: `
                    <p>${message}</p>
                    <p>${fullName}</p>
                `,
            }),
        });

        if (!response.ok) throw new Error();

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
