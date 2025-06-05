const toast = document.getElementById("toast") as HTMLDivElement;
const paragraph = toast.querySelector("p") as HTMLParagraphElement;

export const showToast = (message: string, type: string) => {
    paragraph.textContent = message;
    toast.classList.add(type);

    setTimeout(() => {
        toast.classList.remove(type);
    }, 3000);
};
