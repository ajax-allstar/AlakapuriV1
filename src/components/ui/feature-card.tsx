import type { LucideIcon } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0
}: FeatureCardProps) {
  return (
    <AnimatedInView delay={index * 0.05}>
      <article className="luxury-card h-full p-6">
        <div className="relative z-10 flex items-start gap-4">
          <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-highlight">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl">{title}</h3>
            <p className="muted-copy mt-3 text-[0.98rem]">{description}</p>
          </div>
        </div>
      </article>
    </AnimatedInView>
  );
}
