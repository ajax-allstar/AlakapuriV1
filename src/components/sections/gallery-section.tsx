import { GalleryCard } from "@/components/ui/gallery-card";
import { SectionHeader } from "@/components/ui/section-header";
import { galleryItems } from "@/lib/data";

export function GallerySection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Gallery Showcase"
          title="Organised placeholders for food, ambience, exterior, reception, and stay."
          description="The gallery uses structured image paths under /public/images so the visual direction can be upgraded later without changing section logic. For now it still feels polished, animated, and purposeful."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.label}
              src={item.src}
              alt={item.alt}
              label={item.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
