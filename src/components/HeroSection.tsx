import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex items-center min-h-[90vh] md:min-h-screen pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Integral - Ambiente moderno e acolhedor"
          className="w-full h-full object-cover object-center"
          loading="eager"
          style={{ filter: "none" }}
        />
        {/* Subtle left-side gradient for text readability, transparent on the right to show the woman */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        {/* Bottom gradient for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 md:py-20">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium mb-6 border border-primary-foreground/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Excelência em Enfermagem Especializada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5 text-primary-foreground"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Tratamento avançado de{" "}
            <span className="text-primary">feridas</span>
            <br className="hidden sm:block" />
            {" "}em Cabo Frio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-base sm:text-lg text-primary-foreground/85 mb-8 leading-relaxed max-w-lg"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.2)" }}
          >
            Cuidado especializado, tecnologia e acompanhamento individualizado para promover
            qualidade de vida e evolução na cicatrização.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#agendamento" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="gap-2 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto rounded-xl">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Agendar Consulta
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="whatsapp" size="lg" className="gap-2 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto rounded-xl">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 sm:mt-14 flex gap-8 sm:gap-12"
          >
            {[
              { num: "5.0", label: "Estrelas no Google", prefix: "⭐" },
              { num: "+15", label: "Anos de Experiência", prefix: "" },
              { num: "#1", label: "Região dos Lagos", prefix: "" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p
                  className="text-2xl sm:text-3xl font-bold text-primary"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
                >
                  {stat.prefix}{stat.num}
                </p>
                <p className="text-[11px] sm:text-xs text-primary-foreground/70 mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
