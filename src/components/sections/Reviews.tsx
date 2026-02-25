const reviews = [
  {
    name: "Анастасия М.",
    city: "Москва",
    text: "Заказывала пальто из коллекции Noir. Качество превзошло ожидания — настоящий кашемир, безупречный пошив. Упаковка тоже на уровне, как будто из бутика на Rue du Faubourg.",
    rating: 5,
    date: "Январь 2025",
  },
  {
    name: "Дмитрий К.",
    city: "Санкт-Петербург",
    text: "Брал сумку в подарок жене. Менеджер помог с выбором, прислал фото вживую. Доставка пришла за 2 дня, жена в восторге. Обязательно вернусь.",
    rating: 5,
    date: "Февраль 2025",
  },
  {
    name: "Екатерина В.",
    city: "Казань",
    text: "Третий заказ и каждый раз на высоте. Ценю, что товары реально соответствуют описанию. Никаких неприятных сюрпризов — только качество.",
    rating: 5,
    date: "Январь 2025",
  },
  {
    name: "Игорь Н.",
    city: "Екатеринбург",
    text: "Скептически относился к онлайн-покупкам люксовых вещей. Но здесь всё иначе: прозрачность, честные фото, быстрая связь. Шарф пришёл идеальным.",
    rating: 4,
    date: "Декабрь 2024",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 bg-[#0e0c09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
            Мнения клиентов
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">
            Отзывы
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="card-luxury p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c9a84c]/60 via-[#c9a84c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < r.rating ? "text-[#c9a84c]" : "text-[#3a3020]"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="font-display text-lg font-light italic text-[#c8bca8] leading-relaxed mb-8">
                "{r.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs tracking-[0.15em] text-[#e8dcc8]">{r.name}</p>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-[#5a5040] mt-1">
                    {r.city}
                  </p>
                </div>
                <p className="font-body text-[9px] tracking-[0.15em] text-[#3a3020]">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
