import Image from "next/image";
import { cn } from "@/lib/utils";

// Source asset is 349x72px (aspect ratio ~4.85:1) — preserved via width/height,
// never redrawn or approximated.
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Zerotone"
      width={349}
      height={72}
      priority
      className={cn("h-8.5 sm:h-9.5 w-auto object-contain", className)}
    />
  );
}
