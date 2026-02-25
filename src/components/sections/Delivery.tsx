const steps = [
  {
    num: "01",
    title: "Оформите заказ",
    desc: "Выберите товар из каталога и оставьте заявку через форму на сайте или в мессенджере",
  },
  {
    num: "02",
    title: "Подтверждение",
    desc: "Мы свяжемся с вами в течение 2 часов, уточним детали и выставим счёт",
  },
  {
    num: "03",
    title: "Отправка",
    desc: "Заказ упаковывается в фирменную упаковку и передаётся в службу доставки",
  },
  {
    num: "04",
    title: "Получение",
    desc: "Курьер доставит ваш заказ до двери. Примерка перед оплатой — по договорённости",
  },
];

const zones = [
  { region: "Москва и МО", time: "1–2 дня", price: "Бесплатно от 10 000 ₽" },
  { region: "Россия (регионы)", time: "3–7 дней", price: "от 350 ₽" },
  { region: "СНГ", time: "7–14 дней", price: "от 800 ₽" },
  { region: "Европа", time: "10–20 дней", price: "от 1 500 ₽" },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-28 bg-[#0a0806]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
            Логистика
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">
            Доставка
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((s, i) => (
            <div key={s.num} className="relative card-luxury p-8">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-[#c9a84c]/30 z-10" />
              )}
              <div className="font-display text-5xl font-light text-[#c9a84c]/15 mb-4">
                {s.num}
              </div>
              <h3 className="font-display text-xl text-[#e8dcc8] mb-3">{s.title}</h3>
              <p className="font-body text-xs text-[#6a5e4a] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-luxury overflow-hidden">
          <div className="grid grid-cols-3 border-b border-[#c9a84c]/10 px-8 py-4">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Регион</span>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Срок</span>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Стоимость</span>
          </div>
          {zones.map((z, i) => (
            <div
              key={z.region}
              className={`grid grid-cols-3 px-8 py-5 transition-colors hover:bg-[#c9a84c]/5 ${
                i < zones.length - 1 ? "border-b border-[#1e1a14]" : ""
              }`}
            >
              <span className="font-body text-sm text-[#e8dcc8]">{z.region}</span>
              <span className="font-body text-sm text-[#b8a88a]">{z.time}</span>
              <span className="font-body text-sm text-[#7a6e5c]">{z.price}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center font-body text-xs text-[#5a5040] tracking-wide">
          Все заказы отправляются в фирменной упаковке с персональной открыткой
        </p>
      </div>
    </section>
  );
}
