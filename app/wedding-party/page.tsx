"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeaderSpacer from "@/components/HeaderSpacer";
import Footer from "@/components/Footer";
import Image from "next/image";

// Define interface for Member
interface Member {
  name: string;
  role: string;
  image?: string;
  description: string;
}

function PartyMemberCard({ member }: { member: Member }) {
  const [imageError, setImageError] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="text-center h-full">
      <div 
        className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer bg-gray-200"
        onClick={handleToggle}
      >
        {!imageError && member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-left transition-all duration-300 group-hover:grayscale group-hover:brightness-75"
            onError={() => {
              console.error(`Error loading image for ${member.name}:`, member.image);
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400 flex items-center justify-center transition-all duration-300 group-hover:grayscale group-hover:brightness-75">
            <p className="text-rose-700 text-xs text-center px-2">
              {member.name}
            </p>
          </div>
        )}
        
        {/* Hover overlay with description - works for both */}
        <div 
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex items-center justify-center p-4 ${
            isToggled ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <p className="text-white text-sm sm:text-base text-center leading-relaxed">
            {member.description}
          </p>
        </div>
      </div>
      <h3 className="text-white text-lg font-semibold mb-1">
        {member.name}
      </h3>
      <p className="text-white/70 text-sm">
        {member.role}
      </p>
    </div>
  );
}

export default function WeddingPartyPage() {
  const bridalParty = [
    { name: "Cristina Chavez", role: "Maid of Honor", image: "/images/wedding-party/bridal-1.jpg", description: "Tina and Gen met at 18 when they both rushed KDChi at the University of Texas. From college nights and midnight birthday surprises to adult milestones and reinventions, Tina's been a constant through nearly every version of Gen. She is smart, deeply thoughtful, and someone Gen looks up to. Their friendship has been shaped by talk of books, politics, identity, and life (and a hilarious Drinking Around The World challenge at EPCOT). She's the kind of friend where time can pass, life can change, and it still feels like home." },
    { name: "Elisabeth Roman", role: "Bridesmaid / Sister of the Bride", image: "/images/wedding-party/bridal-2.jpg", description: "Leli is genuinely hilarious and endlessly herself. Gen has always admired her courage to be exactly who she is even when their personalities and styles couldn't be more different. One of Gen's keenest childhood memories is when 4-year-old Leli bravely ran back into their home to rescue Gen's favorite doll, Moses. A small moment that captures who Leli is at her core - fearless and caring. Today, they FaceTime across oceans, share matching tattoos, and get to watch each other become mothers." },
    { name: "Johana Figueroa", role: "Mother of the Bride", image: "/images/wedding-party/bridal-3.jpg", description: "Johana is bold, expressive, and full of life. She's the kind of person who loves loud, Latin music, a good photoshoot, and basking in the sunshine. One of the clearest ways she shows love is through food. Whenever Gen comes home, Johana cooks the dishes Gen grew up with - macaroni elbows, corned beef with fries, bistec encebollado, and lots and lots of plantains. One of Gen's favorite memories with Johana is their trip to Amsterdam. They laughed so hard, they cried while trying to lug their suitcases up the teeny, tiny steps of the attic airbnb they'd secured online." },
    { name: "Delia Silva", role: "Bridesmaid", image: "/images/wedding-party/bridal-4.jpg", description: "Gen met Delia at RELEX in 2022. What started as just two people working for the same department turned into an almost daily exchange of memes, TikToks, voice notes, and general shit talking. Delia is funny, easy to be around, and always has the perfect cat meme for every situation. She also makes the best guacamole ever (which says a lot because Gen doesn't even really like avocados that much), loves concerts, and proudly embraces her inner emo (it was never just a phase, mom 🤘). She's a devoted wine-lover, excellent gift-giver, and the kind of friend who promises hospital margaritas after childbirth. Fun fact: Gen and Delia's cats are half siblings!" },
    { name: "Maiju Pölkki", role: "Bridesmaid", image: "/images/wedding-party/bridal-5.jpg", description: "Gen met Maiju when she was part of one of Gen's new hire onboarding classes at RELEX. Gen immediately liked her and decided to basically insert herself into Maiju's life - and it worked. Maiju is gentle, thoughtful, and unfailingly kind. She meets everything with softness and care and has been around for many of Gen's big life changes. Maiju loves long walks with her sweet, little gentleman of a dog, Unto, and filling her home with books, music, and art. She has a huge heart, deep love for her family, and that chic, Scandi girl vibe (even though Finland isn't technically part of Scandinavia)." },
    { name: "Jenni Pensasmaa", role: "Bridesmaid", image: "/images/wedding-party/bridal-6.jpg", description: "Jenni was the very first friend Gen made after moving to Finland and quickly became someone she could talk to about anything. What Gen loves most about their friendship was always the true candor in their long talks (aka therapy sessions). Jenni is loud, bubbly, assertive, and has a truly great laugh. She's effortlessly cool - the kind of person who can pull off 90s it-girl vintage, has a home full of plants, and can cycle 20 miles like it's nothing." },
  ];

  const groomsParty = [
    { name: "Bradley Weir", role: "Best Man / Brother of the Groom", image: "/images/wedding-party/groom-1.jpg", description: "Daryl and Bradley got off to a rough start: Daryl had a poem titled \"It!\" published about how awful his younger brother was. Luckily they bounced back and are now best friends, each serving as the other's best man. Bradley lives on a remote Scottish island with his wife Emma and their dog Meg. Daryl will grudgingly concede that Brad is better at video games than he is." },
    { name: "Jackie Weir", role: "Mother of the Groom", image: "/images/wedding-party/groom-2.jpg", description: "Jackie is the center of the Weir family. She has a heart of gold and a frankly uncanny ability to remember the details of her loved ones' lives. She spends her days enjoying the Spanish sunshine and reading romance novels." },
    { name: "Paul Weir", role: "Father of the Groom", image: "/images/wedding-party/groom-3.jpg", description: "After finally achieving his dream of escaping Scotland to retire in the sun, Paul has now been dragged back for this wedding. He's a warm, loving father who's quick with a smile and handy with any tool you care to name. For the international guests, we apologise in advance for his accent." },
    { name: "Mark Godley", role: "Groomsman", image: "/images/wedding-party/groom-4.jpg", description: "Since they met in school in the year 2000, Mark has essentially become Daryl's second brother, united by a deep love of all things nerdy. He once taught the children of billionaires at a boarding school in Switzerland and currently teaches high school in Singapore.  This may or may not be a cover for his life as an international super-spy." },
    { name: "David Godley", role: "Groomsman", image: "/images/wedding-party/groom-5.jpg", description: "Another friend of Daryl's for over twenty years, David is also Mark's younger brother. He has watched more anime than anyone realistically should. As far as we know he is not an international super-spy, but maybe he's just hiding it better than Mark." },
    { name: "Thomas McDowall", role: "Groomsman", image: "/images/wedding-party/groom-6.jpg", description: "Daryl knew Thomas first as David's best friend, but they solidified their own friendship when Thomas joined the group's Dungeons & Dragons table. In a crowded field of candidates, Thomas may be the nerdiest member of the wedding party. His Lord of the Rings knowledge is unmatched (but don't tell Keith we said that)." },
    { name: "Keith Robertson", role: "Groomsman", image: "/images/wedding-party/groom-7.jpg", description: "Daryl met Keith on the battlefields of Team Fortress 2. They played together for years before finally meeting in person when Keith moved from Edinburgh to Paisley. Luckily, this is not one of those cautionary tales about meeting people online. His Lord of the Rings knowledge is unmatched (but don't tell Thomas we said that)." },
    { name: "John Burns", role: "Groomsman", image: "/images/wedding-party/groom-8.jpg", description: "John is Daryl's oldest friend and the tallest member of the wedding party. They met in primary school and became close in Ms. Valentine's creative writing program. When they were 18, they nearly missed a flight to New York because they didn't understand you still had to check-in when the flight was delayed." },
  ];

  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
        <HeaderSpacer />
      </div>

      {/* Wedding Party Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* The Bridal Party */}
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white mb-6 text-center">
              THE BRIDAL PARTY
            </h2>
            <p className="text-white/70 text-center mb-12 italic">
              Hover or tap on the images for a little tidbit about each person.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridalParty.map((member, index) => (
                <div key={index}>
                  <PartyMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* The Groom's Party */}
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white mb-6 text-center">
              THE GROOM&apos;S PARTY
            </h2>
            <p className="text-white/70 text-center mb-12 italic">
              Hover or tap on the images for a little tidbit about each person.
            </p>
            {/* First 6 members in 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
              {groomsParty.slice(0, 6).map((member, index) => (
                <div key={index} className="lg:col-span-2">
                  <PartyMemberCard member={member} />
                </div>
              ))}
            </div>
            {/* Last 2 members centered in gaps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {groomsParty.slice(6).map((member, index) => (
                <div key={index + 6} className={index === 0 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-start-4 lg:col-span-2'}>
                  <PartyMemberCard member={member} />
                </div>
              ))}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
