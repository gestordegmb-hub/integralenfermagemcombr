import { motion } from "framer-motion";
import profissional1 from "@/assets/profissional_1.jpg";

const ProfessionalSection = () => {
  return (
    <section id="profissional" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px]"
          >
            <div className="overflow-hidden rounded-xl aspect-[3/4]">
              <img
                src={profissional1}
                alt="Dra. Viviane - Estomaterapeuta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <span className="section-label">Nossa Profissional</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mt-3 font-serif leading-tight">
                Viviane Paz Torres
              </h2>
              <p className="text-primary text-[13px] font-medium mt-2 tracking-wide">
                Enfermeira Estomaterapeuta · Podiatra · Fundadora
              </p>
              <div className="premium-divider !mx-0 !mt-4" />
            </div>

            <div className="space-y-4 text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8]">
              <p>
                Viviane Paz Torres é enfermeira, estomaterapeuta formada pela UERJ, enfermeira com habilitação em Podiatra e Fundadora da Integral, Clínica de Enfermagem Especializada em Cabo Frio.
              </p>
              <p>
                Com mais de uma década de atuação, construiu sua trajetória com foco no tratamento de feridas, cuidado com pessoas com estomias e uso de tecnologias avançadas, unindo ciência, experiência e um olhar individualizado.
              </p>
              <p>
                Speaker da Coloplast na área de Ostomy Care e coautora do Manual Clínico para Enfermeiros da Coloplast e do livro Gestão de Serviços de Atenção à Saúde da Pessoa com Estomia.
              </p>
              <p className="text-foreground/70 font-medium italic">
                "Promover mais do que assistência — entregar qualidade de vida, autonomia e confiança."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
