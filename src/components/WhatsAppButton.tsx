import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-white text-[13px] px-4 py-2.5 rounded-md shadow-lg font-sans"
              >
                Fale conosco agora!
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="w-[60px] h-[60px] rounded-full bg-[hsl(142,70%,42%)] text-white shadow-xl shadow-black/15 hover:shadow-2xl hover:scale-110 transition-all duration-500 flex items-center justify-center animate-pulse-soft"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
