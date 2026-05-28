// Controller - Lógica de negócio
import { landingData } from '../models/landingModel';

export const LandingController = {
  getData: () => {
    return landingData;
  },

  getWhatsAppLink: () => {
    const { whatsapp, message } = landingData.contact;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`;
  },

  handleContactClick: () => {
    const link = LandingController.getWhatsAppLink();
    window.open(link, '_blank');
  }
};
