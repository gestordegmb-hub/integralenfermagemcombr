import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Home, Info, Stethoscope, MessageSquare, HelpCircle, MapPin, Calendar, Image } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Sobre", href: "#sobre", icon: Info },
  { label: "Especialidades", href: "#especialidades", icon: Stethoscope },
  { label: "Depoimentos", href: "#depoimentos", icon: MessageSquare },
  { label: "Antes e Depois", href: "#antes-depois", icon: Image },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Contato", href: "#contato", icon: MapPin },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/98 backdrop-blur-lg shadow-md py-2"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5">
            <img src={logoImg} alt="Integral Clínica" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm" />
            <div>
              <span
                style={{ fontFamily: "'Orbitron', 'Montserrat', sans-serif" }}
                className={`font-bold text-base sm:text-lg leading-tight block transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Integral
              </span>
              <span
                className={`text-[10px] sm:text-xs leading-tight block transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}
              >
                Clínica de Enfermagem
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#agendamento" className="hidden sm:block">
              <Button variant="hero" size="sm" className="rounded-lg text-xs px-4 py-2">
                Agendar Consulta
              </Button>
            </a>
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[85vw] max-w-80 bg-card shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Integral Clínica" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <span style={{ fontFamily: "'Orbitron', 'Montserrat', sans-serif" }} className="font-bold text-base text-foreground leading-tight block">Integral</span>
              <span className="text-[10px] text-muted-foreground leading-tight block">Clínica de Enfermagem</span>
            </div>
          </a>
          <button
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-0.5 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all active:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="w-4 h-4 flex-shrink-0" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border space-y-3 bg-card">
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
            <Button variant="hero" size="sm" className="w-full gap-2 py-3 rounded-xl">
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
