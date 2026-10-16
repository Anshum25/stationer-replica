// DEMONSTRATION CATALOG — generic sample items, not confirmed stock, brands or prices.
// To update: edit this file (add/remove entries). No prices or stock are shown until confirmed.
import hero from "@/assets/hero.jpg";
import office from "@/assets/office.jpg";
import cartridge from "@/assets/cartridge.jpg";
import story from "@/assets/story.jpg";

export type CategorySlug =
  | "pens" | "notebooks" | "school" | "office" | "art" | "paper" | "files" | "cartridges";

export interface Category { slug: CategorySlug; name: string; blurb: string; image: string; }
export interface Product {
  slug: string; name: string; category: CategorySlug; description: string;
  brand?: string; price?: number; available?: boolean; // only set when confirmed by the owner
}

export const CATEGORIES: Category[] = [
  { slug: "pens", name: "Pens & Writing Instruments", blurb: "Ballpoints, gel pens, fountain pens, markers.", image: hero },
  { slug: "notebooks", name: "Notebooks & Registers", blurb: "Ruled, plain, long books and registers.", image: story },
  { slug: "school", name: "School Stationery", blurb: "Geometry boxes, erasers, sharpeners, more.", image: story },
  { slug: "office", name: "Office Supplies", blurb: "Staplers, punches, tapes and desk tools.", image: office },
  { slug: "art", name: "Art & Craft Supplies", blurb: "Colours, brushes, sheets and craft paper.", image: hero },
  { slug: "paper", name: "Paper & Printing", blurb: "Copier paper, chart paper, envelopes.", image: office },
  { slug: "files", name: "Files, Folders & Organisation", blurb: "Box files, clip files, folders.", image: office },
  { slug: "cartridges", name: "Cartridges & Printer Supplies", blurb: "Ink, toner and refilling enquiries.", image: cartridge },
];

const p = (slug: string, name: string, category: CategorySlug, description: string): Product => ({ slug, name, category, description });

export const PRODUCTS: Product[] = [
  p("gel-pen-set", "Gel Pen Set", "pens", "Smooth-flowing gel pens for everyday notes and neat handwriting."),
  p("ballpoint-pens", "Ballpoint Pens", "pens", "Reliable everyday ballpoints in blue, black and red."),
  p("fountain-pen", "Fountain Pen", "pens", "A classic writing instrument for those who love ink."),
  p("permanent-markers", "Permanent Markers", "pens", "Bold markers for labelling, boards and craft work."),
  p("highlighters", "Highlighters", "pens", "Bright highlighters for study notes and documents."),
  p("ruled-notebook", "Ruled Notebook", "notebooks", "Everyday ruled notebook for school, college and office."),
  p("long-register", "Long Register", "notebooks", "Long-format register for records and accounts."),
  p("hardbound-journal", "Hardbound Journal", "notebooks", "Durable hardbound notebook for ideas and planning."),
  p("geometry-box", "Geometry Box", "school", "Compass, divider, protractor and ruler in one box."),
  p("pencil-pack", "Pencil Pack", "school", "Graphite pencils for writing and sketching."),
  p("eraser-sharpener", "Erasers & Sharpeners", "school", "Small essentials every school bag needs."),
  p("stapler", "Stapler & Pins", "office", "Desk stapler with refill pins for daily paperwork."),
  p("paper-punch", "Paper Punch", "office", "Two-hole punch for filing documents."),
  p("tape-dispenser", "Tape & Dispenser", "office", "Clear tape with a weighted desk dispenser."),
  p("watercolours", "Watercolour Set", "art", "Watercolour cakes for school projects and hobby painting."),
  p("craft-paper", "Coloured Craft Paper", "art", "Coloured sheets for craft, models and decoration."),
  p("brushes", "Paint Brushes", "art", "Assorted brushes for watercolour and poster colours."),
  p("a4-copier-paper", "A4 Copier Paper", "paper", "Everyday A4 paper for printing and photocopying."),
  p("chart-paper", "Chart Paper", "paper", "Large sheets for school charts and presentations."),
  p("envelopes", "Envelopes", "paper", "Envelopes in common sizes for office and personal use."),
  p("box-file", "Box File", "files", "Sturdy box file to store documents neatly."),
  p("clip-folder", "Clip Folder", "files", "Clear clip folder for assignments and papers."),
  p("ink-cartridge-refill", "Ink Cartridge Refilling", "cartridges", "Enquire about refilling for your inkjet cartridge model."),
  p("toner-refill", "Toner Refilling", "cartridges", "Enquire about toner refilling for your laser printer model."),
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const getProduct = (slug: string) => PRODUCTS.find((x) => x.slug === slug);
export const FEATURED = ["fountain-pen", "hardbound-journal", "geometry-box", "watercolours", "box-file", "ink-cartridge-refill"]
  .map((s) => getProduct(s)!) ;
