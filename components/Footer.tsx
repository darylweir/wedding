"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#1a2332] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <button
            onClick={scrollToTop}
            className="text-white uppercase tracking-wider text-sm hover:text-blue-300 transition-colors"
          >
            BACK TO TOP
          </button>
          <div>
            <p className="text-white/90 text-sm">
              Made from girders in Helsinki.
            </p>
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Daryl & his robot assistant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
