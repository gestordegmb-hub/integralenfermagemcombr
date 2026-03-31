import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Resultados", href: "#antes-depois" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-xl border-b border-border/40 py-3 shadow-sm"
            : "bg-black/20 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Integral Clínica"
              className={`w-10 h-10 rounded-full object-cover transition-all duration-500 ${
                scrolled ? "ring-1 ring-border" : "ring-1 ring-white/20"
              }`}
            />
            <div>
              <span
                className={`font-semibold text-base leading-tight block transition-colors duration-500 tracking-wide font-serif ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
                style={!scrolled ? { textShadow: "0 1px 6px rgba(0,0,0,0.3)" } : undefined}
              >
                Integral
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.2em] leading-tight block transition-colors duration-500 ${
                  scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Clínica de Enfermagem
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
                }`}
                style={!scrolled ? { textShadow: "0 1px 4px rgba(0,0,0,0.3)" } : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#agendamento" className="hidden sm:block">
              <Button
                variant={scrolled ? "default" : "hero"}
                size="sm"
                className={`text-[11px] px-6 font-medium ${
                  !scrolled ? "shadow-md shadow-primary/20" : ""
                }`}
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Agendar
              </Button>
            </a>
            <button
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[85vw] max-w-sm bg-card transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: isOpen ? "-20px 0 60px -15px rgba(0,0,0,0.12)" : "none" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Integral Clínica" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-semibold text-base text-foreground font-serif tracking-wide">Integral</span>
          </a>
          <button className="text-muted-foreground hover:text-foreground transition-colors p-2" onClick={() => setIsOpen(false)} aria-label="Fechar menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/50 space-y-4 bg-card">
          <a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[13px] text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (22) 97401-7588
          </a>
          <a href="#agendamento" onClick={() => setIsOpen(false)}>
            <Button variant="hero" size="default" className="w-full gap-2 h-12 text-[14px]">
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
