import { useState } from "react";

const faqs = [
  {
    q: "Как убедиться в подлинности товаров?",
    a: "Все наши поставщики — сертифицированные европейские производители. К каждому заказу прилагаются документы о качестве. По запросу мы присылаем фотографии живых товаров до отправки.",
  },
  {
    q: "Возможен ли возврат или обмен?",
    a: "Да, возврат и обмен возможны в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке, без следов носки. Расходы на обратную доставку при браке — за наш счёт.",
  },
  {
    q: "Как оплатить заказ?",
    a: "Принимаем оплату картой (Visa, MasterCard, МИР), переводом на счёт, а также наличными при получении в Москве и Санкт-Петербурге. Предоплата 50% для регионов.",
  },
  {
    q: "Можно ли заказать вещь под размер или с персонализацией?",
    a: "По некоторым позициям возможны индивидуальные заказы с учётом размера и цвета. Уточните наличие при оформлении заявки — мы свяжемся с поставщиком.",
  },
  {
    q: "Есть ли у вас физический шоурум?",
    a: "На данный момент мы работаем онлайн, однако в Москве возможна встреча с менеджером и примерка отдельных позиций. Уточните наличие при заказе.",
  },
  {
    q: "Как долго ждать ответа на заявку?",
    a: "Мы отвечаем на все заявки в течение 1–2 часов в рабочее время (10:00–21:00 МСК, ежедневно). Срочные вопросы — через WhatsApp или Telegram.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-[#0a0806]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
            Вопросы и ответы
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">
            FAQ
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`card-luxury overflow-hidden transition-all duration-300 ${
                open === i ? "border-[#c9a84c]/40" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`font-body text-sm tracking-wide transition-colors ${
                    open === i ? "text-[#c9a84c]" : "text-[#b8a88a] group-hover:text-[#c9a84c]"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  className={`text-[#c9a84c] text-lg transition-transform duration-300 ml-4 flex-shrink-0 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="px-8 pb-6 border-t border-[#c9a84c]/10">
                  <p className="font-body text-sm text-[#7a6e5c] leading-relaxed pt-5">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
