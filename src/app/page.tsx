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

// Duplicate images for seamless infinite scroll
const carouselImages1 = [
  '/images/room-1.webp',
  '/images/room-2.jpg', 
  '/images/cocktail.png',
  '/images/food-1.webp',
  '/images/room-1.webp',
  '/images/room-2.jpg',
  '/images/cocktail.png',
  '/images/food-1.webp',
];

const carouselImages2 = [
  '/images/food-2.jpg',
  '/images/food-3.png',
  '/images/room-1.webp',
  '/images/cocktail.png',
  '/images/food-2.jpg',
  '/images/food-3.png',
  '/images/room-1.webp',
  '/images/cocktail.png',
];

export default function Home() {
  return (
    <main className="bg-bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-[380px] bg-gradient-to-b from-bg-dark to-transparent z-10" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[380px] bg-gradient-to-t from-bg-dark to-transparent z-10" />
        
        {/* Hero Content - positioned at bottom */}
        <div className="relative z-20 text-center w-[90%] md:w-[60%] mb-10 flex flex-col items-center gap-3 min-h-[388px] justify-center">
          <div className="flex gap-3 text-primary mb-3">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <h1 className="font-serif text-[64px] md:text-[80px] lg:text-[100px] leading-[1] tracking-[-0.03em] text-primary">
            Sing, sip, and savor
          </h1>
          <p className="text-[18px] md:text-[22px] leading-[1.5] text-secondary max-w-[600px]">
            Grita transforms karaoke into an immersive night of rhythm, laughter, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Image Carousel Section - NO duplicate heading */}
      <section className="pt-[120px] flex flex-col items-center gap-[61px]">
        <div className="w-full overflow-hidden relative h-[950px] md:h-[1000px]">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-[241px] bg-gradient-to-b from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[241px] bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-[150px] md:w-[250px] bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[150px] md:w-[250px] bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

          {/* Top row - scrolls left */}
          <div className="carousel-track gap-4 mb-4">
            {carouselImages1.map((src, i) => (
              <div key={`top-${i}`} className="flex-shrink-0 w-[280px] md:w-[389px] h-[335px] md:h-[466px] rounded-[24px] overflow-hidden">
                <Image src={src} alt="Grita" width={389} height={466} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Center button */}
          <Link
            href="/menu"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 btn-primary"
          >
            EXPLORE MENU
          </Link>

          {/* Bottom row - scrolls right */}
          <div className="carousel-track-reverse gap-4">
            {carouselImages2.map((src, i) => (
              <div key={`bottom-${i}`} className="flex-shrink-0 w-[280px] md:w-[389px] h-[335px] md:h-[466px] rounded-[24px] overflow-hidden">
                <Image src={src} alt="Grita" width={389} height={466} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Own The Mic Section */}
      <section className="py-[120px] flex flex-col items-center gap-10 overflow-hidden">
        <FadeIn className="text-center px-5">
          <h2 className="font-serif text-[64px] md:text-[80px] lg:text-[100px] leading-[1] tracking-[-0.03em] text-primary mb-3">
            OWN THE MIC
          </h2>
          <p className="text-[18px] md:text-[22px] leading-[1.5] text-secondary">
            Step into your private stage.
          </p>
        </FadeIn>
        <FadeIn className="w-full">
          <Image
            src="/images/room-wide.png"
            alt="Karaoke room interior"
            width={1200}
            height={596}
            className="w-full object-cover"
            style={{ aspectRatio: '2.0157 / 1' }}
          />
        </FadeIn>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
