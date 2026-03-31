import { motion } from "framer-motion";

const cases = [
  {
    title: "Tratamento Avançado de Feridas",
    description: "Cicatrização completa em 8 semanas com uso de laserterapia e curativos especiais.",
  },
  {
    title: "Pé Diabético",
    description: "Recuperação total após 12 semanas de acompanhamento especializado.",
  },
  {
    title: "Lesão por Pressão",
    description: "Evolução significativa com protocolo de ozonioterapia e LEDterapia.",
  },
  {
    title: "Ferida Cirúrgica",
    description: "Cicatrização acelerada com terapia regenerativa PRF.",
  },
];

const BeforeAfterSection = () => {
  return (
    <section id="antes-depois" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="section-label">Resultados Reais</span>
          <h2 className="section-title">Antes e Depois</h2>
          <div className="premium-divider" />
          <p className="section-desc">
            Veja a evolução dos nossos pacientes com tratamentos especializados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card overflow-hidden group"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-44 sm:h-56 bg-muted/50 flex items-center justify-center border-r border-border/50">
                  <div className="absolute top-3 left-3 bg-foreground/80 text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide">
                    ANTES
                  </div>
                  <span className="text-muted-foreground/60 text-xs">Foto em breve</span>
                </div>
                <div className="relative h-44 sm:h-56 bg-muted/50 flex items-center justify-center">
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide">
                    DEPOIS
                  </div>
                  <span className="text-muted-foreground/60 text-xs">Foto em breve</span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
