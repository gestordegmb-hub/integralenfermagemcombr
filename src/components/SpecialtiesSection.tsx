import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import feridasImg from "@/assets/specialties/feridas.png";
import estomiasImg from "@/assets/specialties/estomias.png";
import peDiabeticoImg from "@/assets/specialties/pe-diabetico.png";
import laserterapiaImg from "@/assets/specialties/laserterapia.png";
import ozonioterapiaImg from "@/assets/specialties/ozonioterapia.png";
import ledterapiaImg from "@/assets/specialties/ledterapia.png";
import regenerativaImg from "@/assets/specialties/regenerativa.png";
import podiatriaImg from "@/assets/specialties/podiatria.png";
import posOperatorioImg from "@/assets/specialties/pos-operatorio.png";
import mentoriaImg from "@/assets/specialties/mentoria.png";

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
    <section id="especialidades" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20"
        >
          <span className="section-label">Serviços</span>
          <h2 className="section-title">Serviços de Enfermagem de Alto Padrão</h2>
          <div className="premium-divider" />
          <p className="section-desc mt-6">
            Cada serviço é desenvolvido com rigor técnico e atenção individualizada ao paciente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="premium-card overflow-hidden group hover:border-gold/30"
            >
              <div className="p-7 sm:p-8">
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                  <img src={s.img} alt={s.title} className="w-8 h-8 object-contain" loading="lazy" />
                </div>
                <h3 className="font-semibold text-xl text-foreground font-serif mb-3">{s.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5 font-sans">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium font-sans">
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
          className="text-center mt-12"
        >
          <a href="#agendamento">
            <Button variant="gold" size="lg" className="gap-2 uppercase text-[12px] tracking-[0.15em]">
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
