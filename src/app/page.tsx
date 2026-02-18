import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

const StarIcon = () => (
  <svg viewBox="0 0 24 27" fill="currentColor" className="w-6 h-7">
    <path d="M12 0C10.6 0 9.5.4 8.8 1.3 8 2.2 7.7 3.3 7.7 4.8v.4l-.1.6C6.4 4.9 5.2 4.4 4.2 4.4c-.8 0-1.6.3-2.3.8-.7.5-1.2 1.2-1.5 2-.3.6-.4 1.2-.4 1.8 0 1.8 1 3.2 3 4.1l.4.2c-2.3 1.1-3.4 2.5-3.4 4.3 0 1.2.4 2.3 1.3 3.2.8.9 1.8 1.4 3 1.4 1 0 2.1-.4 3.1-1.1l.3-.3c0 .4 0 .8 0 1.3 0 1.3.4 2.4 1.2 3.3.8.8 1.9 1.3 3.1 1.3 1.4 0 2.5-.4 3.2-1.3.8-.9 1.1-2 1.1-3.5v-1c1.3.9 2.5 1.4 3.5 1.4 1.1 0 2.1-.5 2.9-1.4.8-.9 1.2-2 1.2-3.2 0-1.8-1-3.2-3-4.1l-.4-.2c2.3-1.1 3.4-2.5 3.4-4.3 0-1.2-.4-2.2-1.2-3.2-.8-1-1.8-1.4-3-1.4-1.2 0-2.2.4-3.1 1.1V4.5c0-1.3-.4-2.4-1.2-3.3C13.3.4 12.3 0 12 0zm2.1 10.3c2 3 3.9 4.5 5.7 4.5.7 0 1.4-.3 2-.9.6-.7.9-1.4.9-2.3 0-2.2-2.3-3.5-7-3.9v.8c2.3.2 4.1.6 5.3 1.3 1.2.7 1.8 1.5 1.8 2.6 0 .8-.3 1.5-.9 2.2-.6.7-1.2 1-2 1-1.8 0-3.6-1.5-5.6-4.5l-.7.4c1 2.1 1.5 3.8 1.5 5.3 0 2.2-1 3.3-3 3.3-.9 0-1.7-.3-2.2-.9-.5-.6-.8-1.4-.8-2.3 0-1.4.5-3.2 1.5-5.3l-.7-.4c-2 3-3.9 4.5-5.6 4.5-.7 0-1.4-.3-2-.9-.6-.6-.9-1.4-.9-2.3 0-2.2 2.3-3.5 7-3.9v-.8c-4.7-.4-7-1.7-7-3.9 0-.8.3-1.5.8-2.2.6-.7 1.3-1 2-1 1.7 0 3.6 1.5 5.6 4.5l.7-.4c-1-2.1-1.5-3.9-1.5-5.3 0-.9.3-1.7.8-2.3.5-.6 1.3-.9 2.2-.9 2 0 3 1.1 3 3.3 0 1.4-.5 3.2-1.5 5.3l.7.4z"/>
  </svg>
);

// Duplicate images for seamless infinite scroll (need enough to fill viewport + animation)
const carouselImages1 = [
  '/images/room-1.webp',
  '/images/room-2.jpg', 
  '/images/cocktail.png',
  '/images/room-1.webp',
  '/images/room-2.jpg',
  '/images/cocktail.png',
  '/images/room-1.webp',
  '/images/room-2.jpg',
  '/images/cocktail.png',
];

const carouselImages2 = [
  '/images/food-1.webp',
  '/images/food-2.jpg',
  '/images/food-3.png',
  '/images/food-1.webp',
  '/images/food-2.jpg',
  '/images/food-3.png',
  '/images/food-1.webp',
  '/images/food-2.jpg',
  '/images/food-3.png',
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-[380px] bg-gradient-to-b from-[#0c0a10] to-transparent z-[1]" />
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[380px] bg-gradient-to-t from-[#0c0a10] to-transparent z-[1]" />
        
        {/* Hero Content - positioned at bottom like original */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] text-center w-[60%] min-h-[388px] flex flex-col items-center justify-center gap-3 px-5">
          <div className="flex gap-3 text-primary mb-3">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <h1 className="font-serif text-[100px] leading-[96px] tracking-[-0.03em] text-primary mb-3">
            Sing, sip, and savor
          </h1>
          <p className="text-[22px] leading-[34px] text-secondary max-w-[600px]">
            Grita transforms karaoke into an immersive night of rhythm, laughter, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Image Carousel Section - WITH header like original */}
      <section className="pt-[120px] flex flex-col items-center gap-[61px]">
        {/* Carousel Header - same as hero text */}
        <FadeIn className="text-center max-w-[600px] px-5">
          <h2 className="font-serif text-[100px] leading-[96px] tracking-[-0.03em] text-primary mb-3">
            Sing, sip, and savor
          </h2>
          <p className="text-[22px] leading-[34px] text-secondary">
            Grita transforms karaoke into an immersive night of rhythm, laughter, and unforgettable moments.
          </p>
        </FadeIn>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden relative">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-[241px] bg-gradient-to-b from-[#0c0a10] to-transparent z-[1] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[241px] bg-gradient-to-t from-[#0c0a10] to-transparent z-[1] pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-[250px] bg-gradient-to-r from-[#0c0a10] to-transparent z-[1] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[250px] bg-gradient-to-l from-[#0c0a10] to-transparent z-[1] pointer-events-none" />

          {/* Top carousel row - scrolls left */}
          <div className="carousel-track">
            {carouselImages1.map((src, i) => (
              <div key={`top-${i}`} className="flex-shrink-0 w-[389px] h-[466px] rounded-[24px] overflow-hidden">
                <Image src={src} alt="Grita Karaoke" width={389} height={466} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Center button */}
          <Link
            href="/menu"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 btn-primary"
          >
            EXPLORE MENU
          </Link>

          {/* Bottom carousel row - scrolls right */}
          <div className="carousel-track-reverse mt-4">
            {carouselImages2.map((src, i) => (
              <div key={`bottom-${i}`} className="flex-shrink-0 w-[389px] h-[466px] rounded-[24px] overflow-hidden">
                <Image src={src} alt="Grita Karaoke" width={389} height={466} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Own The Mic Section */}
      <section className="py-[120px] flex flex-col items-center gap-10 overflow-hidden">
        <FadeIn className="text-center max-w-[600px] px-5">
          <h2 className="font-serif text-[100px] leading-[96px] tracking-[-0.03em] text-primary">
            OWN THE MIC
          </h2>
          <p className="text-[22px] leading-[34px] text-secondary">
            Step into your private stage.
          </p>
        </FadeIn>
        <FadeIn className="w-full slide-in-right">
          <Image
            src="/images/room-wide.png"
            alt="Karaoke room interior"
            width={1200}
            height={596}
            className="w-full object-cover"
            style={{ aspectRatio: '2.01575 / 1' }}
          />
        </FadeIn>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
