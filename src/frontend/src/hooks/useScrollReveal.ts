import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "fade";

interface ScrollRevealOptions {
  direction?: Direction;
  delay?: number;
  threshold?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const { direction = "up", delay = 0, threshold = 0.15 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const initialTransform: Record<Direction, string> = {
      up: "translateY(32px)",
      left: "translateX(-32px)",
      right: "translateX(32px)",
      fade: "translateY(0)",
    };

    el.style.opacity = "0";
    el.style.transform = initialTransform[direction];
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) translateX(0)";
            observer.unobserve(el);
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, threshold]);

  return ref;
}
