"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "default" | "large";
  prefillMessage?: string;
  focusTargetId?: string;
};

const variantClasses: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "button-shine border border-primary/40 bg-primary text-background shadow-glow hover:-translate-y-0.5 hover:bg-highlight",
  secondary:
    "button-shine border border-white/10 bg-white/5 text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent text-foreground hover:border-white/10 hover:bg-white/5",
  outline:
    "border border-primary/35 bg-transparent text-primary hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
};

const sizeClasses: Record<NonNullable<LinkButtonProps["size"]>, string> = {
  default: "px-5 py-3 text-sm sm:text-[0.95rem]",
  large: "px-6 py-3.5 text-sm sm:text-base"
};

export function LinkButton({
  className,
  href = "#",
  variant = "primary",
  size = "default",
  prefillMessage,
  focusTargetId,
  onClick,
  children,
  ...props
}: LinkButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const isHashLink = href.startsWith("#");

    if (!isHashLink && !prefillMessage && !focusTargetId) {
      return;
    }

    if (prefillMessage) {
      window.dispatchEvent(
        new CustomEvent("alakapuri:prefill-message", {
          detail: { message: prefillMessage }
        })
      );
    }

    if (isHashLink) {
      event.preventDefault();

      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    }

    if (focusTargetId) {
      window.setTimeout(() => {
        const focusTarget = document.getElementById(focusTargetId) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | null;

        focusTarget?.focus();
      }, 450);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.02em] transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
