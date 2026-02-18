import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-5 text-center">
        <FadeIn>
          <h1 className="font-serif text-[100px] leading-[96px] tracking-[-0.03em] text-primary mb-10">
            OUR STORY
          </h1>
        </FadeIn>
        <FadeIn className="max-w-[800px] flex flex-col gap-6">
          <p className="text-[22px] leading-[34px]">
            <span className="text-primary">Grita</span> was born from a simple idea: karaoke should be more than just singing—it should be an experience.
          </p>
          <p className="text-[22px] leading-[34px]">
            In the heart of Barcelona, we created a space where friends gather, inhibitions fade, and every song becomes a story. Our private rooms offer the perfect blend of intimacy and excitement, while our carefully crafted menu of Japanese-inspired dishes and signature cocktails elevates the night.
          </p>
          <p className="text-[22px] leading-[34px]">
            Whether you&apos;re celebrating a birthday, unwinding after work, or simply craving a night of unforgettable fun, Grita is your stage.
          </p>
        </FadeIn>
      </section>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 py-20 max-w-[1200px] mx-auto">
        <FadeIn>
          <Image
            src="/images/room-1.webp"
            alt="Karaoke room"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-[20px]"
          />
        </FadeIn>
        <FadeIn>
          <Image
            src="/images/cocktail.png"
            alt="Signature cocktail"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-[20px]"
          />
        </FadeIn>
        <FadeIn>
          <Image
            src="/images/room-2.jpg"
            alt="Grita exterior"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-[20px]"
          />
        </FadeIn>
      </div>

      {/* Values Section */}
      <section className="py-20 px-5 flex flex-col items-center gap-16">
        <FadeIn>
          <h2 className="font-serif text-[64px] leading-[68px] tracking-[-0.03em] text-primary text-center">
            WHAT WE BELIEVE
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px]">
          <FadeIn className="text-center p-10">
            <h3 className="text-[24px] font-medium text-primary mb-4">Connection</h3>
            <p className="text-[16px] leading-[24px]">
              Every room at Grita is designed for moments that matter—laughter shared, memories made, and connections deepened.
            </p>
          </FadeIn>
          <FadeIn className="text-center p-10">
            <h3 className="text-[24px] font-medium text-primary mb-4">Quality</h3>
            <p className="text-[16px] leading-[24px]">
              From our state-of-the-art sound systems to our handcrafted cocktails, we never compromise on the details.
            </p>
          </FadeIn>
          <FadeIn className="text-center p-10">
            <h3 className="text-[24px] font-medium text-primary mb-4">Joy</h3>
            <p className="text-[16px] leading-[24px]">
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
