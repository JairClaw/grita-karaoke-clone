import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

const StarIcon = () => (
  <svg viewBox="0 0 24 27" fill="currentColor" className="w-6 h-7">
    <path d="M 16.349 5.84 L 16.349 4.533 C 16.349 3.218 15.939 2.133 15.118 1.28 C 14.297 0.427 13.258 0 12 0 C 10.638 0 9.572 0.436 8.803 1.307 C 8.035 2.178 7.651 3.342 7.651 4.8 L 7.651 5.2 C 7.651 5.271 7.659 5.333 7.677 5.387 L 7.703 5.84 C 6.41 4.898 5.249 4.427 4.218 4.427 C 3.415 4.427 2.646 4.702 1.913 5.253 C 1.214 5.769 0.699 6.444 0.367 7.28 C 0.122 7.867 0 8.453 0 9.04 C 0 10.836 1.013 12.204 3.039 13.147 L 3.432 13.333 C 1.144 14.4 0 15.84 0 17.653 C 0 18.88 0.419 19.956 1.258 20.88 C 2.096 21.804 3.092 22.267 4.245 22.267 C 5.293 22.267 6.332 21.884 7.362 21.12 L 7.703 20.853 C 7.668 21.209 7.651 21.636 7.651 22.133 C 7.651 23.467 8.061 24.556 8.882 25.4 C 9.703 26.244 10.742 26.667 12 26.667 C 13.38 26.667 14.45 26.227 15.21 25.347 C 15.969 24.467 16.349 23.316 16.349 21.893 L 16.349 20.853 C 17.642 21.796 18.795 22.267 19.808 22.267 C 20.943 22.267 21.926 21.8 22.755 20.867 C 23.585 19.933 24 18.862 24 17.653 C 24 15.84 22.987 14.462 20.961 13.52 L 20.568 13.333 C 22.856 12.267 24 10.836 24 9.04 C 24 7.884 23.59 6.827 22.769 5.867 C 21.948 4.907 20.956 4.427 19.795 4.427 C 18.633 4.427 17.607 4.8 16.716 5.547 Z M 14.148 10.347 C 16.175 7.342 18.052 5.84 19.782 5.84 C 20.498 5.84 21.148 6.169 21.734 6.827 C 22.319 7.484 22.611 8.222 22.611 9.04 C 22.611 11.244 20.271 12.551 15.589 12.96 L 15.589 13.733 C 17.913 13.929 19.664 14.356 20.843 15.013 C 22.022 15.671 22.611 16.551 22.611 17.653 C 22.611 18.453 22.328 19.187 21.76 19.853 C 21.192 20.52 20.533 20.853 19.782 20.853 C 18.017 20.853 16.14 19.342 14.148 16.32 L 13.467 16.72 C 14.463 18.782 14.961 20.524 14.961 21.947 C 14.961 24.151 13.974 25.253 12 25.253 C 11.057 25.253 10.323 24.96 9.799 24.373 C 9.293 23.751 9.039 22.969 9.039 22.027 C 9.039 20.604 9.537 18.836 10.533 16.72 L 9.851 16.32 C 7.86 19.342 5.982 20.853 4.218 20.853 C 3.502 20.853 2.851 20.538 2.266 19.907 C 1.681 19.276 1.389 18.524 1.389 17.653 C 1.389 15.449 3.72 14.142 8.384 13.733 L 8.384 12.96 C 3.72 12.569 1.389 11.262 1.389 9.04 C 1.389 8.258 1.668 7.529 2.227 6.853 C 2.786 6.178 3.45 5.84 4.218 5.84 C 5.948 5.84 7.825 7.342 9.851 10.347 L 10.533 9.973 C 9.537 7.893 9.039 6.116 9.039 4.64 C 9.039 3.698 9.293 2.916 9.799 2.293 C 10.323 1.707 11.057 1.413 12 1.413 C 13.974 1.413 14.961 2.507 14.961 4.693 C 14.961 6.133 14.463 7.893 13.467 9.973 Z"/>
  </svg>
);

const carouselImages1 = [
  { src: '/images/room-1.webp', alt: 'Karaoke room' },
  { src: '/images/room-2.jpg', alt: 'Grita storefront' },
  { src: '/images/cocktail.png', alt: 'Cocktail' },
];

const carouselImages2 = [
  { src: '/images/food-1.webp', alt: 'Food' },
  { src: '/images/food-2.jpg', alt: 'Food' },
  { src: '/images/food-3.png', alt: 'Food' },
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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-bg-dark to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-bg-dark to-transparent z-10" />
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center w-full md:w-3/5 px-5 flex flex-col items-center gap-3">
          <div className="flex gap-3 text-primary mb-3">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] lg:leading-[96px] tracking-tight text-primary">
            Sing, sip, and savor
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-xl">
            Grita transforms karaoke into an immersive night of rhythm, laughter, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="pt-20 md:pt-30 flex flex-col items-center gap-16">
        <FadeIn className="text-center max-w-xl px-5">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] lg:leading-[96px] tracking-tight text-primary mb-3">
            Sing, sip, and savor
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Grita transforms karaoke into an immersive night of rhythm, laughter, and unforgettable moments.
          </p>
        </FadeIn>

        <div className="w-full overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-60 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-60 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

          <div className="carousel-track flex gap-4">
            {[...carouselImages1, ...carouselImages1, ...carouselImages1].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-72 md:w-96 h-80 md:h-[466px] rounded-3xl overflow-hidden">
                <Image src={img.src} alt={img.alt} width={389} height={466} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <Link
            href="/menu"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-accent text-bg py-4 px-10 text-base font-medium tracking-[0.1em] hover:brightness-90 transition"
          >
            EXPLORE MENU
          </Link>

          <div className="carousel-track-reverse flex gap-4 mt-4">
            {[...carouselImages2, ...carouselImages2, ...carouselImages2].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-72 md:w-96 h-80 md:h-[466px] rounded-3xl overflow-hidden">
                <Image src={img.src} alt={img.alt} width={389} height={466} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Own The Mic Section */}
      <section className="py-20 md:py-30 flex flex-col items-center gap-10 overflow-hidden">
        <FadeIn className="text-center px-5">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] lg:leading-[96px] tracking-tight text-primary mb-3">
            OWN THE MIC
          </h2>
          <p className="text-lg md:text-xl text-secondary">
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
          />
        </FadeIn>
      </section>

      <ReserveSection />
      <Footer />
    </main>
  );
}
