import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

const drinks = [
  { name: 'Yuzu Sparkler', price: '€8', desc: 'A refreshing citrusy blend of yuzu juice, sparkling soda, and a hint of honey, served over ice for a bright, tangy kick.', img: '/images/drink-1.jpg' },
  { name: 'Matcha Lemonade', price: '€9', desc: 'A unique fusion of earthy matcha and zesty lemonade, perfectly balanced for a refreshing and energizing drink.', img: '/images/drink-2.jpg' },
  { name: 'Lychee Blossom', price: '€7', desc: 'A delicate and floral lychee-infused drink with hints of rose water, topped with fresh lychee fruit.', img: '/images/drink-3.jpg' },
  { name: 'Jasmine Iced Tea', price: '€8', desc: 'A lightly sweetened, floral jasmine green tea served chilled with a touch of honey and lemon.', img: '/images/drink-4.jpg' },
];

const food = [
  { name: 'CALIFORNIA ROLL', price: '€11', desc: 'A classic mix of crab, avocado, and cucumber, wrapped in sushi rice and nori, topped with sesame seeds.', img: '/images/sushi-1.jpg' },
  { name: 'PHILADELPHIA ROLL', price: '€9', desc: 'Silky smoked salmon, cream cheese, and cucumber, wrapped in sushi rice for a rich, smooth bite.', img: '/images/sushi-2.jpg' },
  { name: 'CRISPY CREAM CHEESE ROLL', price: '€9', desc: 'A golden-fried roll with a crispy exterior and a warm, creamy cream cheese center.', img: '/images/sushi-3.jpg' },
  { name: 'COMBO URA MAKI PLATTER', price: '€7', desc: 'A delicious assortment of inside-out rolls, offering a variety of flavors and textures.', img: '/images/sushi-4.jpg' },
];

const desserts = [
  { name: 'Matcha Tiramisu', price: '€7', desc: 'A creamy, dreamy twist on the classic Italian dessert, made with layers of matcha-soaked sponge cake and mascarpone cream.', img: '/images/dessert-1.jpg' },
  { name: 'Black Sesame Mochi', price: '€8', desc: 'Soft and chewy mochi filled with rich black sesame paste, offering a nutty and slightly sweet flavor.', img: '/images/dessert-2.jpg' },
  { name: 'Yuzu Cheesecake', price: '€7', desc: 'A light and citrusy Japanese-style cheesecake infused with tangy yuzu, topped with white chocolate drizzle.', img: '/images/dessert-3.jpg' },
  { name: 'Hojicha Panna Cotta', price: '€7', desc: 'A silky, roasted green tea-infused panna cotta with a caramelized brown sugar topping.', img: '/images/dessert-4.jpg' },
];

function MenuItem({ name, price, desc, img }: { name: string; price: string; desc: string; img: string }) {
  return (
    <FadeIn>
      <article className="flex flex-col md:flex-row gap-5 md:gap-6">
        <div className="w-24 md:w-36 aspect-[1.3] rounded-xl overflow-hidden flex-shrink-0 border border-black/5">
          <Image src={img} alt={name} width={136} height={105} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
            <h3 className="text-base text-primary">{name}</h3>
            <span className="hidden md:block flex-1 h-px bg-border" />
            <span className="text-lg text-primary">{price}</span>
          </div>
          <p className="text-base text-secondary max-w-md">{desc}</p>
        </div>
      </article>
    </FadeIn>
  );
}

export default function MenuPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative aspect-[1.35] max-h-[890px] flex flex-col items-center justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/menu-bg.png" alt="Menu background" fill className="object-cover" />
        </div>
        
        <div className="absolute inset-0 z-10">
          <div className="absolute w-1/5 top-[39%] -right-20 -translate-y-1/2 rotate-9 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/chef.png" alt="Chef" width={300} height={400} className="w-full" />
          </div>
          <div className="absolute w-1/5 top-36 -left-16 -rotate-6 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dish-1.png" alt="Dish" width={300} height={400} className="w-full" />
          </div>
          <div className="absolute w-1/5 -bottom-12 -left-14 rotate-10 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dish-2.png" alt="Dish" width={300} height={400} className="w-full" />
          </div>
          <div className="absolute w-1/5 -bottom-16 -right-3 -rotate-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dish-3.png" alt="Dish" width={300} height={400} className="w-full" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-dark to-transparent z-20" />
        
        <div className="relative z-30 text-center pb-10 px-5 max-w-xl">
          <div className="flex items-center gap-6 mb-5">
            <span className="flex-1 h-px bg-primary" />
            <h3 className="font-serif text-3xl text-primary">THE MENU</h3>
            <span className="flex-1 h-px bg-primary" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] lg:leading-[96px] tracking-tight text-primary">
            EXCEPTIONAL FLAVORS
          </h1>
        </div>
      </section>

      {/* Menu Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 py-16 md:py-20 px-5 md:px-10 max-w-[1200px] mx-auto">
        {/* Sidebar */}
        <aside className="lg:w-60 flex-shrink-0 lg:sticky lg:top-24 lg:h-fit flex flex-wrap lg:flex-col gap-4">
          <a href="#drinks" className="block py-3 px-5 border border-border rounded-lg text-secondary hover:text-primary hover:border-primary transition">
            DRINKS
          </a>
          <a href="#food" className="block py-3 px-5 border border-border rounded-lg text-secondary hover:text-primary hover:border-primary transition">
            FOOD
          </a>
          <a href="#desserts" className="block py-3 px-5 border border-border rounded-lg text-secondary hover:text-primary hover:border-primary transition">
            DESSERTS
          </a>
        </aside>

        {/* Items */}
        <div className="flex-1 flex flex-col gap-16 md:gap-20">
          <section id="drinks" className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <h2 className="text-xl text-primary">DRINKS</h2>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-col gap-10">
              {drinks.map((item) => <MenuItem key={item.name} {...item} />)}
            </div>
          </section>

          <section id="food" className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <h2 className="text-xl text-primary">FOOD</h2>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-col gap-10">
              {food.map((item) => <MenuItem key={item.name} {...item} />)}
            </div>
          </section>

          <section id="desserts" className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <h2 className="text-xl text-primary">DESSERTS</h2>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-col gap-10">
              {desserts.map((item) => <MenuItem key={item.name} {...item} />)}
            </div>
          </section>
        </div>
      </div>

      <ReserveSection />
      <Footer />
    </main>
  );
}
