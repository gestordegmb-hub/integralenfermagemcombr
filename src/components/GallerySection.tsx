import { motion } from "framer-motion";

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nosso Trabalho em Imagens
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conheça um pouco do nosso dia a dia e dos procedimentos realizados na clínica.
          </p>
        </motion.div>

        <div className="text-center text-muted-foreground py-12">
          <p>Em breve novas imagens serão adicionadas.</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
