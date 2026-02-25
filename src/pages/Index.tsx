import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Каталог", href: "#catalog" },
  { label: "Коллекции", href: "#collections" },
  { label: "О бренде", href: "#brand" },
  { label: "Доставка", href: "#delivery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const CATALOG = [
  { name: "Шёлковое пальто Maison", category: "Верхняя одежда", price: "28 900 ₽", tag: "Новинка", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" },
  { name: "Кожаная сумка Atelier", category: "Аксессуары", price: "19 500 ₽", tag: "Хит", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
  { name: "Кашемировый свитер Loire", category: "Трикотаж", price: "14 200 ₽", tag: null, img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
  { name: "Платье-миди Riviera", category: "Платья", price: "22 700 ₽", tag: "Новинка", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" },
  { name: "Шарф из мериноса Blanc", category: "Аксессуары", price: "6 400 ₽", tag: null, img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80" },
  { name: "Классические брюки Sartori", category: "Брюки", price: "11 900 ₽", tag: "Хит", img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4571?w=600&q=80" },
];

const COLLECTIONS = [
  { name: "Riviera Summer", subtitle: "Лето 2025", desc: "Лёгкие шелка и льняные ткани, вдохновлённые югом Франции", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", items: "42 позиции" },
  { name: "Noir Parisien", subtitle: "Осень 2025", desc: "Строгая монохромная эстетика парижского шика", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", items: "38 позиций" },
  { name: "Alpine Couture", subtitle: "Зима 2025", desc: "Роскошный кашемир и шерсть для холодных сезонов", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80", items: "31 позиция" },
];

const STATS = [
  { value: "500+", label: "Позиций в каталоге" },
  { value: "40+", label: "Брендов-партнёров" },
  { value: "15", label: "Стран доставки" },
  { value: "3 000+", label: "Довольных клиентов" },
];

const DELIVERY_STEPS = [
  { num: "01", title: "Оформите заказ", desc: "Выберите товар из каталога и оставьте заявку через форму на сайте" },
  { num: "02", title: "Подтверждение", desc: "Мы свяжемся с вами в течение 2 часов, уточним детали и выставим счёт" },
  { num: "03", title: "Отправка", desc: "Заказ упаковывается в фирменную упаковку и передаётся в доставку" },
  { num: "04", title: "Получение", desc: "Курьер доставит заказ до двери. Примерка перед оплатой — по договорённости" },
];

const ZONES = [
  { region: "Москва и МО", time: "1–2 дня", price: "Бесплатно от 10 000 ₽" },
  { region: "Россия (регионы)", time: "3–7 дней", price: "от 350 ₽" },
  { region: "СНГ", time: "7–14 дней", price: "от 800 ₽" },
  { region: "Европа", time: "10–20 дней", price: "от 1 500 ₽" },
];

const REVIEWS = [
  { name: "Анастасия М.", city: "Москва", text: "Заказывала пальто из коллекции Noir. Качество превзошло ожидания — настоящий кашемир, безупречный пошив. Упаковка тоже на уровне, как будто из бутика.", rating: 5, date: "Январь 2025" },
  { name: "Дмитрий К.", city: "Санкт-Петербург", text: "Брал сумку в подарок жене. Менеджер помог с выбором, прислал фото вживую. Доставка пришла за 2 дня, жена в восторге.", rating: 5, date: "Февраль 2025" },
  { name: "Екатерина В.", city: "Казань", text: "Третий заказ и каждый раз на высоте. Ценю, что товары реально соответствуют описанию. Никаких неприятных сюрпризов — только качество.", rating: 5, date: "Январь 2025" },
  { name: "Игорь Н.", city: "Екатеринбург", text: "Скептически относился к онлайн-покупкам люксовых вещей. Но здесь всё иначе: прозрачность, честные фото, быстрая связь.", rating: 4, date: "Декабрь 2024" },
];

const FAQS = [
  { q: "Как убедиться в подлинности товаров?", a: "Все наши поставщики — сертифицированные европейские производители. К каждому заказу прилагаются документы о качестве. По запросу присылаем фото живых товаров." },
  { q: "Возможен ли возврат или обмен?", a: "Да, возврат и обмен возможны в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке без следов носки." },
  { q: "Как оплатить заказ?", a: "Принимаем оплату картой (Visa, MasterCard, МИР), переводом на счёт, а также наличными при получении в Москве и Санкт-Петербурге." },
  { q: "Можно ли заказать с персонализацией?", a: "По некоторым позициям возможны индивидуальные заказы с учётом размера и цвета. Уточните наличие при оформлении заявки." },
  { q: "Есть ли физический шоурум?", a: "На данный момент работаем онлайн, однако в Москве возможна встреча с менеджером и примерка отдельных позиций." },
  { q: "Как долго ждать ответа на заявку?", a: "Отвечаем на все заявки в течение 1–2 часов в рабочее время (10:00–21:00 МСК, ежедневно)." },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-20">
      <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">{eyebrow}</p>
      <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8]">{title}</h2>
      <div className="flex items-center justify-center gap-4 mt-5">
        <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
        <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 inline-block" />
        <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
      </div>
    </div>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });

  const heroRef = useInView(0.1);
  const catalogRef = useInView(0.1);
  const collectionsRef = useInView(0.1);
  const brandRef = useInView(0.1);
  const deliveryRef = useInView(0.1);
  const reviewsRef = useInView(0.1);
  const faqRef = useInView(0.1);
  const contactsRef = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setFormLoading(false);
    setFormSent(true);
  };

  const reveal = (inView: boolean) =>
    `transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <div className="min-h-screen bg-[#0e0c09] text-[#e8dcc8] overflow-x-hidden">

      {/* Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.02]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }}
      />

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-[#0e0c09]/90 border-b border-[#c9a84c]/10" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("#")} className="font-display text-2xl tracking-[0.15em] text-[#c9a84c]">
            LUXEDROP
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button onClick={() => scrollTo(item.href)} className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b8a88a] hover:text-[#c9a84c] transition-colors">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollTo("#contacts")}
            className="hidden md:flex border border-[#c9a84c] text-[#c9a84c] px-5 py-2 font-body text-[10px] tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0e0c09] transition-all duration-300"
          >
            Заказать
          </button>
          <button className="md:hidden text-[#c9a84c]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0e0c09]/95 backdrop-blur-xl border-t border-[#c9a84c]/10 px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="block w-full text-left font-body text-[10px] tracking-[0.2em] uppercase text-[#b8a88a] hover:text-[#c9a84c] transition-colors py-2 border-b border-[#1e1a14]">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0c09]">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />

        <div ref={heroRef.ref} className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${reveal(heroRef.inView)}`}>
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-8">
            Премиум Дропшиппинг
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[110px] font-light leading-[0.9] tracking-[0.05em] text-[#e8dcc8] mb-8">
            LUXE<br />
            <span style={{ background: "linear-gradient(135deg,#c9a84c,#e8d5a3,#c9a84c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              DROP
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8a7d6a]">Премиальная одежда и аксессуары</p>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
          </div>
          <p className="font-display text-xl md:text-2xl font-light text-[#b8a88a] italic mb-14 max-w-2xl mx-auto leading-relaxed">
            Эксклюзивные вещи высокого класса — прямо к вашей двери
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button onClick={() => scrollTo("#catalog")} className="bg-[#c9a84c] text-[#0e0c09] px-10 py-4 font-body text-[10px] tracking-[0.3em] uppercase hover:bg-[#e8d5a3] transition-all duration-300">
              Смотреть каталог
            </button>
            <button onClick={() => scrollTo("#collections")} className="border border-[#c9a84c]/40 text-[#c9a84c] px-10 py-4 font-body text-[10px] tracking-[0.3em] uppercase hover:border-[#c9a84c] transition-all duration-300">
              Коллекции
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#3a3020]">Прокрутите</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-28 bg-[#0e0c09]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Наши товары" title="Каталог" />
          <div ref={catalogRef.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${reveal(catalogRef.inView)}`}>
            {CATALOG.map((p) => (
              <div key={p.name} className="group bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 overflow-hidden cursor-pointer hover:border-[#c9a84c]/30 transition-colors duration-500" onClick={() => scrollTo("#contacts")}>
                <div className="relative overflow-hidden h-80">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09]/60 via-transparent to-transparent" />
                  {p.tag && <span className="absolute top-4 left-4 bg-[#c9a84c] text-[#0e0c09] font-body text-[9px] tracking-[0.25em] uppercase px-3 py-1">{p.tag}</span>}
                </div>
                <div className="p-6">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#6a5e4a] mb-2">{p.category}</p>
                  <h3 className="font-display text-xl text-[#e8dcc8] mb-3 group-hover:text-[#c9a84c] transition-colors">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-[#c9a84c] tracking-wider">{p.price}</span>
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#6a5e4a] border-b border-[#6a5e4a]/40">Заказать</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => scrollTo("#contacts")} className="border border-[#c9a84c]/40 text-[#c9a84c] px-12 py-4 font-body text-[10px] tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 transition-all duration-300">
              Запросить полный каталог
            </button>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-28 bg-[#0a0806]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Сезонные линии" title="Коллекции" />
          <div ref={collectionsRef.ref} className={`space-y-8 ${reveal(collectionsRef.inView)}`}>
            {COLLECTIONS.map((col, i) => (
              <div key={col.name} className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} overflow-hidden bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 hover:border-[#c9a84c]/25 transition-colors duration-500`}>
                <div className="md:w-1/2 h-72 md:h-96 overflow-hidden relative">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/30 to-transparent" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center p-10 md:p-16">
                  <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">{col.subtitle} · {col.items}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-[#e8dcc8] mb-5">{col.name}</h3>
                  <p className="font-body text-sm text-[#7a6e5c] leading-relaxed mb-8">{col.desc}</p>
                  <button onClick={() => scrollTo("#contacts")} className="self-start border-b border-[#c9a84c]/40 text-[#c9a84c] font-body text-[10px] tracking-[0.25em] uppercase pb-1 hover:border-[#c9a84c] transition-colors">
                    Смотреть коллекцию →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND */}
      <section id="brand" className="py-28 bg-[#0e0c09] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#c9a84c,#c9a84c 1px,transparent 1px,transparent 60px)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div ref={brandRef.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reveal(brandRef.inView)}`}>
            <div>
              <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-6">Наша история</p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-[#e8dcc8] leading-tight mb-8">
                О бренде<br />
                <span style={{ background: "linear-gradient(135deg,#c9a84c,#e8d5a3,#c9a84c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  LUXEDROP
                </span>
              </h2>
              <div className="space-y-5 text-[#7a6e5c] font-body text-sm leading-loose">
                <p>LUXEDROP — кураторский дропшиппинг-бутик, объединяющий лучшие европейские дома моды. Мы тщательно отбираем каждую позицию, следя за тем, чтобы качество соответствовало вашим ожиданиям.</p>
                <p>Наша миссия — сделать роскошь доступной без компромиссов. Каждый материал проверяется на подлинность, каждый поставщик проходит аудит качества.</p>
                <p>Мы верим: стиль — это не цена, а история, рассказанная вещью. Пусть каждая покупка у нас станет частью вашей.</p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a84c]/60" />
                <p className="font-display text-lg italic text-[#c9a84c]">"Роскошь живёт в деталях"</p>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -inset-4 border border-[#c9a84c]/10" />
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" alt="О бренде" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09]/40 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 p-6 text-center">
                    <div className="font-display text-3xl mb-1" style={{ background: "linear-gradient(135deg,#c9a84c,#e8d5a3,#c9a84c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</div>
                    <div className="font-body text-[9px] tracking-[0.2em] uppercase text-[#6a5e4a]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-28 bg-[#0a0806]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Логистика" title="Доставка" />
          <div ref={deliveryRef.ref} className={reveal(deliveryRef.inView)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {DELIVERY_STEPS.map((s) => (
                <div key={s.num} className="bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 p-8">
                  <div className="font-display text-5xl font-light text-[#c9a84c]/15 mb-4">{s.num}</div>
                  <h3 className="font-display text-xl text-[#e8dcc8] mb-3">{s.title}</h3>
                  <p className="font-body text-xs text-[#6a5e4a] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-[#c9a84c]/10 px-8 py-4">
                {["Регион", "Срок", "Стоимость"].map((h) => (
                  <span key={h} className="font-body text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">{h}</span>
                ))}
              </div>
              {ZONES.map((z, i) => (
                <div key={z.region} className={`grid grid-cols-3 px-8 py-5 hover:bg-[#c9a84c]/5 transition-colors ${i < ZONES.length - 1 ? "border-b border-[#1e1a14]" : ""}`}>
                  <span className="font-body text-sm text-[#e8dcc8]">{z.region}</span>
                  <span className="font-body text-sm text-[#b8a88a]">{z.time}</span>
                  <span className="font-body text-sm text-[#7a6e5c]">{z.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center font-body text-xs text-[#5a5040]">Все заказы отправляются в фирменной упаковке с персональной открыткой</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-[#0e0c09]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Мнения клиентов" title="Отзывы" />
          <div ref={reviewsRef.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${reveal(reviewsRef.inView)}`}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="group bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 p-8 relative overflow-hidden hover:border-[#c9a84c]/30 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c9a84c]/60 via-[#c9a84c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-sm ${i < r.rating ? "text-[#c9a84c]" : "text-[#3a3020]"}`}>★</span>
                  ))}
                </div>
                <p className="font-display text-lg font-light italic text-[#c8bca8] leading-relaxed mb-8">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] text-[#e8dcc8]">{r.name}</p>
                    <p className="font-body text-[9px] tracking-[0.2em] uppercase text-[#5a5040] mt-1">{r.city}</p>
                  </div>
                  <p className="font-body text-[9px] text-[#3a3020]">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 bg-[#0a0806]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="Вопросы и ответы" title="FAQ" />
          <div ref={faqRef.ref} className={`space-y-3 ${reveal(faqRef.inView)}`}>
            {FAQS.map((item, i) => (
              <div key={i} className={`bg-gradient-to-b from-[#1a1610] to-[#120f0a] border transition-all duration-300 ${openFaq === i ? "border-[#c9a84c]/40" : "border-[#c9a84c]/10"}`}>
                <button className="w-full flex items-center justify-between px-8 py-6 text-left group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className={`font-body text-sm tracking-wide transition-colors ${openFaq === i ? "text-[#c9a84c]" : "text-[#b8a88a] group-hover:text-[#c9a84c]"}`}>{item.q}</span>
                  <span className={`text-[#c9a84c] text-lg transition-transform duration-300 ml-4 flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 border-t border-[#c9a84c]/10">
                    <p className="font-body text-sm text-[#7a6e5c] leading-relaxed pt-5">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-[#0e0c09] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#c9a84c,#c9a84c 1px,transparent 1px,transparent 60px)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader eyebrow="Свяжитесь с нами" title="Контакты" />
          <div ref={contactsRef.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${reveal(contactsRef.inView)}`}>
            <div>
              <p className="font-body text-sm text-[#7a6e5c] leading-relaxed mb-12">Оставьте заявку и наш менеджер свяжется с вами в течение 1–2 часов. Мы поможем подобрать идеальный образ из нашего каталога.</p>
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
                      <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-1">{item.label}</p>
                      <p className="font-body text-sm text-[#b8a88a]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#1a1610] to-[#120f0a] border border-[#c9a84c]/10 p-10">
              {formSent ? (
                <div className="text-center py-12">
                  <div className="font-display text-5xl mb-4" style={{ background: "linear-gradient(135deg,#c9a84c,#e8d5a3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>✓</div>
                  <h3 className="font-display text-2xl text-[#e8dcc8] mb-3">Заявка отправлена</h3>
                  <p className="font-body text-sm text-[#7a6e5c]">Мы свяжемся с вами в ближайшее время</p>
                  <button onClick={() => setFormSent(false)} className="mt-8 font-body text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/40 pb-px hover:border-[#c9a84c] transition-colors">
                    Новая заявка
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">Имя *</label>
                      <input name="name" required value={form.name} onChange={handleFormChange} placeholder="Ваше имя" className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020]" />
                    </div>
                    <div>
                      <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">Телефон *</label>
                      <input name="phone" required value={form.phone} onChange={handleFormChange} placeholder="+7 (999) 000-00-00" className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020]" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleFormChange} placeholder="your@email.com" className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020]" />
                  </div>
                  <div>
                    <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5050] mb-2">Интерес</label>
                    <select name="interest" value={form.interest} onChange={handleFormChange} className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors">
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
                    <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-[#5a5040] mb-2">Сообщение</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleFormChange} placeholder="Опишите, что вас интересует..." className="w-full bg-[#0a0806] border border-[#2a2418] focus:border-[#c9a84c]/60 text-[#b8a88a] px-4 py-3 font-body text-sm outline-none transition-colors placeholder:text-[#3a3020] resize-none" />
                  </div>
                  <button type="submit" disabled={formLoading} className="w-full bg-[#c9a84c] text-[#0e0c09] py-4 font-body text-[10px] tracking-[0.3em] uppercase hover:bg-[#e8d5a3] transition-all duration-300 disabled:opacity-60">
                    {formLoading ? "Отправка..." : "Отправить заявку"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080604] border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="font-display text-2xl tracking-[0.15em] text-[#c9a84c] mb-4">LUXEDROP</div>
              <p className="font-body text-xs text-[#5a5040] leading-relaxed max-w-xs">Кураторский дропшиппинг-бутик премиальной одежды и аксессуаров ведущих европейских домов моды.</p>
            </div>
            <div>
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-5">Навигация</p>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <button onClick={() => scrollTo(item.href)} className="font-body text-xs text-[#5a5040] hover:text-[#c9a84c] transition-colors">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-5">Контакты</p>
              <div className="space-y-3">
                <p className="font-body text-xs text-[#5a5040]">+7 (999) 000-00-00</p>
                <p className="font-body text-xs text-[#5a5040]">order@luxedrop.ru</p>
                <p className="font-body text-xs text-[#5a5040]">@luxedrop_manager</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#c9a84c]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[9px] tracking-[0.2em] uppercase text-[#3a3020]">© 2025 LUXEDROP. Все права защищены</p>
            <p className="font-body text-[9px] tracking-[0.15em] text-[#3a3020]">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
