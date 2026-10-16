import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import cartridge from "@/assets/cartridge.jpg";
import story from "@/assets/story.jpg";
import { BUSINESS, directionsUrl } from "@/config/business";
import { waLink } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { EnquiryForm } from "./EnquiryForm";

export function CartridgeRefillingSection({ withForm = false }: { withForm?: boolean }) {
  const steps = [
    ["01", "Enquire", "Message us on WhatsApp or visit the store."],
    ["02", "Share details", "Tell us your printer and cartridge model."],
    ["03", "Confirmation", "We confirm compatibility, price and timing."],
  ];
  return (
    <section id="cartridge" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <Reveal mask className="overflow-hidden rounded-md">
          <img src={cartridge} alt="Ink and toner printer cartridges" loading="lazy" width={1200} height={1200} className="h-full w-full object-cover" />
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal><p className="eyebrow">Service · Cartridge refilling</p></Reveal>
          <Reveal delay={80}><h2 className="mt-5 text-5xl font-semibold leading-[0.95] md:text-6xl">Keep Your Printing Going.</h2></Reveal>
          <Reveal delay={160}><p className="mt-6 max-w-md text-lg text-ink-foreground/75">Ask us about cartridge refilling and printer consumables.</p></Reveal>
          <ol className="mt-10 space-y-0 border-t border-ink-foreground/15">
            {steps.map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={200 + i * 90} className="flex gap-6 border-b border-ink-foreground/15 py-5">
                <span className="font-display text-sm text-primary">{n}</span>
                <div><div className="font-display text-xl">{t}</div><div className="text-sm text-ink-foreground/70">{d}</div></div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ink-foreground/60">Availability, compatibility, pricing and turnaround time are confirmed by the shop for each cartridge.</p>
          {!withForm && (
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink("Hello PARESH Stationery Mart, I'd like to ask about cartridge refilling.\nPrinter model: \nCartridge model: ")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-primary-foreground">
                <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-6 py-3.5 text-sm font-medium hover:bg-ink-foreground/10">
                Refill enquiry form <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
      {withForm && (
        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="rounded-md bg-paper p-6 text-foreground md:p-10">
            <h3 className="text-2xl font-semibold text-ink">Cartridge refill enquiry</h3>
            <div className="mt-6">
              <EnquiryForm title="Cartridge refilling enquiry" fields={[
                { name: "name", label: "Your name", required: true },
                { name: "phone", label: "Phone number", type: "tel", required: true },
                { name: "printer", label: "Printer model", required: true, placeholder: "e.g. HP DeskJet 2331" },
                { name: "cartridge", label: "Cartridge model", placeholder: "e.g. HP 803" },
                { name: "qty", label: "Quantity", type: "number" },
              ]} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function BulkOrderSection() {
  const audiences = ["Students & parents", "Schools & institutions", "Offices & businesses", "Artists & creators"];
  return (
    <section id="bulk" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Reveal><p className="eyebrow">Bulk · School · Office</p></Reveal>
          <Reveal delay={80}><h2 className="mt-5 text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">One list. Everything on it.</h2></Reveal>
          <Reveal delay={160}><p className="mt-6 max-w-md text-lg text-muted-foreground">Send us your requirement list for a term, a classroom or an office. We'll get back to you with what we can arrange.</p></Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3">
            {audiences.map((a, i) => (
              <Reveal as="li" key={a} delay={i * 70} className="rounded-md border px-4 py-4 font-display text-sm text-ink">{a}</Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={120} className="rounded-md border bg-card p-6 md:p-10">
          <EnquiryForm title="Bulk order enquiry" fields={[
            { name: "name", label: "Name", required: true },
            { name: "phone", label: "Phone number", type: "tel", required: true },
            { name: "org", label: "Organisation" },
            { name: "qty", label: "Estimated quantity" },
            { name: "items", label: "Required items", type: "textarea", required: true, placeholder: "e.g. 200 ruled notebooks, 50 geometry boxes…" },
            { name: "notes", label: "Additional notes", type: "textarea" },
          ]} />
        </Reveal>
      </div>
    </section>
  );
}

export function BrandStory() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
      <Reveal mask className="order-2 overflow-hidden rounded-md md:order-1">
        <img src={story} alt="A hand sketching ideas in a notebook with a pencil" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
      </Reveal>
      <div className="order-1 md:order-2">
        <Reveal><p className="eyebrow">Our idea</p></Reveal>
        <Reveal delay={80}><h2 className="mt-5 text-5xl font-semibold leading-[0.95] text-ink md:text-7xl">Small Tools.<br />Big Ideas.</h2></Reveal>
        <Reveal delay={160}>
          <div className="mt-8 max-w-md space-y-4 text-lg text-muted-foreground">
            <p>Every lesson learned, every plan made and every drawing begun starts with something simple — a pen, a page, a pencil.</p>
            <p>At our store in Naranpura, we keep those everyday tools close at hand for students, families, offices and makers in the neighbourhood.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StoreLocation() {
  return (
    <section id="visit" className="border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div>
          <Reveal><p className="eyebrow">Visit the store</p></Reveal>
          <Reveal delay={80}><h2 className="mt-5 text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">Find us in Naranpura.</h2></Reveal>
          <Reveal delay={160}>
            <address className="mt-8 flex gap-3 not-italic text-lg text-graphite">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span>{BUSINESS.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</span>
            </address>
          </Reveal>
          <Reveal delay={220}>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ink-foreground hover:bg-primary">
              Get directions <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
        <div className="grid gap-3">
          {BUSINESS.contacts.map((c, i) => (
            <Reveal key={c.tel} delay={i * 80}>
              <a href={`tel:${c.tel}`} className="flex items-center justify-between rounded-md border bg-card p-6 transition-colors hover:border-ink">
                <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Call {c.name}</div><div className="mt-1 font-display text-2xl text-ink">{c.phone}</div></div>
                <Phone className="h-5 w-5 text-primary" />
              </a>
            </Reveal>
          ))}
          <Reveal delay={160}>
            <a href={waLink("Hello PARESH Stationery Mart, I have an enquiry.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-md border bg-card p-6 transition-colors hover:border-ink">
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div><div className="mt-1 font-display text-2xl text-ink">{BUSINESS.whatsappDisplay}</div></div>
              <MessageCircle className="h-5 w-5 text-whatsapp" />
            </a>
          </Reveal>
          <Reveal delay={240}>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center justify-between rounded-md border bg-card p-6 transition-colors hover:border-ink">
              <div className="min-w-0"><div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div><div className="mt-1 truncate font-display text-lg text-ink sm:text-2xl">{BUSINESS.email}</div></div>
              <Mail className="h-5 w-5 shrink-0 text-primary" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
