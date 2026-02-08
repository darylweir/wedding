"use client";

import Header from "@/components/Header";
import HeaderSpacer from "@/components/HeaderSpacer";
import Footer from "@/components/Footer";
import { ReactNode, useState } from "react";

export default function FAQPage() {
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });

  const toggleAnswer = (index: number) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  /* eslint-disable react/no-unescaped-entities -- FAQ answers use apostrophes; string answers need them for display */
  const faqs: Array<{
    number: string;
    question: string;
    answer: string | ReactNode;
  }> = [
    {
      number: "01",
      question: "Can I bring my kids?",
      answer: (
        <>
          <p>
            Yes, children are welcome to join us in celebrating our wedding. Just make sure to include them in the RSVP.
          </p>
          <p className="mt-4">
            No on-site childcare will be organised during the event. We kindly ask that parents or guardians escort children out of the ceremony or reception if they become fussy or disruptive, so everyone can enjoy the moment. There's a play area on the grounds of the house for them to enjoy.
          </p>
          <p className="mt-4">
            Please note: the pool area at Logie is not monitored by a lifeguard, so please keep an eye on your children.
          </p>
        </>
      ),
    },
    {
      number: "02",
      question: "Can I bring a plus-one?",
      answer: "This will be indicated on your RSVP form. If you haven't been offered a plus-one and would like one, please send us an email.",
    },
    {
      number: "03",
      question: "I'm travelling from abroad, do I need a visa to enter the UK?",
      answer: (
        <>
          No, but if you're not a UK citizen you will need a{" "}
          <a
            href="https://www.gov.uk/eta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            valid ETA
          </a>
          .
        </>
      ),
    },
    {
      number: "04",
      question: "Do I need to attend all of the wedding events?",
      answer: "No. We hope everyone can join for the ceremony and reception on Saturday, but all Friday and Sunday events are optional.",
    },
    {
      number: "05",
      question: "What's the dress code?",
      answer: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>For Friday's welcome dinner, smart casual.</li>
            <li>For Saturday's events, cocktail. Kilts, fascinators, and all the usual Scottish wedding classics are encouraged.</li>
            <li>For Sunday, just don't be naked.</li>
          </ul>
          <p className="mt-4">No white dresses on any day please. If you'd like to use the pool and/or hot tub during the weekend, please wear a swimsuit.</p>
        </>
      ),
    },
    {
      number: "06",
      question: "Will events run on the posted schedule?",
      answer: "Yes. Our amazing wedding coordinator Gillian will do everything in her power to keep us on schedule. If you arrive late to the ceremony, we respectfully ask you to wait until it's over before joining us. We don't mind late joiners for other events during the weekend.",
    },
    {
      number: "07",
      question: "Is there transportation between events, or do we need to arrange our own?",
      answer: "Everything happens on the Logie grounds. Transport from your accommodation to and from Logie is all you need to worry about.",
    },
    {
      number: "08",
      question: "What's the food and drink situation?",
      answer: (
        <>
          <p>
            Meals will be provided at all hosted events. For those staying at Logie, the kitchens will be stocked with breakfast items and snacks.
          </p>
          <p className="mt-4">
            On Saturday, some drinks will be provided between the ceremony and reception, and wine will be served with dinner. There will be a cash bar at the reception.
          </p>
          <p className="mt-4">
            On Friday and Sunday, we'll have some drinks available but you're more than welcome to bring your own.
          </p>
          <p className="mt-4">
            Please inform us of any allergies or dietary restrictions as part of your RSVP.
          </p>
        </>
      ),
    },
    {
      number: "09",
      question: "Is there a gift registry?",
      answer: "No, your presence is all the gift we need. Besides anything else, we're travelling back to Finland after the wedding so we have limited capacity to bring along any gifts. If you want to be generous, we'd appreciate a contribution to our honeymoon fund.",
    },
    {
      number: "10",
      question: "Photos: yay or nay?",
      answer: "You're welcome to take photos or videos during any of our events. On Saturday, please be mindful not to block any shots by our official photographer and videographer. After the event, we'll create an online album to share photos.",
    },
  ];
  /* eslint-enable react/no-unescaped-entities */

  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
        <HeaderSpacer />
      </div>

      {/* FAQ Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-white mb-2 text-center">
            frequently
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mb-12 text-center font-light">
            ASKED QUESTIONS
          </h2>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="py-8">
                  <button
                    onClick={() => toggleAnswer(index)}
                    className="w-full flex items-center justify-between text-left mb-4 group"
                  >
                    <div className="flex items-center">
                      <span className="text-white/60 text-sm font-semibold mr-3">
                        {faq.number}
                      </span>
                      <h3 className="text-white text-lg sm:text-xl font-semibold">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 text-white transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openAnswers[index] ? "rotate-180" : ""
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
                    className={`overflow-hidden ${
                      openAnswers[index]
                        ? "transition-[max-height,opacity] duration-500 ease-out max-h-[2000px] opacity-100"
                        : "transition-[max-height] duration-300 ease-in max-h-0 [transition:max-height_300ms_ease-in,opacity_100ms_ease-in_200ms] opacity-0"
                    }`}
                  >
                    <div className="text-white/90 text-base sm:text-lg leading-relaxed ml-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
                {index < faqs.length - 1 && (
                  <div className="border-t border-white/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
