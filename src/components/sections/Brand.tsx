const stats = [
  { value: "500+", label: "Позиций в каталоге" },
  { value: "40+", label: "Брендов-партнёров" },
  { value: "15", label: "Стран доставки" },
  { value: "3 000+", label: "Довольных клиентов" },
];

export default function Brand() {
  return (
    <section id="brand" className="py-28 bg-[#0e0c09] relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #c9a84c,
            #c9a84c 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-6">
              Наша история
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8] leading-tight mb-8">
              О бренде
              <br />
              <em className="gold-gradient not-italic">LUXEDROP</em>
            </h2>
            <div className="space-y-5 text-[#7a6e5c] font-body text-sm leading-loose">
              <p>
                LUXEDROP — это кураторский дропшиппинг-бутик, объединяющий
                лучшие европейские дома моды под одной крышей. Мы тщательно
                отбираем каждую позицию, следя за тем, чтобы качество
                соответствовало вашим ожиданиям.
              </p>
              <p>
                Наша миссия — сделать роскошь доступной без компромиссов.
                Каждый материал проверяется на подлинность, каждый поставщик
                проходит аудит качества. Мы работаем только с сертифицированными
                производителями.
              </p>
              <p>
                Мы верим: стиль — это не цена, а история, рассказанная вещью.
                Пусть каждая покупка у нас станет частью вашей.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a84c]/60" />
              <p className="font-display text-lg italic text-[#c9a84c]">
                "Роскошь живёт в деталях"
              </p>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-4 border border-[#c9a84c]/10" />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="О бренде"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09]/40 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map((s) => (
                <div key={s.label} className="card-luxury p-6 text-center shimmer">
                  <div className="font-display text-3xl gold-gradient mb-1">{s.value}</div>
                  <div className="font-body text-[9px] tracking-[0.2em] uppercase text-[#6a5e4a]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
