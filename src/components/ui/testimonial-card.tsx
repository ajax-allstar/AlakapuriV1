import { Quote } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";

type TestimonialCardProps = {
  quote: string;
  guest: string;
  context: string;
  index?: number;
};

export function TestimonialCard({
  quote,
  guest,
  context,
  index = 0
}: TestimonialCardProps) {
  return (
    <AnimatedInView delay={index * 0.08} className="h-full">
      <article className="luxury-card h-full p-6 sm:p-7">
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
            <Quote className="h-5 w-5" aria-hidden="true" />
          </div>
          <blockquote className="text-xl leading-8 text-[color:var(--text-primary)]">
            “{quote}”
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-semibold">{guest}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[color:var(--text-secondary)]">
              {context}
            </p>
          </div>
        </div>
      </article>
    </AnimatedInView>
  );
}
