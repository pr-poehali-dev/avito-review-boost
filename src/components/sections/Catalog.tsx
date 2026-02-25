const products = [
  {
    id: 1,
    name: "Шёлковое пальто Maison",
    category: "Верхняя одежда",
    price: "28 900 ₽",
    tag: "Новинка",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
  },
  {
    id: 2,
    name: "Кожаная сумка Atelier",
    category: "Аксессуары",
    price: "19 500 ₽",
    tag: "Хит",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  },
  {
    id: 3,
    name: "Кашемировый свитер Loire",
    category: "Трикотаж",
    price: "14 200 ₽",
    tag: null,
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  },
  {
    id: 4,
    name: "Платье-миди Riviera",
    category: "Платья",
    price: "22 700 ₽",
    tag: "Новинка",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
  },
  {
    id: 5,
    name: "Шарф из мериноса Blanc",
    category: "Аксессуары",
    price: "6 400 ₽",
    tag: null,
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
  },
  {
    id: 6,
    name: "Классические брюки Sartori",
    category: "Брюки",
    price: "11 900 ₽",
    tag: "Хит",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4571?w=600&q=80",
  },
];

export default function Catalog() {
  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="catalog" className="py-28 bg-[#0e0c09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
            Наши товары
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">
            Каталог
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="group card-luxury overflow-hidden cursor-pointer"
              onClick={scrollToContacts}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09]/60 via-transparent to-transparent" />
                {p.tag && (
                  <span className="absolute top-4 left-4 bg-[#c9a84c] text-[#0e0c09] font-body text-[9px] tracking-[0.25em] uppercase px-3 py-1">
                    {p.tag}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#6a5e4a] mb-2">
                  {p.category}
                </p>
                <h3 className="font-display text-xl text-[#e8dcc8] mb-3 group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-[#c9a84c] tracking-wider">
                    {p.price}
                  </span>
                  <button className="font-body text-[9px] tracking-[0.25em] uppercase text-[#6a5e4a] border-b border-[#6a5e4a]/40 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors pb-px">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={scrollToContacts}
            className="border border-[#c9a84c]/40 text-[#c9a84c] px-12 py-4 font-body text-xs tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 transition-all duration-300"
          >
            Запросить полный каталог
          </button>
        </div>
      </div>
    </section>
  );
}
