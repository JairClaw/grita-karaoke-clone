import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0c0a10] px-5 pb-20 flex flex-col items-center gap-[140px] overflow-hidden">
      {/* Large logo - full width like original */}
      <div className="w-full max-w-[1159px]">
        <Image
          src="/images/logo.svg"
          alt="Grita Karaoke"
          width={1159}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Footer links use secondary color, hover to primary */}
        <ul className="flex gap-10 list-none">
          <li>
            <Link href="/menu" className="footer-link">
              MENU
            </Link>
          </li>
          <li>
            <Link href="/about" className="footer-link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className="footer-link">
              CONTACT
            </Link>
          </li>
        </ul>
        <p className="text-[12px] text-secondary">© Grita Karaoke</p>
      </div>
    </footer>
  );
}
