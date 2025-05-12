export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

export const getWhatsAppLink = (phoneNumber: string, message: string = ''): string => {
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};

export const getPhoneLink = (phoneNumber: string): string => {
  const formattedPhone = formatPhoneNumber(phoneNumber);
  return `tel:${formattedPhone}`;
};
