import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
        <div className="text-2xl font-serif text-rose-700 font-bold">
          <span className="text-rose-600">D</span>
          <span className="text-rose-500">&</span>
          <span className="text-rose-600">G</span>
        </div>
      </div>
    </Link>
  );
}
