import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getCategory, type Product } from "@/data/catalog";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const cat = getCategory(product.category)!;
  return (
    <Link to="/products/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary">
        <img src={cat.image} alt={`${product.name} — ${cat.name}`} loading="lazy" width={800} height={1000}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: `${(index * 37) % 100}% 50%` }} />
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-ink">Demo item</span>
        <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-medium text-ink">{product.name}</h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{cat.name}</p>
        </div>
        <span className="whitespace-nowrap text-xs text-muted-foreground">Ask for price</span>
      </div>
    </Link>
  );
}
