import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex items-end min-h-screen overflow-hidden">
      {/* Background image — full clarity, no blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Integral - Ambiente moderno e acolhedor"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Strong left scrim for guaranteed text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/15 sm:from-black/85 sm:via-black/45 sm:to-transparent" />
        {/* Bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pb-12 sm:pb-20 lg:pb-28 pt-28 sm:pt-32">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/80 font-medium mb-5 sm:mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Excelência em Enfermagem Especializada
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[2.25rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold leading-[1.08] mb-5 sm:mb-6 text-white font-serif"
          >
            Tratamento avançado
            <br />
            de <span className="text-primary">feridas</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-sm sm:text-[15px] lg:text-base text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-md"
          >
            Cuidado especializado, tecnologia e acompanhamento individualizado
            para promover qualidade de vida e evolução na cicatrização.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href="#agendamento" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="gap-2.5 px-8 py-6 w-full sm:w-auto text-sm shadow-lg shadow-primary/25">
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </Button>
            </a>
            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="heroOutline" size="lg" className="gap-2.5 px-8 py-6 w-full sm:w-auto text-sm border-white/30 text-white hover:bg-white/10">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 sm:mt-16 flex gap-8 sm:gap-12 lg:gap-16"
          >
            {[
              { num: "5.0", label: "Google", icon: true },
              { num: "15+", label: "Anos de Experiência" },
              { num: "#1", label: "Região dos Lagos" },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <div className="flex items-baseline gap-1.5">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white font-serif">
                    {stat.num}
                  </p>
                  {stat.icon && <Star className="w-3.5 h-3.5 text-primary fill-primary" />}
                </div>
                <p className="text-[9px] sm:text-[10px] text-white/70 mt-1.5 uppercase tracking-[0.18em] font-medium">
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
