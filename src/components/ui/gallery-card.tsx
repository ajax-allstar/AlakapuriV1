import Image from "next/image";
import { AnimatedInView } from "@/components/ui/animated-in-view";

type GalleryCardProps = {
  src: string;
  alt: string;
  label: string;
  index?: number;
};

export function GalleryCard({ src, alt, label, index = 0 }: GalleryCardProps) {
  return (
    <AnimatedInView delay={index * 0.05} className="h-full">
      <figure className="luxury-card group h-full min-h-[280px]">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-5 py-5">
          <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {label}
          </span>
          <span className="text-sm text-white/80">Gallery View</span>
        </figcaption>
      </figure>
    </AnimatedInView>
  );
}
