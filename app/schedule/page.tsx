import Header from "@/components/Header";
import HeaderSpacer from "@/components/HeaderSpacer";
import Footer from "@/components/Footer";
import ScheduleDay, { Event } from "@/components/ScheduleDay";

const scheduleData: { date: string; events: Event[] }[] = [
  {
    date: "Friday, July 30th, 2027",
    events: [
      {
        time: "1:00 PM",
        title: "Check-in begins",
        description: "Logie House opens for business! Guests staying in the house can start arriving and settling in throughout the afternoon.",
      },
      {
        time: "6:00 PM",
        title: "Welcome Dinner",
        description: "A casual dinner, open to all of our guests. We'll have some wine, beers, and soft drinks available, but feel free to supplement with your own favourites.",
      },
      {
        time: "7:30 PM",
        title: "Group Activity",
        description: "TBD. We have some ideas but they're staying secret for now.",
      },
      {
        time: "After dinner 'til late",
        title: "Mingle!",
        description: "Get to know your fellow guests and enjoy the house. Board games and other activities will be available, and the hot tubs will be on.",
      },
    ],
  },
  {
    date: "Saturday, July 31st, 2027",
    events: [
      {
        time: "9:30 AM",
        title: "Catered breakfast",
        description: "Prepare for the day with a good old-fashioned fry-up prepared by the fine folk of Hudson's Catering.",
      },
      {
        time: "1:30 PM",
        title: "Ceremony",
        description: "The main event! Join us as we get married in the ballroom.",
      },
      {
        time: "2:00 PM",
        title: "Drinks reception",
        description: "Celebrate with drinks, canapes, and close-up magic in the drawing room while we go off to take photos.",
      },
      {
        time: "4:00 PM",
        title: "Call to dinner",
        description: "At this point, our coordinator Gillian will call you all to dinner in the ballroom. Please find your seat by 4:15 PM.",
      },
      {
        time: "4:15 PM",
        title: "Speeches and dinner",
        description: "We'll start with some speeches, and hopefully hunger will prevent people from going too long. Afterwards we'll enjoy a three course meal.",
      },
      {
        time: "8:00 PM",
        title: "Band starts",
        description: "After a brief break to set up the dance floor, our amazing band will start playing. Expect some classics, a little salsa, and a healthy dose of ceilidh dancing.",
      },
      {
        time: "9:30 PM",
        title: "Evening buffet",
        description: "While the band takes a well-earned break, we'll serve wedding cake and a delicious buffet to power you up for the next round of dancing.",
      },
      {
        time: "1:00 AM",
        title: "Evening ends",
        description: "The music will wrap up and the ballroom will close, with last call at the bar 15 minutes before. Feel free to continue in the main house, but be mindful of the people who are already sleeping!",
      },
    ],
  },
  {
    date: "Sunday, August 1st, 2027",
    events: [
      {
        time: "10:00 AM",
        title: "Breakfast",
        description: "For guests staying at Logie, the kitchen will be stocked with hot and cold breakfast items. Help yourselves!",
      },
      {
        time: "3:00 PM",
        title: "BBQ",
        description: "Nurse your hangover with some flame-grilled food. Open to all guests, not just those staying at Logie.",
      },
      {
        time: "All day",
        title: "Chill time",
        description: "Recover from the night before, and enjoy the house and grounds. Try some board games, take a walk around the beautiful area (weather-permitting), or take a dip in the house's beautiful indoor pool.",
      },
    ],
  },
  {
    date: "Monday, August 2nd, 2027",
    events: [
      {
        time: "9:00 AM",
        title: "Breakfast",
        description: "For guests staying at Logie, the kitchen will be stocked with hot and cold breakfast items. Help yourselves!",
      },
      {
        time: "Noon",
        title: "Checkout",
        description: "Logie guests should check out by noon. Thank you and safe travels!",
      },
    ],
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
        <HeaderSpacer />
      </div>

      {/* Schedule Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-white mb-12 text-center">
            Schedule
          </h1>

          <div className="mb-12 text-center">
            <p className="text-white/70 text-sm sm:text-base italic max-w-2xl mx-auto">
              Please note: All times are tentative and will be confirmed closer to the wedding date.
            </p>
          </div>

          {scheduleData.map((day, index) => (
            <ScheduleDay key={index} date={day.date} events={day.events} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
