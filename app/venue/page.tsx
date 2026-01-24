import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
      </div>

      {/* Top Section: Venue Description and Photo */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
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
                  Nestled in the heart of Aberdeenshire, Logie Country House stands as a testament to Scottish heritage and elegance. Originally a fortified castle dating back to 1492, this historic estate has been lovingly restored and renovated in 2006, blending centuries of history with modern luxury.
                </p>
                <p>
                  The estate offers an array of exceptional amenities for our wedding celebration. Guests can enjoy the indoor pool, relax in one of the seventeen beautifully appointed bedrooms, or gather in the two charming courtyards. For those seeking relaxation, two outdoor hot tubs provide the perfect escape, while the on-site cinema offers entertainment for all ages.
                </p>
                <p>
                  One of the most delightful features of Logie Country House is the presence of tame Highland cows, adding a touch of authentic Scottish charm to the picturesque surroundings. This unique venue combines historic grandeur with modern comfort, creating the perfect setting for our special day.
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
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJ6u9HzVBhEgRYSdN5zYbNZw&key=AIzaSyAN4qzjOu_f_FqLmBkGB-B4KcX2wwWtvUw"
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
                Most parts of our wedding celebration will take place indoors, ensuring comfort regardless of the Scottish weather. The ceremony and reception will be held in the beautifully appointed indoor spaces of Logie Country House.
              </p>
              <p>
                However, the venue also boasts lovely outdoor spaces and grounds that guests are welcome to explore. The two charming courtyards provide perfect spots for mingling and enjoying the fresh air, and the estate grounds offer picturesque views of the surrounding countryside.
              </p>
              <p>
                Whether you prefer to stay cozy indoors or venture outside to enjoy the natural beauty of Aberdeenshire, there will be spaces available for everyone to feel comfortable and enjoy the celebration.
              </p>
              <p>
                There are stairs inside the house, but all of the event spaces are wheelchair accessible.
              </p>
              <p>
                Restrooms are available in the ballroom and manor house.
              </p>
              <p>
                Smoking is only allowed outside.
              </p>
              <p>
                There are three Highland Cows living on the property, and you can go visit them if you like.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
