import { Instagram, Facebook, ExternalLink, Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Clínica Integral" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <span className="font-semibold text-sm tracking-wide font-serif block">Clínica Integral</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-sans">Enfermagem Especializada</span>
              </div>
            </div>
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="text-[13px] text-white/40 leading-relaxed font-sans">
              Cuidado humanizado com a qualidade que você merece.
              Mais de 15 anos de experiência em enfermagem especializada.
            </p>
            <div className="flex gap-2.5 mt-5">
              {[
                { href: "https://www.instagram.com/integralcabofrio/", icon: Instagram },
                { href: "https://www.facebook.com/profile.php?id=100071536586636", icon: Facebook },
                { href: "https://linktr.ee/integralcabofrio", icon: ExternalLink },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-300" aria-label="Social">
                  <s.icon className="w-4 h-4 text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-5 font-medium font-sans">Navegação</h4>
            <ul className="space-y-3 text-[13px] text-white/40 font-sans">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre a Clínica", href: "#sobre" },
                { label: "Serviços", href: "#especialidades" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#agendamento" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-5 font-medium font-sans">Serviços</h4>
            <ul className="space-y-3 text-[13px] text-white/40 font-sans">
              <li>Tratamento de Feridas</li>
              <li>Estomias</li>
              <li>Laserterapia</li>
              <li>Podiatria</li>
              <li>Ozonioterapia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-5 font-medium font-sans">Contato</h4>
            <ul className="space-y-3 text-[13px] text-white/40 font-sans">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold/50" />
                <a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">(22) 97401-7588</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold/50" />
                <a href="https://wa.me/5522998271485" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">(22) 99827-1485</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold/50 mt-0.5" />
                <span>Rua Cuiabá, 193<br />Cabo Frio — RJ</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-gold/50 mt-0.5" />
                <span>Seg–Sex: 09h–18h<br />Sáb: 09h–13h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/30 text-center sm:text-left font-sans">
            © 2026 Clínica Integral — Enfermagem Especializada. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-white/20 font-sans">
            COREN-RJ · Enfermagem com Excelência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
