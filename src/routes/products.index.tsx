import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { PageIntro } from "@/components/site/PageIntro";

type S = { category?: CategorySlug; q?: string; sort?: "az" | "za" };

export const Route = createFileRoute("/products/")({
  validateSearch: (s: Record<string, unknown>): S => ({
    category: CATEGORIES.some((c) => c.slug === s.category) ? (s.category as CategorySlug) : undefined,
    q: typeof s.q === "string" && s.q ? s.q.slice(0, 80) : undefined,
    sort: s.sort === "za" ? "za" : s.sort === "az" ? "az" : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Products — PARESH Stationery Mart, Ahmedabad" },
      { name: "description", content: "Browse pens, notebooks, school stationery, office supplies, art materials, files and cartridges at PARESH Stationery Mart." },
      { property: "og:title", content: "Browse stationery — PARESH Stationery Mart" },
      { property: "og:description", content: "Search and filter our stationery categories and enquire on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { category, q, sort } = Route.useSearch();
  const navigate = useNavigate({ from: "/products/" });
  const term = (q ?? "").toLowerCase();
  let list = PRODUCTS.filter((p) => (!category || p.category === category) && (!term || p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)));
  if (sort) list = [...list].sort((a, b) => (sort === "az" ? 1 : -1) * a.name.localeCompare(b.name));
  const chip = "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors";

  return (
    <>
      <PageIntro eyebrow="Catalogue" title={<>Browse the shelves.</>}>
        Demonstration listings to help you explore. Prices and stock are confirmed by the store on enquiry.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="sticky top-16 z-30 -mx-5 border-b bg-paper/95 px-5 py-4 backdrop-blur md:top-20 md:mx-0 md:px-0">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Search products</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input type="search" defaultValue={q} placeholder="Search notebooks, pens, files…"
                onChange={(e) => navigate({ search: (s: S) => ({ ...s, q: e.target.value || undefined }), replace: true })}
                className="w-full rounded-full border bg-card py-3 pl-11 pr-4 text-base outline-none focus:border-ink" />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sort</span>
              <select value={sort ?? ""} onChange={(e) => navigate({ search: (s: S) => ({ ...s, sort: (e.target.value || undefined) as S["sort"] }), replace: true })}
                className="rounded-full border bg-card px-4 py-3 outline-none focus:border-ink">
                <option value="">Featured</option><option value="az">Name A–Z</option><option value="za">Name Z–A</option>
              </select>
            </label>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
            <Link to="/products" search={(s: S) => ({ ...s, category: undefined })} aria-pressed={!category}
              className={`${chip} ${!category ? "border-ink bg-ink text-ink-foreground" : "bg-card text-ink hover:border-ink"}`}>All</Link>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to="/products" search={(s: S) => ({ ...s, category: c.slug })} aria-pressed={category === c.slug}
                className={`${chip} ${category === c.slug ? "border-ink bg-ink text-ink-foreground" : "bg-card text-ink hover:border-ink"}`}>{c.name}</Link>
            ))}
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">{list.length} {list.length === 1 ? "item" : "items"}</p>
        {list.length ? (
          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p, i) => <div key={p.slug} className="anim-fade-up" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}><ProductCard product={p} index={i} /></div>)}
          </div>
        ) : (
          <div className="mt-10 rounded-md border border-dashed p-12 text-center">
            <h2 className="text-2xl font-semibold text-ink">Nothing matches that yet.</h2>
            <p className="mt-2 text-muted-foreground">The store may still have it — just ask.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/products" className="rounded-full border px-5 py-3 text-sm text-ink">Clear filters</Link>
              <Link to="/contact" className="rounded-full bg-ink px-5 py-3 text-sm text-ink-foreground">Ask the store</Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
