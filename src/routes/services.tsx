import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { BulkOrderSection, CartridgeRefillingSection } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cartridge Refilling & Bulk Orders — PARESH Stationery Mart" },
      { name: "description", content: "Enquire about cartridge refilling and bulk stationery orders for schools and offices in Naranpura, Ahmedabad." },
      { property: "og:title", content: "Cartridge refilling & bulk orders — PARESH Stationery Mart" },
      { property: "og:description", content: "Send your printer model or requirement list on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Services" title="More than what's on the shelf.">
        Cartridge refilling, and stationery lists for schools, offices and families.
      </PageIntro>
      <CartridgeRefillingSection withForm />
      <BulkOrderSection />
    </>
  ),
});
