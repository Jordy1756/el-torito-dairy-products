import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string({ message: "Por favor, ingresa tu nombre para continuar." })
        .min(3, "El nombre debe tener al menos 3 caracteres.")
        .max(50, "El nombre no puede exceder 50 caracteres")
        .regex(/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/i, "Solo se permiten letras."),
    lastName: z
        .string({ message: "Por favor, ingresa tus apellidos para continuar." })
        .min(3, "Los apellidos deben tener al menos 3 caracteres.")
        .max(50, "Los apellidos no pueden exceder 50 caracteres")
        .regex(/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/, "Solo se permiten letras y espacios."),
    email: z.email("El correo no parece válido."),
    subject: z
        .string({ message: "Por favor, proporciona un asunto para tu mensaje." })
        .min(3, "El asunto debe tener al menos 3 caracteres.")
        .max(100, "El asunto no puede exceder 100 caracteres")
        .regex(/^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s.,;:¿?¡!\-]+$/, "Solo se permiten letras, números y puntuación básica."),
    message: z
        .string({ message: "Por favor, escribe un mensaje para continuar." })
        .min(10, "El mensaje debe contener al menos 10 caracteres.")
        .max(500, "El mensaje no puede exceder 500 caracteres")
        .regex(/^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s.,;:¿?¡!\-'"()]+$/, "Solo se permiten letras, números y puntuación básica."),
});
