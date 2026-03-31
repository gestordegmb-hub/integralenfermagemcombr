import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex items-end min-h-screen overflow-hidden">
      {/* Background image — sharp, no blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Integral - Ambiente moderno e acolhedor"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Elegant left-to-right gradient: dark on text side, transparent on image side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pb-14 sm:pb-20 lg:pb-28 pt-32 sm:pt-36">
        <div className="max-w-lg lg:max-w-xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/70 font-medium mb-6 sm:mb-7"
            style={{ fontFamily: "'Inter', sans-serif", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            Excelência em Enfermagem Especializada
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold leading-[1.06] mb-6 sm:mb-7 text-white font-serif"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.35)" }}
          >
            Tratamento avançado
            <br />
            de <span className="text-primary" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>feridas</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-[15px] sm:text-base lg:text-lg text-white/85 mb-10 sm:mb-12 leading-relaxed max-w-md font-light"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
          >
            Cuidado especializado, tecnologia e acompanhamento individualizado
            para promover qualidade de vida e evolução na cicatrização.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4"
          >
            <a href="#agendamento" className="w-full sm:w-auto">
              <Button
                variant="hero"
                size="lg"
                className="gap-2.5 px-9 h-14 w-full sm:w-auto text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar className="w-[18px] h-[18px]" />
                Agendar Consulta
              </Button>
            </a>
            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="heroOutline"
                size="lg"
                className="gap-2.5 px-9 h-14 w-full sm:w-auto text-[15px] border-white/25 text-white hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] transition-all duration-300"
              >
                <MessageCircle className="w-[18px] h-[18px]" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-14 sm:mt-18 lg:mt-20 flex gap-10 sm:gap-14 lg:gap-16"
          >
            {[
              { num: "5.0", label: "Google", icon: true },
              { num: "15+", label: "Anos de Experiência" },
              { num: "#1", label: "Região dos Lagos" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline gap-1.5">
                  <p
                    className="text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold text-white font-serif"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
                  >
                    {stat.num}
                  </p>
                  {stat.icon && <Star className="w-4 h-4 text-primary fill-primary" />}
                </div>
                <p
                  className="text-[9px] sm:text-[10px] text-white/60 mt-1.5 uppercase tracking-[0.18em] font-medium"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
