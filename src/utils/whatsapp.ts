import { Product } from '../lib/supabase';

export const sendToWhatsApp = (product: Product, phoneNumber: string) => {
  const message = `Hello! I'm interested in purchasing:\n\nProduct: ${product.name}\nPrice: $${product.price}\n\nPlease let me know about availability and delivery options.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
};
