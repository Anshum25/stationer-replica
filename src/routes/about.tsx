import { createFileRoute, Link } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import { PageIntro } from "@/components/site/PageIntro";
import { BrandStory } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PARESH Stationery Mart, Naranpura" },
      { name: "description", content: "A neighbourhood stationery store in Naranpura, Ahmedabad for students, families, offices and makers." },
      { property: "og:title", content: "About PARESH Stationery Mart" },
      { property: "og:description", content: "Small tools. Big ideas. Your neighbourhood stationery store in Naranpura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="About" title="Your neighbourhood stationery store.">
        Run by Paresh Shah and Sanjay Shah at Happy Home Shopping Center, Naranpura.
      </PageIntro>
      <BrandStory />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-28 md:grid-cols-3 md:px-8">
        {[["Write", "Pens, pencils, markers and refills."], ["Organise", "Files, folders, registers and office tools."], ["Create", "Colours, craft paper, brushes and sheets."]].map(([t, d], i) => (
          <Reveal key={t} delay={i * 90} className="border-t pt-6">
            <h2 className="text-3xl font-semibold text-ink">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </Reveal>
        ))}
        <Reveal mask className="overflow-hidden rounded-md md:col-span-3">
          <img src={office} alt="Stacked red and navy files, registers and a stapler" loading="lazy" width={1200} height={1200} className="aspect-[21/9] w-full object-cover" />
        </Reveal>
        <div className="md:col-span-3"><Link to="/contact" className="inline-flex rounded-full bg-ink px-7 py-4 text-sm font-semibold text-ink-foreground hover:bg-primary">Visit the store</Link></div>
      </section>
    </>
  ),
});
