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
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-overlay">
        <div className="relative grid grid-cols-4 gap-x-6 gap-y-8 bg-surface px-8 py-8">
          {MODULE_CATEGORIES.map((category, i) => (
            <div
              key={category.key}
              className="flex flex-col gap-1 opacity-0 [animation:megamenu-in_180ms_ease-out_forwards]"
              style={{ animationDelay: `${i * 25}ms` }}
            >
              <div className="border-b border-border-subtle pb-3 mb-2">
                <p className="text-[12px] font-bold uppercase tracking-wider text-text-muted">
                  {category.label}
                </p>
              </div>
              <ul className="flex flex-col gap-1">
                {MODULES.filter((m) => m.category === category.key).map((mod) => (
                  <li key={mod.slug}>
                    <Link
                      href={constructHref(mod.slug)}
                      onClick={onLinkClick}
                      className="group flex items-center gap-3 rounded-md py-2 px-2 text-[15px] font-medium text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-800"
                    >
                      {mod.icon && <mod.icon className="h-[18px] w-[18px] shrink-0 text-text-secondary transition-colors group-hover:text-primary-600" />}
                      <span>{mod.label}</span>
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
