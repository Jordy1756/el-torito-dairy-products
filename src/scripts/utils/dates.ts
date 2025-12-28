export const getFormattedDate = (date: Date) =>
    date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });

export const getYear = (date: Date) => date.getFullYear();
