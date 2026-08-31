import Link from "next/link";
import { MODULE_CATEGORIES, MODULES, constructHref } from "@/content/navigation";

export function NavMegaMenu({
  id,
  onLinkClick,
}: {
  id: string;
  onLinkClick: () => void;
}) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Modules"
      className="absolute left-1/2 top-full z-40 w-[min(880px,92vw)] -translate-x-1/2 pt-3"
    >
      <div
        className="relative overflow-hidden rounded-lg border border-border bg-surface shadow-overlay"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 35%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 35%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "top left",
        }}
      >
        <div className="relative grid grid-cols-4 gap-x-6 gap-y-8 bg-surface/95 px-8 py-8 backdrop-blur-[2px]">
          {MODULE_CATEGORIES.map((category, i) => (
            <div
              key={category.key}
              className="flex flex-col gap-3 opacity-0 [animation:megamenu-in_180ms_ease-out_forwards]"
              style={{ animationDelay: `${i * 25}ms` }}
            >
              <p className="font-data text-[12px] font-semibold uppercase tracking-wider text-primary-600">
                {category.label}
              </p>
              <ul className="flex flex-col gap-0.5">
                {MODULES.filter((m) => m.category === category.key).map((mod) => (
                  <li key={mod.slug}>
                    <Link
                      href={constructHref(mod.slug)}
                      onClick={onLinkClick}
                      className="group flex items-center gap-2 rounded-md py-1.5 pl-2.5 pr-2 text-[15px] font-medium text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-800"
                    >
                      <span className="h-3 w-px shrink-0 bg-border-subtle transition-colors group-hover:bg-primary-600" />
                      {mod.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
