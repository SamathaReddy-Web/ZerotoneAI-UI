# zerotoneai.com/construct — Content Spec

Content-only reference for rebuilding the "/construct" application from scratch: routing, navigation, sub-pages, sections, and copy. No UI/styling notes. Scope: "/construct" and everything under it only — not "/" (see `zerotoneai-home-content.md` for that).

Brand name used throughout: **Zerotone**. Product area name: **Zerotone Construct** (construction operations platform).

---

## 1. Site Map / Routing

All routes below live under the `/construct` base path.

| Route | Purpose |
|---|---|
| `/construct` | Home / marketing landing page (hero, pricing, FAQ, lead form) |
| `/construct/get-started` | Primary conversion page — "book a walkthrough" lead form |
| `/construct/contact` | General contact form |
| **21 product/module pages** (below) | One SEO landing page per platform module |
| `/construct/construction-buildings` | Buildings module |
| `/construct/construction-cost-codes` | Cost Codes module |
| `/construct/construction-estimating-software` | Estimate module |
| `/construct/construction-budget-software` | Budget module |
| `/construct/construction-bills-software` | Bills module |
| `/construct/construction-accounting-software` | Accounting & GL module |
| `/construct/change-order-management` | Change Orders module |
| `/construct/construction-purchasing-software` | Purchasing module |
| `/construct/construction-inventory-software` | Inventory & Materials module |
| `/construct/construction-daily-logs` | Daily Logs module |
| `/construct/construction-delay-tracking` | Delays module |
| `/construct/construction-project-tracker` | Project Tracker module |
| `/construct/construction-reporting-software` | Reports module |
| `/construct/schedule-of-values-software` | SOV & Billing module |
| `/construct/construction-submittals-software` | Submittals module |
| `/construct/rfi-software` | RFI Manager module |
| `/construct/construction-project-settings` | Settings module |
| `/construct/construction-team-management` | Users & Roles module |
| `/construct/construction-vendor-management` | Vendor Master module |
| `/construct/construction-scheduling-software` | Smart Scheduling module |
| `/construct/construction-bidding-software` | Bidding & Precon module |
| `/construct/punchlist-software` | Closeout & Punchlist module |
| **Comparison pages** | |
| `/construct/compare/siteops-vs-procore` | Zerotone vs. Procore |
| `/construct/compare/siteops-vs-buildertrend` | Zerotone vs. Buildertrend |
| `/construct/compare/siteops-vs-coconstruct` | Zerotone vs. CoConstruct |
| **Alternatives pages** | |
| `/construct/alternatives/procore` | "Best Procore alternatives" roundup |
| `/construct/alternatives/buildertrend` | "Best Buildertrend alternatives" roundup |

**Note on the shared product page template:** all 21 module pages (plus the 3 compare pages and 2 alternatives pages, with variations) render through the same component pattern: `ProductHero → Problem section → ProductFeatureGrid → ProductBenefits (stats) → TestimonialCard → RelatedProducts → ProductFAQ → ProductCTA`, wrapped in the global `Nav` and `Footer`. Section 3 below documents that shared shape once; Section 4 gives the differentiated copy per product so it isn't repeated 21 times.

---

## 2. Global Navigation (every `/construct/*` page)

### Navbar

- **Logo** (icon + "Zerotone" wordmark) → `/construct`
- **Modules ▾** — dropdown/mega-menu, 2-column grid, listing all 21 modules in this fixed order (label — target route):
  1. Buildings → `/construct/construction-buildings`
  2. Cost Codes → `/construct/construction-cost-codes`
  3. Estimate → `/construct/construction-estimating-software`
  4. Budget, POs & Bills → `/construct/construction-budget-software`
  5. Bills → `/construct/construction-bills-software`
  6. Accounting & GL → `/construct/construction-accounting-software`
  7. Change Orders → `/construct/change-order-management`
  8. Purchasing → `/construct/construction-purchasing-software`
  9. Inventory & Materials → `/construct/construction-inventory-software`
  10. Daily Logs → `/construct/construction-daily-logs`
  11. Delays → `/construct/construction-delay-tracking`
  12. Project Tracker → `/construct/construction-project-tracker`
  13. Reports → `/construct/construction-reporting-software`
  14. Statement of Values (SOV) → `/construct/schedule-of-values-software`
  15. Submittals → `/construct/construction-submittals-software`
  16. RFI Manager → `/construct/rfi-software`
  17. Settings → `/construct/construction-project-settings`
  18. Users & Roles → `/construct/construction-team-management`
  19. Vendor Master → `/construct/construction-vendor-management`
  20. Smart Scheduling → `/construct/construction-scheduling-software`
  21. Bidding & Precon → `/construct/construction-bidding-software`
  22. Closeout & Punchlist → `/construct/punchlist-software`
- **Pricing** → `/construct#pricing` (anchor on home page)
- **FAQ's** → `/construct#faq` (anchor on home page)
- **Primary CTA:** "Talk to the Team →" → `/construct/get-started`
- **Mobile:** hamburger opens a drawer with the same modules grid, Pricing, FAQ's, and CTA, stacked.

### Footer

- **Brand block:** "Zerotone" logo/link → `/construct`; tagline: "Construction management software for the people who actually build things."; address: "Chennammana Kere, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085"; social icons — WhatsApp (`https://wa.me/917676451991`), LinkedIn, Instagram, Facebook.
- **Column "Platform" (1):** Bid Pipeline, Estimating, Budget Control, Purchase Orders, Schedule Control, RFIs & Submittals, Change Orders (all linking to their respective module pages).
- **Column (2, unlabeled):** SOV & Billing, Accounting & GL, Vendor Management, Daily Logs, Reports, Inventory & Materials.
- **Bottom bar:** "© 2026 Zerotone. All rights reserved." / "Built for builders. Made with care."

> **Inconsistency to note:** `/construct/contact` renders its own inline footer instead of the shared `<Footer />` component, with different columns: **Product** (Features → `/construct#features`, Product tour → `/construct#tour`, Pricing → `/construct#pricing`), **Company** (Contact → `/construct/contact`, FAQ → `/construct#faq`), **Resources** (Common questions → `/construct#faq`). Decide whether to keep this divergence or unify it in the rebuild.

### Recurring contact details (used site-wide)

- Phone: **+91 98486 41736** (`tel:+919848641736`)
- Email: **rktantry.marketing@gmail.com**
- External trial/login CTA target used repeatedly on comparison/alternatives pages: `https://rfi.rktantry.in/login`

---

## 3. Shared Product Page Template (applies to all 21 module pages)

Every module page follows this section order:

1. **Hero** — eyebrow tag, H1, subhead.
2. **Problem section** — eyebrow, H2, 1–2 body paragraphs, a 4-item "pain list", and an illustrative data panel/mockup (a small table or stat block dramatizing the problem).
3. **Feature grid** — section title + subhead, then exactly 6 features, each with an icon, a short title, and a 1–2 sentence description.
4. **Benefits / stats strip** — eyebrow "Real outcomes", section title, exactly 3 stats (a number/metric + label + 1-sentence explanation).
5. **Testimonial** — one quote + attribution (name, role, company, state/region).
6. **Related Products** — a component surfacing other modules (not body copy; cross-links only).
7. **FAQ** — 6 Q&A pairs (RFI page has 8; punchlist page has 7).
8. **CTA** — closing headline + subhead, pointing to `/construct/get-started`.

Each page also carries an `export const metadata` block (title, description, OG title, OG description) used for SEO/social — included per page below.

---

## 4. Module Pages — Content

### 4.1 Buildings — `/construct/construction-buildings`

**Meta:** Title "Building Management Software: Define Your Project Scope" · Description "Centralize building data with a master registry. Store levels, floor areas, attachments, and project structure in one place. Fast setup, easy editing."

**Hero** — Eyebrow "Building Registry" · H1 "One building registry. Zero spreadsheet chaos." · Subhead "Store your complete project structure (buildings, levels, floor areas, and drawings) in one living document. Autofeeds estimate and cost tracking downstream."

**Problem** — Eyebrow "Building data lives in different places" · H2 "Then cost codes and estimates guess." · Body: building data (sq footage, levels, floor area) is scattered across a spreadsheet, an architect email, and a notebook; estimators start from scratch and cost accountants cross-reference old projects; changes require manual updates everywhere, causing lost time and estimates that don't match reality.
Pain list: building data scattered with no single source of truth · setup takes two days instead of 30 minutes (manual entry) · structure changes require manually updating cost codes and estimate lines · estimators guess floor areas from outdated drawings.
Data panel: "Project Structure: Oak Ridge Commons" — Building A (5 levels, 45,000 sf), Building B (3 levels, 28,500 sf), Podium (2 levels, 12,000 sf); footer "3 buildings · 10 levels · 85,500 sf total".

**Features:** Simple & stacked buildings (uniform or multi-unit with variable floor plates, per-level area/ceiling height/drawings) · Real time GFA totals (auto-updating averages/ranges) · Attach plans & drawings (PDFs stored per building) · Bulk import from Excel · Instant bulk operations (multi-edit/delete) · Feeds estimate & cost codes (structure autopopulates downstream).

**Stats:** 15 min avg project setup (Excel import) · 100% data accuracy (single source of truth cascades) · 0 lost/outdated floor plans (drawings stored on the registry).

**Testimonial:** "We set up the entire building structure in 20 minutes with an Excel import. No more estimators guessing at floor areas or asking architects for the third time." — Maria T., Estimator · Martinez General Contracting, AZ

**FAQ:**
- What is a building registry? A master list of buildings with levels/floor areas; the foundation every estimate, budget, and change order line ties back to.
- Can I store PDFs and drawings on buildings? Yes — floor plans, sections, MEP drawings, site plans; everyone sees current versions.
- How does building structure feed into estimates? Define buildings/levels once; Zerotone offers to autogenerate estimate line items per building × level × cost code combination, one click.
- Can I edit buildings after I start the estimate? Yes, existing estimates don't break; new estimates include new structure; buildings can also be added manually anytime.
- Can I import from Excel? Yes — building name, levels, level names, GFA in one step.
- What if floor areas differ per level? Switch to "stacked" mode — each level defined separately with its own area, ceiling height, occupancy, attachments; totals/averages auto-shown.

**CTA:** "Let estimators focus on pricing, not data entry." / "15 minute demo. We'll show how a building registry feeds your entire cost workflow."

---

### 4.2 Cost Codes — `/construct/construction-cost-codes`

**Meta:** Title "Cost Codes for Construction: CSI Based Accounting System" · Description "Organize costs by CSI division. Company wide master library plus job specific overrides. Autogenerate estimates from cost codes and buildings."

**Hero** — Eyebrow "Cost Codes" · H1 "CSI cost codes. One master library. Unlimited project customization." · Subhead "Organize costs by industry standard divisions. Create estimates automatically. Keep accounting consistent across every project."

**Problem** — Eyebrow "Every project invents cost codes from scratch" · H2 "Estimates take forever. Accounting is inconsistent." · Body: every project starts with a blank spreadsheet, inventing codes ad hoc (e.g. "Masonry" vs. "Brick Walls"); estimate setup is manual line-by-line; three months later jobs can't be compared because codes differ. "The fix isn't a better spreadsheet. It's a library."
Pain list: no shared vocabulary across projects · manual line-by-line estimate setup, two days for mid-size project · codes/rates scattered across files/emails/old bids · can't benchmark costs across projects.
Data panel: "CSI Cost Code Structure" — 02 40 00 Earthwork & Fill, 03 10 00 Structural Concrete, 04 20 00 Unit Masonry, 05 12 23 Steel Framing, 07 20 00 Thermal Protection; caption "100+ codes in master library".

**Features:** Prebuilt CSI library (all divisions, company-wide master) · Job specific overrides (adjust rates without touching master) · One click estimate generation (enable codes × building levels → autogenerate lines) · Labor, material, GC split per code · Bulk rate adjustments (e.g. +5% labor company-wide) · Excel import & copy config from a past project.

**Stats:** 2 hrs saved per estimate · 100+ codes in master library · 1 accounting language (comparable/consistent across projects).

**Testimonial:** "We went from manually building estimate line items to autogenerating them in one click. The CSI structure keeps us organized. Every project now speaks the same accounting language." — James D., Estimator/PM · BuildWest Construction, CA

**FAQ:**
- What is a CSI cost code? Construction Specifications Institute division codes (02=site, 03=concrete, 04=masonry, 05=metals...); a two-digit code like 02 40 00 identifies a work category.
- Company wide master + project overrides? Yes — master library shared company-wide; project level overrides labor/material/GC margin without altering the master.
- How does estimate generation work? Select applicable codes, assign to building levels (e.g. concrete = all levels, roofing = roof only), Zerotone autogenerates lines for every enabled code × building combination.
- Can I adjust rates in bulk? Yes — % labor increases, % material markups, project-wide or per code; cascades to line items in real time.
- Can I import cost codes from Excel? Yes — code, name, labor rate, material rate, GC margin; or copy config from a similar past project.
- What if a project needs a custom code? Add it to that job's list only; doesn't touch the master; stays isolated to that project.

**CTA:** "Stop building estimates from scratch." / "20 minute demo. We'll show how cost codes autogenerate your entire estimate."

---

### 4.3 Estimate — `/construct/construction-estimating-software`

**Meta:** Title "Construction Estimating Software: Line Item Pricing & Versioning" · Description "Build estimates line by line with CSI codes. Version control, inline editing, automarkup. Promote to budget in one step."

**Hero** — Eyebrow "Estimate Module" · H1 "Build estimates in minutes, not weeks." · Subhead "Autogenerate from cost codes and buildings. Edit inline. Version and compare. Promote to budget baseline with one click."

**Problem** — Eyebrow "Estimating is manual, slow, and error prone" · H2 "Spreadsheets can't keep up." · Body: estimators type every line in Excel, manually calculate subtotals/margins, email drafts back and forth; scope changes mean copying rows and redoing math; "what if we value engineer" means copying the whole sheet and risking corrupted formulas — two weeks later there are five versions floating and no one knows the current bid.
Pain list: manually typing every line, 40+ hrs per mid-size estimate · Excel formulas break/corrupt, versions mix up · no visibility into labor vs. material vs. markup, just a total · scope changes require reestimating dozens of lines.
Data panel: "Estimate Progress" — Bid Prep (In Progress, 65%), Cost Code Review (Blocked, 30%), Client Approval (Waiting, 0%).

**Features:** Autogenerate from cost codes (select codes+buildings, generate structure) · Inline editing, bulk tools (multi-select markups/delete/duplicate) · Version control & comparison (save, compare side-by-side, revert, audit trail) · Separate labor, material, overhead per line (see gross margin) · Excel import & export (round-trip editable) · Promote to budget baseline (one step, locked).

**Stats:** 5 hrs saved per estimate · 100% cost visibility (itemized by CSI/building/level) · 0 lost estimate versions (full history).

**Testimonial:** "Estimates used to take three weeks. Now we generate the structure in an hour, refine the numbers over two days, and we're done. Version control keeps us from accidentally losing work." — Sarah P., Senior Estimator · Apex Construction Group, TX

**FAQ:**
- How do I start an estimate? Autogenerate from cost codes+buildings, import from Excel, or start blank.
- Can I edit line items after generation? Yes — inline, real time; multi-select for bulk changes; subtotals/totals update instantly.
- What is estimate version control? Save snapshots as you refine, compare any two side by side, revert, full audit trail of who changed what and when.
- Can I separate labor from material? Yes — labor rate, material rate, GC markup per line; gross margin visible per line.
- How do I promote an estimate to a budget? "Promote to Budget Baseline" locks the estimate, converts it into the approved cost baseline, tracks committed costs against it going forward.
- Can I have multiple estimates for one project? Yes — e.g. value-engineering, baseline bid, alternate — keep all, promote the winner when contract signs.

**CTA:** "From bid to baseline in one workflow." / "15 minute demo. We'll show how Zerotone cuts your estimate time in half."

---

### 4.4 Budget — `/construct/construction-budget-software`

**Meta:** Title "Construction Budget Software: Track Every Dollar by Job, Phase, and Trade" · Description "Construction budget software for GCs: CSI cost codes, job to date tracking, QuickBooks sync, and variance alerts. 14 day free trial."

**Hero** — Eyebrow "Budget & Cost Codes" · H1 "Know where your money is before the invoice hits." · Subhead "Preloaded CSI cost code library, job to date tracking, and two way QuickBooks sync. Built for GCs who want to catch overruns in week three: not week twelve."

**Problem** — Eyebrow "The old way" · H2 "Stop discovering overruns at month end." · Body: most small GCs track job costs in QuickBooks, which shows what was invoiced, not what's committed — by the time you see the problem it's already a conversation with the owner.
Pain list: concrete invoice hits two weeks after the pour, too late to correct · mechanical sub 30% over on labor hours, unnoticed · owner cost breakdown request takes a day pulling from three spreadsheets · no committed cost view — POs/subcontracts aren't in the budget picture.
Data panel: "Job Cost Summary: Riverside Office Complex" — 03-000 Concrete ($142,000 / $138,200, 97%); 05-100 Structural Steel ($280,000 / $291,400, 104%); 23-000 HVAC ($195,000 / $162,000, 83%); 26-000 Electrical ($210,000 / $189,000, 90%).

**Features:** Preloaded CSI cost codes (full 50-division MasterFormat library) · Job to date tracking (budget vs. committed vs. actual, real time) · Variance alerts (threshold rules, e.g. flag >10% variance) · Unit cost tracking (per sf/unit/linear ft, builds a reference database) · QuickBooks & Sage sync (two-way, AP posts automatically) · Owner cost reports (AIA G702/G703 or custom, one click).

**Stats:** 3× faster month-end closes · $18k average overrun caught early · 100% of cost codes set up day one (via CSI library or Excel import).

**Testimonial:** "I used to find out about overruns when I got the invoice. Now I know the second a sub's labor hours start creeping. We've recovered almost $40k in the last two projects by catching things early." — Sarah K., Owner · Kingsley Commercial, GA

**FAQ:**
- Does Zerotone include a cost code library or do I build one? Full CSI 50-division MasterFormat preloaded; hide unused divisions or add custom codes; most GCs set up in under an hour.
- Can I import my existing budget from Excel? Yes — paste description/cost code/budgeted amount into the import template; unmatched codes flagged for resolution.
- How does QuickBooks sync work? OAuth connection to QuickBooks Online; AP invoices coded to a Zerotone project flow in automatically; approved invoices can push to QuickBooks for payment. Sage 100 Contractor uses file-based integration.
- Can I track committed costs (POs, subcontracts) before invoices arrive? Yes — issuing a PO/subcontract posts the committed amount to budget instantly (budget vs. committed vs. actual, not just budget vs. billed).
- Does Zerotone support multi-project budget roll-ups? Yes — portfolio dashboard rolls up budget vs. actual across all active projects.
- Can I generate AIA pay app forms (G702/G703)? Yes — auto-generated from budget/billing data; fill stored materials line; export to PDF.

**CTA:** "Know where every dollar is going." / "20 minute demo. We'll import your last project's budget and show you what it looks like live."

---

### 4.5 Bills — `/construct/construction-bills-software`

**Meta:** Title "Construction Billing Software: Track Invoices & Retainage" · Description "Process vendor invoices fast. Track retention, lien waivers, and payment status. OCR invoice import. Real time AP aging."

**Hero** — Eyebrow "Bills Module" · H1 "Process invoices fast. Control retainage. Manage cash." · Subhead "Submit bills tied to POs. Capture lien waivers. Track retention and payment status. Cashflow stays clear."

**Problem** — Eyebrow "Invoice management is manual and scattered" · H2 "PDFs pile up. Retention gets forgotten. Cash forecasting breaks." · Body: invoices arrive via email/WhatsApp/text, get printed and manually typed into a spreadsheet; retention terms vary by vendor (5% vs 10%); lien waivers may or may not be captured; finance can't forecast cash. Result: late payments, cash shortfalls, closeout disputes.
Pain list: invoices scattered across email/fax/messaging apps · manual data entry, ~10 min/invoice · retention tracking is manual spreadsheet math, error-prone · no visibility into billed/approved/retained/due.
Data panel: "Invoice Aging: August" — 0–30 days (12 invoices, $84,500); 30–60 days (8, $52,000); 60–90 days (3, $18,750).

**Features:** Bill against any PO or as a cash bill (track billed/retained/paid) · OCR invoice import (photo/scan → auto-extracted vendor/date/amount/line items) · Retention & lien waiver tracking (per-vendor %, dashboard of retention due) · Payment status workflow (Submitted → Reviewed → Approved → Paid) · Real time AP aging (0–30/30–60/60–90/90+ buckets, drill down) · Feeds budget & cashflow (bills lock in committed costs).

**Stats:** 80% faster invoice processing (OCR) · 0 lost lien waivers · 100% retention visibility.

**Testimonial:** "OCR import cuts invoice entry from 10 minutes to 30 seconds. But the real win is retention visibility: we never lose track of what we owe vendors. Cashflow forecasting is now actually accurate." — Michael R., Finance Manager · Cornerstone Development, CO

**FAQ:**
- What is a bill in construction? An invoice from a vendor/sub documenting work/materials/services, submitted against a PO, tracked against budget; retainage applied per contract terms.
- Can I create bills without a PO? Yes — cash bills, for emergency repairs, small purchases, soft costs.
- How does OCR invoice import work? Photo or PDF upload → Zerotone extracts vendor, invoice #, date, amount, line items → review and submit.
- How is retention handled? Set a % per vendor; e.g. $10,000 bill at 5% auto-calculates $500 retained; dashboard shows retention due by vendor/aging.
- What is a lien waiver? Legal document waiving a vendor's/sub's right to lien the project, typically signed on partial/final payment; Zerotone tracks status and due date.
- How do bills affect my budget? Approved bills lock in committed costs; variance report shows budget vs. actual; cashflow shows billed/due/retained.

**CTA:** "Clear invoices faster. Pay smarter." / "20 minute demo. See how OCR and retention tracking work together."

---

### 4.6 Accounting & GL — `/construct/construction-accounting-software`

**Meta:** Title "Construction Accounting Software: Job Costed GL, AP & AR" · Description "Full double entry general ledger built for construction. AP, AR, bank reconciliation, journal entries, revenue recognition, and 1099 tracking, all tied to the job."

**Hero** — Eyebrow "Accounting Module" · H1 "A general ledger that already knows what job it's for." · Subhead "Every PO, bill, and payment posts straight to the GL, coded by job and cost code. Bank reconciliation, journal entries, and financial reports, without a second system."

**Problem** — Eyebrow "Your GL and your job costs live in two different systems" · H2 "The bookkeeper re-keys everything the field already entered." · Body: field/PM teams track costs in one tool; at month end the bookkeeper manually re-enters POs, bills, payments into QuickBooks, disconnected from job costs/cost codes/WIP. Result: financials always a month behind, mismatched reports, a close that takes two weeks instead of two.
Pain list: job costs and GL entries kept by hand in two systems · bank feeds reconciled separately from job cost data · revenue recognition/WIP rebuilt in spreadsheets each month · trial balance and job cost report never agree.
Data panel: "Auto Posted from Bill #B-1092" — 5100 · Direct Materials (Debit, $18,200); 2000 · Accounts Payable (Credit, $18,200); Job 4521 · Cost Code 03-300 (Job cost, Updated).

**Features:** Full double entry GL (chart of accounts for construction, balanced entries automatically) · Bills and POs post themselves (approved bills/POs flow into AP and job cost ledger, no re-keying) · Bank reconciliation built in (import feed, match, reconcile by account/period) · AR, pay apps & 1099s (owner billing from approved pay apps posts to AR; vendor 1099 eligibility tracked all year) · Period close & controls (lock closed periods; reopen request required to post into a closed month) · Revenue recognition & WIP (percentage-of-completion + WIP schedules from live data).

**Stats:** 2 wks → 2 days faster month-end close · 100% of postings traceable to source · 0 re-keyed transactions.

**Testimonial:** "We used to close the books two weeks after month end, and job cost reports never quite matched the GL. Now they're the same numbers, because they're the same system." — Renee A., Controller · Vantage Builders, TX

**FAQ:**
- Full GL or just job costing exporting to QuickBooks? Full double entry GL — chart of accounts, journal entries, AP, AR, bank rec all live inside Zerotone; can still export to QuickBooks/CPA format.
- How do vendor bills get into the GL? A bill against a PO posts automatically — debit job cost account, credit AP — no manual journal entry.
- Can I reconcile bank accounts here? Yes — import feed/statement, match transactions, reconcile by account and period.
- How does revenue recognition work? Percentage-of-completion calculated from live job cost/billing data; WIP schedule generated automatically.
- Do you handle 1099 tracking? Yes — vendor payments tracked against 1099 eligibility all year, forms ready at year end.
- Can my bookkeeper still control the close? Yes — periods lock once closed; entries into a closed period route through a reopen request.

**CTA:** "One ledger. Every job costed, every entry traceable." / "20 minute demo. We'll show how bills, payments, and pay apps post straight to the GL."

---

### 4.7 Change Orders — `/construct/change-order-management`

**Meta:** Title "Change Order Management Software: Issue, Approve, and Track Without Printing a Thing" · Description "Generate CORs, collect owner esignatures, and issue sub POs digitally. Full change log and budget impact tracking for construction GCs. 14 day free trial."

**Hero** — Eyebrow "Change Orders & POs" · H1 "Issue, approve, and track changes without printing a thing." · Subhead "From the first PCO to the executed CO and back to back sub PO: one digital workflow. No PDFs emailed back and forth. No disputes about what was approved."

**Problem** — Eyebrow "The old way" · H2 "Stop chasing change order approvals through email." · Body: the average commercial project has 30–60 change orders; managing them via email/Word means lost approvals, unauthorized sub work, and money disputes at closeout.
Pain list: owner verbally approves, work happens, cost disputed at closeout · sub CO for unauthorized "just do it" work · CO log spreadsheet doesn't match QuickBooks · T&M work has no daily log, final bill is a guess.
Data panel: "Change Order Log: Riverside Office Complex" — CO 008 Add electrical circuit, server room ($4,200, Executed); CO 009 Regrade parking area drainage ($11,400, Pending); CO 010 Upgrade lobby tile spec ($7,800, Pending); CO 011 Add exterior security lighting ($3,100, Draft); footer "Pending CO exposure — $19,200".

**Features:** Digital COR generation (from any RFI/PCO/field directive, pulls scope/pricing/schedule impact) · Owner esignature workflow (email link, no login required, timestamped executed copy) · Sub CO and PO issuance (down to subs and back-to-back POs, one workflow) · Lump sum + T&M tracking (T&M daily logs tracked against approved CO value) · Change order log (status/value/approval date, export AIA G701) · Budget impact tracking (approved COs auto-update job budget, revised contract value + pending exposure visible).

**Stats:** 5 days faster CO approval (12 → 7 days) · 100% CO capture rate · $0 in unapproved work disputes.

**Testimonial:** "We had a $23,000 dispute at the end of a job because we couldn't prove the owner had approved a scope change. Now every CO has a timestamp and a signature. That conversation doesn't happen anymore." — Marcus D., VP Construction · Delacroix Group, LA

**FAQ:**
- What is a change order in construction? A written amendment modifying scope, price, or schedule; can be owner/architect/contractor initiated; requires written approval before work proceeds.
- PCO vs. COR vs. CO? PCO/COR = contractor's notice of a likely upcoming change and cost; CO = the executed agreement. Zerotone tracks all three stages.
- Does Zerotone support T&M change orders? Yes — field team logs daily labor/material receipts against the T&M CO; Zerotone tracks running cost vs. approved value and alerts near the cap.
- Can the owner esign from their phone? Yes — secure email link, review/comment/esign from any device, no account required.
- Does an approved CO automatically update my budget? Yes — on "executed" status the value posts to budget and revised contract value; cost codes update if scope was assigned during creation.
- Can I generate AIA G701 forms? Yes — G701 (Change Order) and G714 (Construction Change Directive) formats, accepted by most owners/architects.

**CTA:** "Every change, documented and executed." / "20 minute demo. We'll walk through a CO workflow from PCO to executed agreement."

---

### 4.8 Purchasing — `/construct/construction-purchasing-software`

**Meta:** Title "Construction Purchasing Software: PO Management & Vendor Control" · Description "Issue purchase orders. Track commitments. Manage amendments. Control procurement spend. Real time budget integration."

**Hero** — Eyebrow "Purchasing Module" · H1 "Control procurement. Lock in costs. Manage vendors." · Subhead "Issue POs that commit budget. Track amendments. Link invoices. Real time spend visibility from bid to payment."

**Problem** — Eyebrow "POs are created in email and spreadsheets" · H2 "Budget goes out of sync. Vendors never know the truth." · Body: budget is approved, sub quotes come in, PM issues POs in Word docs, finance doesn't know what's issued; amended POs land in email with unclear system status; vendor invoices sometimes exceed the PO. Result: cost overruns, vendor disputes, zero trust in forecasts.
Pain list: POs created in Word/emailed/filed with no central record · budget and actual POs desync within weeks · amendments/COs scatter across email · finance can't answer "committed vs. actually spent."
Data panel: "Committed vs. Budget" — Concrete ($42,000 / $38,500, $3,500 under); Steel ($28,000 / $31,200, $3,200 over); MEP ($65,000 / $64,800, $200 under).

**Features:** Issue POs fast (manual, from budget, or from change orders) · PO = budget commitment (real time committed cost, instant variance) · Amendment tracking (no duplicate POs; original/changes/revised total; full audit trail) · Bills & retention tied to POs (billed vs. committed, outstanding balance) · Retainage & payment terms (per-PO %, dashboard of due dates) · Budget vs. committed analysis (drill down by vendor/cost code/phase).

**Stats:** 100% cost visibility · 50% faster PO creation · 0 budget overruns (system enforces thresholds).

**Testimonial:** "Finance finally has a single source of truth. When a PM issues a PO, it commits budget immediately. We can answer 'what's spent?' with confidence. Budget overruns dropped 60%." — Lisa K., VP Operations · BuildTech Solutions, IL

**FAQ:**
- What is a purchase order (PO)? A legal commitment to a vendor specifying quantity, rate, delivery date, terms; commits budget; invoices process against it and remaining balance is tracked.
- Can I generate a PO from my budget? Yes — select budget lines, "Generate PO" prefills quantities/costs; add vendor, terms, delivery date; submit.
- How do amendments work? Issue an amendment to the existing PO instead of creating a new one; tracks original amount, amendment details, revised total.
- What happens when a vendor submits an invoice? Matched to the PO, remaining balance calculated, retention deducted if applicable, payment status moves through approval workflow.
- Can subcontractors see POs issued to them? Yes, via the subcontractor portal — outstanding POs and invoice status, no email/print/retype.
- How does the approval workflow work? Thresholds by amount/role (e.g. <$5K auto-approve, $5K–$25K PM sign-off, >$25K CFO), Zerotone routes automatically.

**CTA:** "Budget and actual in sync. Every PO, every time." / "20 minute demo. We'll show how POs integrate with budget and vendor management."

---

### 4.9 Inventory & Materials — `/construct/construction-inventory-software`

**Meta:** Title "Construction Inventory Software: Stock, Warehouses & Equipment" · Description "Track material stock, warehouse locations, deliveries, and equipment by job. Order helper flags shortages before they stall a crew."

**Hero** — Eyebrow "Inventory Module" · H1 "Know what's in the warehouse before a crew asks for it." · Subhead "Material masters, live stock by warehouse, delivery receipts, and equipment tracking, all tied to the job and the PO that ordered it."

**Problem** — Eyebrow "Material stock lives in someone's head, or a spreadsheet nobody updates" · H2 "Crew shows up. Material's not there. Nobody knew." · Body: materials ordered against a PO get delivered and then nobody tracks what's on hand; foremen assume stock exists when it doesn't; duplicate orders happen because deliveries weren't logged; equipment moves between jobs untracked. Result: emergency retail-price orders, stalled crews, no real warehouse visibility.
Pain list: deliveries logged on paper or not at all · no live stock view by warehouse/job · duplicate orders from invisible on-hand stock · equipment moves between jobs with no record.
Data panel: "Current Stock — Yard 2" — 2" PVC Conduit (340 ft, Below reorder point); 5/8" Rebar (2,100 lb, On hand); Type S Mortar (12 bags, Below reorder point).

**Features:** Material master library (one catalog, unit of measure, standard cost, preferred vendor) · Live stock by warehouse (updated as deliveries/consumption logged) · Delivery receipts tied to POs (partial/shortage/damage flagged immediately) · Equipment register (owned + rented, location/assignment/expected return) · Order helper (flags materials near reorder point based on live stock + material plan) · Stock takes & variance reports (counted vs. system, price variance, delivery performance, consumption).

**Stats:** 0 duplicate emergency orders · 100% of deliveries matched to POs · 1 system for every yard, warehouse, and job.

**Testimonial:** "We stopped double ordering material because nobody could see what was already in the yard. Now the foreman checks stock on his phone before he calls it in." — Marcus D., Project Executive · Ferrolite Construction, GA

**FAQ:**
- Does inventory tracking replace my PO process? No — it connects to it; Purchasing handles ordering, Inventory tracks what arrives and where it sits, tied back to the same PO.
- Can I track more than one warehouse or yard? Yes — as many locations as needed, stock shown per-location and rolled up company-wide.
- How does the order helper decide what to reorder? Compares live stock against the reorder point per material and the material plan for upcoming work.
- What happens when a delivery doesn't match the PO? Log what actually arrived; shortages/overages/damage flagged against the PO immediately.
- Can I track rented equipment, not just owned? Yes — equipment register covers both with job assignment, location, expected return date.
- How often should we run a stock take? As often as material volume warrants; reconciles counted vs. system quantity, surfaces shrinkage/miscounts early.

**CTA:** "Know what's on hand before the crew asks." / "20 minute demo. We'll show how deliveries, stock, and equipment tie back to every job."

---

### 4.10 Daily Logs — `/construct/construction-daily-logs`

**Meta:** Title "Daily Logs for Construction: Official Site Record & Weather Tracking" · Description "Record daily conditions, crew, work progress, and weather. Two views: table and diary. Link to delays. Official project record."

**Hero** — Eyebrow "Daily Logs" · H1 "The official site record. Supers fill in. You own the history." · Subhead "Capture weather, crew, and progress daily. Link delays. Store photos. Export for owner reporting and delay claims."

**Problem** — Eyebrow "Daily logs exist in notebooks and spreadsheets" · H2 "When you need history, it's scattered and lost." · Body: supers keep a paper notebook (weather, crew, progress); months later, filing a delay claim requires that notebook, which is handwritten, illegible, undated, unproven.
Pain list: notebooks/spreadsheets, no centralized record · delay claims need historical proof but logs are handwritten/scattered · no weather data — just "rainy" with no temp/wind · crew info is rough estimates, not certified counts/trades.
Data panel: "Sample Daily Log" — May 8, 2026: Weather: Cloudy, 78°F, 0.2" rain, 8 mph wind; Crew: 12 carpenter hrs, 4 laborer hrs; Work: Foundation, 40% complete.

**Features:** Structured daily entry form (weather, crew by trade/hours, work progress by area/pct) · Photo attachments (timestamp/location auto-captured) · Two views: table & diary (sortable data table or narrative diary cards) · Link delays atomically (capture delay records while logging the day) · Work progress tracking (roll up into schedule tracking) · Excel export & print (owner reports, legal review, super's field file).

**Stats:** 5 min per daily log · 100% legal defensibility (timestamped/signed entries) · 0 lost or missing logs (cloud stored, searchable).

**Testimonial:** "When the dispute came up, we had timestamped photos and daily logs proving exactly when weather hit and how long we were delayed. Settled in our favor because the record was airtight." — Carlos M., Project Manager · Sunrise Builders, FL

**FAQ:**
- What is a daily log? The official record of onsite work/weather/crew/progress for a single day, signed by the super, part of the project record; used for scheduling verification, delay documentation, legal claims.
- What data does a daily log capture? Weather (cloud, rain, wind, temp), crew by trade (count, hours, work), work progress (area, % complete), photos, optional notes.
- Can I log delays in the daily log? Yes — captured atomically with the day's log.
- Table vs. diary view? Table = columns for analysis/reporting; diary = narrative cards suited to field entry on a phone.
- Can I print daily logs? Yes — individual days or a date range, to PDF, including photos/notes.
- How are daily logs used in delay claims? Weather/crew/issue recorded with date, duration, impact; timestamps and photos create defensible evidence.

**CTA:** "Proof of what happened, every single day." / "15 minute demo. See how supers log daily and claims get backed."

---

### 4.11 Delays — `/construct/construction-delay-tracking`

**Meta:** Title "Delay Tracking for Construction: Impact Analysis & Claims" · Description "Track schedule delays with responsible party, category, and duration. Autocalculate cost impact. Critical path analysis. Claims ready."

**Hero** — Eyebrow "Delays Module" · H1 "Track every delay. Calculate every impact. Build airtight claims." · Subhead "Document delays with responsible party and cost impact. Link to daily logs. Compare schedules. Export for delay claims analysis."

**Problem** — Eyebrow "Delays are recorded loosely, if at all" · H2 "When it's time to claim, you've got nothing." · Body: rain hits, work stops, it's noted casually; a sub is late on delivery, schedule slips two weeks, nobody documents impact/cost/responsibility; at project end, filing a claim means scattered emails and vague memory — no defensible record.
Pain list: delays recorded casually or not at all, no central register · no link between delay and responsible party, weak proof · cost impact guessed not calculated, claims undervalued · manual schedule comparison, hard to prove cumulative impact.
Data panel: "Delay Impact Summary" — Weather (8d, $9,600); Material (3d, $3,600); Permit (2d, $2,400); Total Impact: 13 days, $15,600.

**Features:** Delay register with metrics (central log — responsible party, category, duration, cost impact, summary dashboard) · Autocalculated cost impact (duration × daily GC burden rate) · Critical path flag (impact vs. float/idle time) · Delay categories (weather, manpower, material, equipment, design, owner, subcontractor, site conditions, permit, other) · Linked to daily logs (photos, weather data, crew info as proof) · Schedule impact analysis (baseline vs. updated, total delay vs. recoverable float).

**Stats:** 100% of delays documented · $0 lost delay claims · 5 min per delay record.

**Testimonial:** "We filed a delay claim with cost impact backed by daily logs and Zerotone calculations. Owner couldn't dispute the numbers. Settled for full amount: $47K we would've walked away from before." — David H., VP Construction · Hampton General Contracting, GA

**FAQ:**
- What is a schedule delay? An event that stops/slows work — weather, material shortage, design change, permitting — recorded with responsible party, duration, cost.
- How is delay cost impact calculated? Duration (days/hrs) × daily GC burden rate (overhead + margin); e.g. 3 days × $1,200/day = $3,600.
- What is critical path? Longest sequence from start to finish; delays on it extend the overall schedule; float-activity delays don't (Zerotone flags CP impact).
- Can I categorize delays? Yes — weather, manpower, material, equipment, design, owner, subcontractor, site, permit, other; helps identify patterns/responsible parties.
- How do I link daily logs to delays? Reference the date and daily log(s) documenting the delay when creating the delay record.
- How do I prepare a schedule delay claim? Gather register entries, export with photos and impact calculations, compare baseline vs. updated schedule; Zerotone does the math, you present the evidence.

**CTA:** "Delays documented. Impact calculated. Claims won." / "20 minute demo. See how daily logs + delay tracking = winning evidence."

---

### 4.12 Project Tracker — `/construct/construction-project-tracker`

**Meta:** Title "Project Tracker for Construction: Task & Activity Management" · Description "Organize work by phase. Track activity status and dependencies. List and Gantt views. Automated overdue alerts."

**Hero** — Eyebrow "Project Tracker" · H1 "Track every activity. See the whole timeline. Keep teams aligned." · Subhead "Phase based task management with list and Gantt views. Automatic overdue alerts. Dependency tracking for the critical path."

**Problem** — Eyebrow "Project coordination lives in email and text" · H2 "No one knows what's actually happening." · Body: PM emails "Permit due Friday," super gets a text about concrete, finance doesn't know what's coming, owner gets vague timeline answers; falling behind is always a surprise.
Pain list: activities tracked in email/spreadsheets/memory, no central calendar · no visibility into what's blocking what, dependencies implicit · overdue activities slip silently, no automated alerts · Gantt charts are static documents, not live tools.
Data panel: "Project Status: May 2026" — Bidding (100%, Complete); Preconstruction (75%, In Progress); Construction (15%, In Progress); Closeout (0%, Not Started).

**Features:** Phase based organization (Bidding, Preconstruction, Construction, Closeout, each with own timeline/team) · Status tracking (Not Started/In Progress/Completed/Overdue, auto-set, rollup to phase health) · Activity dependencies ("finish X before Y," shows critical path/impact) · List & Gantt views (switch instantly) · Bulk mark complete (multi-select complete/reassign/update deadlines) · Team notifications (assignment/deadline alerts, WhatsApp integration for field).

**Stats:** 100% activity visibility · 50% faster status updates · 0 missed deadlines.

**Testimonial:** "Everyone sees the same project timeline. Supes know what's expected. PM isn't chasing status in email. Overdue activities alert automatically. It's not just a tool, it's our actual project plan." — Thomas L., Construction Manager · Stellar Builders, NV

**FAQ:**
- What is an activity? A unit of work (e.g. "Secure permit," "Schedule concrete pour," "Framing inspection") with start/end dates, owner, status, notes.
- How do phases work? Group activities by stage — Bidding, Preconstruction, Construction, Closeout — sharing timeline/team.
- What are dependencies? A relationship where Activity B can't start until Activity A completes; system shows the critical path.
- How do status badges work? Not Started/In Progress/Completed/Overdue (auto-set on deadline pass); rolls up to phase level.
- Can I view the project as a Gantt chart? Yes — bars on a timeline with dependency arrows, drag to reschedule, zoom for detail.
- What happens when an activity is overdue? Flagged red, owner notified (email/Slack/SMS), PM gets escalation alert, days-overdue shown.

**CTA:** "One project plan. Everyone on the same page." / "15 minute demo. See phases, activities, and status all at once."

---

### 4.13 Reports — `/construct/construction-reporting-software`

**Meta:** Title "Construction Reporting Software: Financial & Project Analytics" · Description "Prebuilt reports: AP aging, cashflow, earned value, variance analysis. Real time dashboards. Drill down analytics. Export to Excel or PDF."

**Hero** — Eyebrow "Reports Module" · H1 "Project health in real time. Data that actually drives decisions." · Subhead "Prebuilt financial and operational reports. Drill down analytics. Real time dashboards. Export for stakeholders."

**Problem** — Eyebrow "Reports are manual and stale" · H2 "By the time you understand what happened, it's too late to fix it." · Body: finance pulls data from three spreadsheets and an email to assemble a report that's three days old by the time the owner reads it; no drill-down, a different view takes a week; cashflow projections are guesses.
Pain list: reports manually assembled from multiple sources, slow/error-prone · stale data, days old before anyone sees it · no drill-down, only totals · cashflow forecasts are guesses without real bill/PO data.
Data panel: "Budget Status" — Budget $450,000; Committed (POs) $320,000; Spent (Bills) $185,000; Remaining $130,000.

**Features:** Prebuilt financial reports (AP aging, cashflow forecast, variance, cost to complete, earned value/S-curves, trend analysis) · Project operations reports (CO aging, PO budget tracking, vendor performance, delay summary, daily log analytics, schedule variance) · Drill down analytics (dashboard → cost code/vendor/trade/phase, two clicks) · Real time dashboards (update as POs/bills/changes are entered) · Export & share (Excel/PDF/print, scheduled automated emails) · Multi project views (portfolio rollup, benchmarking).

**Stats:** 0 hrs building reports from scratch · 100% real time data · 5 min to understand project health.

**Testimonial:** "Finance stopped spending a day a week building reports. Now we have real time dashboards. When the owner asks 'what's our cashflow?', we show her. No guessing, no waiting." — Angela T., Finance Director · Premier Contracting, MA

**FAQ:**
- What reports does Zerotone provide? Financial: AP aging, bills line progress, cashflow, cost to complete, earned value (S-curves), variance, GC dashboard. Operations: CO aging, PO budget, vendor performance, delay summary, daily log analytics, schedule variance.
- Can I drill down from high level reports? Yes — budget variance by phase → by cost code → individual line items and POs.
- How often are reports updated? Real time as POs/bills/COs/daily logs are entered — no overnight batch processes.
- Can I export reports? Yes — Excel, PDF, print.
- Can I share reports with owners or lenders? Yes — scheduled automated email reports (weekly/monthly), branded read-only versions.
- What is earned value (S curve)? Cumulative work progress and cost — baseline (scheduled) vs. actual (spent) — shows ahead/behind schedule and under/over budget.

**CTA:** "Real time data. Real decisions. Real results." / "20 minute demo. See how Zerotone turns data into insights."

---

### 4.14 Schedule of Values (SOV) & Billing — `/construct/schedule-of-values-software`

**Meta:** Title "Schedule of Values Software: Project Billing & Pay Apps" · Description "Owner facing SOV. Pay applications with earned value tracking. Retainage and lien waiver management. Billing integration."

**Hero** — Eyebrow "Schedule of Values" · H1 "Transparent billing. Clear pay applications. Predictable cash." · Subhead "Create owner facing SOVs. Track earned value. Generate G702 pay apps monthly. Integrate with change orders and retainage."

**Problem** — Eyebrow "SOV and pay apps are manual spreadsheets" · H2 "Billing gets delayed. Disputes happen. Cash is unpredictable." · Body: SOV lives in Excel and email drafts, revised back and forth; COs require manual SOV updates; pay apps assembled monthly from multiple sources with error-prone retainage math; owner delays approval because billing is confusing.
Pain list: SOV lives in email drafts, version control is chaos · pay apps manually assembled, math errors common · COs don't auto-update SOV, manual updates miss details · unclear billing delays owner payment, cash forecasting breaks.
Data panel: "SOV Breakdown: 3 Month Project" — Foundation & Site ($85,000, 35%); Structural Frame ($110,000, 45%); MEP Systems ($58,000, 20%); "Total Contract: $253,000".

**Features:** Owner facing SOV (allocates contract value across work items, version control, live earned value) · Pay applications (G702/G703, monthly, tied to SOV lines, AIA standard format) · Percent complete tracking (bulk entry per period, auto earned value, or import from project tracker) · CO integration (COs auto-add to SOV, update contract value, pay apps include CO scope) · Retainage & lien waivers (per pay app %, status tracked, outstanding dashboard) · Cashflow forecasting (SOV feeds cashflow, billings vs. actual costs, GC margin by period).

**Stats:** 100% contract value transparent · 5 min per pay application · 0 billing disputes.

**Testimonial:** "Owner approval time went from 2 weeks to 2 days. When billing is transparent and earned value is correct, owners pay without drama. Our cashflow is now predictable." — Patricia M., Director of Finance · Mitchell Builders, CA

**FAQ:**
- What is a Schedule of Values (SOV)? A contract-mandated document breaking the contract price into line items (e.g. Foundation $50K, Framing $75K, MEP $60K); the basis for monthly invoicing.
- What is a pay application? Monthly invoice (G702) to the owner — work completed as % of each SOV line, earned value, retainage held, amount due.
- How do I set percent complete? Estimate % per SOV line per period; Zerotone multiplies by contract value for earned value.
- How do change orders affect the SOV? Added as a new line or to existing lines; contract value increases; subsequent pay apps include CO scope/price.
- How is retainage handled? Set a % per pay app (e.g. 10%); Zerotone calculates retainage due; pay app shows gross earned value, retainage held, net due.
- Can I use AIA standard formats? Yes — G702/G703 or a custom template, exportable to PDF.

**CTA:** "Billing that owners trust. Payment that happens on time." / "15 minute demo. See how SOV + pay apps work end to end."

---

### 4.15 Submittals — `/construct/construction-submittals-software`

**Meta:** Title "Submittal Management Software: Vendor Shop Drawing Review" · Description "Track vendor submittals from draft to approval. Compliance tracking, spec section organization, lead time management."

**Hero** — Eyebrow "Submittals" · H1 "Vendor approvals, on schedule. No delays from missing specs." · Subhead "Organize submittals by CSI section. Track compliance. Manage lead times. Keep vendors and schedule in sync."

**Problem** — Eyebrow "Shop drawing approvals live in email" · H2 "Specs get lost. Lead times get missed. Schedule slips." · Body: a vendor's submittal gets printed, hand-marked, revised over multiple email threads; approval is buried three threads deep so the item never ships; lead time isn't flagged, so a 12-week item surprises the schedule.
Pain list: submittals scattered across email, hard to track status · no organized specs/compliance tracking, approval is informal · lead times not captured, schedule surprised by long delivery windows · vendors chasing for approval, confused on status.
Data panel: "Submittal Status" — 05 12 00: Steel (4 subs, Approved, 2d ago); 07 20 00: Insulation (3 subs, In Review, 5d pending); 08 10 00: Doors (2 subs, Submitted, 1d ago).

**Features:** Spec section organization (by CSI division, e.g. 05 12: Steel Framing) · Compliance tracking (spec compliance, deviations, QA certs, warranty info, country of origin, audit trail) · Manufacturer & product data (specs, warranty docs, certs, technical data stored per submittal) · Lead time & schedule impact (dashboard flags critical submittals blocking schedule) · Approval workflow & comments (Draft → Submitted → In Review → Approved/Rejected/Revise, markup attached) · Vendor communication (portal submission, notified of approvals/revision requests).

**Stats:** 100% of submittals tracked · 5 days average review cycle · 0 late deliveries from missed lead times.

**Testimonial:** "Submittals that used to live in email are now organized, tracked, and approved. Vendors know the status. We catch lead time issues early. Schedule doesn't slip anymore." — Robert G., Preconstruction Manager · BuildSmart, TX

**FAQ:**
- What is a submittal? A vendor's submission of product data, shop drawings, or certifications (e.g. steel beam details, window schedule, mechanical specs) for GC/architect review and approval before shipping/installation.
- How do I organize submittals? By CSI spec section (all steel in one section, all windows in another).
- What is spec compliance? Whether the submittal meets contract specs (size, material, finish, performance) — marked compliant, non-compliant, or deviation-approval-required.
- Can vendors submit through Zerotone? Yes — portal access to upload/attach/submit; both parties get status notifications.
- How do I capture lead time? Enter lead time on the submittal (e.g. "12 weeks"); dashboard flags critical long-lead items risking the schedule.
- What happens after approval? Vendor notified, item cleared to fabricate/ship, lead time tracked for on-time delivery.

**CTA:** "Approvals that keep the schedule on track." / "20 minute demo. See vendor submissions and approval workflow."

---

### 4.16 RFI Manager — `/construct/rfi-software`

**Meta:** Title "Construction RFI Software: Track Every Request in One Place" · Description "Track every construction RFI with auto assignment by trade, 7 day response timer, and full audit trail. Built for GCs and subs. 14 day free trial."

**Note:** this page has extra sections beyond the standard template — a 3-step "Product Walkthrough" and a 4-column comparison table.

**Hero** — Eyebrow "RFI Manager" · H1 "The construction RFI software that doesn't live in your inbox." · Subhead "Submit from the field, respond from the office, and close every Request for Information with a full audit trail. Built for GCs and subs who lose two days a week to email threads."

**Problem** — Eyebrow "Spreadsheets and email aren't an RFI system" · H2 "They're a liability." · Body: the average GC runs 40–80 open RFIs on an active job, tracked in a spreadsheet, chased by email; PMs lose 5+ hrs/week to RFI management; failures are a "slow bleed" — wrong-person routing, SLA drift, closeout disputes with no paper trail.
Pain list: RFIs sent to the wrong contact, discovered weeks later · no response timer, questions drift 20+ days unflagged · owner RFI log request takes half a day to assemble from email · closeout dispute with no proof of who approved a substitution.
Data panel: "Open RFIs: Riverside Office Complex" — RFI 014 Curtain wall anchor detail (11 days, overdue); RFI 017 MEP coordination above grid 5 (6 days, overdue); RFI 019 Slab edge reinforcement (3 days, open); RFI 021 Storefront glazing spec (1 day, open); RFI 022 Fire rating at stair shaft (Today, ok). Footer "2 overdue · 2 open · 1 new today".

**Features:** Auto assignment by trade (routes by CSI division) · Built in 7 day SLA tracker (links internally to the [Smart Scheduling page](#421-smart-scheduling--constructconstruction-scheduling-software) via "project schedule" anchor text) · Field to office in 30 seconds (phone submission with photos/markups) · Searchable RFI log (filter by trade/phase/status/assignee, export PDF) · Drawing markup attached (photo + circle + attach) · Full audit trail (links internally to the [Punchlist page](#423-closeout--punchlist--constructpunchlist-software) via "rolls into your project closeout binder" anchor text).

**Product Walkthrough** (3 steps, titled "See how it works"):
- **Step 01** — "Your super doesn't need a laptop to flag a problem." Mobile submission: photo + drawing markup, voice-to-text, works offline and syncs on reconnect. Mockup: "New RFI" form — Subject: Curtain wall anchor detail at col. B7; Assigned to: Architect of Record; CSI Division: 08 40 00; Due: 7 days (Jan 23).
- **Step 02** — "Every RFI lands in the right inbox automatically." Auto-routes by CSI division per rules set once per project; 7-day clock starts immediately; aging RFIs surface on dashboard; notifications via email/Slack/SMS.
- **Step 03** — "Every answer, captured. Every dispute, settled." Every submission/response/attachment/status-change logged with timestamp+identity; one-click PDF/Excel log export; auto-populates the closeout binder. Mockup audit trail example: RFI 014 closed Jan 23, 9 days total, with a 5-entry timestamped history (submit → auto-assign → opened → responded → closed).

**Benefits:** 60% faster response time (vs. email) · 2 days saved per week (field super hours redirected) · 0 RFIs lost in transit.

**Testimonial:** "We used to lose two days a week chasing RFIs through email. Now my super submits one from the truck and I have it on my desk in 30 seconds. The audit trail alone has saved us twice in disputes." — Ricardo M., Owner · Mendoza Construction, TX

**Comparison table** — H2 "vs. spreadsheets, email, and Procore." Columns: Feature | Spreadsheets + email | Procore | Zerotone.
- Setup time: 0 | 4–8 weeks | 24–48 hrs
- Mobile first submission: ✗ | ✓ | ✓
- Auto assignment by trade: ✗ | ✓ | ✓
- Response SLA timer: ✗ | ✓ | ✓
- Full audit trail: ✗ | ✓ | ✓
- Free sub portal access: N/A | ✗ | ✓
- Built for small/mid GCs: N/A | ✗ | ✓
- Starting price: $0 | $$$ | $49/mo
Below table: links to `/pricing` ("pricing details") and `https://rfi.rktantry.in/login` ("start a free trial").

**FAQ (8):**
- What is an RFI in construction? A formal question from contractor/sub/owner asking for clarification on drawings/specs/scope; addressed by architect/engineer of record; becomes part of the permanent record; a leading cause of delays/disputes when unmanaged.
- What's a typical RFI response time? Industry standard is 7 calendar days (matching AIA contract language); email workflows average 12–18 days; Zerotone starts a 7-day timer automatically and surfaces aging items.
- How is RFI software different from a shared spreadsheet? A spreadsheet doesn't route, enforce timelines, attach markups, or log changes — Zerotone auto-assigns, starts the clock, stores attachments, generates a dispute-ready audit trail.
- Can subcontractors submit RFIs? Yes — free portal access, no seat cost; you control what they see.
- Do you integrate with Procore, Autodesk, or PlanGrid? Not yet — those integrations are roadmap; current focus is small/mid GCs ($2M–$50M jobs) without those platforms.
- Does it work offline on the jobsite? Yes — iOS/Android apps cache active projects; drafts sync on reconnect.
- How do you handle confidential RFIs? Mark confidential, restrict visibility to specific team members; doesn't appear in standard project view.
- Can I export my RFI log for closeout? One click, PDF or Excel; auto-populates the RFI section of the closeout binder.

**CTA:** "Stop running RFIs through email." / "20 minute demo. No slide deck. We'll show RFI Manager running on a real project."

---

### 4.17 Settings — `/construct/construction-project-settings`

**Meta:** Title "Construction Project Settings: Workflow & Approval Configuration" · Description "Configure PO approval thresholds, payment terms, retention defaults, and workflow rules per module."

**Hero** — Eyebrow "Settings" · H1 "Control your process. Enforce your rules. Spend smartly." · Subhead "Set approval thresholds, payment terms, and workflow rules once. All team members inherit settings. Spending stays in check."

**Problem** — Eyebrow "Project rules live in the PM's head" · H2 "Each project does things differently. Mistakes happen." · Body: a new team member doesn't know payment terms/approval levels/workflow rules — issues a $50K PO without approval, or changes a bill status without permission; retention terms vary by invoice; no enforcement means mistakes cascade into disputes.
Pain list: project rules informal, verbal or unstated · no spending controls, POs issued without proper approval · payment terms/retention negotiated per invoice, inconsistent · status workflows have no guardrails, steps can be skipped/reversed.
Data panel: "Approval Matrix" — Under $5K → Autoapprove; $5K–$25K → PM; $25K–$100K → CFO; Over $100K → Owner.

**Features:** PO approval thresholds (by dollar amount and role) · Payment terms & retention (default Net 30/60, retention %, applied to all new POs/bills) · Workflow status transitions (customize allowed transitions for bills/COs/delays/activities, per role) · GC burden rate (daily cost burden used for delay cost calcs and earned value) · Role based access control (view/edit/approve/delete per role per module; lock budget lines post-approval) · Notification defaults (who's notified when, via email/Slack/SMS, escalation rules).

**Stats:** 100% spending control · 0 hrs onboarding time (configure once, inherited by all) · 1 source of truth.

**Testimonial:** "We set project rules once at kickoff. Approval thresholds, payment terms, retention: everyone follows the same process. No surprises, no unauthorized spending." — Jennifer L., Chief Operating Officer · Heritage Builders Group, OH

**FAQ:**
- What can I configure in project settings? PO approval thresholds by role, payment terms, retention %, GC burden rate, workflow rules for bills/COs/delays/activities, role-based permissions, notification preferences.
- How do approval thresholds work? E.g. <$5K auto-approves, $5K–$25K needs PM, $25K+ needs CFO; a PM attempting to approve a $30K PO is rejected and it escalates.
- Can I lock budget after approval? Yes — read-only once approved; changes require unlock and reapproval.
- What is GC burden rate? Daily cost burden (overhead + margin) used to calculate delay cost impact (e.g. 3-day delay × $1,200 = $3,600).
- Can I customize workflow statuses? Yes — per module, define allowed transitions (e.g. bill: Draft → Submitted → Approved → Paid, no step-skipping).
- Can I set different rules for different users? Yes, by role (Admin full access, PM read/edit/approve, Super view only, etc.).

**CTA:** "One set of rules. Total control. Zero confusion." / "15 minute demo. See how to configure project workflows."

---

### 4.18 Users & Roles / Team Management — `/construct/construction-team-management`

**Meta:** Title "Team Management Software: User Roles & Permissions" · Description "Manage user accounts, assign roles, control permissions per module. Set approval authority by dollar threshold. Activity logging."

**Hero** — Eyebrow "Team Management" · H1 "Control who sees what. Enforce approval limits. Audit everything." · Subhead "Role based permissions. Dollar thresholds for approvals. Full activity log. Secure access from day one."

**Problem** — Eyebrow "Access control is manual and broken" · H2 "Who can do what? No one knows. Security is a guess." · Body: a new hire gets added to a spreadsheet with either full or no access; a sub gets full budget edit access; finance somehow approved a $100K payment without payables visibility; months later there's no audit trail to prove who touched what.
Pain list: no role based access, everyone has same/wrong access · no approval authority limits, anyone can approve any PO · no audit trail, impossible to know who changed what · compliance nightmare, no access logs for auditors.
Data panel: "User Roles & Permissions" — Admin (All modules, Unlimited); PM (Most, $50K max); Estimator (Estimate, CC, None); Super (Daily logs, RFI, None).

**Features:** User & role management (add users, assign roles, deactivate without deleting history) · Module level permissions (granular view/edit/approve per module) · Approval authority thresholds (dollar limits per role, system-enforced) · Activity log & audit trail (who/when/what changed, login history) · SSO & API access (Okta, Azure AD; API keys, revocable) · Mobile & field access (same permissions on phone/tablet, offline capable).

**Stats:** 100% secure access control · 5 min to onboard a new user · 0 compliance violations.

**Testimonial:** "We set roles once. PM can approve up to their limit. Finance sees only what they need. Auditors ask for a report, we export the activity log. Compliance became easy." — Michael T., IT Director · Northeast Builders Collective, MA

**FAQ:**
- What roles does Zerotone provide? Admin, PM, Estimator, Accounting, Superintendent, Architect/Designer, View Only — customizable.
- How do module level permissions work? E.g. an Estimator edits estimates/cost codes but can't view budgets/POs; a Superintendent logs daily logs but can't edit estimates.
- What is approval authority? A dollar limit tied to a role (e.g. PM up to $50K, CFO above); over-limit attempts are rejected and escalated.
- Can I track user activity? Yes — activity log of who/what/when, login history, exportable for audits.
- Does Zerotone support SSO? Yes — Okta, Azure AD, Google Workspace.
- Can field supers work offline? Yes — mobile app caches data, syncs on reconnect.

**CTA:** "Secure access. Clear roles. Audit proof." / "20 minute demo. See role based permissions and activity logs."

---

### 4.19 Vendor Master / Vendor Management — `/construct/construction-vendor-management`

**Meta:** Title "Vendor Management Software: Subcontractor Directory & Performance" · Description "Centralized vendor registry with compliance docs, payment setup, and portal access. Lien waiver tracking. Performance snapshot."

**Hero** — Eyebrow "Vendor Management" · H1 "One vendor registry. Compliance docs. Performance tracking." · Subhead "Centralize vendor info, compliance docs, and payment setup. Give subs portal access. Track performance and lien waiver status."

**Problem** — Eyebrow "Vendor data is scattered everywhere" · H2 "Insurance expires. Lien waivers go missing. Payment info is wrong." · Body: an insurance cert is buried in a 3-month-old email; payment details live in a maybe-updated spreadsheet; a sub claims they sent a lien waiver that can't be found; year-end 1099 prep runs into messy vendor records.
Pain list: vendor info scattered across email/spreadsheets/old files · compliance docs (insurance, licenses) untracked, expirations missed · lien waiver status a mystery · payment setup inconsistent, some vendors paid late.
Data panel: "Active Vendors: May 2026" — Steel Fabricators Inc (✓ Valid, Pending); Concrete Ready Mix (⚠️ Expires 6/15, Received); Elite MEP Contractors (✓ Valid, Pending).

**Features:** Vendor registry & directory (master list, contact/license/insurance, searchable, required for POs) · Compliance documentation (insurance, licenses, 1099s, safety certs, expiration alerts) · Payment setup & 1099 tracking (ACH details, payment terms, tax ID, 1099 status) · Vendor portal access (view POs, submit invoices, attach lien waivers) · Performance snapshot (contract value, outstanding invoices, waiver status, on-time payment rate, quality rating) · Linked to every transaction (PO/bill/CO/submittal reference the vendor; edit once, updates everywhere).

**Stats:** 100% vendor compliance visibility · 5 min vendor data entry · 0 missing lien waivers.

**Testimonial:** "Insurance expiration dates are tracked. Lien waivers are collected through the portal. Vendor data is current. No more hunting for documents or surprised by expired certs." — Karen B., VP Procurement · Quality Builders, AZ

**FAQ:**
- What is a vendor registry? Master list of vendors/subs/suppliers with contact info, licenses, insurance, payment details, performance history; required before issuing a PO.
- What compliance docs do I need to track? Insurance (GL, workers comp), licenses, 1099 forms, safety certs (OSHA), bonding — stored with expiration alerts.
- Can vendors access their POs and invoices? Yes — portal access to POs, invoice submission, lien waivers, payment status.
- How is payment setup handled? ACH bank details, payment terms, tax ID stored for automated payments and 1099 reporting.
- What is a performance snapshot? Metrics — contract value, work history, invoice counts, waiver compliance, on-time payment rate, quality ratings.
- How is lien waiver status tracked? Submitted through the portal with final invoice; finance sees outstanding waivers and can hold final payment until received.

**CTA:** "One vendor registry. Compliance locked in. Transparency throughout." / "15 minute demo. See the vendor directory and portal in action."

---

### 4.20 Smart Scheduling — `/construct/construction-scheduling-software`

**Meta:** Title "Construction Scheduling Software: Gantt Charts That Update When Reality Does" · Description "Drag and drop Gantt scheduling for construction GCs: look ahead reports, baseline tracking, CPM critical path. No P6 license required. 14 day free trial."

**Hero** — Eyebrow "Smart Scheduling" · H1 "Gantt charts that update when reality does." · Subhead "Drag and drop scheduling with predecessor logic, resource loading, and 3 week look aheads. Built for GCs who need a real schedule: not a $40k P6 license."

**Problem** — Eyebrow "The old way" · H2 "Your schedule shouldn't be a PowerPoint you update every Monday." · Body: most small GCs run schedules in Excel/MS Project and rebuild the look-ahead report by hand before every owner meeting; it's already stale by presentation time.
Pain list: schedule lives on the PM's laptop, no one else sees it · a 2-week weather delay in framing cascades into MEP unnoticed · subs don't know start dates until called · owner look-ahead request costs 3 hours of slide-making.
Data panel: "Riverside Office Complex: Schedule" — progress bars: Foundation & Slab 100%, Structural Steel 85%, Exterior Envelope 40%, MEP Rough In 15%, Drywall & Finishes 0%.

**Features:** Drag and drop Gantt (visual build/update, auto-recalculation) · Predecessor logic (finish-to-start, start-to-start, lag; slip warnings) · Resource loading (crew/sub commitments across tasks, catch overloading) · 3 week look ahead (auto-generated for owner meetings) · Weather day buffers (contingency for exterior phases, tracks consumed float) · Baseline comparison (lock original schedule, see slippage on every task).

**Stats:** 35% fewer schedule slips · 4 hrs saved per week meeting prep · 1 day to build a full baseline.

**Testimonial:** "I used to rebuild the schedule every Friday night before the Monday owner meeting. Now I just hit 'export' and it's done. My subs actually know their start dates two weeks out instead of two days." — James T., Project Manager · Trident Commercial, FL

**FAQ:**
- Is Zerotone compatible with Primavera P6 or Microsoft Project? Import XER (P6) and MPP (MS Project) files as a starting point; export back to those formats is on the roadmap.
- Can I share the schedule with my owner or architect? Yes — view-only links, or export PDF Gantt charts for contract submittals.
- How does Zerotone handle schedule changes mid-project? Drag any task; successors recalculate automatically; at-risk milestones flagged; new baseline can be saved alongside the old one.
- Can my subs see their portion of the schedule? Yes — sub portal shows only their trade's tasks; they update % complete, which flows back to the master schedule.
- Do you have CPM (Critical Path Method) scheduling? Yes — critical path calculated and highlighted automatically, total float shown per task.
- Can I schedule by phase or by area? Both — WBS organized by phase, building area, or trade, or a combination.

**CTA:** "Run a schedule your whole team can see." / "20 minute demo. We'll build a sample Gantt for a project that looks like yours."

---

### 4.21 Bidding & Precon — `/construct/construction-bidding-software`

**Meta:** Title "Construction Bidding Software: Send Bid Packages, Collect Responses, Sign Contracts" · Description "Send bid packages to subs, track responses, level bids side by side, and issue digital subcontracts. Construction bidding software for GCs. 14 day free trial."

**Hero** — Eyebrow "Bidding & Precon" · H1 "Send bid packages to subs, collect responses, sign contracts." · Subhead "Structured bid invites that get responses. Side by side leveling that catches exclusions. Digital subcontracts that close in hours. Built for GCs who bid multiple projects at once."

**Problem** — Eyebrow "The old way" · H2 "Stop managing your bid list in your email sent folder." · Body: most GCs send bid invites by BCC email with a PDF and a Dropbox link; half the subs never open it; three scopes turn out to have no coverage on bid day.
Pain list: no visibility into who opened the invite vs. ignored it · addendum issued at 4pm on bid day, half the subs miss it · bid leveling rebuilt in a spreadsheet every project · executed subcontract is a hand-filled Word doc after award.
Data panel: "Bid Package: Riverside Office Complex" — Concrete (Div 03): 3 bids, Covered; Steel (Div 05): 2 bids, Covered; Roofing (Div 07): 1 bid, Covered; Plumbing (Div 22): 0 bids, Missing; HVAC (Div 23): 1 bid, Covered.

**Features:** Bid package builder (scope packages by CSI division, drawings/specs/addenda, one-click send) · Sub invite portal (secure link, no account required) · Scope coverage matrix (uncovered scopes visible before bid day) · Bid leveling worksheet (side-by-side, inclusion/exclusion flags, apples-to-apples adjustments) · Addendum management (auto-notify all bidders, acknowledgment tracking) · Subcontract eSignature (award → subcontract in one step, executed agreement filed automatically).

**Stats:** 2× more sub responses · 4 hrs saved on bid leveling · 1 click from awarded bid to executed subcontract.

**Testimonial:** "We used to send bids by BCC email and just hope people responded. Now I can see who opened the invite, who downloaded the drawings, and who's planning to bid. My bid day scramble is gone." — Tanya R., Estimator · Revel Construction, NC

**FAQ:**
- Do subs need a Zerotone account to submit a bid? No — email link, download, fill out, submit; no login/account creation.
- Can I manage a bid list / sub database in Zerotone? Yes — organized by trade/CSI division; suggests subs when building a package; CSV import supported.
- How does the scope coverage matrix work? Define required scopes; matrix shows which have invited subs, which have responses, which remain uncovered.
- Can I compare bids from multiple subs side by side? Yes — leveling worksheet with scope adjustments (add/deduct) for inclusions/exclusions, leveled total shown per bid.
- Does Zerotone handle bonded and non-bonded subs differently? Yes — flag bonding requirement, track sub confirmation, add bonding cost as a leveling line.
- Can I issue ITBs (Invitations to Bid) on public projects? Yes — formatted ITB letters with project details/deadline/scope, sendable by email or printed for USPS.

**CTA:** "Run a bid you can actually manage." / "20 minute demo. We'll walk through a full bid package from invite to executed subcontract."

---

### 4.22 Closeout & Punchlist — `/construct/punchlist-software`

**Meta:** Title "Punchlist Software: Photo Based Punchlists and Automated Closeout Binders" · Description "Photo based punchlists, sub assignment, reinspection tracking, and automated closeout binders. Construction punchlist software for GCs. 14 day free trial."

**Note:** this page has 7 FAQs (one more than the standard 6).

**Hero** — Eyebrow "Closeout & Punchlist" · H1 "Close out the job without the clipboard." · Subhead "Photo based punchlists, sub assignment, reinspection approvals, and an automated closeout binder. The last 5% of the job shouldn't take 20% of your time."

**Problem** — Eyebrow "The old way" · H2 "Stop managing your punchlist on paper and hoping subs show up." · Body: the average commercial punchlist has 150–400 items, tracked in a PDF markup or spreadsheet, assigned by phone call, and re-walked a third time because "fixed" items weren't.
Pain list: sub claims an item is done, it isn't when you check · retainage held up 6 weeks because the closeout binder isn't assembled · owner can't tell open vs. closed without calling · a warranty call a year later has no record of who installed the equipment.
Data panel: "Punchlist: Level 3 Office Suite" — Touch up paint at column 5B (Painting, Open); Replace cracked tile Rm 312 (Flooring, Complete); Adjust door closer Suite 305 (Hardware, Complete); Caulk at window frame E side (Glazing, Open); Missing GFCI outlet break room (Electrical, Open). Footer "3 open · 2 closed · 0 awaiting reinspection".

**Features:** Photo based punch items (tap to create with photo, floor-plan location, trade) · Sub assignment and notification (instant notification with photo/location) · Reinspection workflow (sub uploads completion photo, GC approves/rejects with one tap) · Floor plan markup (pin items to plan, walk in room order) · Automated closeout binder (compiles O&Ms, warranties, attic stock records, training docs into one PDF) · Warranty tracking (log by trade/system, 30-day-before-expiration alerts).

**Stats:** 3 weeks faster to final completion · 70% fewer repeat walk items · 1 click to generate the closeout binder.

**Testimonial:** "Our last project had 340 punch items. We turned them all around in 19 days and had the closeout binder to the owner the same week as the last signature. That used to take us two months." — Dana P., Project Executive · Pinnacle Building Group, TN

**FAQ (7):**
- What is a punchlist in construction? A document listing non-conforming items to correct before final payment, compiled during a walkthrough with owner and architect.
- Can subs complete punchlist items from their phone? Yes — link opens on any device, shows photo/location, upload completion photo, no app download.
- Can I create a punchlist before substantial completion? Yes — informal QC walks throughout construction, plus the formal substantial-completion punchlist, are both supported.
- Does Zerotone support floor plan markup for punchlist items? Yes — pin items to as-built drawings, filter by trade/status/room.
- What goes into the automated closeout binder? As-built drawings, O&M manuals by system, equipment warranties/serial numbers, attic stock records, training documentation, completed punchlist with closure photos — sections are configurable.
- Can the owner review the punchlist in Zerotone? Yes — a view-only link shows all open/closed items with photos and dates.
- Does Zerotone handle warranty calls after turnover? Yes — log calls, assign to the responsible sub, track resolution, searchable records.

**CTA:** "Close the job. Get paid. Move on." / "20 minute demo. We'll show the punchlist workflow from walk to closeout binder."

---

## 5. `/construct` — Home Page

**Meta:** Title "Construction Operations, Run With You: Not Sold and Left Behind" · Description "Zerotone is the team and the system behind your construction operation. Estimating, budgets, purchase orders, schedule, billing, and accounting, built around how you work and run alongside you for the long term." · OG title "Zerotone: We Run Your Construction Operations With You"

Section order and content:

### 5.1 Hero — `#hero`
- Eyebrow: "An AI-led team that stays, not software"
- H1: "Every project. Every dollar. Every deadline." (last word styled as accent)
- Lede: "Zerotone isn't something you buy and set up alone. We studied how GCs actually run bid pipeline, field operations, cost controls, schedule, and accounting, redesigned what should change, and built the AI-enabled system around it, then stay on with your team to run it, for as long as you need us."
- CTAs: "Talk to the Team →" (→ `/construct/get-started`) · "See how it works" (→ `/construct#tour`)
- Trust line: avatar initials RM/JT/SK/+ — "Working alongside builders across the Southeast, day to day"
- Visual data panel: "Project Dashboard: River North Office" (Week 14) — Budget Used 78%, Open POs 12, Schedule On; rows for PO 041 (Eagle Supply: Concrete, Approved), CO 008 (MEP Scope Addition, $24,400, Pending owner), RFI 023 (Wall opening dimension, Open 2 days)

### 5.2 Stats Strip
- "14+" Connected modules in one platform
- "6" Tools the average team replaces
- "2 days" Average time to get your team live
- "$0" Reentry between modules

### 5.3 Origin / Bridge — `#origin`
- Eyebrow: "How this got built"
- H2: "We didn't start with software. We started by watching how GCs actually run a job."
- Body: "Business analysts, finance specialists, and technologists spent time inside real construction operations before writing a line of code, then decided what should change and where AI could take over the parts that didn't need a person. What follows is what came out of that, not a feature list we imagined."

### 5.4 Pain Section — `#pain`
- Eyebrow: "Does this sound familiar?" · H2: "Construction is complex. Your tools shouldn't make it harder." · Sub: "Most GCs run their operation across 4–6 disconnected tools. Here is what that costs you every week."
- 6 pain cards:
  1. "Your budget is in one spreadsheet, your POs are in another, and your actuals are in a third." — "You can't see an overrun until it's already happened."
  2. "RFIs, change orders, and submittals get tracked over email." — "Critical approvals fall through and you only notice at closeout."
  3. "Your schedule lives in a P6 export nobody else knows how to open." — "Field teams and finance teams are never looking at the same thing."
  4. "You reconcile vendor invoices manually against POs every billing cycle." — "Hours of work just to confirm what you already committed."
  5. "You can't tell if a project is profitable until it's over." — "No real time project P&L. No committed cost view. Just month end surprises."
  6. "Approvals happen over text, phone calls, and email threads." — "No audit trail. No accountability. No paper trail when it goes to dispute."

### 5.5 Platform Workflow — `#workflow`
- Eyebrow: "One connected system" · H2: "From first bid to final billing: everything flows." · Sub: "Your estimate becomes your budget. Your approved PO commits the cost. Your vendor invoice posts to your GL. Nothing reentered. Nothing lost."
- Flow diagram (7 nodes, in order): Bid Pipeline → Estimating → Budget → Purchase Orders → Schedule → SOV & Billing → Accounting GL
- 3 callout points: "No reentry between modules" (estimate lines seed budget, budget lines link POs, POs link vendor bills) · "Your whole team on one platform" (field/PM/estimator/controller each get the exact view, role based access) · "Every action is audited" (every approval/status change/edit timestamped and logged)

### 5.6 Module Grid — `#features`
- Eyebrow: "Everything we run with you" · H2: "Everything your team needs. Nothing bolted on." · Sub: "Fourteen purpose built modules, all connected, built and supported by the same team that stays on to run it with you. No separate subscriptions. No integration fees."
- 13 featured module cards (title + 1-sentence description, each linking to its module page): Bid Pipeline, Estimating, Budget Control, Purchase Orders, Schedule Control, RFIs & Submittals, Change Orders, SOV & Billing, Accounting & GL, Vendor Management, Daily Logs & Delays, Reports, Inventory & Materials.

### 5.7 Product Tour — `#tour`
- Eyebrow: "Product Tour" · H2: "See what running a project in Zerotone actually looks like." · Sub: "Three of the modules where Zerotone goes deeper than any point tool you're currently using."
- **Block 1 — Budget & Cost Control:** H3 "Know where every committed dollar is going: before the invoice arrives." Body + bullets: estimate lines auto-seed budget · approved POs commit budget by cost code instantly · catch overruns in week three not twelve · budget transfers with documented approval chain · short-close POs return savings to available budget. Mockup: "Budget Summary: River North Office" with cost-code rows (03 Concrete $62,400 budgeted, 05 Metals $28,800 ⚠ 97% committed, 09 Finishes $18,200 committed, 15 MEP $44,500 approved) and a warning callout.
- **Block 2 — Schedule Control:** H3 "Know which delays will blow your deadline, and which ones won't." Body + bullets: import P6/MS Project exports · six schedule lenses (baseline, GC, internal, forecast, committed PO, actual) · CPM runs automatically, critical path color coded · AI slippage alert fires when a vendor date threatens the finish · progress tracking from the field. Mockup: "Schedule Control: Critical Path View" with 5 activities (Demolition 100% Complete, Concrete Pour 70% On Track, MEP Rough In 45% Float 3d, Steel Frame 30% ⚠ Slipping, Drywall 20% At Risk) and an alert callout.
- **Block 3 — Accounting & GL:** H3 "Your books update the moment you approve a vendor bill." Body + bullets: AP invoices post to GL automatically from approved bills · AR entries created on approved pay applications · AI-assisted bank import with auto categorization/reconciliation · POC revenue recognition · P&L/Balance Sheet/Cash Flow/WIP reports per project. Mockup: "Accounting: Project P&L · July" (Contract Revenue $312,000, Earned Revenue (POC) $243,360, Cost of Revenue $198,400, Gross Profit $44,960, Retainage Held $24,336, reconciliation note).

### 5.8 Role Section — `#roles`
- Eyebrow: "Built for your whole team" · H2: "Your whole team. One platform. Each with the view they need." · Sub: "Zerotone gives every role exactly what they need, and nothing they don't. Role based access means no cost data leaking to the field, no operational noise reaching the controller."
- 4 role cards:
  1. **Project Managers** — "Own your budget, schedule, and scope in one place." Dashboard (budget status, open RFIs, schedule risk) · issue/track POs without leaving the platform · six-lens schedule vs. vendor dates · CO workflow draft-to-billing.
  2. **Controllers & CFOs** — "Real project financials: not estimates dressed as reports." Approve budgets/POs/bills with enforced permission gates · GL auto-posts from operational approvals · project P&L per job + portfolio rollup · bank reconciliation, WIP report, 1099 tracking.
  3. **Superintendents** — "Everything you need in the field. Nothing you don't." Daily log entry (crew, weather, work, incidents) · RFI submission/status from any device · submittal approval status before work starts · no cost data visible.
  4. **Estimators** — "Build better bids. Learn from every project." Line item estimates with markup/versions/baseline lock · bid pipeline tracking intake-to-contract · bid accuracy analytics (estimate vs. actual P&L) · 12-month pipeline forecast + estimator workload calendar.

### 5.9 Testimonials — `#trust`
- Eyebrow: "What builders say" · H2: "Teams that switched to Zerotone don't go back." · Sub: "Real feedback from GCs, PMs, and subs who replaced spreadsheets and email with one connected platform."
- 3 quotes:
  1. "We used to lose two days a week chasing RFIs through email. Now my super submits one from the truck and I have it on my desk in 30 seconds. The audit trail alone has saved us twice in disputes." — Ricardo M., Owner · Mendoza Construction (TX)
  2. (featured) "BuilderTrend was overkill and the training alone took six weeks. Zerotone had my whole crew running in two days. That's the whole story." — Janet T., PM · Trinity General Contracting
  3. "I'm a one truck framer. Zerotone gives me a real bid package and a paper trail. I've already won two GC contracts I wouldn't have gotten before." — Steve K., Independent sub · Keller Framing

### 5.10 Pricing — `#pricing`
- Eyebrow: "Pricing" · H2: "Simple tiers. No per module fees." · Sub: "Every tier includes all modules for your active users. No add ons, no hidden seat fees. Pricing discussed when we talk."
- 3 tiers, all priced "Custom / contact us", CTA "Talk to the Team" → `/construct/get-started`:
  1. **Starter** — "Small GC or sub, up to 10 users" — RFIs, Daily Logs, Submittals; Estimates & Budget Control; Purchase Orders & Bills; Change Orders; Schedule Control; Email support.
  2. **Professional** (tagged "Most Popular") — "Growing GC, up to 50 users" — Everything in Starter; SOV & Billing (pay apps); Accounting & GL (AP, AR, Bank); Vendor Master & Compliance; Bidding Pipeline & Analytics; Inventory Management; Priority onboarding support.
  3. **Enterprise** — "Multi company, unlimited users" — Everything in Professional; Multi company management; Custom roles & permissions; Dedicated onboarding & training; Priority phone support; Custom integrations.

### 5.11 FAQ — `#faq`
- Eyebrow: "Before you commit" · H2: "What builders ask before they switch." · Sub: "Straight answers on implementation, data migration, and what you'll actually pay."
- Renders via a shared `FaqAccordion` component (content not captured in this extraction pass — pull the live Q&A list from `src/components/FaqAccordion.tsx` when rebuilding).

### 5.12 CTA Form Section — `#demo`
- Eyebrow: "We stay on the job with you"
- H2: "See how we'd run this with you, on a project like yours."
- Body: "Book a 20 minute conversation with the actual team, not a rep reading a script. We'll walk through budgets, POs, schedule, and billing on a real job type, and talk through what working together long term actually looks like."
- Checklist: a real conversation with the team that builds and runs the system · matched to your project type and how your team actually works · pricing, onboarding, and ongoing support covered honestly · no pressure to commit, just an honest look at how we'd work together
- Form panel — H3 "Start the conversation" · Sub "We'll reach out within one business day to confirm a time." Fields: First name*, Last name*, Work email*, Company name*, Your role* (select: Owner/Principal, Project Manager, Superintendent, Estimator, Accounting/Finance, Other), Team size (select: 1–5, 6–15, 16–50, 50+). Submit: "Start the Conversation →". Success: "You're on the calendar." / "We'll reach out within one business day to confirm a time." Note: "No spam. We only reach out about your request." Form posts to a Google Apps Script endpoint.

---

## 6. `/construct/get-started` — Book a Walkthrough

**Meta:** Title "Book a Walkthrough | Zerotone" · Description "See Zerotone running on a real project that looks like yours. 20 minute walkthrough, no slide decks."

Single-section page (hero = the whole page, split into pitch column + form column). No footer nav sections beyond the shared global footer.

**Left column (pitch):**
- Eyebrow: "No slide decks. No fluff."
- H1: "See Zerotone on a project that looks like yours." (last word accented)
- Lede: "Book a 20 minute demo with the team. We'll walk you through RFIs, budgets, POs, and scheduling: live, on a real job."
- Checklist: live product walkthrough, not prerecorded · demo matched to your project type and team size · pricing, migration help, and onboarding timeline covered · no commitment, just an honest look at the product
- Quote: "BuilderTrend was overkill and the training alone took six weeks. Zerotone had my whole crew running in two days. That's the whole story." — Janet T., PM · Trinity General Contracting

**Right column (form panel):**
- H2: "Book your walkthrough" · Sub: "We'll reach out within one business day to schedule a time that works for you."
- Fields: First name* · Last name* · Work email* · Phone number (optional) · Company name* · Your role* (select: Owner/Principal, Project Manager, Superintendent, Estimator, Accounting/Finance, Other) · Team size (select: 1–5, 6–15, 16–50, 50+ people) · Booking date/time picker · Message (optional, placeholder "e.g. RFI workflow, budget tracking, PO approvals...")
- Submit: "Book My Walkthrough →"
- Success: "Walkthrough requested." / "We'll reach out within one business day to schedule a time that works for you."
- Note: "No spam. We'll only reach out about your demo request."
- Divider: "or reach us directly" — phone "+91 98486 41736", email "rktantry.marketing@gmail.com"
- Trust row: avatar initials RM/JT/SK — "Trusted by builders across the Southeast. Most teams are up and running in under 2 days."

---

## 7. `/construct/contact` — Contact

**Meta:** Title "Contact Us | Zerotone" · Description "Get in touch with the Zerotone team. We're here to help you manage your construction projects better."

- Hero: H1 "Get in touch." Subhead "Questions? Send us a message and we'll respond as soon as possible."
- Form (posts to Formspree): Your name* · your@email.com* · Company (optional) · Your message...* (textarea). Submit: "Send Message"
- Contact info block: "Or reach us directly." Phone "+91 98486 41736", Email "rktantry.marketing@gmail.com"
- Custom page-specific footer (see the "Inconsistency to note" callout in Section 2).

---

## 8. Comparison Pages (`/construct/compare/*`)

Shared shape: VS-bar hero with two CTAs → quick verdict (2-card) → feature comparison table → 1–2 deep-dive sections (sometimes with an embedded interactive widget) → testimonial (Procore/Buildertrend pages only) → FAQ (6) → CTA. External CTA target throughout: `https://rfi.rktantry.in/login`.

### 8.1 vs. Procore — `/construct/compare/siteops-vs-procore`

**Meta:** Title "Zerotone vs Procore: Which Is Right for Your GC?" · Description "Procore is built for ENR Top 400 contractors. Zerotone is built for the $2M–$50M GC. Compare pricing, setup time, and features side by side."

- **Hero:** "Zerotone" vs "Procore" · H1 "Which construction software is right for your GC?" · Subhead "Procore is the industry standard: for ENR Top 400 contractors. If your jobs run $2M–$50M, here's what you actually need to know before signing a contract." CTAs: "Start free trial: no credit card" / "Book a 20 min demo".
- **Quick verdict:** "Choose Procore if…" you're running a large commercial program ($100M+, dedicated IT, complex ERP, 50+ users). "Choose Zerotone if…" you're a $2M–$50M GC needing RFIs/scheduling/budget/CO/punchlist without a 6-week implementation, 12-month contract, or $15K first-year cost — live in 48 hours.
- **Comparison table** (Feature | Procore | Zerotone): Starting price Custom ($800+/mo) | $49/mo · Contract 12-month minimum | Month to month · Implementation 4–8 weeks + paid training | 24–48 hours · Sub portal Extra seats required | Free for all subs · Mobile RFI/Gantt/Budget/CO/Punchlist: both ✓ · Preloaded CSI codes: Manual setup | ✓ Preloaded · Built for <$50M GCs: ✗ | ✓ · Free trial: Demo required | 14 day free trial.
- **Deep dive — Price:** Procore pricing is undisclosed, typically $800–$2,000/mo base, plus $5k–$40k onboarding/training, sub seats, 12-month commitment — first year often $20k–$50k. Zerotone is $49/mo, sub portal free, no implementation fee, cancel anytime. Embedded **ProcoreCalculator widget**: sliders for Procore Base Contract (default $15,000), Implementation Fee (default $10,000), Number of Active Subs (default 15), Sub seat price/mo (default $30) → outputs "First Year Zerotone Net Cost Savings" with a Procore-vs-Zerotone-fixed breakdown ($588/yr fixed for Zerotone).
- **Deep dive — Setup time:** Procore 4–8 weeks (kickoff → configuration → training → go live). Zerotone 24–48 hrs (sign up, enter first project, invite subs).
- **Deep dive — Sub portal:** Procore charges per sub seat (example: 20 subs × $50/seat/mo = $1,000/mo); Zerotone sub portal is free ($0/mo for the same 20 subs).
- **Testimonial:** "We got a Procore quote. $34,000 for year one. I almost signed it because I thought that's just what construction software costs. Then I found Zerotone. We were live in a day and a half." — Marcus K., Owner · Keystone Commercial, OH
- **FAQ (6):** Is Procore worth it for small GCs? · How much does Procore actually cost? · Can I import my Procore data into Zerotone? · Does Zerotone have everything Procore has? (No — 250+ integrations, large-program financial module, BIM/partner ecosystem are Procore-only) · Why do small GCs choose Zerotone over Procore? (price, setup speed, free sub access) · What's the biggest risk of choosing Zerotone over Procore? (need to revisit past $100M volume).
- **CTA:** "Try Zerotone free for 14 days." / "No credit card. No implementation fee. No 12 month contract. See why small GCs choose Zerotone over Procore."

### 8.2 vs. Buildertrend — `/construct/compare/siteops-vs-buildertrend`

**Meta:** Title "Zerotone vs Buildertrend: Commercial GC or Homebuilder?" · Description "Buildertrend is built for residential homebuilders. Zerotone is built for commercial GCs. Compare CSI workflows, RFI tracking, and CPM scheduling."

- **Hero:** "Zerotone" vs "Buildertrend" · H1 "Commercial GC workflows vs. residential homebuilder software." · Subhead "Buildertrend is great: if you build custom homes. If you're running commercial jobs with CSI codes, RFIs, and CPM schedules, you're using the wrong tool."
- **Quick verdict:** "Choose Buildertrend if…" you build custom homes/residential remodeling (homeowner portal, selections/allowances, client comms are best-in-class). "Choose Zerotone if…" you run commercial jobs with CSI, RFI audit trails, CPM, subcontract CO logs — no homeowner portal.
- **Comparison table:** Primary market Residential/custom home | Commercial GC · Starting price $99/mo (Core) | $49/mo · CSI cost codes ✗ (custom categories) | ✓ Preloaded · RFI audit trail Basic | Full w/ SLA timer · CPM/critical path ✗ | ✓ · Gantt Basic | Full predecessor logic · CO log Client-facing (selections) | Subcontract CO log · Homeowner portal ✓ | ✗ · Sub portal ✓ (paid) | ✓ Free · Punchlist ✓ | ✓ + closeout binder · Setup time 2–6 weeks training | 24–48 hours · Free trial ✓ | ✓ 14 day.
- **Deep dive 1 — CSI cost codes:** Buildertrend uses custom budget categories (fine for "kitchen," "bathrooms"); commercial GCs need CSI MasterFormat (Division 03 Concrete, 22 Plumbing, 26 Electrical). Zerotone ships all 50 CSI divisions preloaded. Callout: setup time Buildertrend 2–4 hrs manual vs. Zerotone 0 hrs.
- **Embedded BuildertrendGapMatrix widget** — 5 selectable feature audits, each with a Zerotone description, a Buildertrend description, a verdict line, and an explanatory paragraph:
  1. CSI 50 Division Cost Codes — Zerotone preloaded vs. Buildertrend manual custom categories; "Zerotone wins for commercial contract reporting."
  2. Sequential RFI Logs & SLA Timers — Zerotone 7-day timer/audit trail vs. Buildertrend basic Q&A; "Zerotone is built for commercial contract liability."
  3. CPM Scheduling (Critical Path) — Zerotone auto float/critical path vs. Buildertrend basic dependencies; "Zerotone supports owner schedule submittals."
  4. Subcontractor Change Order Logs — Zerotone subcontract mods/budget commits vs. Buildertrend client-selection focus; "Zerotone matches commercial subcontractor workflows."
  5. Homeowner Communication Portal — Zerotone intentionally excluded vs. Buildertrend's industry-leading homeowner portal; "Buildertrend is best for residential client relations."
- **Deep dive 2 — RFI workflows:** callout table (Sequential numbering, SLA timer, Full audit trail, Auto-assign by CSI, PDF export — Zerotone ✓ across the board, Buildertrend ✗ except PDF export ✓). Text: commercial RFIs are "contract events" with SLA/audit-trail/CSI-routing requirements Buildertrend's basic Q&A doesn't meet.
- **Testimonial:** "Buildertrend was overkill and the training alone took six weeks. Zerotone had my whole crew running in two days. That's the whole story." — Ray C., PM · Harwick Commercial, TX
- **FAQ (6):** Can I use Buildertrend for commercial construction? · What does Buildertrend do better? (residential selections/allowances/client portal/warranty for single-family) · What does Zerotone do better for commercial GCs? · Is Zerotone cheaper? ($49/mo vs. $99/mo Core, $299–$599/mo for needed tiers) · We do a mix of light commercial and residential, which should we use? · Does Buildertrend have CPM scheduling? (no true CPM/float analysis).
- **CTA:** "Built for commercial GCs, not homebuilders." / "CSI codes, RFI audit trails, CPM scheduling: out of the box. 14 day free trial, no credit card."

### 8.3 vs. CoConstruct — `/construct/compare/siteops-vs-coconstruct`

**Meta:** Title "Zerotone vs CoConstruct: What Commercial GCs Need to Know" · Description "CoConstruct was acquired by Buildertrend in 2021. If you used CoConstruct and do commercial work, here is what changed and what to use instead."

- **Hero:** "Zerotone" vs "CoConstruct" · H1 "CoConstruct is now Buildertrend. Here's what commercial GCs should use instead." · Subhead "CoConstruct was acquired by Buildertrend in 2021. If you do commercial GC work: not custom home building: here's an honest look at your options."
- **Context section:** "What happened to CoConstruct" — Buildertrend acquired CoConstruct in 2021; it no longer exists standalone; former users were migrated to Buildertrend. Framed as: the real question is whether Buildertrend (with CoConstruct's DNA) fits commercial GC work — "the answer, for most commercial GCs, is no."
  - **Timeline "The Sunset of CoConstruct (2020–Present)":** 2020 CoConstruct peaks as dominant client-selection tool for luxury home builders · 2021 Buildertrend acquires CoConstruct, platform convergence begins · 2022 standalone subscriptions cease, feature development frozen · 2023 CoConstruct logins redirect to Buildertrend · Active: commercial GCs seek CPM-first, CSI cost-code alternatives like Zerotone.
- **Quick verdict:** "CoConstruct/Buildertrend if…" custom home builders/residential remodeling (client selections, allowances, homeowner comms, now in Buildertrend). "Zerotone if…" commercial jobs needing RFIs/CSI/CPM/subcontract CO logs, which CoConstruct never had and Buildertrend still does poorly.
- **Comparison table:** Current status Merged into Buildertrend (2021) | Active, built for commercial GC · Primary market Custom home builders | Commercial GC ($2M–$50M) · CSI cost codes ✗ | ✓ Preloaded · RFI audit trail Basic | Full SLA+audit log · CPM ✗ | ✓ · Client selections portal ✓ (residential) | ✗ · Subcontract COs ✗ | ✓ · Punchlist+closeout Basic | ✓+binder · Free sub portal ✗ | ✓ · Starting price Now Buildertrend pricing ($99+) | $49/mo. Note: links to `/construct/compare/siteops-vs-buildertrend` for the fuller Buildertrend comparison.
- **"Who this is for":** "Use Buildertrend (formerly CoConstruct) if:" custom single-family homes · residential remodeling/renovation · homeowner is primary relationship · selections/allowance tracking is core. "Use Zerotone if:" commercial GC jobs ($2M–$50M) · CSI-organized budgets/RFI logs · CPM scheduling for owner reporting · change orders are subcontract mods, not client selections.
- **FAQ (6):** What happened to CoConstruct? · Is there anything like it for commercial GCs? · Zerotone vs Buildertrend, which should I use? · Why is commercial GC software different from custom home builder software? · Does Zerotone work for light commercial remodeling? · Can I migrate from Buildertrend to Zerotone? (CSV import; run new project in parallel rather than mid-project migration).
- **CTA:** "Built for commercial GCs who need real PM tooling." / "CSI codes, RFI audit trails, CPM scheduling. 14 day free trial, no credit card required."
- **Internal link:** `/construct/compare/siteops-vs-buildertrend`

---

## 9. Alternatives Pages (`/construct/alternatives/*`)

Shared shape: hero → "why teams leave X" (3-card) → featured alternative (Zerotone) with bullets + pricing/feature comparison callout + an embedded interactive widget → "other alternatives to consider" (3–4 card roundup of real competitors) → FAQ (6) → CTA.

### 9.1 Procore alternatives — `/construct/alternatives/procore`

**Meta:** Title "Best Procore Alternatives for Small GCs (2024 Comparison)" · Description "The best Procore alternatives for small commercial GCs: honest comparison of Zerotone, Fieldwire, Contractor Foreman, and more. No enterprise contracts."

- **Hero:** Eyebrow "Procore alternatives" · H1 "The best Procore alternatives for small commercial GCs." Body: "Procore is excellent software: built for ENR Top 400 contractors. If you're running $2M–$50M jobs and paying Procore prices, there are better options." CTAs: "Try Zerotone free: 14 days" / "See full Procore comparison →" (→ `/construct/compare/siteops-vs-procore`).
- **"Why small GCs leave Procore"** (3 cards): "$20k–$50k first year" (license + implementation + training + sub seats) · "4–8 week setup" (configuration, permissions, templates, training) · "12 month minimum" (locked in before proving fit).
- **Featured alternative — Zerotone:** Badge "🏆 #1 Alternative for Small Commercial GCs." Body: built for the "$2M–$50M messy middle" Procore's enterprise sales motion ignores; same core workflows (RFIs, scheduling, budget, COs, punchlist) at $49/mo (not $800+), live in 48 hrs (not 6 weeks), free sub portal, month-to-month.
  Bullets: RFI tracking with SLA timers + full audit trail · drag-and-drop Gantt with CPM critical path · preloaded CSI cost codes · CO log with digital signatures · punchlist + automated closeout binder · free sub portal, no per-seat fees.
  Pricing callout: Procore small-GC first year "$20k–$50k" vs. Zerotone "$588" ($49/mo × 12, free sub portal, no onboarding fee).
  Key differences table: Setup time 4–8 weeks | 24–48 hrs · Contract 12-month min | Month to month · Sub portal Per-seat fee | Free · Free trial Demo required | 14 days.
  **Embedded ProcoreCalculator widget** (same as Section 8.1).
- **Other alternatives worth knowing:**
  1. **Fieldwire** — Best for field task management/plan markup; not a full PM platform (no scheduling/budget/CO log). Verdict: "Good field tool. Not a Procore replacement for the full project lifecycle."
  2. **Buildertrend** — Best for residential homebuilders; residential-first design shows immediately for commercial GCs. Verdict: "Great for residential. Not designed for commercial GC workflows."
  3. **Contractor Foreman** — Best for budget-constrained small contractors; widest feature set at lowest price, but complex UI/inconsistent mobile. Verdict: "Cheap and feature rich. Steep learning curve and inconsistent quality."
  4. **Autodesk Build** — Best for enterprise teams already in the Autodesk ecosystem; Procore's primary enterprise competitor, priced for large contractors. Verdict: "Enterprise grade like Procore. Not for $2M–$50M GCs."
- **FAQ (6):** Why do small GCs leave Procore? · What's the best Procore alternative for a small commercial GC? · Does any alternative have everything Procore has? (No — 250+ integrations/BIM/complex financial modules are Procore-only; most small GCs use 15–20% of Procore's features) · Can I keep my Procore data if I switch? (CSV export/import) · Will my subs have problems with a non-Procore platform? (link-based access typically sees higher adoption) · How do I evaluate a Procore alternative without disrupting active projects? (run in parallel on a new project for one full cycle).
- **CTA:** "Try the Procore alternative built for small GCs." / "14 day free trial. No credit card, no contract, no implementation fee. Live in 48 hours."
- **Internal link:** `/construct/compare/siteops-vs-procore` (appears twice)

### 9.2 Buildertrend alternatives — `/construct/alternatives/buildertrend`

**Meta:** Title "Best Buildertrend Alternatives for Commercial GCs (2024)" · Description "The best Buildertrend alternatives for commercial GCs. Honest comparison of Zerotone, Procore, Fieldwire, and Contractor Foreman for commercial jobs."

- **Hero:** Eyebrow "Buildertrend alternatives" · H1 "The best Buildertrend alternatives for commercial GCs." Body: "Buildertrend is excellent residential software. If your jobs run on CSI codes, RFIs, and CPM schedules: here are better fit options." CTAs: "Try Zerotone free: 14 days" / "See full Buildertrend comparison →" (→ `/construct/compare/siteops-vs-buildertrend`).
- **"Why commercial GCs outgrow Buildertrend"** (3 cards): "No CSI cost codes" (custom categories require manual recreation per project) · "Limited RFI depth" (no sequential numbering/SLA timers/audit trail) · "No CPM critical path" (basic scheduling, no float calculation).
- **Featured alternative — Zerotone:** Badge "🏆 #1 Alternative for Commercial GCs." Body: built ground-up for commercial GC workflows Buildertrend leaves out; CSI preloaded, RFI audit-trail depth, CPM scheduling, subcontract CO tracking; starts at $49/mo with free sub portal.
  Bullets: all 50 CSI divisions preloaded · RFI tracking with SLA timers, auto-assign by trade, full audit trail · CPM scheduling with critical path and float · subcontract CO log with digital signature · photo-based punchlist + automated closeout binder · free sub portal, no login required.
  Comparison callout: CSI cost codes ✗/✓ · RFI SLA timer ✗/✓ · CPM critical path ✗/✓ · Subcontract CO log ✗/✓ · Free sub portal Paid plans/Always free · Starting price $99/mo | $49/mo.
  Sub-callout: "14 day free trial — No credit card. No contract. Set up a real project in 48 hours and see the difference."
  **Embedded BuildertrendGapMatrix widget** (same 5-feature audit as Section 8.2).
- **Other alternatives to consider:**
  1. **Procore** — Best for large commercial programs ($100M+); enterprise depth (BIM, ERP, owner portals) but $20k–$50k first year and 4–8 week implementation for small GCs. Verdict: "Too expensive and complex for most small commercial GCs."
  2. **Fieldwire** — Best for field task management and plan markup; no scheduling/budget/CO log. Verdict: "Strong field tool. Not a full Buildertrend replacement."
  3. **Contractor Foreman** — Best for budget-focused small contractors wanting a feature checklist; long feature list, low price, real training curve. Verdict: "Most features per dollar. Expect a steeper learning curve."
  4. **CoConstruct** — Now merged into Buildertrend (2021), no longer standalone. Verdict: "No longer available as a standalone product. Now part of Buildertrend."
- **FAQ (6):** Why do commercial GCs outgrow Buildertrend? · What's the best Buildertrend alternative for commercial GC work? · Does Buildertrend work for light commercial (office fit-outs, retail)? (works with workarounds) · Is Zerotone cheaper than Buildertrend? · Can I migrate my Buildertrend data to Zerotone? (CSV export/import, new-project-first recommended) · What if I do both residential and commercial work?
- **CTA:** "Try the Buildertrend alternative built for commercial GCs." / "CSI codes, RFI audit trails, CPM scheduling. 14 day free trial, no credit card required."
- **Internal link:** `/construct/compare/siteops-vs-buildertrend` (appears twice)

---

## 10. Cross-Cutting Content Notes

- **Recurring testimonial reuse:** the quote "BuilderTrend was overkill and the training alone took six weeks. Zerotone had my whole crew running in two days. That's the whole story." appears with **two different attributions** on different pages — Janet T. (PM · Trinity General Contracting) on the home page and `/construct/get-started`; Ray C. (PM · Harwick Commercial, TX) on `/construct/compare/siteops-vs-buildertrend`. Decide in the rebuild whether that's intentional (two customers said something similar) or a copy-paste artifact to fix.
- **External trial/login link** used repeatedly on comparison and alternatives pages: `https://rfi.rktantry.in/login` (this appears to be a separate, older product surface — decide whether to keep pointing there or redirect into the new `/construct` flow).
- **`/pricing`** is referenced once (from the RFI page's comparison table) as if it's a standalone top-level route — it does not otherwise appear in the sitemap; likely a stale link from an earlier IA that should resolve to `/construct#pricing` instead.
- **Structured data:** every product page renders a `ProductStructuredData` component (JSON-LD) duplicating that page's `name`, `description`, `url`, and its FAQ list for schema markup — not a visible content section, but worth carrying over for SEO parity if rebuilding from scratch.
- **Interactive embedded widgets** (content-bearing, not just visual): `BuildertrendGapMatrix` (5-feature audit selector, used on the Buildertrend compare page and the Buildertrend alternatives page) and `ProcoreCalculator` (hidden-fee cost calculator with sliders, used on the Procore compare page and the Procore alternatives page). Their copy is captured inline above; treat them as data-driven components if rebuilding.
- **Contact details, consistent everywhere:** phone `+91 98486 41736`, email `rktantry.marketing@gmail.com`, address "Chennammana Kere, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085", socials (WhatsApp, LinkedIn, Instagram, Facebook — see Section 2 for URLs).
- **Base path constant:** the app treats `/construct` as `CONSTRUCT_BASE_PATH`, with `CONSTRUCT_URL = https://zerotoneai.com/construct` — useful if the rebuild wants a single source of truth for the base path rather than hardcoding it per link.
