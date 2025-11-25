import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  scrollToSection: (id: string) => void;
  navItems?: NavItem[];
}

export default function Navbar({ 
  scrollToSection, 
  navItems: customNavItems
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultNavItems = [
    { id: "tabla-contenido", label: "Contenido" },
    { id: "analisis", label: "Análisis" },
    { id: "pilares", label: "Pilares" },
    { id: "hallazgos", label: "Hallazgos" },
    { id: "estrategias", label: "Estrategias" },
    { id: "planes", label: "Planes" },
    { id: "propuesta", label: "Propuesta" },
    { id: "forma-pago", label: "Pago" },
  ];

  const navItems = customNavItems || defaultNavItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      style={{
        borderBottom: isScrolled
          ? `1px solid #ded6cb`
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand - NEXUS vanta */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/nexus-logo.png"
              alt="NEXUS vanta"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              style={{
                filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-[#082053] hover:text-[#306ab0]"
                }`}
                style={{
                  backgroundColor:
                    activeSection === item.id ? "#306ab0" : "transparent",
                  fontWeight: activeSection === item.id ? 600 : 500,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-lg"
                style={{ color: "#082053" }}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
              style={{ backgroundColor: "#faf6f1" }}
            >
              <div className="flex flex-col space-y-4 mt-8">
                <div className="mb-6">
                  <img
                    src="/nexus-logo.png"
                    alt="NEXUS vanta"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-[#082053]"
                    }`}
                    style={{
                      backgroundColor:
                        activeSection === item.id ? "#306ab0" : "transparent",
                      fontWeight: activeSection === item.id ? 600 : 500,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

