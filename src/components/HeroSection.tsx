import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDown, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex items-end min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Integral - Ambiente moderno e acolhedor"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay — darker on text side (right), clear on left */}
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(10,20,35,0.88)] via-[rgba(15,25,45,0.55)] to-[rgba(15,25,45,0.15)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 sm:pb-28 lg:pb-36 pt-32 sm:pt-40">
        <div className="max-w-xl lg:max-w-2xl ml-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-gold font-medium mb-6 sm:mb-8 font-sans"
          >
            Enfermagem Especializada
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[clamp(36px,8vw,64px)] font-semibold leading-[1.1] mb-6 sm:mb-8 text-white font-serif italic [text-shadow:_0_2px_8px_rgba(0,0,0,0.4)]"
          >
            Cuidado Especializado
            <br />
            com <span className="text-gold">Excelência</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-[15px] sm:text-[16px] lg:text-[18px] text-white/95 mb-10 sm:mb-12 leading-[1.65] max-w-lg font-light font-sans"
          >
            Referência em enfermagem avançada na Região dos Lagos. Cuidados especializados,
            tecnologia e acompanhamento personalizado com a mais alta qualidade técnica e humana.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                size="lg"
                className="gap-2.5 px-8 sm:px-10 h-[52px] w-full sm:w-auto text-[13px] sm:text-[14px] hover:scale-105"
              >
                <MessageCircle className="w-[18px] h-[18px]" />
                AGENDAR PELO WHATSAPP
              </Button>
            </a>
            <a href="#especialidades">
              <Button
                variant="heroOutline"
                size="lg"
                className="gap-2.5 px-8 sm:px-10 h-[52px] w-full sm:w-auto text-[13px] sm:text-[14px]"
              >
                NOSSOS SERVIÇOS
                <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 sm:mt-20 flex gap-10 sm:gap-16"
          >
            {[
              { num: "+500", label: "Pacientes Atendidos" },
              { num: "15+", label: "Anos de Experiência" },
              { num: "100%", label: "Satisfação Garantida" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold font-serif">
                  {stat.num}
                </p>
                <p className="text-[10px] sm:text-[11px] text-white/50 mt-1.5 uppercase tracking-[0.15em] font-medium font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-sans font-medium">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
