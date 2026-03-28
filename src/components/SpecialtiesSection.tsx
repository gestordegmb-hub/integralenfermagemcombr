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
    <section id="especialidades" className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Especialidades</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4 text-foreground">
            Atendimento completo para suas necessidades
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Contamos com uma ampla gama de especialidades para oferecer o cuidado ideal
            em cada fase da vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors overflow-hidden">
                <img src={s.img} alt={s.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" loading="lazy" width={40} height={40} />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">{s.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
