import { motion } from "framer-motion";
import { Stethoscope, Baby, Brain, HeartPulse, Syringe, Activity, Pill, Eye, Bone, Droplets, Leaf, Thermometer } from "lucide-react";

const specialties = [
  { icon: Stethoscope, name: "Enfermagem Clínica", desc: "Cuidados gerais com acompanhamento personalizado" },
  { icon: Baby, name: "Enfermagem Pediátrica", desc: "Atenção especializada para crianças e adolescentes" },
  { icon: Brain, name: "Enfermagem Neurológica", desc: "Suporte a pacientes com condições neurológicas" },
  { icon: HeartPulse, name: "Enfermagem Cardiológica", desc: "Monitoramento e cuidados cardiovasculares" },
  { icon: Syringe, name: "Curativos Especiais", desc: "Tratamento avançado de feridas e lesões" },
  { icon: Activity, name: "Home Care", desc: "Atendimento domiciliar com qualidade hospitalar" },
  { icon: Pill, name: "Administração de Medicamentos", desc: "Aplicação segura e monitorada de medicações" },
  { icon: Eye, name: "Enfermagem Oftalmológica", desc: "Cuidados pré e pós-operatórios oftalmológicos" },
  { icon: Bone, name: "Enfermagem Ortopédica", desc: "Reabilitação e cuidados ortopédicos especializados" },
  { icon: Droplets, name: "Coleta de Exames", desc: "Coleta domiciliar e em clínica com precisão" },
  { icon: Leaf, name: "Cuidados Paliativos", desc: "Conforto e dignidade para pacientes e famílias" },
  { icon: Thermometer, name: "Estomaterapia", desc: "Cuidados com estomias, feridas e incontinências" },
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
