export type ToastType = "success" | "error";

export type Toast = {
    type: ToastType;
    title: string;
    message: string;
};
