import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Convênios", href: "#convenios" },
  { label: "Convênios", href: "#convenios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logoImg} alt="Integral Clínica" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <span style={{ fontFamily: "'Orbitron', sans-serif" }} className="font-bold text-lg text-foreground leading-tight block">Integral</span>
            <span className="text-xs text-muted-foreground leading-tight block">Clínica de Enfermagem</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+5511999999999" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </a>
          <a href="#agendamento">
            <Button variant="hero" size="sm">Agendar Consulta</Button>
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#agendamento" onClick={() => setIsOpen(false)}>
            <Button variant="hero" size="sm" className="w-full mt-2">Agendar Consulta</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
