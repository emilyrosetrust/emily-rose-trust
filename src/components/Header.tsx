import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Emily's Story", to: "/emilys-story" },
  { label: "The Trust", to: "/the-trust" },
  { label: "Support Emily Rose", to: "/support-emily-rose" },
  { label: "Updates", to: "/updates" },
  { label: "Contact", to: "/contact" },
];

const GOFUNDME_URL = "https://www.gofundme.com/f/support-emily-roses-family-with-time-together";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-background/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold text-foreground tracking-tight">
          Emily Rose Trust
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="donate" size="sm">
              Donate
            </Button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="lg:hidden bg-background border-t border-border animate-fade-in"
          aria-label="Mobile navigation"
        >
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium py-2 transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button variant="donate" className="w-full">
                Donate
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
