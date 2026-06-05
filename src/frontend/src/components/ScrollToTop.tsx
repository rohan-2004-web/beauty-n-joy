import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll to top"
      data-ocid="scroll_to_top.button"
      className="fixed bottom-24 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center
        shadow-elegant transition-smooth hover-lift
        bg-primary text-primary-foreground"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
