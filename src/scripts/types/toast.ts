export type ToastType = "success" | "error" | "warning" | "information";

export interface Toast {
    type: ToastType;
    title: string;
    message: string;
}
