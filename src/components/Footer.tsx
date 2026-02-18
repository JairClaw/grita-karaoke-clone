import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] py-16 flex flex-col items-center gap-6">
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
    </footer>
  );
}
