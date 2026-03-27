import { motion } from "framer-motion";
import { Check } from "lucide-react";

const insurances = [
  "Unimed", "Bradesco Saúde", "SulAmérica", "Amil", "Porto Seguro",
  "NotreDame Intermédica", "Hapvida", "Prevent Senior", "Mediservice",
  "Cassi", "Golden Cross", "Particular",
];

const InsuranceSection = () => {
  return (
    <section id="convenios" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Convênios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Aceitamos os principais convênios
          </h2>
          <p className="text-muted-foreground">
            Para sua comodidade, trabalhamos com as principais operadoras de saúde
            do mercado. Consulte disponibilidade para sua operadora.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {insurances.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-card rounded-lg p-4 flex items-center gap-2 shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
