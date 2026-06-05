import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const headRef = useScrollReveal<HTMLDivElement>({
    direction: "up",
    delay: 200,
  });
  const subRef = useScrollReveal<HTMLParagraphElement>({
    direction: "up",
    delay: 350,
  });
  const ctaRef = useScrollReveal<HTMLDivElement>({
    direction: "up",
    delay: 500,
  });

  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-beauty.dim_1400x900.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent"
        aria-hidden="true"
      />

      {/* Floating decorative elements */}
      <div
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-[25%] w-20 h-20 rounded-full bg-accent/20 blur-2xl animate-pulse-soft"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-32 max-w-3xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
          Luxury Beauty Parlour
        </p>
        <div ref={headRef}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
            Enhance Your <span className="gradient-gold">Natural</span>
            <br />
            Beauty
          </h1>
        </div>
        <p
          ref={subRef}
          className="font-body text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
        >
          Professional Beauty &amp; Makeup Services for every occasion. From
          everyday elegance to bridal radiance — we celebrate you.
        </p>
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <Button
            asChild
            className="rounded-full px-7 py-3 h-auto text-base font-body font-medium bg-accent text-accent-foreground
              hover:opacity-90 transition-smooth shadow-elegant"
            data-ocid="hero.book_now.primary_button"
          >
            <a
              href="https://wa.me/6388989935?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={scrollToServices}
            className="rounded-full px-7 py-3 h-auto text-base font-body font-medium
              border-white/50 text-white bg-white/10 backdrop-blur-sm
              hover:bg-white/20 hover:border-white transition-smooth"
            data-ocid="hero.view_services.secondary_button"
          >
            View Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToServices}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-smooth animate-float"
        data-ocid="hero.scroll_indicator.button"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
