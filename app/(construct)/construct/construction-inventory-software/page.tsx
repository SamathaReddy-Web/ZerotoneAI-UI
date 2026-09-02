import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { InventoryProblemSolution } from "@/components/sections/inventory/InventoryProblemSolution";
import { InventoryHeroVisual } from "@/components/sections/inventory/InventoryHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Boxes, Truck, MapPin, QrCode, AlertTriangle, ArrowLeftRight } from "lucide-react";

export const metadata = {
  title: "Construction Inventory Management Software | Zerotone Construct",
  description: "Track materials and equipment across yards and jobsites. Receive POs, transfer stock, set reorder points, and eliminate duplicate material orders.",
};

const FEATURES = [
  {
    title: "Live stock tracking",
    description: "Know exactly what materials and equipment you have on hand, broken down by warehouse, yard, or active jobsite.",
    icon: <Boxes className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "PO delivery receipts",
    description: "When a purchase order arrives on site, the foreman logs the delivery in the app. Stock levels increase instantly, and accounting knows it's OK to pay the bill.",
    icon: <Truck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Location transfers",
    description: "Moving a scissor lift from Job A to Job B? Log a transfer. Stop losing track of expensive owned equipment.",
    icon: <ArrowLeftRight className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "QR code checkout",
    description: "Print QR codes for tools and heavy equipment. Crews scan to check them out or assign them to a specific cost code.",
    icon: <QrCode className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Automated reorder points",
    description: "Set minimum stock thresholds for high-volume consumables. Get alerts to generate a PO before you run out.",
    icon: <AlertTriangle className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Map visualization",
    description: "See the last known GPS location of major equipment based on the last checkout scan or delivery receipt.",
    icon: <MapPin className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "0",
    label: "duplicate orders",
    description: "Stop buying materials at retail prices just because nobody knew you had a pallet sitting in the yard.",
  },
  {
    value: "100%",
    label: "PO visibility",
    description: "Accounting knows exactly what was delivered and when, so they only pay for what actually arrived.",
  },
  {
    value: "Hours",
    label: "saved weekly",
    description: "Foremen stop calling around trying to find out which jobsite has the core drill.",
  },
];

const INVENTORY_FAQS = [
  {
    question: "Does this replace my tool tracking spreadsheet?",
    answer: "Yes. You can upload your existing tool list, print QR codes, and have crews scan them to check them out. You'll always know who had a tool last and what job it's on.",
  },
  {
    question: "How do materials get added to inventory?",
    answer: "The easiest way is receiving against a Purchase Order. When a vendor delivers materials, the field logs a receipt in the app against the PO, and those items are immediately added to the site's stock.",
  },
  {
    question: "Can I track consumables (like fasteners) differently than assets (like generators)?",
    answer: "Yes. Consumables are tracked by quantity (e.g., 50 boxes of screws) and deplete as they are used. Assets are tracked individually by serial number or QR code.",
  },
  {
    question: "How does it stop duplicate orders?",
    answer: "When a PM goes to write a PO for a material, Zerotone flags if that item is already in stock at the yard or an adjacent jobsite, prompting a transfer instead of a new purchase.",
  },
  {
    question: "Does the field need a special scanner device?",
    answer: "No. The Zerotone mobile app uses the camera on any standard iOS or Android smartphone to scan QR codes and barcodes.",
  },
  {
    question: "How does this integrate with accounting?",
    answer: "Delivery receipts logged in the field automatically create 'Item Receipts' in the accounting module. When the vendor bill arrives, accounting matches it to the receipt to ensure they only pay for what was delivered.",
  },
];

export default function InventoryPage() {
  return (
    <>
      <ModuleHero
        badge="INVENTORY & EQUIPMENT"
        title={
          <>
            Know exactly what you have, <span className="text-primary-800">and where it is.</span>
          </>
        }
        description="Stop buying materials you already own. Track stock across jobsites, log PO deliveries from the field, and check out equipment with QR codes."
        visual={<InventoryHeroVisual />}
      />
      <InventoryProblemSolution />
      <ModuleFeaturesGrid
        headline="No more 'I thought we ordered that'."
        description="Live stock tracking, delivery receipts, and automated reorder alerts."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Stop bleeding margin on duplicate orders."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={INVENTORY_FAQS} />
      <ModuleCTA
        headline="Know what's in the yard right now."
        description="20 minute demo. We'll show how to log a delivery and track stock across multiple jobs."
      />
    </>
  );
}
