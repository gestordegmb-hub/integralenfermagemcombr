import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-primary overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif italic leading-[1.15] mb-6">
            Agende Sua Consulta com Especialistas
          </h2>
          <p className="text-[15px] text-white/70 leading-relaxed mb-8 font-sans max-w-lg mx-auto">
            Dê o primeiro passo para um cuidado de saúde verdadeiramente especializado.
            Nossa equipe está pronta para atendê-lo.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {[
              "Resposta em até 1 hora",
              "Atendimento 6 dias por semana",
              "Equipe certificada",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-[12px] text-white/80 font-sans font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="gap-2.5 px-10 h-14 w-full sm:w-auto uppercase text-[12px] tracking-[0.15em]">
                <MessageCircle className="w-[18px] h-[18px]" />
                Agendar pelo WhatsApp
              </Button>
            </a>
            <a href="tel:+5522974017588">
              <Button
                variant="heroOutline"
                size="lg"
                className="gap-2.5 px-10 h-14 w-full sm:w-auto uppercase text-[12px] tracking-[0.15em]"
              >
                <Phone className="w-[18px] h-[18px]" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
