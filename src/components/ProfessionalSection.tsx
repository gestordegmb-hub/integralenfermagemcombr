import { motion } from "framer-motion";
import profissional1 from "@/assets/profissional_1.jpg";

const photos = [
  { src: profissional1, alt: "Dra. Viviane - Estomaterapeuta", label: "Dra. Viviane" },
];

const ProfessionalSection = () => {
  return (
    <section id="profissional" className="py-14 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa Profissional</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Conheça a Especialista
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto">
            Profissional dedicada ao cuidado integral dos pacientes com excelência e humanização.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] flex-shrink-0"
          >
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Viviane Paz Torres</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Viviane Paz Torres é enfermeira, estomaterapeuta formada pela UERJ, enfermeira com habilitação em Podiatra e Fundadora da Integral, Clínica de Enfermagem Especializada em Cabo Frio.
              </p>
              <p>
                Com mais de uma década de atuação na enfermagem, construiu sua trajetória com foco no tratamento de feridas, cuidado com pessoas com estomias e uso de tecnologias avançadas, unindo ciência, experiência e um olhar individualizado em cada atendimento.
              </p>
              <p>
                Também atua na formação de profissionais da saúde, é speaker da Coloplast na área de Ostomy Care e participou como coautora do Manual Clínico para Enfermeiros: Estomia de eliminação em pessoas adultas da Coloplast e do livro Gestão de Serviços de Atenção à Saúde da Pessoa com Estomia, contribuindo para o avanço da prática profissional.
              </p>
              <p>
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
