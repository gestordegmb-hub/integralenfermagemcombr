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
  { img: feridasImg, name: "Tratamento Avançado de Feridas", desc: "Curativos avançados e acompanhamento completo da cicatrização" },
  { img: estomiasImg, name: "Estomias", desc: "Cuidados especializados com estomias intestinais e urinárias" },
  { img: peDiabeticoImg, name: "Pé Diabético", desc: "Prevenção e tratamento especializado para pés diabéticos" },
  { img: laserterapiaImg, name: "Laserterapia", desc: "Terapia a laser para acelerar a cicatrização e reduzir dor" },
  { img: ozonioterapiaImg, name: "Ozonioterapia", desc: "Tratamento com ozônio para regeneração tecidual" },
  { img: ledterapiaImg, name: "LEDterapia", desc: "Fototerapia com LED para cicatrização e controle de infecções" },
  { img: regenerativaImg, name: "Terapia Regenerativa", desc: "Fibrina rica em plaquetas para regeneração acelerada" },
  { img: podiatriaImg, name: "Podiatria", desc: "Cuidados especializados com unhas e pés" },
  { img: posOperatorioImg, name: "Pós-operatórios", desc: "Acompanhamento e curativos em recuperação cirúrgica" },
  { img: mentoriaImg, name: "Mentoria e Treinamento", desc: "Capacitação para profissionais de enfermagem" },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="section-label">Especialidades</span>
          <h2 className="section-title">
            Atendimento completo para suas necessidades
          </h2>
          <div className="premium-divider" />
          <p className="section-desc">
            Contamos com uma ampla gama de especialidades para oferecer o cuidado ideal
            em cada fase da vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="premium-card p-4 sm:p-5 group cursor-pointer hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-all duration-300 overflow-hidden">
                <img src={s.img} alt={s.name} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" loading="lazy" width={36} height={36} />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-foreground mb-1 leading-tight">{s.name}</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
