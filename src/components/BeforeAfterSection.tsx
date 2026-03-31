import { motion } from "framer-motion";

const cases = [
  {
    title: "Tratamento Avançado de Feridas",
    description: "Cicatrização completa em 8 semanas com laserterapia e curativos especiais.",
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
    <section id="antes-depois" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Resultados</span>
          <h2 className="section-title">Antes & Depois</h2>
          <div className="premium-divider" />
          <p className="section-desc mt-6">
            Veja a evolução dos nossos pacientes com tratamentos especializados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="premium-card overflow-hidden"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-44 sm:h-52 bg-muted/30 flex items-center justify-center border-r border-border/30">
                  <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60 bg-background/80 px-2 py-0.5 rounded">
                    Antes
                  </span>
                  <span className="text-muted-foreground/40 text-[11px]">Foto em breve</span>
                </div>
                <div className="relative h-44 sm:h-52 bg-muted/30 flex items-center justify-center">
                  <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-[0.15em] text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Depois
                  </span>
                  <span className="text-muted-foreground/40 text-[11px]">Foto em breve</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-sm text-foreground mb-1 font-sans">{item.title}</h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
