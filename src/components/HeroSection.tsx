import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex items-end min-h-screen">
      {/* Background image — no blur, full clarity */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Integral - Ambiente moderno e acolhedor"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Refined gradient: strong on the left for text, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,8%)/0.82] via-[hsl(220,20%,8%)/0.45] to-transparent" />
        {/* Subtle bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-16 sm:pb-24 pt-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/60 font-medium mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Excelência em Enfermagem Especializada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] mb-6 text-primary-foreground font-serif"
          >
            Tratamento avançado
            <br />
            de <span className="text-primary">feridas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-[15px] sm:text-base text-primary-foreground/70 mb-10 leading-relaxed max-w-md font-light"
          >
            Cuidado especializado, tecnologia e acompanhamento individualizado
            para promover qualidade de vida e evolução na cicatrização.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#agendamento" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="gap-2.5 px-7 py-6 w-full sm:w-auto text-sm">
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
              <Button variant="heroOutline" size="lg" className="gap-2.5 px-7 py-6 w-full sm:w-auto text-sm border-primary-foreground/20">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-14 flex gap-10 sm:gap-14"
          >
            {[
              { num: "5.0", label: "Google" },
              { num: "15+", label: "Anos" },
              { num: "#1", label: "Região dos Lagos" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-primary-foreground font-serif">{stat.num}</p>
                <p className="text-[10px] sm:text-[11px] text-primary-foreground/40 mt-1 uppercase tracking-[0.15em] font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
