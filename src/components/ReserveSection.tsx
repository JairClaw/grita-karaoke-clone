import Link from 'next/link';
import Image from 'next/image';

export default function ReserveSection() {
  return (
    <section className="bg-bg-dark py-20 md:py-30 px-5 flex flex-col items-center gap-2">
      <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] lg:leading-[96px] tracking-tight text-primary text-center mb-10">
        RESERVE YOUR ROOM
      </h2>

      <div className="flex flex-col md:flex-row gap-5 max-w-[800px] w-full">
        <div className="flex-1 flex flex-col gap-5">
          <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-200">
            <iframe
              src="https://maps.google.com/maps?q=87%20Carrer%20Aribau%20Barcelona&z=15&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">
              Location
            </h3>
            <p className="text-xl text-secondary/70">
              Carrer D&apos;Aribau 87
              <br />
              Barcelona, Spain
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/room-2.jpg"
              alt="Karaoke room"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary mb-2">
              Hours
            </h3>
            <p className="text-xl text-secondary/70">
              Monday to Sunday
              <br />
              1pm to 3am
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/contact"
        className="w-full max-w-[800px] bg-accent text-bg text-center py-4 px-10 text-base font-medium tracking-[0.1em] hover:brightness-90 transition mt-5"
      >
        RESERVE
      </Link>

      <p className="text-base text-center mt-5">
        Reserve online or send an email to{' '}
        <a
          href="mailto:info@gritakaraoke.com"
          className="text-primary hover:text-primary/60 transition-colors"
        >
          info@gritakaraoke.com
        </a>
      </p>
    </section>
  );
}
