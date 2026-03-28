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
    <section id="antes-depois" className="py-14 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resultados Reais</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4 text-foreground">
            Antes e Depois
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Veja a evolução dos nossos pacientes com tratamentos especializados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-44 sm:h-56 bg-muted flex items-center justify-center border-r border-border">
                  <div className="absolute top-2 left-2 bg-foreground/80 text-background text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
                    ANTES
                  </div>
                  <span className="text-muted-foreground text-xs">Foto em breve</span>
                </div>
                <div className="relative h-44 sm:h-56 bg-muted flex items-center justify-center">
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
                    DEPOIS
                  </div>
                  <span className="text-muted-foreground text-xs">Foto em breve</span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
