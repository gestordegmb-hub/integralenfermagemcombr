import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o agendamento de consultas?",
    a: "Você pode agendar pelo nosso formulário online, pelo WhatsApp ou por telefone. Após o envio da solicitação, nossa equipe entra em contato em até 2 horas para confirmar o melhor horário para você.",
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
    <section id="faq" className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4 text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-lg border border-border px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary py-3 sm:py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3 sm:pb-4">
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
