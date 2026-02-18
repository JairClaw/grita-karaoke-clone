'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/menu', label: 'MENU' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'RESERVE' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center px-5 md:px-10">
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xs tracking-[0.2em] text-primary hover:text-primary/60 transition-colors flex gap-2"
        >
          <span>G R I T A</span>
          <span>|</span>
          <span>K A R A O K E</span>
        </Link>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-[0.2em] transition-colors ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-primary hover:text-primary/60'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1 p-2" aria-label="Menu">
          <span className="w-4 h-0.5 bg-primary" />
          <span className="w-4 h-0.5 bg-primary" />
          <span className="w-4 h-0.5 bg-primary" />
        </button>
      </div>
    </nav>
  );
}
