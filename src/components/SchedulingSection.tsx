import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, MessageCircle } from "lucide-react";

const specialtyOptions = [
  "Tratamento de Feridas",
  "Estomias",
  "Pé Diabético",
  "Laserterapia",
  "Ozonioterapia",
  "LEDterapia",
  "Terapia com PRF",
  "Atendimento Domiciliar",
  "Podiatria",
  "Pós-operatórios",
  "Mentoria e Treinamento",
];

const SchedulingSection = () => {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="agendamento" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Agendamento</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Agende sua consulta agora mesmo
            </h2>
            <p className="text-muted-foreground mb-8">
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-primary/10 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Solicitação enviada!</h3>
                <p className="text-muted-foreground">
                  Recebemos seu pedido de agendamento. Nossa equipe entrará em contato em breve
                  para confirmar o horário. Obrigado pela confiança!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-xl p-6 md:p-8 shadow-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nome completo *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Telefone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Especialidade *</label>
                  <select
                    required
                    value={form.specialty}
                    onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Selecione a especialidade</option>
                    {specialtyOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Mensagem</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Conte-nos mais sobre o que você precisa..."
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
                  <Calendar className="w-5 h-5" />
                  Solicitar Agendamento
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
