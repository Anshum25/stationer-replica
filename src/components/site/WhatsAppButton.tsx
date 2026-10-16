import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a href={waLink("Hello PARESH Stationery Mart, I have an enquiry.")} target="_blank" rel="noopener noreferrer"
      aria-label="Chat with PARESH Stationery Mart on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-105">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
