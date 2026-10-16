import { BUSINESS } from "@/config/business";

export function waLink(message: string, number: string = BUSINESS.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildEnquiry(title: string, fields: Record<string, string | undefined>) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`);
  return [`Hello ${BUSINESS.name},`, title, "", ...lines].join("\n");
}

export function isValidIndianPhone(v: string) {
  const d = v.replace(/[\s\-()+]/g, "");
  return /^(91)?[6-9]\d{9}$/.test(d);
}
