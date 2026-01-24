import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
      </div>

      {/* Schedule Content Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-white mb-12 text-center">
            Schedule
          </h1>

          {/* Friday */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
              Friday, July 30th, 2027
            </h2>
            <div className="bg-[#2a3441] rounded-lg p-6 space-y-4">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                [Placeholder text for Friday events]
              </p>
            </div>
          </div>

          {/* Saturday */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
              Saturday, July 31st, 2027
            </h2>
            <div className="bg-[#2a3441] rounded-lg p-6 space-y-4">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                [Placeholder text for Saturday events]
              </p>
            </div>
          </div>

          {/* Sunday */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
              Sunday, August 1st, 2027
            </h2>
            <div className="bg-[#2a3441] rounded-lg p-6 space-y-4">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                [Placeholder text for Sunday events]
              </p>
            </div>
          </div>

          {/* Monday */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
              Monday, August 2nd, 2027
            </h2>
            <div className="bg-[#2a3441] rounded-lg p-6 space-y-4">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                [Placeholder text for Monday events]
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
