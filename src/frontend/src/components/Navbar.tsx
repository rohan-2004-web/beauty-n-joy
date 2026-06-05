import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
      data-ocid="navbar.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-xl md:text-2xl font-semibold gradient-gold"
            data-ocid="navbar.logo.link"
          >
            Beauty N Joy
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-sm font-body transition-smooth rounded-md ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                data-ocid={`navbar.${link.label.toLowerCase().replace(/\s/g, "_")}.link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full px-5 bg-accent text-accent-foreground font-body text-sm font-medium
                hover:opacity-90 transition-smooth shadow-card"
              data-ocid="navbar.book_appointment.button"
            >
              <a
                href="https://wa.me/6388989935?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground transition-smooth"
            data-ocid="navbar.hamburger.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border shadow-elegant">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 text-sm font-body rounded-lg transition-smooth ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent font-medium bg-accent/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
                data-ocid={`navbar.mobile.${link.label.toLowerCase().replace(/\s/g, "_")}.link`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6388989935?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-4 py-3 rounded-full text-center text-sm font-body font-medium
                bg-accent text-accent-foreground transition-smooth"
              data-ocid="navbar.mobile.book_appointment.button"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
