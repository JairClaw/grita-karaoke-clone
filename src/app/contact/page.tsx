import Image from 'next/image';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      {/* Contact Hero - Storefront with heading */}
      <section className="relative h-screen flex flex-col items-center justify-start pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/room-2.jpg" 
            alt="Grita Karaoke" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#09090b] to-transparent z-[1]" />
        
        {/* Content overlay */}
        <div className="relative z-[2] text-center mt-20 px-5">
          <p className="text-[14px] tracking-[0.2em] text-primary/80 mb-4">CONTACT US</p>
          <h1 className="font-serif text-[64px] md:text-[80px] leading-[1] tracking-[-0.03em] text-primary">
            WE&apos;RE AT YOUR
            <br />
            SERVICE
          </h1>
        </div>
      </section>

      {/* Interior Image Section */}
      <section className="py-16">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <div className="rounded-[24px] overflow-hidden">
            <Image 
              src="/images/room-1.webp" 
              alt="Grita Interior" 
              width={1200} 
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
