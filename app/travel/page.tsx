"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeaderSpacer from "@/components/HeaderSpacer";
import Footer from "@/components/Footer";

export default function TravelPage() {
  const [openSections, setOpenSections] = useState({
    car: true,
    plane: true,
    train: true,
    accommodation: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
        <HeaderSpacer />
      </div>

      {/* Travel Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-white mb-12 text-center">
            Travel & Accommodation
          </h1>

          {/* Arriving by Plane */}
          <div className={openSections.plane ? "mb-16" : "mb-6"}>
            <button
              onClick={() => toggleSection("plane")}
              className="w-full flex items-center justify-between text-left mb-6 group"
            >
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white">
                Arriving by Plane
              </h2>
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openSections.plane ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`bg-[#2a3441] rounded-lg overflow-hidden ${
                openSections.plane
                  ? "transition-[max-height,opacity] duration-500 ease-out max-h-[2000px] opacity-100"
                  : "transition-[max-height] duration-300 ease-in max-h-0 [transition:max-height_300ms_ease-in,opacity_100ms_ease-in_200ms] opacity-0"
              }`}
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                  <p>
                    The nearest airport is <strong>Aberdeen Airport</strong>, located approximately <strong>30 minutes</strong> away by car from Logie Country House.
                  </p>
                  <p>
                    The closest major international airport is <strong>Edinburgh Airport</strong>, located approximately <strong>2 hours 40 minutes</strong> away by car. For guests arriving from Finland, Finnair operates a direct Helsinki-Edinburgh flight.
                  </p>
                </div>
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1lDu_G3J_4PSS2yU8Zr3xYD9vYSkdnPs&ehbc=2E312F&noprof=1"
                    width="100%"
                    height="480"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-lg"
                    title="Airports map"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Arriving by Car */}
          <div className={openSections.car ? "mb-16" : "mb-6"}>
            <button
              onClick={() => toggleSection("car")}
              className="w-full flex items-center justify-between text-left mb-6 group"
            >
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white">
                Arriving by Car
              </h2>
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openSections.car ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`bg-[#2a3441] rounded-lg overflow-hidden ${
                openSections.car
                  ? "transition-[max-height,opacity] duration-500 ease-out max-h-[2000px] opacity-100"
                  : "transition-[max-height] duration-300 ease-in max-h-0 [transition:max-height_300ms_ease-in,opacity_100ms_ease-in_200ms] opacity-0"
              }`}
            >
              <div className="p-6 sm:p-8 space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  Logie Country House is located on the A96 Aberdeen to Inverness trunk road. There are two routes to access the venue, depending on your vehicle size.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Front Drive (Smaller Vehicles)</h3>
                    <p>
                      The front drive is directly off the A96 at the gatehouse. This route has a <strong>2-tonne weight limit</strong> due to a bridge crossing. This is the simplest route for most cars and smaller vehicles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Rear Drive (Larger Vehicles)</h3>
                    <p>
                      Larger vehicles (over 2 tonnes) should use the rear drive, which is accessed via Whiteford. This route has no weight restrictions and is suitable for buses, larger vans, and other heavy vehicles.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1a2332] rounded p-4 my-4">
                  <p className="text-white font-semibold mb-2">⚠️ Important Navigation Warning</p>
                  <p>
                    In our experience, typing "Logie Country House" into Google Maps is pretty reliable, but the venue have informed us that using the postcode <strong>AB51 5EE</strong> does not work reliably with some satnav systems — it may take you past the rear drive instead of to the house. For accurate directions, we recommend using Google Maps and/or watching the video directions linked below.
                  </p>
                </div>
                <p>
                  For detailed video directions from different locations, please visit the{" "}
                  <a
                    href="https://www.logiecountryhouse.co.uk/contact-logie-country-house/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Logie Country House contact page
                  </a>
                  , which includes helpful video guides for finding the venue.
                </p>
                <h3 className="text-white font-semibold mb-2">Parking</h3>
                <p>
                  Parking is available behind the ballroom, and is sign-posted on the way in. Overnight guests can bring their cars to the house to drop off their bags, but please make sure to move them to the car park afterwards.
                </p>
                <p>
                  There is parking space and electrical hook-up for two camper vans on site. If you're thinking of bringing one, please let us know in advance.
                </p>
              </div>
            </div>
          </div>

          {/* Arriving by Train */}
          <div className={openSections.train ? "mb-16" : "mb-6"}>
            <button
              onClick={() => toggleSection("train")}
              className="w-full flex items-center justify-between text-left mb-6 group"
            >
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white">
                Arriving by Train
              </h2>
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openSections.train ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`bg-[#2a3441] rounded-lg overflow-hidden ${
                openSections.train
                  ? "transition-[max-height,opacity] duration-500 ease-out max-h-[2000px] opacity-100"
                  : "transition-[max-height] duration-300 ease-in max-h-0 [transition:max-height_300ms_ease-in,opacity_100ms_ease-in_200ms] opacity-0"
              }`}
            >
              <div className="p-6 sm:p-8 space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  The closest train stations to Logie Country House are <strong>Inverurie</strong> and <strong>Insch</strong>, both of which are less than <strong>15 minutes</strong> away by taxi from the venue.
                </p>
                <p>
                  Guests can check a list of local taxi firms on the{" "}
                  <a
                    href="https://www.logiecountryhouse.co.uk/aberdeenshire-wedding-suppliers/wedding-transport/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Logie Country House wedding transport page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className={openSections.accommodation ? "mb-16" : "mb-6"}>
            <button
              onClick={() => toggleSection("accommodation")}
              className="w-full flex items-center justify-between text-left mb-6 group"
            >
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white">
                Accommodation
              </h2>
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openSections.accommodation ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`bg-[#2a3441] rounded-lg overflow-hidden ${
                openSections.accommodation
                  ? "transition-[max-height,opacity] duration-500 ease-out max-h-[2000px] opacity-100"
                  : "transition-[max-height] duration-300 ease-in max-h-0 [transition:max-height_300ms_ease-in,opacity_100ms_ease-in_200ms] opacity-0"
              }`}
            >
              <div className="p-6 sm:p-8 space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
                <p>
                  Logie House has a number of bedrooms, but not enough to house all of our guests. These bedrooms will largely be reserved for the wedding party. However, there is plenty of nearby accommodation for our other guests.
                </p>
                <p>
                  The closest hotels to our wedding venue are the newly refurbished <strong>Station Hotel in Insch</strong> and the beautifully located <strong>Pittodrie House Hotel in Chapel of Garioch</strong>. There are lots of nearby Airbnbs too. Inverurie is the closest town and has a number of hotels, B&Bs and guest houses. Many of the local hotels offer a discount for Logie Country House guests. Just ask when you contact them.
                </p>
                <p>
                  There are serviced apartments slightly further away in Aberdeen too.
                </p>
                <p>
                  For a comprehensive list of recommended accommodation options, please visit the{" "}
                  <a
                    href="https://www.logiecountryhouse.co.uk/aberdeenshire-wedding-suppliers/wedding-accommodation-nearby/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Logie Country House wedding accommodation page
                  </a>
                  .
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
