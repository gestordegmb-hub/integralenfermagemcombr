import { motion } from "framer-motion";
import { Award, BookOpen, Users } from "lucide-react";
import profissional1 from "@/assets/profissional_1.jpg";

const highlights = [
  { icon: Award, text: "Estomaterapeuta formada pela UERJ" },
  { icon: BookOpen, text: "Coautora de manuais clínicos" },
  { icon: Users, text: "Speaker Coloplast — Ostomy Care" },
];

const ProfessionalSection = () => {
  return (
    <section id="profissional" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="section-label">Nossa Profissional</span>
          <h2 className="section-title">Conheça a Especialista</h2>
          <div className="premium-divider" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group flex-shrink-0"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl w-full max-w-[260px] sm:max-w-[300px] aspect-[3/4]">
              <img
                src={profissional1}
                alt="Dra. Viviane - Estomaterapeuta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/10 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left space-y-5"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Viviane Paz Torres</h3>
              <p className="text-primary text-sm font-medium mt-1">Enfermeira Estomaterapeuta • Podiatra • Fundadora</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span key={h.text} className="inline-flex items-center gap-1.5 bg-primary/8 text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-primary/10">
                  <h.icon className="w-3.5 h-3.5 text-primary" />
                  {h.text}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Viviane Paz Torres é enfermeira, estomaterapeuta formada pela UERJ, enfermeira com habilitação em Podiatra e Fundadora da Integral, Clínica de Enfermagem Especializada em Cabo Frio.
              </p>
              <p>
                Com mais de uma década de atuação na enfermagem, construiu sua trajetória com foco no tratamento de feridas, cuidado com pessoas com estomias e uso de tecnologias avançadas, unindo ciência, experiência e um olhar individualizado em cada atendimento.
              </p>
              <p>
                Também atua na formação de profissionais da saúde, é speaker da Coloplast na área de Ostomy Care e participou como coautora do Manual Clínico para Enfermeiros e do livro Gestão de Serviços de Atenção à Saúde da Pessoa com Estomia.
              </p>
              <p className="font-medium text-foreground/80">
                À frente da Integral, Viviane promove mais do que assistência — entrega qualidade de vida, autonomia e confiança para cada pessoa acompanhada.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
