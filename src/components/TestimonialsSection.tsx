import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import depoimento1 from "@/assets/depoimentos_1.png";
import depoimento2 from "@/assets/depoimentos_2.png";
import depoimento3 from "@/assets/depoimentos_3.png";
import depoimento4 from "@/assets/depoimentos_4.png";

const testimonials = [
  {
    name: "Vinicius Alves Araújo",
    text: "Simplesmente perfeito o trabalho de vocês... Meu filho chegou aí com uma lesão profunda e extensa após um acidente e vocês fizeram todos os cuidados e hoje está super bem.",
    rating: 5,
    image: depoimento1,
  },
  {
    name: "Monique Fernandes Torres",
    text: "Profissionais super habilitadas, atenciosas e atualizadas. Consultório limpo, organizado. Ambiente de acolhimento. O melhor consultório de enfermagem da Região dos Lagos.",
    rating: 5,
    image: depoimento2,
  },
  {
    name: "Janaína Martins Rocha",
    text: "Atendimento de excelência e olhar atento as necessidades de cada paciente!! Faz uso de recursos como ozônio e laser que aceleram o tratamento.",
    rating: 5,
    image: depoimento3,
  },
  {
    name: "Fabio Dalanhese",
    text: "Fomos muito bem acolhidos, o tratamento prescrito para minha tia com alta tecnologia. Estou amando! Recomendo!",
    rating: 5,
    image: depoimento4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">
            O que nossos pacientes dizem
          </h2>
          <div className="premium-divider" />
          <p className="section-desc">
            A satisfação dos nossos pacientes é o nosso maior indicador de qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.image}
                  alt={`Depoimento de ${t.name}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-4 h-4 text-primary/30 mb-1" />
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">{t.text}</p>
                <p className="font-semibold text-xs sm:text-sm text-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
