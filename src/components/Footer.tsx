import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-bg-dark px-5 pb-20 flex flex-col items-center gap-36 overflow-hidden">
      <div className="w-full max-w-[1159px]">
        <Image
          src="/images/logo.svg"
          alt="Grita Karaoke"
          width={1159}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <ul className="flex gap-10">
          <li>
            <Link
              href="/menu"
              className="text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors"
            >
              MENU
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <p className="text-xs text-secondary">© Grita Karaoke</p>
      </div>
    </footer>
  );
}
