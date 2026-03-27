import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quais convênios a Integral aceita?",
    a: "Aceitamos os principais convênios do mercado, incluindo Unimed, Bradesco Saúde, SulAmérica, Amil, Porto Seguro, NotreDame Intermédica, entre outros. Também atendemos pacientes particulares. Para confirmar se o seu convênio é aceito, entre em contato conosco.",
  },
  {
    q: "Como funciona o agendamento de consultas?",
    a: "Você pode agendar pelo nosso formulário online, pelo WhatsApp ou por telefone. Após o envio da solicitação, nossa equipe entra em contato em até 2 horas para confirmar o melhor horário para você.",
  },
  {
    q: "Vocês atendem em domicílio?",
    a: "Sim! Nosso serviço de Home Care oferece atendimento domiciliar com a mesma qualidade da clínica. Realizamos curativos, administração de medicamentos, coleta de exames e acompanhamento de pacientes no conforto de casa.",
  },
  {
    q: "Qual o horário de funcionamento da clínica?",
    a: "Funcionamos de segunda a sexta-feira, das 09:00 às 18:00, e aos sábados das 09:00 às 13:00. Domingos e feriados estamos fechados. Para urgências, entre em contato pelo WhatsApp que nossa equipe poderá orientá-lo.",
  },
  {
    q: "Preciso de encaminhamento médico para agendar?",
    a: "Para a maioria dos serviços de enfermagem não é necessário encaminhamento. Porém, para procedimentos específicos como curativos avançados ou administração de medicamentos, é recomendável ter a prescrição médica.",
  },
  {
    q: "A primeira consulta inclui avaliação completa?",
    a: "Sim! Na primeira consulta realizamos uma avaliação completa do paciente, incluindo histórico de saúde, exame físico direcionado e elaboração do plano de cuidados individualizado.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
