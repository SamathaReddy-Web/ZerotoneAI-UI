import { Nav, Footer } from "@/components/layout";

// Wraps every /construct/* route with the global Nav + Footer, per the
// spec's "every /construct/* page" scope for global navigation (§2).
// Note: /construct/contact is documented as rendering its own inline
// footer instead of this shared one — that divergence is unresolved
// (flagged, not decided) and will need addressing when that page is built.
export default function ConstructLayout({ children }: LayoutProps<"/construct">) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
