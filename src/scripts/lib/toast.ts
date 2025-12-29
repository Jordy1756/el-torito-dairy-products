import type { Toast } from "@scripts/types/toast";

const toast = document.querySelector("#toast") as HTMLElement;
const toastTitle = toast.querySelector("#toast-title") as HTMLHeadingElement;
const toastMessage = toast.querySelector("#toast-message") as HTMLParagraphElement;
const toastCloseButton = toast.querySelector("#toast-close-btn") as HTMLButtonElement;

export const showToast = ({ type, title, message }: Toast) => {
    toast.dataset.type = type;
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add("active");

    setTimeout(closeToast, 3300);
};

export const closeToast = () => toast.classList.remove("active");

toastCloseButton.addEventListener("click", closeToast);
