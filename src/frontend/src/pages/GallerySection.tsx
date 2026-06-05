import { gallery } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export function GallerySection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  const closeLightbox = () => setLightbox(null);
  const lightboxPrev = () =>
    setLightbox((lb) =>
      lb ? { index: (lb.index - 1 + gallery.length) % gallery.length } : null,
    );
  const lightboxNext = () =>
    setLightbox((lb) =>
      lb ? { index: (lb.index + 1) % gallery.length } : null,
    );

  return (
    <section
      id="gallery"
      className="py-20 bg-muted/30"
      data-ocid="gallery.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Beauty <span className="gradient-gold">Gallery</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground max-w-xl mx-auto">
            A glimpse into the transformations and artistry that happen inside
            our salon every day.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-0"
          data-ocid="gallery.list"
        >
          {gallery.map((img, i) => (
            <button
              key={img.id}
              type="button"
              className="group relative mb-3 overflow-hidden rounded-xl cursor-pointer break-inside-avoid block w-full text-left"
              onClick={() => setLightbox({ index: i })}
              data-ocid={`gallery.item.${i + 1}`}
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-smooth duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-smooth flex items-center justify-center">
                <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox &&
        (() => {
          const img = gallery[lightbox.index];
          return (
            <dialog
              open
              className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 w-full h-full max-w-none m-0 border-none"
              aria-label="Image preview"
              data-ocid="gallery.lightbox.dialog"
            >
              <button
                type="button"
                aria-label="Close lightbox"
                onClick={closeLightbox}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-card/20 text-white flex items-center justify-center hover:bg-card/40 transition-smooth"
                data-ocid="gallery.lightbox.close_button"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Previous image"
                onClick={lightboxPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/20 text-white flex items-center justify-center hover:bg-card/40 transition-smooth"
                data-ocid="gallery.lightbox.pagination_prev"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={lightboxNext}
                className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/20 text-white flex items-center justify-center hover:bg-card/40 transition-smooth"
                data-ocid="gallery.lightbox.pagination_next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center gap-3">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-elegant"
                />
                <p className="font-body text-sm text-white/70">
                  {lightbox.index + 1} / {gallery.length}
                </p>
              </div>
            </dialog>
          );
        })()}
    </section>
  );
}
