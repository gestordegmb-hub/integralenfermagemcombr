import { motion } from "framer-motion";
import { Shield, Heart, Award, Users } from "lucide-react";

const features = [
  { icon: Shield, title: "Segurança", desc: "Protocolos rigorosos e equipamentos de última geração" },
  { icon: Heart, title: "Humanização", desc: "Atendimento acolhedor centrado no paciente" },
  { icon: Award, title: "Qualidade", desc: "Profissionais com certificações e especializações" },
  { icon: Users, title: "Equipe", desc: "Corpo clínico multidisciplinar e experiente" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre a Clínica</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
              Mais de 10 anos cuidando da sua saúde com excelência
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Integral Clínica de Enfermagem Especializada nasceu com o propósito de
              oferecer cuidados de saúde de alto padrão, unindo tecnologia avançada a um
              atendimento verdadeiramente humanizado. Nossa equipe é formada por enfermeiros
              especialistas, comprometidos com a segurança e o bem-estar de cada paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Acreditamos que cada pessoa merece ser tratada com dignidade, respeito e atenção
              individualizada. Por isso, investimos continuamente na capacitação dos nossos
              profissionais e na modernização da nossa estrutura.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                  <f.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg text-foreground mb-2">Nossa Missão</h3>
                <p className="text-muted-foreground text-sm">
                  Proporcionar cuidados de enfermagem especializados com excelência, segurança e
                  humanização, contribuindo para a saúde e qualidade de vida dos nossos pacientes.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg text-foreground mb-2">Nossa Visão</h3>
                <p className="text-muted-foreground text-sm">
                  Ser referência regional em enfermagem especializada, reconhecida pela
                  qualidade do atendimento e pela inovação nos cuidados de saúde.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg text-foreground mb-2">Nossos Valores</h3>
                <p className="text-muted-foreground text-sm">
                  Ética, transparência, respeito ao paciente, compromisso com a qualidade e
                  busca constante por atualização científica.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
