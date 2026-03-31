import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

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

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200";

  return (
    <section id="agendamento" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Agendamento</span>
            <h2 className="section-title !text-left">
              Agende sua consulta agora mesmo
            </h2>
            <div className="premium-divider !mx-0" />
            <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para confirmar
              o melhor horário para você. Ou se preferir, fale diretamente pelo WhatsApp.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Resposta em até 2 horas",
                "Confirmação por WhatsApp ou e-mail",
                "Reagendamento sem burocracia",
                "Primeira consulta com avaliação completa",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2 w-full sm:w-auto rounded-xl">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="premium-card p-6 sm:p-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nome completo *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClasses}
                    placeholder="(22) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Endereço</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className={inputClasses}
                  placeholder="Rua, número, bairro - cidade"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Especialidade *</label>
                <select
                  required
                  value={form.specialty}
                  onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                  className={inputClasses}
                >
                  <option value="">Selecione a especialidade</option>
                  {specialtyOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                  placeholder="Conte-nos mais sobre o que você precisa..."
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full gap-2 py-3.5 rounded-xl">
                <Calendar className="w-5 h-5" />
                Solicitar Agendamento
              </Button>
              <p className="text-xs text-muted-foreground text-center">
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
