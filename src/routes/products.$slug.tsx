import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { getCategory, getProduct, PRODUCTS } from "@/data/catalog";
import { BUSINESS } from "@/config/business";
import { waLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — PARESH Stationery Mart` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — PARESH Stationery Mart` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Product not found — PARESH Stationery Mart" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-40 md:px-8">
      <h1 className="text-5xl font-semibold text-ink">Product not found.</h1>
      <Link to="/products" className="mt-6 inline-block underline">Back to products</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const cat = getCategory(product.category)!;
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const msg = `Hello ${BUSINESS.name}, I'd like to enquire about: ${product.name} (${cat.name}). Is it available, and what is the price?`;
  return (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <Link to="/products" search={{ category: product.category }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> {cat.name}
      </Link>
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="reveal-mask is-in overflow-hidden rounded-md bg-secondary">
          <img src={cat.image} alt={`${product.name} — ${cat.name}`} width={1200} height={1200} className="aspect-square w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{cat.name}</p>
          <h1 className="anim-fade-up mt-4 text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">{product.name}</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{product.description}</p>
          <dl className="mt-8 divide-y border-y text-sm">
            <div className="flex justify-between py-3"><dt className="text-muted-foreground">Brand</dt><dd className="text-ink">{product.brand ?? "Ask the store"}</dd></div>
            <div className="flex justify-between py-3"><dt className="text-muted-foreground">Price</dt><dd className="text-ink">{product.price ? `₹${product.price}` : "On enquiry"}</dd></div>
            <div className="flex justify-between py-3"><dt className="text-muted-foreground">Availability</dt><dd className="text-ink">Confirm with store</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-sm font-semibold text-primary-foreground">
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a href={`tel:${BUSINESS.contacts[0].tel}`} className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-4 text-sm font-semibold text-ink hover:border-ink">
              <Phone className="h-4 w-4" /> Call the store
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Demonstration listing. Image is representative of the category.</p>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-28">
          <h2 className="text-3xl font-semibold text-ink">More in {cat.name}</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p, i) => <ProductCard key={p.slug} product={p} index={i + 1} />)}
          </div>
        </section>
      )}
    </div>
  );
}
