import { motion } from "framer-motion";
import { Star } from "lucide-react";
import depoimento1 from "@/assets/depoimentos_1.png";
import depoimento2 from "@/assets/depoimentos_2.png";
import depoimento3 from "@/assets/depoimentos_3.png";
import depoimento4 from "@/assets/depoimentos_4.png";

const testimonials = [
  {
    name: "Vinicius Alves Araújo",
    text: "Simplesmente perfeito o trabalho de vocês... Meu filho chegou aí com uma lesão profunda e extensa após um acidente e vocês fizeram todos os cuidados e hoje está super bem..",
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
    text: "Atendimento de excelência e olhar atento as necessidades de cada paciente!! Faz uso de recursos como ozônio e laser que aceleram o tratamento. Fazendo com que todo processo se torne menos doloroso!",
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
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            O que nossos pacientes dizem
          </h2>
          <p className="text-muted-foreground">
            A satisfação dos nossos pacientes é o nosso maior indicador de qualidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl overflow-hidden shadow-sm flex flex-col"
            >
              <img
                src={t.image}
                alt={`Depoimento de ${t.name}`}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
