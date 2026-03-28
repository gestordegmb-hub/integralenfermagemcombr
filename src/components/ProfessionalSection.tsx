import { motion } from "framer-motion";
import profissional1 from "@/assets/profissional_1.jpg";

const photos = [
  { src: profissional1, alt: "Dra. Viviane - Estomaterapeuta", label: "Dra. Viviane" },
];

const ProfessionalSection = () => {
  return (
    <section id="profissional" className="py-14 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa Profissional</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Conheça a Especialista
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto">
            Profissional dedicada ao cuidado integral dos pacientes com excelência e humanização.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-sm aspect-[3/4]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <span className="text-white font-semibold text-base sm:text-lg">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
