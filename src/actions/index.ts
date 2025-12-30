import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { sendContactEmail } from "@scripts/utils/email";

export const server = {
    sendContact: defineAction({
        accept: "form",
        input: z.object({
            name: z
                .string({ message: "Por favor, ingresa tu nombre para continuar." })
                .min(3, "El nombre debe tener al menos 3 caracteres.")
                .max(50, "El nombre no puede exceder 50 caracteres.")
                .regex(
                    /^[a-záéíóúñA-ZÁÉÍÓÚÑ]+$/,
                    "El nombre solo puede contener letras (sin números ni caracteres especiales)."
                ),
            lastName: z
                .string({ message: "Por favor, ingresa tus apellidos para continuar." })
                .min(3, "Los apellidos deben tener al menos 3 caracteres.")
                .max(50, "Los apellidos no pueden exceder 50 caracteres.")
                .regex(/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/, "Los apellidos solo pueden contener letras y espacios."),
            email: z
                .string({ message: "Por favor, ingresa tu correo electrónico." })
                .min(3, "El correo debe contener al menos 3 caracteres.")
                .max(100, "El correo no puede exceder 100 caracteres.")
                .email("El correo no parece válido. Asegúrate de incluir '@' y un dominio correcto."),
            subject: z
                .string({ message: "Por favor, proporciona un asunto para tu mensaje." })
                .min(3, "El asunto debe tener al menos 3 caracteres.")
                .max(100, "El asunto no puede exceder 100 caracteres.")
                .regex(
                    /^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s.,;:¿?¡!\-]+$/,
                    "El asunto solo puede contener letras, números y puntuación básica."
                ),
            message: z
                .string({ message: "Por favor, escribe un mensaje para continuar." })
                .min(3, "El mensaje debe contener al menos 3 caracteres.")
                .max(500, "El mensaje no puede exceder 500 caracteres.")
                .regex(
                    /^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s.,;:¿?¡!\-'"()]+$/,
                    "El mensaje solo puede contener letras, números y puntuación básica."
                ),
        }),
        handler: async (input) => {
            return await sendContactEmail(input);
        },
    }),
};
