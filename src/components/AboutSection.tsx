import { motion } from "framer-motion";
import { Heart, Eye, Star } from "lucide-react";
import clinicaImg from "@/assets/clinica.jpeg";
import profissional1 from "@/assets/profissional_1.jpg";

const values = [
  { icon: Heart, title: "Missão", desc: "Oferecer cuidado especializado de excelência, unindo ciência, humanização e tecnologia para transformar vidas." },
  { icon: Eye, title: "Visão", desc: "Ser referência nacional em enfermagem especializada, reconhecida pela qualidade técnica e atendimento humanizado." },
  { icon: Star, title: "Valores", desc: "Ética, respeito, inovação, compromisso com o paciente e busca constante pela excelência profissional." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Two columns: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Sobre a Clínica</span>
            <h2 className="section-title !text-left">
              Uma Trajetória de Dedicação e Cuidado
            </h2>
            <div className="premium-divider !mx-0" />

            <div className="space-y-5 mt-8 text-[14px] sm:text-[15px] text-muted-foreground leading-[1.85] font-sans">
              <p>
                A Integral Clínica de Enfermagem Especializada nasceu da experiência prática e do compromisso com um
                cuidado mais humano. Localizada em Cabo Frio, é referência na Região dos Lagos no tratamento avançado
                de feridas e cuidados especializados.
              </p>
              <p>
                Fundada pela Enf.ª Viviane Paz Torres, estomaterapeuta e podiatra, a clínica combina expertise clínica
                com tecnologia de ponta para oferecer resultados excepcionais a cada paciente.
              </p>
            </div>

            {/* Professional Card */}
            <div className="mt-10 p-6 rounded-lg bg-muted/50 border border-border/40">
              <div className="flex items-start gap-4">
                <img
                  src={profissional1}
                  alt="Enf.ª Viviane Paz Torres"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-sm text-foreground font-serif">Enf.ª Viviane Paz Torres</p>
                  <p className="text-[11px] uppercase tracking-[0.15em] gold-text font-medium mt-1 font-sans">
                    Fundadora & Diretora Clínica
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed font-sans">
                    Estomaterapeuta (UERJ), Podiatra, Speaker Coloplast. Mais de 15 anos de experiência em enfermagem especializada.
                  </p>
                </div>
              </div>
              <p className="text-[13px] italic text-foreground/60 mt-4 border-t border-border/30 pt-4 font-serif">
                "A excelência no cuidar é a nossa maior responsabilidade."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={clinicaImg}
              alt="Fachada da Integral Clínica de Enfermagem"
              className="rounded-lg w-full h-[400px] sm:h-[500px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="premium-card p-8 text-center group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                <v.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-lg text-foreground font-serif mb-3">{v.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed font-sans">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
