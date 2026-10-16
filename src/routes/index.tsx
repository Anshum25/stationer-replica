import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CATEGORIES, FEATURED } from "@/data/catalog";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { BrandStory, BulkOrderSection, CartridgeRefillingSection, StoreLocation } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PARESH Stationery Mart — Stationery Shop in Naranpura, Ahmedabad" },
      { name: "description", content: "Pens, notebooks, school and office supplies, art materials and cartridge refilling at PARESH Stationery Mart, Naranpura, Ahmedabad." },
      { property: "og:title", content: "PARESH Stationery Mart — Make Every Idea Take Shape" },
      { property: "og:description", content: "Your neighbourhood stationery store in Naranpura, Ahmedabad. Enquire on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    }); };
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  const words = ["Make", "Every", "Idea", "Take", "Shape."];
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img src={hero} alt="Navy notebooks, a red fountain pen, pencils and paper clips arranged on ivory paper"
          width={1600} height={1200} fetchPriority="high" className="h-full w-full object-cover object-[70%_50%] opacity-40 md:opacity-100" />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8">
        <p className="eyebrow anim-fade-up">Naranpura · Ahmedabad</p>
        <h1 className="mt-6 max-w-3xl text-[15vw] font-semibold leading-[0.88] text-ink md:text-[7.5rem]">
          {words.map((w, i) => (
            <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
              <span className={`anim-rise inline-block ${w === "Shape." ? "text-primary" : ""}`} style={{ animationDelay: `${200 + i * 90}ms` }}>{w}</span>
            </span>
          ))}
        </h1>
        <p className="anim-fade-up mt-8 max-w-md text-lg text-graphite" style={{ animationDelay: "750ms" }}>
          Everything you need to write, create, learn, and get work done — all in one place.
        </p>
        <div className="anim-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "850ms" }}>
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink">
            Explore Products <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-paper/70 px-7 py-4 text-sm font-semibold text-ink backdrop-blur hover:border-ink">
            Visit Our Store
          </Link>
        </div>
      </div>
      <div aria-hidden className="absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-ink/15 md:block">
        <div className="anim-cue h-1/2 w-full bg-ink" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Pens", "Notebooks", "Registers", "Geometry boxes", "Art supplies", "Files & folders", "Copier paper", "Cartridge refilling"];
  return (
    <div className="overflow-hidden border-y bg-ink py-5 text-ink-foreground" aria-hidden>
      <div className="anim-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl">
        {[...items, ...items].map((t, i) => <span key={i} className="flex items-center gap-10">{t}<span className="text-primary">✦</span></span>)}
      </div>
    </div>
  );
}

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal><p className="eyebrow">Categories</p></Reveal>
          <Reveal delay={80}><h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">Eight shelves of everyday essentials.</h2></Reveal>
        </div>
        <Reveal delay={160}><Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline">Browse all <ArrowRight className="h-4 w-4" /></Link></Reveal>
      </div>
      <div className="mt-14 grid grid-cols-1 border-l border-t sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 4) * 70} className="border-b border-r">
            <Link to="/products" search={{ category: c.slug }} className="group relative flex h-full min-h-56 flex-col justify-between overflow-hidden p-6 transition-colors hover:bg-ink">
              <img src={c.image} alt="" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
              <div className="relative flex items-start justify-between">
                <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight className="h-5 w-5 text-ink transition-all group-hover:rotate-45 group-hover:text-ink-foreground" />
              </div>
              <div className="relative">
                <h3 className="font-display text-2xl font-medium leading-tight text-ink transition-colors group-hover:text-ink-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-ink-foreground/70">{c.blurb}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal><p className="eyebrow">A look at the shelves</p></Reveal>
        <Reveal delay={80}><h2 className="mt-5 text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">Things worth picking up.</h2></Reveal>
        <Reveal delay={140}><p className="mt-4 text-sm text-muted-foreground">Demonstration listings — ask the store to confirm availability and price.</p></Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3">
          {FEATURED.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 90}><ProductCard product={p} index={i} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <CategoryGrid />
      <FeaturedProducts />
      <CartridgeRefillingSection />
      <BrandStory />
      <BulkOrderSection />
      <StoreLocation />
    </>
  );
}
