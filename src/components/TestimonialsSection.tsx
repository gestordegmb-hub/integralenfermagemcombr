import { motion } from "framer-motion";
import { Star } from "lucide-react";
import depoimento1 from "@/assets/depoimentos_1.png";
import depoimento2 from "@/assets/depoimentos_2.png";
import depoimento3 from "@/assets/depoimentos_3.png";
import depoimento4 from "@/assets/depoimentos_4.png";

const testimonials = [
  {
    name: "Vinicius Alves Araújo",
    text: "Simplesmente perfeito o trabalho de vocês... Meu filho chegou aí com uma lesão profunda e hoje está super bem.",
    image: depoimento1,
  },
  {
    name: "Monique Fernandes Torres",
    text: "Profissionais super habilitadas, atenciosas e atualizadas. O melhor consultório de enfermagem da Região dos Lagos.",
    image: depoimento2,
  },
  {
    name: "Janaína Martins Rocha",
    text: "Atendimento de excelência e olhar atento às necessidades de cada paciente. Recursos como ozônio e laser que aceleram o tratamento.",
    image: depoimento3,
  },
  {
    name: "Fabio Dalanhese",
    text: "Fomos muito bem acolhidos, o tratamento prescrito para minha tia com alta tecnologia. Recomendo!",
    image: depoimento4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">Histórias Reais</h2>
          <div className="premium-divider" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="premium-card overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={t.image}
                  alt={`Depoimento de ${t.name}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="text-[13px] font-medium text-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
