export const generateWhatsAppLink = (message: string) => {
  const phoneNumber = '5521991605699';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const defaultWhatsAppMessage = "Olá! Gostaria de fazer um orçamento com o melhor custo-benefício e saber mais sobre as condições de locação.";

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};
