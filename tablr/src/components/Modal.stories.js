import ModalWithButton from "./ModalWithButton";

export default {
    title: "Modal",
    component: ModalWithButton,
};

const en = (key) => ({
    open: "Open Form",
    title: "Form",
    description: "Fill details",
    name: "Name",
    email: "Email",
    submit: "Submit",
}[key]);

const fr = (key) => ({
    open: "Ouvrir",
    title: "Formulaire",
    description: "Remplir les détails",
    name: "Nom",
    email: "Email",
    submit: "Soumettre",
}[key]);

export const English = () => <ModalWithButton t={en} />;
export const French = () => <ModalWithButton t={fr} />;