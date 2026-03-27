import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 bg-foreground">
        <img src={heroImg} alt="Clínica Integral - Ambiente moderno e acolhedor" className="w-full h-full object-cover object-top" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/30"
          >
            ✦ Excelência em Enfermagem Especializada
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-primary-foreground"
          >
            Tratamento avançado de{" "}
            <span className="text-primary">feridas</span> em Cabo Frio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
          >
            Cuidado especializado, tecnologia e acompanhamento individualizado para promover
            qualidade de vida e evolução na cicatrização.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#agendamento">
              <Button variant="hero" size="lg" className="gap-2 text-base px-8 py-6">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
            </a>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2 text-base px-8 py-6">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex gap-8"
          >
            {[
              { num: "⭐ 5", label: "Estrelas no Google" },
              { num: "+15", label: "Anos de Experiência" },
              { num: "✦", label: "Referência na Região dos Lagos" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.num}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
