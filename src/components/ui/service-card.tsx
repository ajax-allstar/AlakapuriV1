import type { LucideIcon } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0
}: ServiceCardProps) {
  return (
    <AnimatedInView className="h-full" delay={index * 0.05}>
      <article className="luxury-card group h-full p-6 sm:p-7">
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-2xl">{title}</h3>
          <p className="muted-copy mt-4 text-[0.98rem]">{description}</p>
        </div>
      </article>
    </AnimatedInView>
  );
}
