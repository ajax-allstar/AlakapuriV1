import { AnimatedInView } from "@/components/ui/animated-in-view";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <AnimatedInView
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title text-balance pt-5">{title}</h2>
      <p className="muted-copy pt-5">{description}</p>
    </AnimatedInView>
  );
}
