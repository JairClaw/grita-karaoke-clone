'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/menu', label: 'MENU' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'RESERVE' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center px-5 md:px-10">
        <div className="w-full max-w-[1200px] flex items-center justify-between">
          <Link 
            href="/" 
            className="nav-link text-[12px] flex gap-2"
          >
            <span>G R I T A</span>
            <span>|</span>
            <span>K A R A O K E</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'opacity-100' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button 
            className="md:hidden flex flex-col gap-[5px] p-2" 
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-4 h-[2px] bg-primary transition-transform ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-4 h-[2px] bg-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-[2px] bg-primary transition-transform ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-bg-dark transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-4xl text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
