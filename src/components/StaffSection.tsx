import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const staff = [
  {
    name: "Dra. Camila Ferreira",
    role: "Enfermeira-Chefe · COREN 12345",
    specialty: "Especialista em Estomaterapia",
    bio: "Mais de 15 anos de experiência em cuidados avançados de feridas e estomias.",
    initials: "CF",
  },
  {
    name: "Dra. Juliana Santos",
    role: "Enfermeira Especialista · COREN 34567",
    specialty: "Especialista em Pediatria",
    bio: "Dedicada ao cuidado infantil com abordagem lúdica e acolhedora.",
    initials: "JS",
  },
  {
    name: "Dr. André Costa",
    role: "Enfermeiro Especialista · COREN 45678",
    specialty: "Especialista em Cardiologia",
    bio: "Atuação em unidades coronarianas e monitoramento cardíaco avançado.",
    initials: "AC",
  },
];

const StaffSection = () => {
  return (
    <section id="corpo-clinico" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Corpo Clínico</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Profissionais que fazem a diferença
          </h2>
          <p className="text-muted-foreground">
            Nossa equipe é formada por enfermeiros especialistas com ampla experiência
            e compromisso com a excelência no cuidado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staff.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-card flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{person.initials}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground">{person.name}</h3>
                <p className="text-xs text-primary font-medium mb-1">{person.specialty}</p>
                <p className="text-xs text-muted-foreground mb-2">{person.role}</p>
                <p className="text-sm text-muted-foreground">{person.bio}</p>
                <button className="mt-3 text-primary hover:text-secondary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
