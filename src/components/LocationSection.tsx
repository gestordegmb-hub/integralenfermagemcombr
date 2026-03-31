import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="contato" className="py-20 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Localização</span>
          <h2 className="section-title">Venha nos Visitar</h2>
          <div className="premium-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, title: "Endereço", lines: ["Rua Cuiabá, 193", "Cabo Frio — RJ"] },
              { icon: Clock, title: "Horário", lines: ["Seg — Sex: 09:00 às 18:00", "Sáb: 09:00 às 13:00", "Dom e Feriados: Fechado"] },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/6 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-foreground mb-1 font-sans">{item.title}</h3>
                  {item.lines.map((l) => (
                    <p key={l} className="text-[13px] text-muted-foreground leading-relaxed">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/6 flex items-center justify-center flex-shrink-0">
                <Phone className="w-[18px] h-[18px] text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-foreground mb-1 font-sans">WhatsApp</h3>
                <a href="https://wa.me/5522998271485" target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted-foreground hover:text-primary transition-colors block">(22) 99827-1485</a>
                <a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted-foreground hover:text-primary transition-colors block">(22) 97401-7588</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-xl overflow-hidden h-72 sm:h-80 lg:h-auto border border-border/40"
          >
            <iframe
              title="Localização Integral Clínica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.893709983055!2d-42.0367919!3d-22.880384499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9705fd2acef5b3%3A0x3ae8ba75e5ab493!2sCl%C3%ADnica%20de%20Enfermagem%20Integral%20Cabo%20Frio!5e0!3m2!1spt-BR!2sbr!4v1774570851613!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
