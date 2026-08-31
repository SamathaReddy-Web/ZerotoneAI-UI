import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-data text-[13.5px] font-semibold uppercase tracking-wider text-primary-600",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-4 bg-primary-600" />
      {children}
    </p>
  );
}
