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
    a: "Você pode agendar pelo nosso formulário online, pelo WhatsApp ou por telefone. Após o envio, nossa equipe entra em contato em até 2 horas para confirmar o melhor horário.",
  },
  {
    q: "Qual o horário de funcionamento?",
    a: "Segunda a sexta-feira, das 09:00 às 18:00. Sábados das 09:00 às 13:00. Domingos e feriados fechado.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "Para a maioria dos serviços não é necessário. Para procedimentos como curativos avançados, é recomendável ter prescrição médica.",
  },
  {
    q: "A primeira consulta inclui avaliação completa?",
    a: "Sim. Realizamos avaliação completa incluindo histórico de saúde, exame físico direcionado e elaboração do plano de cuidados individualizado.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="section-label">Dúvidas</span>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="premium-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl px-6 border border-border/40"
              >
                <AccordionTrigger className="text-left text-[14px] font-medium text-foreground hover:text-primary py-5 font-sans">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed">
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
