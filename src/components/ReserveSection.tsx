import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';

export default function ReserveSection() {
  return (
    <section className="bg-bg-dark py-[120px] px-5 flex flex-col items-center gap-2">
      <FadeIn>
        <h2 className="font-serif text-[64px] md:text-[80px] lg:text-[100px] leading-[1] tracking-[-0.03em] text-primary text-center mb-10">
          RESERVE YOUR ROOM
        </h2>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-5 max-w-[800px] w-full">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="aspect-square rounded-[20px] overflow-hidden bg-neutral-800 map-dark">
            <iframe
              src="https://maps.google.com/maps?q=87%20Carrer%20Aribau%20Barcelona&z=15&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-primary mb-2">
              Location
            </h3>
            <p className="text-[22px] leading-[1.5] text-[#999]">
              Carrer D&apos;Aribau 87
              <br />
              Barcelona, Spain
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="aspect-square rounded-[20px] overflow-hidden">
            <Image
              src="/images/room-2.jpg"
              alt="Karaoke room"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-primary mb-2">
              Hours
            </h3>
            <p className="text-[22px] leading-[1.5] text-[#999]">
              Monday to Sunday
              <br />
              1pm to 3am
            </p>
          </div>
        </div>
      </div>

      <FadeIn className="w-full max-w-[800px] mt-5">
        <Link href="/contact" className="btn-primary block text-center w-full">
          RESERVE
        </Link>
      </FadeIn>

      <FadeIn>
        <p className="text-[16px] text-center mt-5 text-secondary">
          Reserve online or send an email to{' '}
          <a
            href="mailto:info@gritakaraoke.com"
            className="text-primary hover:opacity-60 transition-opacity"
          >
            info@gritakaraoke.com
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
