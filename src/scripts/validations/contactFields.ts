import type { ContactField } from "@scripts/types/contact";

export const contactFields: Record<string, ContactField> = {
    name: {
        id: "name",
        name: "name",
        label: "Nombre",
        pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ]+$/,
        minLength: 3,
        maxLength: 50,
        errors: {
            valueMissing: "Por favor, ingresa tu nombre para continuar.",
            tooShort: "El nombre debe tener al menos 3 caracteres.",
            patternMismatch: "El nombre solo puede contener letras (sin números ni caracteres especiales).",
        },
    },
    lastName: {
        id: "last-name",
        name: "lastName",
        label: "Apellidos",
        pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/,
        minLength: 3,
        maxLength: 50,
        errors: {
            valueMissing: "Por favor, ingresa tus apellidos para continuar.",
            tooShort: "Los apellidos deben tener al menos 3 caracteres.",
            patternMismatch: "Los apellidos solo pueden contener letras y espacios.",
        },
    },
    email: {
        id: "email",
        name: "email",
        label: "Correo electrónico",
        pattern: /^[a-z0-9_'+\-][a-z0-9_'+\-\.]*[a-z0-9_+\-]@[a-z0-9][a-z0-9\-]*\.[a-z0-9\-\.]*[a-z]{2,}$/i,
        minLength: 3,
        maxLength: 100,
        errors: {
            valueMissing: "Por favor, ingresa tu correo electrónico para continuar.",
            tooShort: "El correo debe contener al menos 3 caracteres.",
            patternMismatch: "El correo no parece válido. Asegúrate de incluir '@' y un dominio correcto.",
        },
    },
    subject: {
        id: "subject",
        name: "subject",
        label: "Asunto",
        pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s.,;:¿?¡!\-]+$/,
        minLength: 3,
        maxLength: 100,
        errors: {
            valueMissing: "Por favor, proporciona un asunto para tu mensaje.",
            tooShort: "El asunto debe tener al menos 3 caracteres.",
            patternMismatch: "El asunto solo puede contener letras, números y puntuación básica.",
        },
    },
    message: {
        id: "message",
        name: "message",
        label: "Mensaje",
        pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s.,;:¿?¡!\-'"()]+$/,
        minLength: 3,
        maxLength: 500,
        errors: {
            valueMissing: "Por favor, escribe un mensaje para continuar.",
            tooShort: "El mensaje debe contener al menos 3 caracteres.",
            patternMismatch: "El mensaje solo puede contener letras, números y puntuación básica.",
        },
    },
} as const;
