export const CONTACT = {
  whatsapp: "51999999999",
  email: "contacto@glassperu.com",
  phone: "+51 999 999 999",
} as const;

export const waLink = (msg: string): string =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
