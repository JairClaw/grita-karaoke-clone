'use client';

import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      {/* Contact Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-5 text-center">
        <FadeIn>
          <h1 className="font-serif text-[100px] leading-[96px] tracking-[-0.03em] text-primary mb-6">
            RESERVE
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="text-[22px] leading-[34px] text-secondary max-w-[600px] mb-16">
            Book your private karaoke room and get ready for an unforgettable night.
          </p>
        </FadeIn>

        <FadeIn className="w-full max-w-[500px]">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2 text-left">
                <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-left">
                <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2 text-left">
                <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Date</label>
                <input type="date" required />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-left">
                <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Time</label>
                <select required>
                  <option value="">Select time</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="22:00">10:00 PM</option>
                  <option value="23:00">11:00 PM</option>
                  <option value="00:00">12:00 AM</option>
                  <option value="01:00">1:00 AM</option>
                  <option value="02:00">2:00 AM</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2 text-left">
                <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Number of Guests</label>
                <select required>
                  <option value="">Select</option>
                  <option value="2-4">2-4 guests</option>
                  <option value="5-8">5-8 guests</option>
                  <option value="9-12">9-12 guests</option>
                  <option value="13+">13+ guests</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-left">
                <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Room Preference</label>
                <select>
                  <option value="">No preference</option>
                  <option value="small">Small Room (2-4)</option>
                  <option value="medium">Medium Room (5-8)</option>
                  <option value="large">Large Room (9-12)</option>
                  <option value="vip">VIP Suite (13+)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label className="text-[12px] tracking-[0.1em] text-secondary uppercase">Special Requests</label>
              <textarea placeholder="Any special requests or occasions?" />
            </div>

            <button type="submit" className="btn-primary mt-5">
              Request Reservation
            </button>
          </form>
        </FadeIn>
      </section>

      {/* Contact Info */}
      <div className="py-20 px-5 flex flex-wrap justify-center gap-20">
        <FadeIn className="text-center">
          <h3 className="text-[16px] font-medium tracking-[0.1em] text-primary uppercase mb-3">Location</h3>
          <p className="text-[18px] leading-[28px] text-secondary">
            Carrer D&apos;Aribau 87<br />Barcelona, Spain
          </p>
        </FadeIn>
        <FadeIn className="text-center">
          <h3 className="text-[16px] font-medium tracking-[0.1em] text-primary uppercase mb-3">Hours</h3>
          <p className="text-[18px] leading-[28px] text-secondary">
            Monday to Sunday<br />1pm to 3am
          </p>
        </FadeIn>
        <FadeIn className="text-center">
          <h3 className="text-[16px] font-medium tracking-[0.1em] text-primary uppercase mb-3">Contact</h3>
          <a href="mailto:info@gritakaraoke.com" className="text-[18px] text-secondary hover:text-primary transition-colors">
            info@gritakaraoke.com
          </a>
        </FadeIn>
      </div>

      {/* Map */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=87%20Carrer%20Aribau%20Barcelona&z=15&output=embed"
          className="w-full h-full border-0 grayscale invert opacity-70"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <Footer />
    </main>
  );
}
