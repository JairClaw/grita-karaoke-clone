import Image from 'next/image';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      {/* About Hero - Storefront image with address */}
      <section className="relative h-screen flex flex-col items-center justify-start pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/room-2.jpg" 
            alt="Grita Karaoke Storefront" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#09090b] to-transparent z-[1]" />
        
        {/* Content overlay */}
        <div className="relative z-[2] text-center mt-20 px-5">
          <div className="flex justify-center gap-3 text-primary mb-4">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
          <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.1] text-primary">
            Carrer D&apos;Aribau 87
            <br />
            L&apos;Eixample
            <br />
            Barcelona
          </h1>
        </div>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
