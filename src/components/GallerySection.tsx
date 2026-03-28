import { motion } from "framer-motion";
import galeria1 from "@/assets/galeria_1.jpg";
import galeria2 from "@/assets/galeria_2.jpg";

const photos = [
  { src: galeria1, alt: "Laserterapia - Tratamento com laser", label: "Laserterapia" },
  { src: galeria2, alt: "PRF - Fibrina rica em plaquetas", label: "PRF" },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
