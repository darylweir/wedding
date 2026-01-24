"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  // Format: { src, alt, orientation: 'landscape' | 'portrait' }
  const galleryImages = [
    { src: "/images/gallery/photo-1.jpg", alt: "Wedding photo 1", orientation: "portrait" },
    { src: "/images/gallery/photo-2.jpg", alt: "Wedding photo 2", orientation: "portrait" },
    { src: "/images/gallery/photo-3.jpg", alt: "Wedding photo 3", orientation: "portrait" },
    { src: "/images/gallery/photo-4.jpg", alt: "Wedding photo 4", orientation: "landscape" },
    { src: "/images/gallery/photo-5.jpg", alt: "Wedding photo 5", orientation: "portrait" },
    { src: "/images/gallery/photo-6.jpg", alt: "Wedding photo 6", orientation: "portrait" },
    { src: "/images/gallery/photo-7.jpg", alt: "Wedding photo 7", orientation: "portrait" },
    { src: "/images/gallery/photo-8.jpg", alt: "Wedding photo 8", orientation: "landscape" },
    { src: "/images/gallery/photo-9.jpg", alt: "Wedding photo 9", orientation: "portrait" },
    { src: "/images/gallery/photo-10.jpg", alt: "Wedding photo 10", orientation: "portrait" },
    { src: "/images/gallery/photo-11.jpg", alt: "Wedding photo 11", orientation: "portrait" },
    { src: "/images/gallery/photo-12.jpg", alt: "Wedding photo 12", orientation: "landscape" },
    { src: "/images/gallery/photo-13.jpg", alt: "Wedding photo 13", orientation: "portrait" },
    { src: "/images/gallery/photo-14.jpg", alt: "Wedding photo 14", orientation: "portrait" },
    { src: "/images/gallery/photo-15.jpg", alt: "Wedding photo 15", orientation: "portrait" },
  ];

  // Organize images into rows: 3 portraits, then 1 landscape, alternating
  const organizeIntoRows = () => {
    const rows: Array<{ type: "portrait" | "landscape"; images: typeof galleryImages }> = [];
    const portraits = galleryImages.filter((img) => img.orientation === "portrait");
    const landscapes = galleryImages.filter((img) => img.orientation === "landscape");
    
    let portraitIndex = 0;
    let landscapeIndex = 0;
    let isPortraitRow = true;

    while (portraitIndex < portraits.length || landscapeIndex < landscapes.length) {
      if (isPortraitRow && portraitIndex < portraits.length) {
        // Create a row of 3 portraits
        const portraitRow = portraits.slice(portraitIndex, portraitIndex + 3);
        rows.push({ type: "portrait", images: portraitRow });
        portraitIndex += 3;
        isPortraitRow = false;
      } else if (!isPortraitRow && landscapeIndex < landscapes.length) {
        // Create a row of 1 landscape (full width)
        rows.push({ type: "landscape", images: [landscapes[landscapeIndex]] });
        landscapeIndex++;
        isPortraitRow = true;
      } else {
        // Handle remaining images
        if (portraitIndex < portraits.length) {
          const remainingPortraits = portraits.slice(portraitIndex);
          rows.push({ type: "portrait", images: remainingPortraits });
          portraitIndex = portraits.length;
        }
        if (landscapeIndex < landscapes.length) {
          rows.push({ type: "landscape", images: [landscapes[landscapeIndex]] });
          landscapeIndex++;
        }
      }
    }

    return rows;
  };

  const rows = organizeIntoRows();

  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Banner Section */}
      <section className="relative w-full h-[75vh] min-h-[650px] overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          {/* Placeholder for banner image - replace with actual image */}
          <Image
            src="/images/gallery/banner.jpg"
            alt="Wedding gallery banner"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Overlay for better header visibility */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Header with Navigation */}
        <Header />
      </section>

      {/* Dark Separator Bar */}
      <div className="w-full h-2 bg-[#1a2332]" />

      {/* Text Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            We can&apos;t wait to make wonderful memories with all of you at the wedding. Afterwards, you can check back here to find photos of our special day. Until then, please enjoy these photos from our engagement photoshoot.
          </p>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={
                row.type === "portrait"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "w-full"
              }
            >
              {row.images.map((image, imageIndex) => (
                <div
                  key={`${rowIndex}-${imageIndex}`}
                  className={`relative overflow-hidden rounded-lg shadow-lg ${
                    image.orientation === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
