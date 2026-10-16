import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { StoreLocation } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — PARESH Stationery Mart, Naranpura" },
      { name: "description", content: "Call, WhatsApp or email PARESH Stationery Mart, 74 Happy Home Shopping Center, Ankur Ranna Park Road, Naranpura, Ahmedabad." },
      { property: "og:title", content: "Contact PARESH Stationery Mart" },
      { property: "og:description", content: "Phone, WhatsApp, email and directions to our Naranpura store." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Contact" title="Talk to the store.">Call, WhatsApp, email or drop by.</PageIntro>
      <StoreLocation />
      <section className="mx-auto max-w-3xl px-5 pb-28 md:px-8">
        <h2 className="text-3xl font-semibold text-ink">General enquiry</h2>
        <div className="mt-8">
          <EnquiryForm title="General enquiry" fields={[
            { name: "name", label: "Your name", required: true },
            { name: "phone", label: "Phone number", type: "tel", required: true },
            { name: "message", label: "Your message", type: "textarea", required: true },
          ]} />
        </div>
      </section>
    </>
  ),
});
