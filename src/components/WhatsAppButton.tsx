import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(142,70%,42%)] text-white shadow-xl shadow-black/15 hover:shadow-2xl hover:scale-105 transition-all duration-500 flex items-center justify-center"
      style={{
        animation: "whatsapp-float 10s ease-in-out infinite",
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <style>{`
        @keyframes whatsapp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
