import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, MessageCircle } from "lucide-react";

const specialtyOptions = [
  "Tratamento Avançado de Feridas",
  "Estomias",
  "Pé Diabético",
  "Laserterapia",
  "Ozonioterapia",
  "LEDterapia",
  "Terapia Regenerativa",
  "Podiatria",
  "Pós-operatórios",
  "Mentoria e Treinamento",
];

const SchedulingSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    specialty: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar uma consulta na Integral Clínica.%0A%0A*Nome:* ${form.name}%0A*Telefone:* ${form.phone}${form.email ? `%0A*E-mail:* ${form.email}` : ""}${form.address ? `%0A*Endereço:* ${form.address}` : ""}%0A*Especialidade:* ${form.specialty}${form.message ? `%0A*Mensagem:* ${form.message}` : ""}`;
    window.open(`https://wa.me/5522974017588?text=${text}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border/60 bg-card text-foreground text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50";

  return (
    <section id="agendamento" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Agendamento</span>
            <h2 className="section-title !text-left">
              Agende sua consulta
            </h2>
            <div className="premium-divider !mx-0" />

            <p className="text-[14px] sm:text-[15px] text-muted-foreground mt-8 mb-10 leading-[1.8]">
              Preencha o formulário e nossa equipe entrará em contato para confirmar
              o melhor horário. Ou fale diretamente pelo WhatsApp.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Resposta em até 2 horas",
                "Confirmação por WhatsApp",
                "Reagendamento sem burocracia",
                "Avaliação completa inclusa",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-[13px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2.5 w-full sm:w-auto">
                <MessageCircle className="w-4 h-4" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="premium-card p-6 sm:p-8 space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-2">Nome completo *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Seu nome" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2">Telefone *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="(22) 99999-9999" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2">E-mail</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-2">Endereço</label>
                <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputClass} placeholder="Rua, número, bairro" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-2">Especialidade *</label>
                <select required value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} className={inputClass}>
                  <option value="">Selecione</option>
                  {specialtyOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-2">Mensagem</label>
                <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Detalhes adicionais..." />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
                <Calendar className="w-4 h-4" />
                Solicitar Agendamento
              </Button>
              <p className="text-[11px] text-muted-foreground/60 text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
