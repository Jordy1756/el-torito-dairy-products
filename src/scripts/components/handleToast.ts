import type { Toast } from "@definitions/ToastTypes";

const ICON_TYPES = {
    success: `
        <svg width="24" height="24" viewBox="0 0 1024 1024">
            <path
                fill="var(--success-500)"
                d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
            />
        </svg>
    `,
    error: `
        <svg width="24" height="24" viewBox="0 0 20 20">
            <path
                fill="var(--error-500)"
                d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
            />
        </svg>
    `,
};

export const initToast = () => {
    const toast = document.querySelector("#toast") as HTMLElement;
    const toastContent = toast.querySelector("#toast-content") as HTMLElement;
    const toastIcon = toastContent.querySelector("#toast-icon-container") as HTMLElement;
    const toastTitle = toastContent.querySelector("#toast-title") as HTMLHeadingElement;
    const toastText = toastContent.querySelector("#toast-message") as HTMLParagraphElement;
    const toastCloseButton = toastContent.querySelector("#toast-close-btn") as HTMLButtonElement;

    const showToast = ({ type, title, message }: Toast) => {
        toast.classList.add("active", type);
        toastIcon.innerHTML = ICON_TYPES[type];
        toastTitle.textContent = title;
        toastText.textContent = message;

        setTimeout(closeToast, 3300);
    };

    const closeToast = () => {
        toast.classList.remove("active");
        toastIcon.innerHTML = "";
        toastTitle.textContent = "";
        toastText.textContent = "";
    };

    toastCloseButton.addEventListener("click", closeToast);

    return { showToast, closeToast };
};
