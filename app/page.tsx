import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          {/* Fallback gradient overlay for when video is loading or unavailable */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-sky-300/30 via-blue-400/30 to-cyan-500/30" />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        
        {/* Header with Navigation */}
        <Header />
        
        {/* Hero Content */}
        <div className="relative z-20 w-full text-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
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
              className="inline-block px-8 py-4 bg-white/95 text-rose-700 font-semibold text-lg rounded-lg hover:bg-white transition-all shadow-xl hover:shadow-2xl uppercase tracking-wide"
            >
              RSVP HERE
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <a
            href="#our-story"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-sm uppercase tracking-wider mb-2 opacity-70 group-hover:opacity-100">
              Scroll
            </span>
            <svg
              className="w-8 h-8"
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
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Portrait Image - Left */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-2xl">
                {/* Placeholder for portrait image - replace with actual image */}
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
                  Daryl and Genesis met in the early spring of 2023, both having moved away from their home countries and lived in Helsinki. Their initial interactions were marked by shared interests and deep conversations.
                </p>
                <p>
                  Coming together after tragedy and finding peace, they discovered a mutual love for fantasy novels and meaningful connections. After speaking on the phone for 4 hours and a few tears later, they were hooked.
                </p>
                <p>
                  They chose April 6th as their anniversary because that was the date of the first message Daryl sent Genesis on the dating app—a moment that would change both their lives forever.
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
                  For centuries, the kingdom of Iadian has been protected by the god known as the Raven. The Raven&apos;s will is made manifest through the Raven&apos;s Lance, and the Lance&apos;s power is absolute—requiring only a blood sacrifice.
                </p>
                <p>
                  But the power of the Raven is weakening. A usurper has claimed the throne. Invaders are attacking the borders. And the Raven&apos;s Tower, the source of the Lance&apos;s power, is failing.
                </p>
                <p>
                  A warrior named Eolo has discovered a secret within the Raven&apos;s Tower—a secret that could change the fate of the kingdom forever.
                </p>
              </div>
            </div>
            
            {/* Book Cover - Right */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-[2/3] w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-2xl">
                {/* Placeholder for book cover - replace with actual image */}
                {/* <Image
                  src="/images/raven-tower-cover.jpg"
                  alt="The Raven Tower by Ann Leckie"
                  fill
                  className="object-cover"
                /> */}
                <div className="w-full h-full bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 flex flex-col items-center justify-center p-6 border-4 border-amber-700">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-serif mb-2">THE RAVEN TOWER</h3>
                    <p className="text-amber-200 text-sm">ANN LECKIE</p>
                  </div>
                  <div className="mt-6 w-24 h-24 bg-amber-700 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <p className="text-amber-200 text-xs mt-4 text-center">Book Cover Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
