"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type CarouselImageOrientation = "portrait" | "landscape";

export interface CarouselImage {
  src: string;
  alt: string;
  orientation?: CarouselImageOrientation;
}

/** Landscape height defines the fixed height for all slides; portrait slides use same height, narrower width */
const LANDSCAPE_ASPECT = 16 / 9;
const PORTRAIT_ASPECT = 3 / 4;

interface ImageCarouselProps {
  images: CarouselImage[];
  intervalMs?: number;
  /** Width of the center slide as a fraction of the container (0–1). Sides show previous/next. */
  centerSlideWidth?: number;
}

const GAP_REM = 0.75;

export default function ImageCarousel({
  images,
  intervalMs = 4500,
  centerSlideWidth = 0.7,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (images.length <= 1 || isPaused || fullscreenIndex !== null) return;
    const id = setInterval(() => goTo(currentIndex + 1), intervalMs);
    return () => clearInterval(id);
  }, [currentIndex, isPaused, fullscreenIndex, intervalMs, images.length, goTo]);

  const closeFullscreen = useCallback(() => {
    setCurrentIndex((prev) => (fullscreenIndex !== null ? fullscreenIndex : prev));
    setFullscreenIndex(null);
  }, [fullscreenIndex]);

  useEffect(() => {
    if (fullscreenIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fullscreenIndex, closeFullscreen]);

  useEffect(() => {
    if (fullscreenIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [fullscreenIndex]);

  useEffect(() => {
    if (fullscreenIndex !== null) closeButtonRef.current?.focus();
  }, [fullscreenIndex]);

  const fullscreenGoPrev = useCallback(() => {
    setFullscreenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);
  const fullscreenGoNext = useCallback(() => {
    setFullscreenIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );
  }, [images.length]);

  const slideHeightVw = useMemo(
    () => (centerSlideWidth * 100 * 9) / 16,
    [centerSlideWidth]
  );

  const slideWidthsVw = useMemo(() => {
    const h = (centerSlideWidth * 100 * 9) / 16;
    return images.map((img) =>
      (img.orientation ?? "portrait") === "landscape"
        ? (h * 16) / 9
        : (h * 3) / 4
    );
  }, [images, centerSlideWidth]);

  const trackStyle = useMemo(() => {
    const centerOffsetVw =
      slideWidthsVw.slice(0, currentIndex).reduce((a, b) => a + b, 0) +
      slideWidthsVw[currentIndex] / 2;
    const gapRem = currentIndex * GAP_REM;
    return {
      transform: `translateX(calc(50vw - ${centerOffsetVw}vw - ${gapRem}rem))`,
    };
  }, [currentIndex, slideWidthsVw]);

  if (!images.length) return null;

  return (
    <>
    <div
      className="relative w-full overflow-hidden bg-[#0f1419]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      <div
        className="flex items-center transition-transform duration-500 ease-out"
        style={{
          ...trackStyle,
          gap: `${GAP_REM}rem`,
          height: `${slideHeightVw}vw`,
        }}
      >
        {images.map((img, i) => {
          const ori = img.orientation ?? "portrait";
          const widthVw =
            ori === "landscape"
              ? slideHeightVw * LANDSCAPE_ASPECT
              : slideHeightVw * PORTRAIT_ASPECT;
          return (
            <div
              key={img.src}
              className="relative flex-shrink-0 overflow-hidden rounded-lg"
              style={{
                width: `${widthVw}vw`,
                height: `${slideHeightVw}vw`,
              }}
              aria-hidden={i !== currentIndex}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={`${widthVw}vw`}
                priority={i === 0}
              />
              <button
                type="button"
                className="absolute inset-0 cursor-pointer border-0 bg-transparent p-0"
                onClick={() => setFullscreenIndex(i)}
                aria-label={`View ${img.alt} full screen`}
              />
            </div>
          );
        })}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Slide indicators"
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Slide ${i + 1} of ${images.length}`}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {fullscreenIndex !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex min-h-[100dvh] min-w-[100dvw] items-center justify-center bg-black/95"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Full screen image"
            onClick={closeFullscreen}
          >
            <div
              className="relative flex h-full min-h-[100dvh] w-full min-w-[100dvw] items-center justify-center p-4"
              style={{ width: "100vw", height: "100dvh", maxWidth: "100vw", maxHeight: "100dvh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[fullscreenIndex].src}
                alt={images[fullscreenIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeFullscreen}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close full screen"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fullscreenGoPrev();
                  }}
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Previous image"
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fullscreenGoNext();
                  }}
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Next image"
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>,
          document.body
        )}
    </div>
    </>
  );
}
