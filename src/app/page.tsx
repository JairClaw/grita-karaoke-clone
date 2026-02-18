import Link from 'next/link';
import Image from 'next/image';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

// Grid images - matching original layout (5 per row, 2 rows)
const gridRow1 = [
  '/images/cocktail.png',
  '/images/room-1.webp',
  '/images/room-2.jpg',
  '/images/cocktail.png',
  '/images/food-1.webp',
];

const gridRow2 = [
  '/images/food-2.jpg',
  '/images/food-3.png',
  '/images/room-1.webp',
  '/images/sushi-1.jpg',
  '/images/food-1.webp',
];

export default function Home() {
  return (
    <main>
      {/* Hero Section - Full screen video, minimal overlay */}
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
        
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black/30 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#09090b] to-transparent z-[1]" />
      </section>

      {/* Image Grid Section - NO header, just images in grid */}
      <section className="py-8 px-4 relative">
        {/* Gradient overlays on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        {/* Top row of images */}
        <div className="flex justify-center gap-4 mb-4">
          {gridRow1.map((src, i) => (
            <div key={`row1-${i}`} className="w-[280px] h-[340px] rounded-[24px] overflow-hidden flex-shrink-0">
              <Image src={src} alt="Grita" width={280} height={340} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Center button */}
        <div className="flex justify-center my-6">
          <Link href="/menu" className="btn-primary">
            EXPLORE MENU
          </Link>
        </div>

        {/* Bottom row of images */}
        <div className="flex justify-center gap-4">
          {gridRow2.map((src, i) => (
            <div key={`row2-${i}`} className="w-[280px] h-[340px] rounded-[24px] overflow-hidden flex-shrink-0">
              <Image src={src} alt="Grita" width={280} height={340} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
