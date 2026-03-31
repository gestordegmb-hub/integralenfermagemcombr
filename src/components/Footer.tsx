import { Heart, Instagram, Facebook, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoImg} alt="Integral Clínica" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <span className="font-bold block leading-tight text-sm">Integral</span>
                <span className="text-[10px] opacity-60 block leading-tight">Clínica de Enfermagem</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-60 leading-relaxed">
              Cuidado humanizado com a qualidade que você merece. Mais de 15 anos
              de experiência em enfermagem especializada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider opacity-80">Links Rápidos</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-60">
              <li><a href="#sobre" className="hover:text-primary hover:opacity-100 transition-all">Sobre a Clínica</a></li>
              <li><a href="#especialidades" className="hover:text-primary hover:opacity-100 transition-all">Especialidades</a></li>
              <li><a href="#depoimentos" className="hover:text-primary hover:opacity-100 transition-all">Depoimentos</a></li>
              <li><a href="#antes-depois" className="hover:text-primary hover:opacity-100 transition-all">Antes e Depois</a></li>
              <li><a href="#agendamento" className="hover:text-primary hover:opacity-100 transition-all">Agendamento</a></li>
              <li><a href="#faq" className="hover:text-primary hover:opacity-100 transition-all">FAQ</a></li>
              <li><a href="#contato" className="hover:text-primary hover:opacity-100 transition-all">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider opacity-80">Contato</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-60">
              <li><a href="https://wa.me/5522998271485" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:opacity-100 transition-all">(22) 99827-1485</a></li>
              <li><a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:opacity-100 transition-all">(22) 97401-7588</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider opacity-80">Horários</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-60">
              <li>Seg - Sex: 09:00 às 18:00</li>
              <li>Sábado: 09:00 às 13:00</li>
              <li>Dom e Feriados: Fechado</li>
            </ul>
            <div className="flex gap-2 mt-4">
              {[
                { href: "https://www.instagram.com/integralcabofrio/", icon: Instagram, label: "Instagram" },
                { href: "https://www.facebook.com/profile.php?id=100071536586636", icon: Facebook, label: "Facebook" },
                { href: "https://linktr.ee/integralcabofrio", icon: ExternalLink, label: "Linktree" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-all duration-300" aria-label={s.label}>
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] sm:text-xs opacity-50 text-center sm:text-left">
            © 2026 Integral Clínica de Enfermagem Especializada. Todos os direitos reservados.
          </p>
          <p className="text-[11px] sm:text-xs opacity-50 flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary fill-primary" /> para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
