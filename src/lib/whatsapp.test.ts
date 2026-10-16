import { describe, it, expect } from "vitest";
import { waLink, buildEnquiry, isValidIndianPhone } from "./whatsapp";

describe("whatsapp", () => {
  it("uses the card's WhatsApp number and encodes text", () => {
    expect(waLink("Hi & bye")).toBe("https://wa.me/919427071723?text=Hi%20%26%20bye");
  });
  it("omits empty fields", () => {
    const m = buildEnquiry("Bulk order", { Name: "Asha", Organization: "" });
    expect(m).toContain("Name: Asha");
    expect(m).not.toContain("Organization");
  });
  it("validates Indian mobile numbers", () => {
    expect(isValidIndianPhone("+91 94270 50409")).toBe(true);
    expect(isValidIndianPhone("12345")).toBe(false);
  });
});
