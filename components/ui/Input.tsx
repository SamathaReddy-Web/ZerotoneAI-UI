import { type InputHTMLAttributes, useId } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

export function Input({ label, hint, id, className, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="font-body text-[15.5px] font-medium text-text-primary">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "h-11 rounded-md border border-border bg-surface px-3.5 font-body text-[16px] text-text-primary placeholder:text-text-muted",
          "focus-visible:border-primary-600",
          className
        )}
        {...props}
      />
      {hint && <span className="font-body text-[13.5px] text-text-muted">{hint}</span>}
    </div>
  );
}
