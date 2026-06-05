import { testimonials } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export function TestimonialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000);
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total);
    startTimer();
  };
  const next = () => {
    setCurrent((c) => (c + 1) % total);
    startTimer();
  };

  const visibleIndices = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-muted/30 overflow-hidden"
      data-ocid="testimonials.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
            Happy Clients
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            What Our Clients <span className="gradient-gold">Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {visibleIndices.map((idx, pos) => {
              const t = testimonials[idx];
              return (
                <div
                  key={t.id}
                  className={`rounded-2xl p-7 bg-card border shadow-card transition-smooth
                    ${pos === 1 ? "border-accent/40 shadow-elegant scale-[1.02]" : "border-border opacity-80"}`}
                  data-ocid={`testimonials.item.${idx + 1}`}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from(
                      { length: t.rating },
                      (_, i) => `star-${t.id}-${i}`,
                    ).map((key) => (
                      <Star
                        key={key}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover shadow-card"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="font-body text-sm font-semibold text-foreground truncate">
                        {t.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-card border border-border hover:border-accent text-foreground
                flex items-center justify-center transition-smooth hover-lift"
              data-ocid="testimonials.pagination_prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => {
                    setCurrent(i);
                    startTimer();
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    i === current
                      ? "bg-accent scale-125"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  data-ocid={`testimonials.dot.${i + 1}.toggle`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-card border border-border hover:border-accent text-foreground
                flex items-center justify-center transition-smooth hover-lift"
              data-ocid="testimonials.pagination_next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
