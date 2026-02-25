const collections = [
  {
    name: "Riviera Summer",
    subtitle: "Лето 2025",
    desc: "Лёгкие шелка и льняные ткани, вдохновлённые югом Франции",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    items: "42 позиции",
  },
  {
    name: "Noir Parisien",
    subtitle: "Осень 2025",
    desc: "Строгая монохромная эстетика парижского шика",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    items: "38 позиций",
  },
  {
    name: "Alpine Couture",
    subtitle: "Зима 2025",
    desc: "Роскошный кашемир и шерсть для холодных сезонов",
    img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    items: "31 позиция",
  },
];

export default function Collections() {
  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="collections" className="py-28 bg-[#0a0806]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
            Сезонные линии
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">
            Коллекции
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
        </div>

        <div className="space-y-8">
          {collections.map((col, i) => (
            <div
              key={col.name}
              className={`group flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } overflow-hidden card-luxury`}
              onClick={scrollToContacts}
            >
              <div className="md:w-1/2 h-72 md:h-96 overflow-hidden relative cursor-pointer">
                <img
                  src={col.img}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/40 to-transparent" />
              </div>

              <div className="md:w-1/2 flex flex-col justify-center p-10 md:p-16">
                <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
                  {col.subtitle} · {col.items}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-light text-[#e8dcc8] mb-5 leading-tight">
                  {col.name}
                </h3>
                <p className="font-body text-sm text-[#7a6e5c] leading-relaxed mb-8">
                  {col.desc}
                </p>
                <button
                  onClick={scrollToContacts}
                  className="self-start border-b border-[#c9a84c]/40 text-[#c9a84c] font-body text-xs tracking-[0.25em] uppercase pb-1 hover:border-[#c9a84c] transition-colors"
                >
                  Смотреть коллекцию →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
