import Header from "@/components/Header";
import HeaderSpacer from "@/components/HeaderSpacer";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
        <HeaderSpacer />
      </div>

      {/* Top Section: Venue Description and Photo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title above both columns */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif italic text-white mb-2 text-center md:text-left">
            logie
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wider mb-8 font-light text-center md:text-left">
            COUNTRY HOUSE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Text */}
            <div>
              <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  Our wedding will take place at Logie Country House, a beautiful manor home located on an estate dating back to the 15th century. It sits just outside the town of Inverurie in Aberdeenshire. Originally a fortified tower house, it grew into a large country home and later a hotel. It was largely destroyed in a fire in 1974, save for the old stone tower, and was restored to the venue you see today in the late 2000s.
                </p>
                <p>
                  We&apos;ll have exclusive use of the house and estate for the weekend, from 1pm on Friday til noon on Monday. Our guests will be able to enjoy all the amenities of the house and estate, including the indoor pool, two hot tubs, a home cinema, and more.
                </p>
                <p>
                  The estate is also home to a trio of Highland cows named Ophelia, Cecilia, and Ermintrude. They live just across the river at the bottom of the lawn, and guests are free to visit them and feed them treats, if they can be coaxed out of the shade of their favourite tree.
                </p>
              </div>
            </div>

            {/* Right Column: Venue Photo */}
            <div>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/logie-country-house.jpg"
                  alt="Logie Country House"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Google Maps */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJ6u9HzVBhEgRYSdN5zYbNZw&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg"
            title="Logie Country House Location"
          />
        </div>
      </section>

      {/* Practical Information Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-8 text-center">
            Practical Information
          </h2>
          <div className="bg-[#2a3441] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
              <p>
                On the wedding day itself, all events will take place indoors, ensuring comfort regardless of the Scottish weather. The ceremony and evening reception will be held in the ballroom, while the drinks reception will take place in the main house.
              </p>
              <p>
                However, the venue also boasts lovely outdoor spaces and grounds that guests are welcome to explore. The two charming courtyards provide perfect spots for mingling and enjoying the fresh air, and the estate grounds offer picturesque views of the surrounding countryside.
              </p>
              <p>
                There are stairs inside the house, but all of the event spaces are wheelchair accessible. If you&apos;re staying overnight in the house, be prepared to haul your bags up some stairs. Gen promises to voluntell her brother to help out those who need it. 
              </p>
              <p>
                Restrooms are available in the ballroom and manor house.
              </p>
              <p>
                Smoking is only allowed outside - please don&apos;t get us in trouble with the owners.
              </p>
              <p>
                If you&apos;re curious about the facilities at Logie, check out their <a href="https://www.logiecountryhouse.co.uk/faqs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">FAQ</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
