import { motion } from "framer-motion";
import { Shield, Heart, Award } from "lucide-react";
import clinicaImg from "@/assets/clinica.jpeg";

const features = [
  { icon: Shield, title: "Segurança", desc: "Protocolos rigorosos e equipamentos de última geração" },
  { icon: Heart, title: "Humanização", desc: "Atendimento acolhedor centrado no paciente" },
  { icon: Award, title: "Qualidade", desc: "Profissionais com certificações e especializações" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src={clinicaImg}
                alt="Fachada da Integral Clínica de Enfermagem"
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10 hidden lg:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300"
                >
                  <f.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Sobre a Clínica</span>
            <h2 className="section-title">
              Referência em enfermagem especializada em Cabo Frio
            </h2>
            <div className="premium-divider !mx-0" />

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                A Integral Clínica de Enfermagem Especializada nasceu da experiência prática e do compromisso com um
                cuidado mais humano. Localizada em Cabo Frio, é referência na Região dos Lagos unindo tecnologia e atendimento
                individualizado.
              </p>
              <p>
                À frente está a Dra. Viviane Paz Torres, Enfermeira Estomaterapeuta com mais de 15 anos de experiência.
                Também atua como Responsável Técnica do Serviço de Atenção à Pessoa com Estomia há mais de 12 anos.
              </p>
              <p>
                Busca constante por atualização e soluções que fazem diferença na recuperação.
                Referência em tratamento com segurança, ciência, tecnologia e confiança.
              </p>
            </div>

            <div className="mt-8 bg-muted/50 rounded-2xl p-5 sm:p-6 space-y-3">
              {[
                { title: "Nossa Missão", text: "Proporcionar cuidados de enfermagem especializados com excelência, segurança e humanização." },
                { title: "Nossa Visão", text: "Ser referência regional em enfermagem especializada, reconhecida pela qualidade e inovação." },
                { title: "Nossos Valores", text: "Ética, transparência, respeito ao paciente e compromisso com a qualidade." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-4 shadow-sm border border-border/50">
                  <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
