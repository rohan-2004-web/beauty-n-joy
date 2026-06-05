import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, CheckCircle, Heart, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Certified Experts",
    desc: "12+ nationally certified beauty artists with 5–20 years of experience.",
  },
  {
    icon: Leaf,
    title: "Premium Products",
    desc: "We exclusively use luxury brands: MAC, Kérastase, Charlotte Tilbury & Forest Essentials.",
  },
  {
    icon: CheckCircle,
    title: "Hygienic Environment",
    desc: "ISO-standard hygiene protocols. Tools sterilised between every client.",
  },
  {
    icon: Heart,
    title: "Affordable Packages",
    desc: "Transparent pricing with no hidden fees. Luxury beauty accessible to all.",
  },
];

export function AboutSection() {
  const imgRef = useScrollReveal<HTMLDivElement>({
    direction: "left",
    delay: 100,
  });
  const textRef = useScrollReveal<HTMLDivElement>({
    direction: "right",
    delay: 200,
  });

  return (
    <section id="about" className="py-20 bg-muted/30" data-ocid="about.section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imgRef}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="/assets/generated/about-salon.dim_700x500.jpg"
                alt="Beauty N Joy salon interior"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Floating stat chip */}
              <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-card">
                <p className="font-display text-2xl font-semibold gradient-gold">
                  8+ Years
                </p>
                <p className="text-xs font-body text-muted-foreground mt-0.5">
                  Of trusted beauty excellence
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef}>
            <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-5 leading-tight">
              Where Beauty Meets
              <br />
              <span className="gradient-gold">Artistry &amp; Care</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-5">
              Beauty N Joy was founded on a simple belief: every woman deserves
              to feel her most radiant self. Our salon blends cutting-edge
              beauty science with timeless artistry, creating a sanctuary where
              you can relax, refresh, and emerge transformed.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From bridal makeovers to everyday glam, our team of certified
              artists and therapists tailor every treatment to your unique
              beauty needs — using only the finest international products.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="flex gap-3 p-4 rounded-xl bg-card shadow-card hover-lift"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-body font-semibold text-foreground">
                        {h.title}
                      </p>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed mt-0.5">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
