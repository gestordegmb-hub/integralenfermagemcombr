import { Instagram, Facebook, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoImg} alt="Integral Clínica" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold text-sm tracking-wide font-serif">Integral</span>
            </div>
            <p className="text-[13px] opacity-40 leading-relaxed">
              Cuidado humanizado com a qualidade que você merece.
              Mais de 15 anos de experiência em enfermagem especializada.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4 font-medium">Navegação</h4>
            <ul className="space-y-2.5 text-[13px] opacity-50">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Especialidades", href: "#especialidades" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Resultados", href: "#antes-depois" },
                { label: "Agendamento", href: "#agendamento" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:opacity-100 hover:text-primary transition-all">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4 font-medium">Contato</h4>
            <ul className="space-y-2.5 text-[13px] opacity-50">
              <li><a href="https://wa.me/5522998271485" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary transition-all">(22) 99827-1485</a></li>
              <li><a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary transition-all">(22) 97401-7588</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4 font-medium">Horários</h4>
            <ul className="space-y-2.5 text-[13px] opacity-50">
              <li>Seg — Sex: 09:00 às 18:00</li>
              <li>Sábado: 09:00 às 13:00</li>
            </ul>
            <div className="flex gap-2 mt-5">
              {[
                { href: "https://www.instagram.com/integralcabofrio/", icon: Instagram },
                { href: "https://www.facebook.com/profile.php?id=100071536586636", icon: Facebook },
                { href: "https://linktr.ee/integralcabofrio", icon: ExternalLink },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary-foreground/8 flex items-center justify-center hover:bg-primary/30 transition-all duration-300" aria-label="Social">
                  <s.icon className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 pt-8">
          <p className="text-[11px] opacity-30 text-center">
            © 2026 Integral Clínica de Enfermagem Especializada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
