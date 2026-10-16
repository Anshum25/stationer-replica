import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b bg-paper/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex items-baseline gap-2" aria-label="PARESH Stationery Mart home">
          <span className="font-display text-2xl font-bold tracking-tighter text-ink">PARESH</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:inline">Stationery Mart</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="group relative py-1 text-sm font-medium text-graphite transition-colors hover:text-ink data-[status=active]:text-ink"
            >
              {n.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink("Hello PARESH Stationery Mart, I have an enquiry.")} target="_blank" rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary sm:inline-flex">
            Enquire
          </a>
          <button onClick={() => setOpen(true)} className="inline-flex h-11 w-11 items-center justify-center md:hidden" aria-label="Open menu" aria-expanded={open}>
            <Menu className="h-6 w-6 text-ink" />
          </button>
        </div>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] flex flex-col bg-ink p-6 text-ink-foreground md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold">PARESH</span>
            <button autoFocus onClick={() => setOpen(false)} className="inline-flex h-11 w-11 items-center justify-center" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-12 flex flex-col gap-2">
            {NAV.map((n, i) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
                className="anim-fade-up border-b border-ink-foreground/15 py-4 font-display text-4xl tracking-tight data-[status=active]:text-primary"
                style={{ animationDelay: `${i * 60}ms` }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
