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
    a: "Funcionamos de segunda a sexta-feira, das 09:00 às 18:00, e aos sábados das 09:00 às 13:00. Domingos e feriados estamos fechados.",
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
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Perguntas frequentes</h2>
          <div className="premium-divider" />
          <p className="section-desc">
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
                className="premium-card px-5 sm:px-6 border border-border/50"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary py-4 sm:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
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
