import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import feridasImg from "@/assets/specialties/feridas.png";
import estomiasImg from "@/assets/specialties/estomias.png";
import laserterapiaImg from "@/assets/specialties/laserterapia.png";
import podiatriaImg from "@/assets/specialties/podiatria.png";

const services = [
  {
    title: "Tratamento Avançado de Feridas",
    desc: "Curativos avançados com coberturas especiais, desbridamento e acompanhamento completo da cicatrização.",
    tags: ["Úlceras", "Feridas diabéticas", "Pós-operatório"],
    img: feridasImg,
  },
  {
    title: "Estomias & Cuidados Especializados",
    desc: "Assistência integral para pessoas com estomias, incluindo orientação, adaptação e acompanhamento contínuo.",
    tags: ["Estomias intestinais", "Estomias urinárias", "Adaptação"],
    img: estomiasImg,
  },
  {
    title: "Laserterapia & Ozonioterapia",
    desc: "Tecnologias avançadas para aceleração da cicatrização, regeneração tecidual e redução de dor.",
    tags: ["Laser", "Ozônio", "LEDterapia"],
    img: laserterapiaImg,
  },
  {
    title: "Podiatria & Pé Diabético",
    desc: "Cuidados especializados com pés, prevenção de complicações diabéticas e tratamento de unhas.",
    tags: ["Prevenção", "Tratamento", "Acompanhamento"],
    img: podiatriaImg,
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-16 sm:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Serviços</span>
          <h2 className="section-title">Serviços de Enfermagem de Alto Padrão</h2>
          <div className="premium-divider" />
          <p className="section-desc mt-6">
            Cada serviço é desenvolvido com rigor técnico e atenção individualizada ao paciente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="premium-card overflow-hidden group"
            >
              <div className="p-7 sm:p-8">
                <div className="w-14 h-14 rounded-md bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                  <img src={s.img} alt={s.title} className="w-8 h-8 object-contain" loading="lazy" />
                </div>
                <h3 className="font-semibold text-xl sm:text-[22px] text-foreground font-serif mb-3">{s.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65] mb-5 font-sans">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-full bg-muted border border-gold/20 text-muted-foreground font-medium font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-14"
        >
          <a href="#agendamento">
            <Button variant="gold" size="lg" className="gap-2 uppercase text-[12px] sm:text-[13px] tracking-[0.12em] h-[52px] px-10 hover:scale-105">
              Solicitar Informações
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
