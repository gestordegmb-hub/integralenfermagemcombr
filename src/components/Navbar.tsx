import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Home, Info, Stethoscope, Shield, MessageSquare, BookOpen, HelpCircle, MapPin, Calendar } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Sobre", href: "#sobre", icon: Info },
  { label: "Especialidades", href: "#especialidades", icon: Stethoscope },
  { label: "Convênios", href: "#convenios", icon: Shield },
  { label: "Depoimentos", href: "#depoimentos", icon: MessageSquare },
  { label: "Blog", href: "#blog", icon: BookOpen },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Contato", href: "#contato", icon: MapPin },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logoImg} alt="Integral Clínica" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <span style={{ fontFamily: "'Orbitron', sans-serif" }} className="font-bold text-lg text-foreground leading-tight block">Integral</span>
              <span className="text-xs text-muted-foreground leading-tight block">Clínica de Enfermagem</span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" />
              (22) 97401-7588
            </a>
            <a href="#agendamento">
              <Button variant="hero" size="sm">Agendar Consulta</Button>
            </a>
            <button
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[70] h-full w-72 bg-card shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <a href="#inicio" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Integral Clínica" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <span style={{ fontFamily: "'Orbitron', sans-serif" }} className="font-bold text-lg text-foreground leading-tight block">Integral</span>
              <span className="text-xs text-muted-foreground leading-tight block">Clínica de Enfermagem</span>
            </div>
          </a>
          <button
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border space-y-3">
          <a
            href="https://wa.me/5522974017588"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            (22) 97401-7588
          </a>
          <a href="#agendamento" onClick={() => setIsOpen(false)}>
            <Button variant="hero" size="sm" className="w-full gap-2">
              <Calendar className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
