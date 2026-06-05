import { services } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Crown,
  Feather,
  Gem,
  Heart,
  Scissors,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Crown,
  Scissors,
  Sparkles,
  Star,
  Heart,
  Wind,
  Gem,
  Feather,
};

function ServiceCard({
  service,
  index,
}: { service: (typeof services)[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>({
    direction: "up",
    delay: index * 80,
  });
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <div
      ref={ref}
      className="group rounded-2xl overflow-hidden bg-card shadow-card hover-lift border border-border/60"
      data-ocid={`services.item.${index + 1}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-smooth duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
          <Icon className="w-4 h-4 text-accent" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {service.title}
        </h3>
        <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-body text-sm font-semibold text-accent">
            {service.price}
          </span>
          <a
            href={`https://wa.me/6388989935?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body font-medium px-4 py-2 rounded-full bg-primary/10 text-primary
              hover:bg-primary hover:text-primary-foreground transition-smooth"
            data-ocid={`services.view_details.button.${index + 1}`}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });

  return (
    <section
      id="services"
      className="py-20 bg-background"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Our Premium <span className="gradient-gold">Services</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground max-w-xl mx-auto">
            From transformative bridal looks to everyday elegance, discover our
            full suite of luxury beauty treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
