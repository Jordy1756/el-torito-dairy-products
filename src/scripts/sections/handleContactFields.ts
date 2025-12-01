import type { ContactField } from "@definitions/contactFieldTypes";

export const contactFields: Record<string, ContactField> = {
    name: {
        label: "Nombre",
        name: "name",
        pattern: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}$/,
        minLength: 3,
        maxLength: 30,
        errors: {
            valueMissing: "Por favor, ingresa tu nombre para continuar.",
            tooShort: "El nombre debe tener al menos 3 caracteres.",
            patternMismatch:
                "El nombre debe comenzar con una letra mayúscula y seguir el formato correcto, como 'John'.",
        },
    },
    lastName: {
        label: "Apellidos",
        name: "lastName",
        pattern: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/,
        minLength: 10,
        maxLength: 50,
        errors: {
            valueMissing: "Por favor, ingresa tus apellidos para continuar.",
            tooShort: "Los apellidos deben tener al menos 10 caracteres.",
            patternMismatch:
                "Tus apellidos deben comenzar con una letra mayúscula y seguir el formato correcto, como 'Doe Smith'.",
        },
    },
    email: {
        label: "Correo electrónico",
        name: "email",
        pattern: /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
        minLength: 5,
        maxLength: 50,
        errors: {
            valueMissing: "Por favor, ingresa tu correo electrónico para continuar.",
            tooShort: "El correo debe contener al menos 5 caracteres.",
            patternMismatch: "El correo no parece válido. Asegúrate de incluir '@' y un dominio correcto.",
        },
    },
    subject: {
        label: "Asunto",
        name: "subject",
        pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{4,}$/,
        minLength: 5,
        maxLength: 50,
        errors: {
            valueMissing: "Por favor, proporciona un asunto para tu mensaje.",
            tooShort: "El asunto debe tener al menos 5 caracteres.",
            patternMismatch:
                "El asunto debe comenzar con una letra mayúscula y no debe contener números o caracteres especiales.",
        },
    },
    message: {
        label: "Mensaje",
        name: "message",
        pattern: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/,
        minLength: 10,
        maxLength: 500,
        flex: 1,
        errors: {
            valueMissing: "Por favor, escribe un mensaje para continuar.",
            tooShort: "El mensaje debe contener al menos 10 caracteres.",
        },
    },
};
