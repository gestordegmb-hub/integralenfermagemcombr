import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import depoimento1 from "@/assets/depoimentos_1.png";
import depoimento2 from "@/assets/depoimentos_2.png";
import depoimento3 from "@/assets/depoimentos_3.png";
import depoimento4 from "@/assets/depoimentos_4.png";

const testimonials = [
  {
    name: "Vinicius Alves Araújo",
    role: "Paciente — Tratamento de Feridas",
    text: "Simplesmente perfeito o trabalho de vocês. Meu filho chegou com uma lesão profunda e hoje está super bem. Profissionalismo e carinho em cada atendimento.",
    image: depoimento1,
  },
  {
    name: "Monique Fernandes Torres",
    role: "Paciente — Estomia",
    text: "Profissionais super habilitadas, atenciosas e atualizadas. O melhor consultório de enfermagem da Região dos Lagos. Recomendo de olhos fechados.",
    image: depoimento2,
  },
  {
    name: "Janaína Martins Rocha",
    role: "Paciente — Laserterapia",
    text: "Atendimento de excelência e olhar atento às necessidades de cada paciente. Recursos como ozônio e laser que aceleram o tratamento de forma impressionante.",
    image: depoimento3,
  },
  {
    name: "Fabio Dalanhese",
    role: "Paciente — Tratamento Avançado",
    text: "Fomos muito bem acolhidos, o tratamento prescrito para minha tia com alta tecnologia. Equipe extremamente profissional e dedicada. Recomendo!",
    image: depoimento4,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20"
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">O Que Nossos Pacientes Dizem</h2>
          <div className="premium-divider" />
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 sm:px-12"
            >
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed font-serif italic mb-10">
                "{testimonials[current].text}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover mb-4"
                  loading="lazy"
                />
                <p className="font-semibold text-sm text-foreground font-sans">{testimonials[current].name}</p>
                <p className="text-[11px] text-muted-foreground mt-1 font-sans">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-border hover:bg-muted-foreground/30"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
