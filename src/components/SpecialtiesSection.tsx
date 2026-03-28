import { motion } from "framer-motion";
import { Syringe, Activity, Footprints, Zap, Wind, Sun, Droplets, Scissors, Stethoscope, GraduationCap } from "lucide-react";

const specialties = [
  { icon: Syringe, name: "Tratamento de Feridas", desc: "Curativos avançados e acompanhamento completo da cicatrização" },
  { icon: Activity, name: "Estomias", desc: "Cuidados especializados com estomias intestinais e urinárias" },
  { icon: Footprints, name: "Pé Diabético", desc: "Prevenção e tratamento especializado para pés diabéticos" },
  { icon: Zap, name: "Laserterapia", desc: "Terapia a laser para acelerar a cicatrização e reduzir dor" },
  { icon: Wind, name: "Ozonioterapia", desc: "Tratamento com ozônio para regeneração tecidual" },
  { icon: Sun, name: "LEDterapia", desc: "Fototerapia com LED para cicatrização e controle de infecções" },
  { icon: Droplets, name: "Terapia com PRF", desc: "Fibrina rica em plaquetas para regeneração acelerada" },
  
  { icon: Scissors, name: "Podiatria", desc: "Cuidados especializados com unhas e pés" },
  { icon: Stethoscope, name: "Pós-operatórios", desc: "Acompanhamento e curativos em recuperação cirúrgica" },
  { icon: GraduationCap, name: "Mentoria e Treinamento", desc: "Capacitação para profissionais de enfermagem" },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Atendimento completo para suas necessidades
          </h2>
          <p className="text-muted-foreground">
            Contamos com uma ampla gama de especialidades para oferecer o cuidado ideal
            em cada fase da vida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
