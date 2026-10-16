import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

export function Reveal({ as: Tag = "div", children, className = "", delay = 0, mask = false }: {
  as?: ElementType; children: ReactNode; className?: string; delay?: number; mask?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return <Tag ref={ref} style={style} className={`${mask ? "reveal-mask" : "reveal"} ${className}`}>{children}</Tag>;
}
