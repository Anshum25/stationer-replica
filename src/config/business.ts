// Business details from the supplied visiting card. Verify with the owner before launch.
export const BUSINESS = {
  name: "PARESH Stationery Mart",
  short: "PARESH",
  tagline: "Stationery · Office · School · Cartridge Refilling",
  addressLines: ["74, Happy Home Shopping Center", "Ankur Ranna Park Road, Naranpura", "Ahmedabad, Gujarat 380013"],
  addressOneLine: "74, Happy Home Shopping Center, Ankur Ranna Park Road, Naranpura, Ahmedabad, Gujarat 380013",
  email: "pareshstationery@yahoo.co.in",
  whatsapp: "919427071723",
  contacts: [
    { name: "Paresh Shah", phone: "+91 94270 50409", tel: "+919427050409" },
    { name: "Sanjay Shah", phone: "+91 94267 58202", tel: "+919426758202" },
  ],
  whatsappDisplay: "+91 94270 71723",
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Happy Home Shopping Center, Ankur Ranna Park Road, Naranpura, Ahmedabad",
)}`;
