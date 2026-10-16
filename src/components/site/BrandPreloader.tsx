import { useEffect, useState } from "react";

// Shows once per session on first load, finishes as soon as the page has loaded.
export function BrandPreloader() {
  const [state, setState] = useState<"hidden" | "show" | "leaving">("hidden");
  useEffect(() => {
    if (sessionStorage.getItem("paresh-intro")) return;
    sessionStorage.setItem("paresh-intro", "1");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("show");
    const t = setTimeout(() => setState("leaving"), 1300);
    const t2 = setTimeout(() => setState("hidden"), 2100);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);
  if (state === "hidden") return null;
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper transition-[clip-path] duration-700"
      style={{ clipPath: state === "leaving" ? "inset(0 0 100% 0)" : "inset(0 0 0 0)", transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <div className="overflow-hidden">
        <div className="anim-rise font-display text-6xl font-bold tracking-tighter text-ink md:text-8xl">PARESH</div>
      </div>
      <svg width="220" height="20" viewBox="0 0 220 20" className="mt-3">
        <path d="M2 12 C 50 2, 90 18, 140 8 S 200 10, 218 6" fill="none" stroke="var(--primary)" strokeWidth="3"
          strokeLinecap="round" strokeDasharray="600" style={{ animation: "draw 1.2s var(--ease-out-expo) both" }} />
      </svg>
      <div className="mt-8 h-px w-40 origin-left bg-ink/20">
        <div className="h-px w-full origin-left bg-ink" style={{ animation: "grow 1.2s var(--ease-out-expo) both" }} />
      </div>
    </div>
  );
}
