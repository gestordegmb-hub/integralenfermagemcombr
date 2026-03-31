import { motion } from "framer-motion";
import { Shield, Heart, Award } from "lucide-react";
import clinicaImg from "@/assets/clinica.jpeg";

const features = [
  { icon: Shield, title: "Segurança", desc: "Protocolos rigorosos e equipamentos de última geração" },
  { icon: Heart, title: "Humanização", desc: "Atendimento acolhedor centrado no paciente" },
  { icon: Award, title: "Qualidade", desc: "Profissionais certificados e especializados" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={clinicaImg}
              alt="Fachada da Integral Clínica de Enfermagem"
              className="rounded-xl w-full h-72 sm:h-96 object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Sobre a Clínica</span>
            <h2 className="section-title">
              Referência em enfermagem especializada
            </h2>
            <div className="premium-divider !mx-0" />

            <div className="space-y-4 mt-8 text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8]">
              <p>
                A Integral Clínica de Enfermagem Especializada nasceu da experiência prática e do compromisso com um
                cuidado mais humano. Localizada em Cabo Frio, é referência na Região dos Lagos.
              </p>
              <p>
                À frente está a Dra. Viviane Paz Torres, Enfermeira Estomaterapeuta com mais de 15 anos de experiência
                e Responsável Técnica do Serviço de Atenção à Pessoa com Estomia há mais de 12 anos.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors duration-300">
                    <f.icon className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                  </div>
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
