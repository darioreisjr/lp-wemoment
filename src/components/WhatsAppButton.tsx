import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "5511954351239";
    const message = "Olá poderia me ajudar?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (!phoneNumber === true) {
        return null;
    }

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
            title="Fale conosco no WhatsApp"
            className="fixed bottom-6 right-6 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300  text-white"
        >
            <MessageCircle size={32} strokeWidth={2} />
        </a>
    );
};

export default WhatsAppButton;