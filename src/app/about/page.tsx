import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-5 text-center">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] lg:leading-[96px] tracking-tight text-primary mb-10">
            OUR STORY
          </h1>
        </FadeIn>
        <FadeIn className="max-w-3xl flex flex-col gap-6">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-primary">Grita</span> was born from a simple idea: karaoke should be more than just singing—it should be an experience.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            In the heart of Barcelona, we created a space where friends gather, inhibitions fade, and every song becomes a story. Our private rooms offer the perfect blend of intimacy and excitement, while our carefully crafted menu of Japanese-inspired dishes and signature cocktails elevates the night.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Whether you&apos;re celebrating a birthday, unwinding after work, or simply craving a night of unforgettable fun, Grita is your stage.
          </p>
        </FadeIn>
      </section>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-10 py-20 max-w-[1200px] mx-auto">
        <FadeIn>
          <Image
            src="/images/room-1.webp"
            alt="Karaoke room"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-2xl"
          />
        </FadeIn>
        <FadeIn>
          <Image
            src="/images/cocktail.png"
            alt="Signature cocktail"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-2xl"
          />
        </FadeIn>
        <FadeIn>
          <Image
            src="/images/room-2.jpg"
            alt="Grita exterior"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-2xl"
          />
        </FadeIn>
      </div>

      {/* Values */}
      <section className="py-20 px-5 flex flex-col items-center gap-16">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary text-center">
            WHAT WE BELIEVE
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
          <FadeIn className="text-center p-10">
            <h3 className="text-2xl font-medium text-primary mb-4">Connection</h3>
            <p className="text-base leading-relaxed">
              Every room at Grita is designed for moments that matter—laughter shared, memories made, and connections deepened.
            </p>
          </FadeIn>
          <FadeIn className="text-center p-10">
            <h3 className="text-2xl font-medium text-primary mb-4">Quality</h3>
            <p className="text-base leading-relaxed">
              From our state-of-the-art sound systems to our handcrafted cocktails, we never compromise on the details.
            </p>
          </FadeIn>
          <FadeIn className="text-center p-10">
            <h3 className="text-2xl font-medium text-primary mb-4">Joy</h3>
            <p className="text-base leading-relaxed">
              Life is better with music. We exist to bring joy, one song at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
