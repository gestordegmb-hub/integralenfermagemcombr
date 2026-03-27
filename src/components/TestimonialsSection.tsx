import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Aparecida S.",
    text: "Atendimento impecável! A equipe da Integral me tratou com tanto carinho que me senti em casa. Os curativos avançados resolveram meu problema que há meses não tinha solução.",
    rating: 5,
    service: "Curativos Especiais",
  },
  {
    name: "João Carlos M.",
    text: "O serviço de Home Care da Integral salvou nosso dia a dia. Meu pai recebe cuidados de excelência sem precisar sair de casa. Profissionais extremamente capacitados e atenciosos.",
    rating: 5,
    service: "Home Care",
  },
  {
    name: "Patrícia Oliveira",
    text: "Minha filha tem medo de agulha e a enfermeira Juliana foi simplesmente incrível! Conseguiu aplicar a vacina sem nenhum drama. Recomendo a todos os pais!",
    rating: 5,
    service: "Enfermagem Pediátrica",
  },
  {
    name: "Roberto Almeida",
    text: "Após minha cirurgia cardíaca, o acompanhamento da equipe de enfermagem cardiológica foi essencial para minha recuperação. Monitoramento constante e muito profissionalismo.",
    rating: 5,
    service: "Enfermagem Cardiológica",
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
              className="bg-background rounded-xl p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-primary">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
