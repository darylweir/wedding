import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "VENUE", href: "/venue" },
    { label: "SCHEDULE", href: "/schedule" },
    { label: "TRAVEL", href: "/travel" },
    { label: "WEDDING PARTY", href: "/wedding-party" },
    { label: "FAQ", href: "/faq" },
    { label: "GALLERY", href: "/gallery" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Logo />
          
          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navItems.map((item) => {
              const isRoute = item.href.startsWith("/");
              const Component = isRoute ? Link : "a";
              const props = isRoute
                ? { href: item.href }
                : { href: item.href };
              
              return (
                <Component
                  key={item.label}
                  {...props}
                  className="text-white text-sm sm:text-base font-medium hover:text-blue-300 transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </Component>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
