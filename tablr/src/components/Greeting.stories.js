import Greeting from "../components/Greeting";

export default {
  title: "Translations/Greeting",
  component: Greeting,
};

const en = (key, { name } = {}) => {
  const translations = {
    hello: `Hello ${name}`,
    description: "this is the en component",
    title: "Welcome to the English version",
  };
  return translations[key];
};


const es = (key, { name } = {}) => {
  const translations = {
    hello: `Hola ${name}`,
    description: "este es el componente en español",
    title: "Bienvenido a la versión en español",
  };
  return translations[key];
};

const fr = (key, { name } = {}) => {
  const translations = {
    hello: `Bonjour ${name}`,
    description: "c'est le composant en français",
    title: "Bienvenue dans la version française",
  };
  return translations[key];
};

export const French = () => <Greeting t={fr} name="Naman" />;
export const English = () => <Greeting t={en} name="Naman" />;
export const Spanish = () => <Greeting t={es} name="Naman" />;