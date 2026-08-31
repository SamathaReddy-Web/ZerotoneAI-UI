import { cn } from "@/lib/utils";

export function Divider({
  dashed = false,
  className,
}: {
  dashed?: boolean;
  className?: string;
}) {
  return (
    <hr
      className={cn(
        "border-t border-border-subtle",
        dashed && "border-dashed",
        className
      )}
    />
  );
}
