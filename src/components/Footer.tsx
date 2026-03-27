import { Heart, Instagram, Facebook, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Integral Clínica" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <span className="font-bold block leading-tight">Integral</span>
                <span className="text-xs opacity-70 block leading-tight">Clínica de Enfermagem</span>
              </div>
            </div>
            <p className="text-sm opacity-70">
              Cuidado humanizado com a qualidade que você merece. Mais de 10 anos
              de experiência em enfermagem especializada.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a Clínica</a></li>
              <li><a href="#especialidades" className="hover:text-primary transition-colors">Especialidades</a></li>
              <li><a href="#convenios" className="hover:text-primary transition-colors">Convênios</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#agendamento" className="hover:text-primary transition-colors">Agendamento</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Contato</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="https://wa.me/5522998271485" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(22) 99827-1485</a></li>
              <li><a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(22) 97401-7588</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Horários</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Seg - Sex: 7h às 19h</li>
              <li>Sábado: 8h às 13h</li>
              <li>Dom e Feriados: Fechado</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/integralcabofrio/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100071536586636" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linktr.ee/integralcabofrio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors" aria-label="Linktree">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm opacity-60">
            © 2026 Integral Clínica de Enfermagem Especializada. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-60 flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary fill-primary" /> para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
