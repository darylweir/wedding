import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-rose-700 mb-4">
              Gen and Daryl
            </h1>
            <div className="text-2xl sm:text-3xl text-rose-600 mb-8">
              are getting married!
            </div>
            <div className="text-xl sm:text-2xl text-rose-500 font-light">
              July 31st, 2027 • Logie Country House
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-rose-700 mb-12">
              Event Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-rose-50 rounded-lg">
                <h3 className="text-2xl font-semibold text-rose-800 mb-4">Ceremony</h3>
                <p className="text-rose-700 mb-2">[Time]</p>
                <p className="text-rose-600">[Venue Name]</p>
                <p className="text-rose-600">[Address]</p>
              </div>
              <div className="text-center p-6 bg-rose-50 rounded-lg">
                <h3 className="text-2xl font-semibold text-rose-800 mb-4">Reception</h3>
                <p className="text-rose-700 mb-2">[Time]</p>
                <p className="text-rose-600">[Venue Name]</p>
                <p className="text-rose-600">[Address]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline/Schedule Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-rose-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-rose-700 mb-12">
              Schedule
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-rose-600 font-semibold min-w-[80px]">[Time]</div>
                <div>
                  <h3 className="font-semibold text-rose-800 mb-1">Ceremony</h3>
                  <p className="text-rose-600 text-sm">Join us for the wedding ceremony</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-rose-600 font-semibold min-w-[80px]">[Time]</div>
                <div>
                  <h3 className="font-semibold text-rose-800 mb-1">Cocktail Hour</h3>
                  <p className="text-rose-600 text-sm">Drinks and appetizers</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-rose-600 font-semibold min-w-[80px]">[Time]</div>
                <div>
                  <h3 className="font-semibold text-rose-800 mb-1">Reception</h3>
                  <p className="text-rose-600 text-sm">Dinner, dancing, and celebration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location/Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-rose-700 mb-12">
              Location
            </h2>
            <div className="bg-rose-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-rose-800 mb-4">
                Logie Country House
              </h3>
              <p className="text-rose-700 mb-2">A96, Pitcaple, Inverurie</p>
              <p className="text-rose-700 mb-2">Aberdeenshire, AB51 5EE</p>
              <p className="text-rose-700 mb-2">Scotland</p>
              <div className="mt-6 h-64 bg-rose-200 rounded-lg flex items-center justify-center">
                <p className="text-rose-600">Map placeholder - Add Google Maps embed or image</p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.logiecountryhouse.co.uk/contact-logie-country-house/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-rose-700 mb-8">
              Questions?
            </h2>
            <p className="text-lg text-rose-700 mb-4">
              We&apos;d love to hear from you!
            </p>
            <div className="space-y-2 text-rose-600">
              <p>[Contact Name 1]</p>
              <p>[Email or Phone]</p>
              <p className="mt-4">[Contact Name 2]</p>
              <p>[Email or Phone]</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
