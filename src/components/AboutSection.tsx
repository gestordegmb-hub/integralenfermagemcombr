import { motion } from "framer-motion";
import { Shield, Heart, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Segurança", desc: "Protocolos rigorosos e equipamentos de última geração" },
  { icon: Heart, title: "Humanização", desc: "Atendimento acolhedor centrado no paciente" },
  { icon: Award, title: "Qualidade", desc: "Profissionais com certificações e especializações" },
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
              Referência em enfermagem especializada em Cabo Frio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Integral Clínica de Enfermagem Especializada nasceu da experiência prática e do compromisso com um
              cuidado mais humano. Localizada em Cabo Frio, é referência na Região dos Lagos unindo tecnologia e atendimento
              individualizado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              À frente está a Dra. Viviane Paz Torres, Enfermeira Estomaterapeuta com mais de 15 anos de experiência.
              Também atua como Responsável Técnica do Serviço de Atenção à Pessoa com Estomia há mais de 12 anos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Busca constante por atualização e soluções que fazem diferença na recuperação.
              Referência em tratamento com segurança, ciência, tecnologia e confiança.
            </p>
            <div className="grid grid-cols-3 gap-4">
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
