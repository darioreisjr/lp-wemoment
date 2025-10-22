import { Button } from "@/components/ui/button";
import { Heart, Menu, X, User } from "lucide-react"; // Importado o ícone User
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", path: "/home" },
    { label: "Problema", path: "/problem" },
    { label: "Solução", path: "/solution" },
    { label: "Recursos", path: "/features" },
    { label: "Preços", path: "/pricing" },
    { label: "FAQ", path: "/faq" },
    { label: "Sobre", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-black gradient-text hidden sm:block">
              WeMoment
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="hero" size="sm" className="shadow-lg rounded-sm uppercase"> {/* Borda quadrada e uppercase */}
              Começar Gratuitamente
            </Button>
            {/* Botão Entrar com ícone User, borda quadrada, uppercase e hover gradiente rosa */}
            <Button
              variant="outline"
              size="sm"
              className="shadow-lg rounded-sm uppercase border-primary text-primary hover:bg-gradient-to-r hover:from-secondary hover:to-pink-500 hover:text-secondary-foreground hover:border-transparent transition-all duration-300" /* Alterado para rounded-sm, uppercase e hover gradiente rosa */
            >
              <User className="mr-1 h-4 w-4" /> {/* Reduzido mr-2 para mr-1 */}
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-2xl mt-2 mb-4 py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2 space-y-2">
                <Button variant="hero" size="sm" className="w-full rounded-sm uppercase"> {/* Borda quadrada e uppercase */}
                  Começar Gratuitamente
                </Button>
                {/* Botão Entrar com ícone User, borda quadrada, uppercase e hover gradiente rosa no mobile */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-sm uppercase border-primary text-primary hover:bg-gradient-to-r hover:from-secondary hover:to-pink-500 hover:text-secondary-foreground hover:border-transparent transition-all duration-300" /* Alterado para rounded-sm, uppercase e hover gradiente rosa */
                >
                  <User className="mr-1 h-4 w-4" /> {/* Reduzido mr-2 para mr-1 */}
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};