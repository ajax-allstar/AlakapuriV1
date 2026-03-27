import { SECTION_IDS } from "@/lib/constants";
import { GalleryCard } from "@/components/ui/gallery-card";
import { SectionHeader } from "@/components/ui/section-header";
import { galleryItems } from "@/lib/data";

export function GallerySection() {
  return (
    <section id={SECTION_IDS.gallery} className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Photo Gallery"
          title="The current website uses your real uploads for dishes, logo, and menu visuals."
          description="These are the visuals you provided. Real shop photos can be swapped in later without changing the section structure."
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
