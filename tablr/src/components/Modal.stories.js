import ModalWithButton from "./ModalWithButton";

export default {
    title: "Modal",
    component: ModalWithButton,
};

const en = (key) => {
    const t = {
        open: "Open Form",
        title: "Form",
        description: "Fill details",
        name: "Name",
        email: "Email",
        submit: "Submit",
    };
    return t[key];
};

const fr = (key) => {
    const t = {
        open: "Ouvrir",
        title: "Formulaire",
        description: "Remplir les détails",
        name: "Nom",
        email: "Email",
        submit: "Soumetre",
    };
    return t[key];
};

export const English = () => <ModalWithButton t={en} />;
export const French = () => <ModalWithButton t={fr} />;