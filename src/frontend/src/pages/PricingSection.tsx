import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Sparkles } from "lucide-react";

function PricingCard({
  plan,
  index,
}: { plan: (typeof pricingPlans)[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>({
    direction: "up",
    delay: index * 120,
  });

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-8 border flex flex-col gap-6 transition-smooth hover-lift ${
        plan.highlight
          ? "bg-card border-accent shadow-elegant scale-[1.02]"
          : "bg-card border-border shadow-card"
      }`}
      data-ocid={`pricing.plan.${index + 1}`}
    >
      {plan.badge && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-body text-xs px-4">
          <Sparkles className="w-3 h-3 mr-1" />
          {plan.badge}
        </Badge>
      )}

      <div>
        <p className="font-body text-xs tracking-widest uppercase text-accent mb-2">
          {plan.name}
        </p>
        <div className="flex items-end gap-1">
          <span className="font-display text-4xl font-semibold gradient-gold">
            {plan.price}
          </span>
          <span className="text-muted-foreground text-sm font-body mb-1">
            /session
          </span>
        </div>
        <p className="mt-2 text-sm font-body text-muted-foreground">
          {plan.description}
        </p>
      </div>

      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2.5 text-sm font-body text-foreground"
          >
            <Check className="w-4 h-4 flex-shrink-0 text-accent" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={`w-full rounded-full font-body font-medium transition-smooth ${
          plan.highlight
            ? "bg-accent text-accent-foreground hover:opacity-90"
            : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
        }`}
        data-ocid={`pricing.book.button.${index + 1}`}
      >
        <a
          href={`https://wa.me/6388989935?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book This Package
        </a>
      </Button>
    </div>
  );
}

export function PricingSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });

  return (
    <section
      id="pricing"
      className="py-20 bg-background"
      data-ocid="pricing.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-14">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Beauty <span className="gradient-gold">Packages</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground max-w-xl mx-auto">
            All-inclusive packages with premium products and expert artistry —
            no hidden costs, just gorgeous results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
