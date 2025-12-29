import { sendContactEmail } from "@scripts/utils/email";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    sendContact: defineAction({
        accept: "form",
        input: z.object({
            name: z
                .string({ message: "Por favor, ingresa tu nombre para continuar." })
                .min(3, "El nombre debe tener al menos 3 caracteres.")
                .max(30, "El nombre no puede exceder 30 caracteres"),
            lastName: z
                .string({ message: "Por favor, ingresa tus apellidos para continuar." })
                .min(10, "Los apellidos deben tener al menos 10 caracteres.")
                .max(50, "Los apellidos no pueden exceder 50 caracteres"),
            email: z
                .string({ message: "Por favor, ingresa tu correo electrónico para continuar." })
                .email("El correo no parece válido. Asegúrate de incluir '@' y un dominio correcto."),
            subject: z
                .string({ message: "Por favor, proporciona un asunto para tu mensaje." })
                .min(5, "El asunto debe tener al menos 5 caracteres.")
                .max(50, "El asunto no puede exceder 50 caracteres")
                .regex(
                    /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{4,}$/,
                    "El asunto debe comenzar con una letra mayúscula y no debe contener números o caracteres especiales."
                ),
            message: z
                .string({ message: "Por favor, escribe un mensaje para continuar." })
                .min(10, "El mensaje debe contener al menos 10 caracteres.")
                .max(500, "El mensaje no puede exceder 500 caracteres")
                .regex(/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/, "El mensaje solo puede contener letras y espacios."),
        }),
        handler: async (input) => {
            return await sendContactEmail(input);
        },
    }),
};
