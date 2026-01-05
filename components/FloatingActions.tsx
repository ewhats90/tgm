
import React from 'react';
import { CONTACT_INFO, Icons } from '../constants';

const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`;
  const callUrl = `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <a
        href={callUrl}
        className="md:hidden flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        title="Call Us"
      >
        <Icons.Phone />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <Icons.Whatsapp />
      </a>
    </div>
  );
};

export default FloatingActions;
