"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border border-border-subtle bg-white rounded-2xl mb-4 overflow-hidden transition-colors hover:border-border",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 px-6 sm:px-8 font-semibold text-left text-text-primary transition-all cursor-pointer [&[data-state=open]>div>svg]:rotate-45 [&[data-state=open]]:bg-neutral-50/50 group",
        className
      )}
      {...props}
    >
      <span className="text-lg pr-4">{children}</span>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 text-text-secondary transition-colors duration-200 group-hover:bg-neutral-200">
        <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[15px] sm:text-base text-text-secondary transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-neutral-50/50"
    {...props}
  >
    <div className={cn("pb-6 px-6 sm:px-8 pt-2 leading-relaxed max-w-[90%]", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
