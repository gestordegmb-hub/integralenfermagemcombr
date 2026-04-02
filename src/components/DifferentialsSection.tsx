import { motion } from "framer-motion";
import { Heart, Award, Cog, Clock } from "lucide-react";

const differentials = [
  { num: "01", icon: Heart, title: "Atendimento Humanizado", desc: "Cada paciente é único. Oferecemos um acolhimento que vai além do cuidado técnico, com atenção às necessidades emocionais e individuais." },
  { num: "02", icon: Award, title: "Profissionais Qualificados", desc: "Equipe certificada e em constante atualização, com especializações reconhecidas nacional e internacionalmente." },
  { num: "03", icon: Cog, title: "Tecnologia de Ponta", desc: "Equipamentos de última geração como laser, ozônio e LEDterapia para resultados mais rápidos e eficazes." },
  { num: "04", icon: Clock, title: "Atendimento Ágil", desc: "Resposta rápida, agendamento facilitado e acompanhamento contínuo para garantir a melhor experiência." },
];

const stats = [
  { num: "500+", label: "Pacientes Atendidos" },
  { num: "15+", label: "Anos de Experiência" },
  { num: "98%", label: "Índice de Satisfação" },
  { num: "5.0", label: "Avaliação Google" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium font-sans">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-semibold mt-4 mb-5 text-white leading-[1.15] font-serif italic">
            O Que Nos Torna Diferentes
          </h2>
          <div className="w-12 h-px mx-auto mt-5 bg-gold" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {differentials.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-lg p-7 sm:p-8 hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl font-serif text-gold/40 font-semibold leading-none">{d.num}</span>
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <d.icon className="w-5 h-5 text-gold" />
                    <h3 className="font-semibold text-lg text-white font-serif">{d.title}</h3>
                  </div>
                  <p className="text-[13px] text-white/60 leading-relaxed font-sans">{d.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-semibold text-gold font-serif">{s.num}</p>
              <p className="text-[10px] sm:text-[11px] text-white/50 mt-2 uppercase tracking-[0.15em] font-sans font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
