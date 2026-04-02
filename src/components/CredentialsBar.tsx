import { motion } from "framer-motion";
import { Award, Shield, Star, Users } from "lucide-react";

const credentials = [
  { icon: Award, label: "COREN Registrado" },
  { icon: Shield, label: "Estomaterapeuta UERJ" },
  { icon: Star, label: "Speaker Coloplast" },
  { icon: Users, label: "Equipe Especializada" },
];

const CredentialsBar = () => {
  return (
    <section className="bg-primary py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 justify-center"
            >
              <c.icon className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-[11px] sm:text-[12px] text-white/90 font-medium uppercase tracking-[0.1em] font-sans">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsBar;
