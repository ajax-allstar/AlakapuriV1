import type { LucideIcon } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { cn } from "@/lib/utils";

type PackageCardProps = {
  icon: LucideIcon;
  label: string;
  description: string;
  highlight?: boolean;
  index?: number;
};

export function PackageCard({
  icon: Icon,
  label,
  description,
  highlight = false,
  index = 0
}: PackageCardProps) {
  return (
    <AnimatedInView delay={index * 0.04}>
      <article
        className={cn(
          "luxury-card h-full p-5 sm:p-6",
          highlight && "border-primary/30 bg-primary/10 shadow-glow"
        )}
      >
        <div className="relative z-10">
          <div
            className={cn(
              "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground",
              highlight && "border-primary/35 bg-primary/15 text-primary"
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg leading-7">{label}</h3>
          <p className="muted-copy mt-3 text-[0.95rem] leading-6">{description}</p>
        </div>
      </article>
    </AnimatedInView>
  );
}
