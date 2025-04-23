import { MAILGUN_API_URL, MAILGUN_HEADERS } from "@config/configEmail";

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

        if (response.ok) return new Response(JSON.stringify({ success: true, message: "Correo enviado con éxito" }));
        else return new Response(JSON.stringify({ success: false, message: "Error al enviar el correo" }));
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: "Error al enviar el correo" }));
    }
};
