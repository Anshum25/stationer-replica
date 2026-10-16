import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pt-44">
      <p className="eyebrow anim-fade-up">{eyebrow}</p>
      <h1 className="anim-fade-up mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] text-ink md:text-7xl" style={{ animationDelay: "80ms" }}>{title}</h1>
      {children && <div className="anim-fade-up mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "160ms" }}>{children}</div>}
    </section>
  );
}
