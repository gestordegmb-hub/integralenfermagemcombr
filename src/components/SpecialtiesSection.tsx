import { motion } from "framer-motion";

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

const specialties = [
  { img: feridasImg, name: "Tratamento Avançado de Feridas", desc: "Curativos avançados e acompanhamento completo" },
  { img: estomiasImg, name: "Estomias", desc: "Cuidados especializados intestinais e urinárias" },
  { img: peDiabeticoImg, name: "Pé Diabético", desc: "Prevenção e tratamento especializado" },
  { img: laserterapiaImg, name: "Laserterapia", desc: "Aceleração da cicatrização e redução de dor" },
  { img: ozonioterapiaImg, name: "Ozonioterapia", desc: "Regeneração tecidual com ozônio" },
  { img: ledterapiaImg, name: "LEDterapia", desc: "Fototerapia para cicatrização" },
  { img: regenerativaImg, name: "Terapia Regenerativa", desc: "Fibrina rica em plaquetas" },
  { img: podiatriaImg, name: "Podiatria", desc: "Cuidados especializados com unhas e pés" },
  { img: posOperatorioImg, name: "Pós-operatórios", desc: "Acompanhamento em recuperação cirúrgica" },
  { img: mentoriaImg, name: "Mentoria", desc: "Capacitação para profissionais" },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-20 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Especialidades</span>
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="premium-divider" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
              className="premium-card p-5 sm:p-6 group cursor-default text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/6 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-500 overflow-hidden">
                <img src={s.img} alt={s.name} className="w-8 h-8 object-contain" loading="lazy" width={32} height={32} />
              </div>
              <h3 className="font-medium text-[13px] text-foreground mb-1.5 leading-tight font-sans">{s.name}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
