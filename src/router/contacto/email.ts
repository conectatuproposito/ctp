import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID_CONTACTO;
const publicKey = import.meta.env.VITE_EMAIL;
const to = import.meta.env.VITE_TO_CONTACTO;

export const sendContact = (
  templatePrams: Record<string, unknown> | undefined
) => emailjs.send(serviceID, templateID, { ...templatePrams, to }, publicKey);
