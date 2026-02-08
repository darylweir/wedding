import Header from "@/components/Header";
import HeaderSpacer from "@/components/HeaderSpacer";
import Footer from "@/components/Footer";

export default function RSVPPage() {
  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
        <HeaderSpacer />
      </div>

      {/* RSVP Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-white mb-8">
            It&apos;s not ready yet!
          </h1>
          <div className="space-y-6 text-white/90 text-base sm:text-lg leading-relaxed">
            <p>
              Thank you for your interest in RSVPing to our wedding!
            </p>
            <p>
              Our top boffins (read: Daryl) are hard at work setting up the RSVP system. Please check back after you receive the formal invitation later this year to confirm your attendance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
