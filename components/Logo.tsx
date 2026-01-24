import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src="/images/logo.svg"
        alt="Daryl & Genesis Wedding Logo"
        width={128}
        height={128}
        className="w-40 h-40"
      />
    </Link>
  );
}
