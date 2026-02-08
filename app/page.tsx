"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
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
                Our Story
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
            <div className="order-1">
            <h2 className="text-5xl sm:text-6xl font-serif italic text-white mb-6">
                Early Connections
              </h2>
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
            <div className="order-2">
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

      {/* Growing Love Section - full-width text + carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-5xl sm:text-6xl font-serif italic text-white mb-6">
            Growing Love
          </h2>
          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
            <p>
              After that, the milestones came thick and fast. Meeting each other's friends, introducing Gen's cat to Daryl's dog, Gen's first ceilidh, travelling to Scotland, Stockholm, Copenhagen, Houston, and Paris, moving in together at Daryl's place, and then buying a house in the suburbs.
              With each of these moments, their love grew stronger and deeper. They each made the other's life better in ways small and large.
            </p>
          </div>
        </div>
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <ImageCarousel
            images={[
              { src: "/images/carousel/carousel-1.jpg", alt: "Growing love 1" },
              { src: "/images/carousel/carousel-2.jpg", alt: "Growing love 2", orientation: "landscape" },
              { src: "/images/carousel/carousel-3.jpg", alt: "Growing love 3" },
              { src: "/images/carousel/carousel-4.jpg", alt: "Growing love 4" },
              { src: "/images/carousel/carousel-5.jpg", alt: "Growing love 5" },
              { src: "/images/carousel/carousel-6.jpg", alt: "Growing love 6" },
              { src: "/images/carousel/carousel-7.jpg", alt: "Growing love 7" },
              { src: "/images/carousel/carousel-8.jpg", alt: "Growing love 8" },
              { src: "/images/carousel/carousel-9.jpg", alt: "Growing love 9" },
              { src: "/images/carousel/carousel-10.jpg", alt: "Growing love 10" },
              { src: "/images/carousel/carousel-11.jpg", alt: "Growing love 11" },
              { src: "/images/carousel/carousel-12.jpg", alt: "Growing love 12", orientation: "landscape" },
              { src: "/images/carousel/carousel-13.jpg", alt: "Growing love 13" },
              { src: "/images/carousel/carousel-14.jpg", alt: "Growing love 14" },
              { src: "/images/carousel/carousel-15.jpg", alt: "Growing love 15", orientation: "landscape" },
              { src: "/images/carousel/carousel-16.jpg", alt: "Growing love 16", orientation: "landscape" },
              { src: "/images/carousel/carousel-17.jpg", alt: "Growing love 17" },
              { src: "/images/carousel/carousel-18.jpg", alt: "Growing love 18" },
              { src: "/images/carousel/carousel-19.jpg", alt: "Growing love 19" },
              { src: "/images/carousel/carousel-20.jpg", alt: "Growing love 20" },
              { src: "/images/carousel/carousel-21.jpg", alt: "Growing love 21" },
            ]}
            intervalMs={4500}
          />
        </div>
      </section>

      {/* The Proposal Section - image right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Proposal Text - Left */}
            <div className="order-1">
              <h2 className="text-5xl sm:text-6xl font-serif italic text-white mb-6">
                The Proposal
              </h2>
              <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  Daryl had a plan. He was going to propose to Gen on a trip to Paris in May of 2025. However, a romantic weekend in France was not exactly subtle, and Gen began to suspect what was going on.
                </p>
                <p>
                  To try and maintain some sense of surprise, he decided to change his plans: he would propose on their second anniversary, April 6th, 2025. After a dinner at the new Brazilian steakhouse, Gaucho, they would take a walk down by the harbour in the center of Helsinki, and there he'd pop the question.
                </p>
                <p>
                  As they were waiting for the cab to the city, Gen was struck by an intrusive thought. She reached out and patted Daryl's jacket pocket, and felt the ring box. A little chagrined, Daryl still stuck to the original plan, and made Gen wait through dinner to see the ring and hear the all-important question. 
                </p>
                <p>
                  On Rakkauden Silta, the Bridge of Love, right by the apartment Gen lived in when they first met, Daryl got down on one knee and proposed. Despite the lack of surprise, Gen said yes without hesitation.
                </p>
              </div>
            </div>

            {/* Proposal Image - Right */}
            <div className="order-2">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/proposal.jpg"
                  alt="The proposal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Road to the Wedding Section - image left */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/baby-on-the-way.jpg"
                  alt="Gen and Daryl in the hallway of their house, holding a positive pregnancy test"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text - Right */}
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-serif italic text-white mb-6">
                Road to the Wedding
              </h2>
              <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  They planned a relatively long engagement, setting the date for mid 2027. That long gap left plenty of time for other surprises. In September of 2025, just a few weeks after their engagement photoshoot, they found out Gen was pregnant.
                </p>
                <p>
                  Now they find themselves planning a wedding and prepping a nursery for the arrival of their baby, due in May 2026.
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
