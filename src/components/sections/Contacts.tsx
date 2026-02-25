import { useState } from "react";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacts" className="py-28 bg-[#0e0c09] relative overflow-hidden">
      <div
        className="absolute left-0 top-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #c9a84c,
            #c9a84c 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
            Свяжитесь с нами
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">
            Контакты
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-sm text-[#7a6e5c] leading-relaxed mb-12">
              Оставьте заявку и наш менеджер свяжется с вами в течение 1–2 часов.
              Мы поможем подобрать идеальный образ из нашего каталога.
            </p>

            <div className="space-y-8">
              {[
                { label: "Телефон", value: "+7 (999) 000-00-00" },
                { label: "Email", value: "order@luxedrop.ru" },
                { label: "WhatsApp / Telegram", value: "@luxedrop_manager" },
                { label: "Часы работы", value: "10:00 – 21:00, ежедневно" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 items-start">
                  <span className="h-px w-8 bg-[#c9a84c]/40 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-[#b8a88a]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-luxury p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="font-display text-4xl gold-gradient mb-4">✓</div>
                <h3 className="font-display text-2xl text-[#e8dcc8] mb-3">
                  Заявка отправлена
                </h3>
                <p className="font-body text-sm text-[#7a6e5c]">
                  Мы свяжемся с вами в ближайшее время
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 font-body text-xs tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/40 pb-px hover:border-[#c9a84c] transition-colors"
                >
                  Новая заявка
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">
                      Имя *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">
                      Телефон *
                    </label>
                    <input
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020]"
                  />
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">
                    Интерес
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors"
                  >
                    <option value="">Выберите категорию</option>
                    <option>Верхняя одежда</option>
                    <option>Платья</option>
                    <option>Трикотаж</option>
                    <option>Аксессуары</option>
                    <option>Подарок</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Опишите, что вас интересует..."
                    className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c9a84c] text-[#0e0c09] py-4 font-body text-xs tracking-[0.3em] uppercase hover:bg-[#e8d5a3] transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
