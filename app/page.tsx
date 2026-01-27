"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);
  // Start with false to prevent flicker, will be set correctly on mount
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 100;
      const opacity = Math.max(0, 1 - scrollY / fadeDistance);
      setScrollIndicatorOpacity(opacity);
      
      // Hide scroll indicator completely once user has scrolled past hero section
      const ourStorySection = document.getElementById("our-story");
      if (ourStorySection) {
        const sectionTop = ourStorySection.offsetTop;
        const viewportHeight = window.innerHeight;
        // Hide when we're past the hero section (when our-story section is in view)
        setShowScrollIndicator(scrollY < sectionTop - viewportHeight / 2);
      } else {
        // If section not found yet, show indicator if at top of page
        setShowScrollIndicator(scrollY < 100);
      }
    };

    // Check immediately on mount
    checkScrollPosition();
    
    // Also check after a brief delay to catch any layout shifts
    const timeout = setTimeout(checkScrollPosition, 100);

    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <source src="/videos/hero-background.webm" type="video/webm" />
            {/* Fallback gradient if video doesn't load */}
            <div className="w-full h-full bg-gradient-to-b from-sky-300 via-blue-400 to-cyan-500" />
          </video>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Header with Navigation */}
        <Header />
        
        {/* Hero Content */}
        <div className="relative z-20 w-full text-center px-4 sm:px-6 lg:px-8 pt-52 pb-20">
          {/* Names in script font */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-white mb-4 drop-shadow-lg">
            Daryl & Genesis
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-2 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-wide uppercase">
              ARE GETTING MARRIED IN SCOTLAND
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light">
              SATURDAY, JULY 31st, 2027
            </p>
          </div>
          
          {/* RSVP Button */}
          <div className="mt-12">
            <a
              href="/rsvp"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold text-lg rounded-lg border border-white/30 hover:bg-white/40 transition-all shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              RSVP HERE
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300"
            style={{ opacity: scrollIndicatorOpacity }}
          >
          <a
            href="#our-story"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-sm uppercase tracking-wider mb-2 opacity-70 group-hover:opacity-100">
              Scroll
            </span>
            <svg
              className="w-8 h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
        )}
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Portrait Image - Left */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/couple-portrait.jpg"
                  alt="Daryl and Genesis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Story Text - Right */}
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-serif italic text-white mb-6">
                OUR STORY
              </h2>
              <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  Though Daryl and Genesis both moved away from their home countries and lived in Helsinki for years, they didn&apos;t cross paths with one another until the spring of 2023.
                </p>
                <p>
                  They had both taken a bumpy road to get to that point, but in each other they both found exactly what they were looking for: peace, companionship, and a place to heal. 
                </p>
                <p>
                  They traded messages for a couple of weeks, and set a first date to meet in person. Unfortunately, at the last minute Gen fell sick and they had to pivot to a video call. Despite that, there was an instant connection and before they knew it four hours, a lot of laughs, and even a few tears had passed. 
                </p>
                <p>
                  The next week they finally met in person for dinner, and both suspected they had found something special. A comedy club visit followed, and then another date, and another, and another... They never had the "what are we?" conversation. Instead, one night after meeting Gen's friend Jenni for the first time, Daryl simply asked "so, how did I do with the whole meet-the-boyfriend thing?" And that was that. Lacking an "official" date, they picked April 6th as their anniversary since that was the date of the first message Daryl sent to Gen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fantasy Book Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Fantasy Text - Left */}
            <div className="order-2 md:order-1">
              <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  One of the first things Daryl and Genesis bonded over was their shared love of fantasy novels. Before their first date, they agreed to start reading the same book and discuss the first few chapters together. Daryl suggested a few books from his TBR pile, and Gen chose The Raven Tower by Ann Leckie.
                </p>
                <p>
                  In the end, they barely discussed the book on the first date, but the conversation roamed from one topic to another, touching on lots of other books that they each loved.
                </p>
                <p>
                  They eventually finished the book. Daryl liked it (he gave it 4/5 on Goodreads); Gen secretly wasn't impressed but didn't admit that until much later. Despite the mismatch, it started a habit of sharing the things they loved with each other that still runs strong today.
                </p>
              </div>
            </div>
            
            {/* Book Cover - Right */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-[2/3] w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/raven-tower-cover.jpg"
                  alt="The Raven Tower by Ann Leckie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Placeholder Image - Left */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400 flex items-center justify-center">
                  <p className="text-rose-700 text-sm text-center px-4">
                    Placeholder Image
                  </p>
                </div>
              </div>
            </div>
            
            {/* Dummy Text - Right */}
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-serif italic text-white mb-6">
                Section Title
              </h2>
              <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
