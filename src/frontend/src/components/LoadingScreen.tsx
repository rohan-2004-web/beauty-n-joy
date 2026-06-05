import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
      aria-label="Loading"
      data-ocid="loading_screen.loading_state"
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center mb-6">
        <span className="absolute w-20 h-20 rounded-full border-2 border-primary/20 animate-ping" />
        <span className="absolute w-14 h-14 rounded-full border border-accent/40 animate-pulse" />
        <span className="text-3xl font-display font-semibold gradient-gold">
          B
        </span>
      </div>
      <p className="font-display text-xl tracking-widest gradient-gold">
        Beauty N Joy
      </p>
      <p className="mt-2 text-xs font-body text-muted-foreground tracking-widest uppercase">
        Preparing your experience…
      </p>
    </div>
  );
}
