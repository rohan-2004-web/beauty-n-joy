import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const QUICK_LINKS = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "Pricing",
  "Contact",
];
const SERVICE_LINKS = [
  "Bridal Makeup",
  "Hair Styling",
  "Facial Treatment",
  "Nail Art",
  "Hair Spa",
  "Party Makeup",
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-card border-t border-border"
      data-ocid="footer.section"
    >
      {/* Main footer grid */}
      <div className="container mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-semibold gradient-gold mb-3">
            Beauty N Joy
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
            Your trusted destination for luxury beauty experiences. We blend
            artistry with care to bring out your most radiant self.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-smooth"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-smooth"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-smooth"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-base font-semibold text-foreground mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => scrollTo(link)}
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth font-body"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base font-semibold text-foreground mb-4">
            Our Services
          </h4>
          <ul className="space-y-2">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => scrollTo("services")}
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth font-body"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h4 className="font-display text-base font-semibold text-foreground mb-4">
            Stay Connected
          </h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2 text-sm text-muted-foreground font-body">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <span>123 Rose Avenue, Beauty Street, Mumbai 400001</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
              <span>+91 6388989935</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
              <span>hello@beautynjoy.in</span>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground font-body mb-2">
            Get beauty tips in your inbox
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
            }}
          >
            <Input
              type="email"
              placeholder="Your email"
              className="h-9 text-sm font-body"
              data-ocid="footer.newsletter.input"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-accent text-accent-foreground hover:opacity-90 transition-smooth"
              data-ocid="footer.newsletter.submit_button"
            >
              Join
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-body">
          <span>© {year} Beauty N Joy. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
