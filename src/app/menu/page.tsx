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
      <article className="flex gap-6 items-start">
        <div className="w-[136px] flex-shrink-0 rounded-xl overflow-hidden border border-black/5" style={{ aspectRatio: '1.29524' }}>
          <Image src={img} alt={name} width={136} height={105} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <h3 className="menu-item-name">{name}</h3>
            <span className="flex-1 h-px bg-[#2c2a27]" />
            <span className="text-[18px] text-primary">{price}</span>
          </div>
          <p className="text-[16px] leading-[24px] text-secondary max-w-[450px]">{desc}</p>
        </div>
      </article>
    </FadeIn>
  );
}

export default function MenuPage() {
  return (
    <main>
      {/* Menu Hero */}
      <section className="relative flex flex-col items-center justify-end overflow-hidden" style={{ aspectRatio: '1.34831', maxHeight: '890px' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/menu-bg.png" alt="Menu background" fill className="object-cover" />
        </div>
        
        {/* Floating images */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute w-[21%] top-[39%] -right-20 -translate-y-1/2 rotate-[9deg] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/chef.png" alt="Chef" width={300} height={400} className="w-full" />
          </div>
          <div className="absolute w-[20%] top-[149px] -left-[62px] -rotate-[7deg] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dish-1.png" alt="Dish" width={300} height={400} className="w-full" />
          </div>
          <div className="absolute w-[21%] -bottom-[47px] -left-[54px] rotate-[10deg] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dish-2.png" alt="Dish" width={300} height={400} className="w-full" />
          </div>
          <div className="absolute w-[21%] -bottom-[64px] -right-[13px] -rotate-[13deg] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dish-3.png" alt="Dish" width={300} height={400} className="w-full" />
          </div>
        </div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[252px] bg-gradient-to-t from-[#0c0a10] to-transparent z-[2]" />
        
        {/* Hero content */}
        <div className="relative z-[3] text-center pb-10 px-5 max-w-[600px]">
          <div className="flex items-center gap-6 mb-5">
            <span className="flex-1 h-px bg-primary" />
            <h3 className="font-serif text-[34px] leading-[36px] text-primary">THE MENU</h3>
            <span className="flex-1 h-px bg-primary" />
          </div>
          <h1 className="font-serif text-[100px] leading-[96px] tracking-[-0.03em] text-primary">
            EXCEPTIONAL FLAVORS
          </h1>
        </div>
      </section>

      {/* Menu Content */}
      <div className="flex gap-[60px] py-20 px-10 max-w-[1200px] mx-auto">
        {/* Sidebar */}
        <aside className="w-[239px] flex-shrink-0 sticky top-[100px] h-fit hidden lg:block">
          <a href="#drinks" className="menu-sidebar-link mb-4">DRINKS</a>
          <a href="#food" className="menu-sidebar-link mb-4">FOOD</a>
          <a href="#desserts" className="menu-sidebar-link">DESSERTS</a>
        </aside>

        {/* Menu Items */}
        <div className="flex-1 flex flex-col gap-20">
          {/* Drinks */}
          <section id="drinks" className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <h2 className="menu-category-title">DRINKS</h2>
              <span className="flex-1 h-px bg-[#2c2a27]" />
            </div>
            <div className="flex flex-col gap-10">
              {drinks.map((item) => <MenuItem key={item.name} {...item} />)}
            </div>
          </section>

          {/* Food */}
          <section id="food" className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <h2 className="menu-category-title">FOOD</h2>
              <span className="flex-1 h-px bg-[#2c2a27]" />
            </div>
            <div className="flex flex-col gap-10">
              {food.map((item) => <MenuItem key={item.name} {...item} />)}
            </div>
          </section>

          {/* Desserts */}
          <section id="desserts" className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <h2 className="menu-category-title">DESSERTS</h2>
              <span className="flex-1 h-px bg-[#2c2a27]" />
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
