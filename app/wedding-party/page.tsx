import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function WeddingPartyPage() {
  // Placeholder data for bridal party
  const bridalParty = [
    { name: "Cristina Chavez", role: "Maid of Honor", image: "/images/wedding-party/bridal-1.jpg", description: "[Placeholder: How you know Cristina]" },
    { name: "Elisabeth Roman", role: "Bridesmaid / Sister of the Bride", image: "/images/wedding-party/bridal-2.jpg", description: "[Placeholder: How you know Elisabeth]" },
    { name: "Johana Figueroa", role: "Mother of the Bride", image: "/images/wedding-party/bridal-3.jpg", description: "[Placeholder: How you know Johana]" },
    { name: "Delia Silva", role: "Bridesmaid", image: "/images/wedding-party/bridal-4.jpg", description: "[Placeholder: How you know Delia]" },
    { name: "Maiju Pölkki", role: "Bridesmaid", image: "/images/wedding-party/bridal-5.jpg", description: "[Placeholder: How you know Maiju]" },
    { name: "Jenni Pensasmaa", role: "Bridesmaid", image: "/images/wedding-party/bridal-6.jpg", description: "[Placeholder: How you know Jenni]" },
  ];

  // Placeholder data for groom's party
  const groomsParty = [
    { name: "Bradley Weir", role: "Best Man / Brother of the Groom", image: "/images/wedding-party/groom-1.jpg", description: "[Placeholder: How you know Bradley]" },
    { name: "Jackie Weir", role: "Mother of the Groom", image: "/images/wedding-party/groom-2.jpg", description: "[Placeholder: How you know Jackie]" },
    { name: "Paul Weir", role: "Father of the Groom", image: "/images/wedding-party/groom-3.jpg", description: "[Placeholder: How you know Paul]" },
    { name: "Mark Godley", role: "Groomsman", image: "/images/wedding-party/groom-4.jpg", description: "[Placeholder: How you know Mark]" },
    { name: "Keith Robertson", role: "Groomsman", image: "/images/wedding-party/groom-5.jpg", description: "[Placeholder: How you know Keith]" },
    { name: "Thomas McDowall", role: "Groomsman", image: "/images/wedding-party/groom-6.jpg", description: "[Placeholder: How you know Thomas]" },
    { name: "John Burns", role: "Groomsman", image: "/images/wedding-party/groom-7.jpg", description: "[Placeholder: How you know John]" },
    { name: "David Godley", role: "Groomsman", image: "/images/wedding-party/groom-8.jpg", description: "[Placeholder: How you know David]" },
  ];

  return (
    <div className="min-h-screen bg-[#1a2332]">
      {/* Header with Navigation */}
      <div className="relative">
        <Header />
      </div>

      {/* Wedding Party Content Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* The Bridal Party */}
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white mb-12 text-center">
              The BRIDAL PARTY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridalParty.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                    {/* Placeholder for member image - replace with actual image */}
                    {/* <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-300 group-hover:grayscale group-hover:brightness-75"
                    /> */}
                    <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400 flex items-center justify-center transition-all duration-300 group-hover:grayscale group-hover:brightness-75">
                      <p className="text-rose-700 text-xs text-center px-2">
                        {member.name}
                      </p>
                    </div>
                    {/* Hover overlay with description */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
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
              ))}
            </div>
          </div>

          {/* The Groom's Party */}
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white mb-12 text-center">
              The GROOM&apos;S PARTY
            </h2>
            {/* First 6 members in 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
              {groomsParty.slice(0, 6).map((member, index) => (
                <div key={index} className="text-center lg:col-span-2">
                  <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                    {/* Placeholder for member image - replace with actual image */}
                    {/* <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-300 group-hover:grayscale group-hover:brightness-75"
                    /> */}
                    <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400 flex items-center justify-center transition-all duration-300 group-hover:grayscale group-hover:brightness-75">
                      <p className="text-rose-700 text-xs text-center px-2">
                        {member.name}
                      </p>
                    </div>
                    {/* Hover overlay with description */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
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
              ))}
            </div>
            {/* Last 2 members centered in gaps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {groomsParty.slice(6).map((member, index) => (
                <div key={index + 6} className={`text-center ${index === 0 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-start-4 lg:col-span-2'}`}>
                  <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                    {/* Placeholder for member image - replace with actual image */}
                    {/* <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-300 group-hover:grayscale group-hover:brightness-75"
                    /> */}
                    <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400 flex items-center justify-center transition-all duration-300 group-hover:grayscale group-hover:brightness-75">
                      <p className="text-rose-700 text-xs text-center px-2">
                        {member.name}
                      </p>
                    </div>
                    {/* Hover overlay with description */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
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
