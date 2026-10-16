import { Link } from "@tanstack/react-router";
import { BUSINESS, directionsUrl } from "@/config/business";
import { CATEGORIES } from "@/data/catalog";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="font-display text-[18vw] font-bold leading-[0.8] tracking-tighter md:text-[11rem]">PARESH</div>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-sm leading-relaxed text-ink-foreground/70">
              A neighbourhood stationery store in Naranpura, Ahmedabad — for school, office, art and cartridge refilling.
            </p>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.slug}><Link to="/products" search={{ category: c.slug }} className="text-ink-foreground/80 hover:text-ink-foreground">{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-ink-foreground/80 hover:text-ink-foreground">Cartridge refilling</Link></li>
              <li><Link to="/services" hash="bulk" className="text-ink-foreground/80 hover:text-ink-foreground">Bulk & school orders</Link></li>
            </ul>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="eyebrow mb-4">Visit</h3>
            <address className="not-italic text-ink-foreground/80">{BUSINESS.addressLines.map((l) => <div key={l}>{l}</div>)}</address>
            {BUSINESS.contacts.map((c) => <div key={c.tel}><a href={`tel:${c.tel}`} className="hover:text-primary">{c.phone}</a> · {c.name}</div>)}
            <div><a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">{BUSINESS.email}</a></div>
            <div className="flex gap-4 pt-2">
              <a href={waLink("Hello PARESH Stationery Mart, I have an enquiry.")} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Directions</a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/60 md:flex-row">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span>Product listings are illustrative — please confirm availability with the store.</span>
        </div>
      </div>
    </footer>
  );
}
