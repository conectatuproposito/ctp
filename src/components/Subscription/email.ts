import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID_SUBSCRIPCION;
const publicKey = import.meta.env.VITE_EMAIL;
const to = import.meta.env.VITE_TO_SUBSCRIPCION;

export const sendSubscripcion = (
  templatePrams: Record<string, unknown> | undefined
) => emailjs.send(serviceID, templateID, { ...templatePrams, to }, publicKey);
