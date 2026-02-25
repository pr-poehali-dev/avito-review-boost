import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Каталог", href: "#catalog" },
  { label: "О бренде", href: "#about" },
  { label: "Коллекции", href: "#collections" },
  { label: "Доставка", href: "#delivery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const CATALOG_ITEMS = [
  { name: "Пальто Celeste", category: "Верхняя одежда", price: "38 900 ₽", badge: "Новинка" },
  { name: "Сумка Aurore", category: "Аксессуары", price: "24 500 ₽", badge: "Хит" },
  { name: "Шёлковое платье Lumière", category: "Платья", price: "19 800 ₽", badge: null },
  { name: "Пояс Doré", category: "Аксессуары", price: "8 200 ₽", badge: null },
  { name: "Костюм Élite", category: "Деловой стиль", price: "52 000 ₽", badge: "Эксклюзив" },
  { name: "Шарф Ivoire", category: "Аксессуары", price: "6 400 ₽", badge: null },
];

const COLLECTIONS = [
  { name: "Осень / Зима", subtitle: "2025–2026", desc: "Роскошь тёмных тонов и богатых фактур. Кашемир, шерсть, натуральная кожа." },
  { name: "Capsule Noire", subtitle: "Лимитированная", desc: "12 предметов. Чёрная монохромная коллекция для тех, кто знает цену деталям." },
  { name: "Été Doré", subtitle: "Весна / Лето", desc: "Лёгкость шёлка и льна в золотисто-кремовых оттенках южного лета." },
];

const REVIEWS = [
  { name: "Анастасия В.", city: "Москва", text: "Качество на уровне европейских брендов. Пальто сшито идеально, ткань невероятная. Буду заказывать снова.", stars: 5 },
  { name: "Михаил Р.", city: "Санкт-Петербург", text: "Заказал костюм — получил произведение искусства. Упаковка, внимание к деталям, скорость — всё на высшем уровне.", stars: 5 },
  { name: "Елена К.", city: "Казань", text: "Давно искала такой формат: премиум без переплаты за бренд. MAISON — именно то.", stars: 5 },
];

const FAQS = [
  { q: "Как происходит доставка?", a: "Доставляем по всей России курьером СДЭК или Почтой России. Международная доставка доступна в 40+ стран. Сроки: 2–5 дней по России, 7–14 дней за рубеж." },
  { q: "Какое качество товаров?", a: "Мы работаем исключительно с проверенными поставщиками категории premium и luxury. Каждая единица проходит контроль качества перед отправкой." },
  { q: "Возможен ли возврат?", a: "Да, принимаем возвраты в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке без следов использования." },
  { q: "Есть ли примерка перед покупкой?", a: "В Москве доступна примерка при курьерской доставке. В других городах — примерка в пунктах СДЭК." },
  { q: "Как выбрать размер?", a: "На каждой странице товара есть подробная таблица размеров. Наши консультанты также помогут подобрать нужный размер — напишите нам." },
];

function useInView(threshold = 0.15) {
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

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroSection = useInView(0.1);
  const catalogSection = useInView(0.1);
  const aboutSection = useInView(0.1);
  const collectionsSection = useInView(0.1);
  const deliverySection = useInView(0.1);
  const reviewsSection = useInView(0.1);
  const faqSection = useInView(0.1);
  const contactsSection = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-obsidian text-champagne min-h-screen font-montserrat overflow-x-hidden">

      {/* Grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/10" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <a href="#" onClick={() => scrollTo("#")} className="font-cormorant text-2xl font-light tracking-[0.3em] text-gold cursor-pointer">
            MAISON
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)}
                className="text-xs tracking-[0.2em] uppercase text-champagne/60 hover:text-gold transition-colors duration-300">
                {item.label}
              </button>
            ))}
          </div>
          <button className="lg:hidden text-champagne/70 hover:text-gold transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"} bg-obsidian/98 border-b border-gold/10`}>
          <div className="flex flex-col px-6 pb-6 pt-2 gap-4">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)}
                className="text-xs tracking-[0.2em] uppercase text-champagne/60 hover:text-gold transition-colors text-left py-2 border-b border-gold/5">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-noir to-obsidian" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #E8D5A3 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, #C9A84C 80px, #C9A84C 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, #C9A84C 80px, #C9A84C 81px)" }} />
        </div>

        <div ref={heroSection.ref}
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <p className="text-xs tracking-[0.5em] uppercase text-gold/70 mb-6 font-light">Эксклюзивный дропшопинг</p>
          <h1 className="font-cormorant text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.9] tracking-tight text-champagne mb-8">
            Роскошь<br /><em className="text-gold italic">без границ</em>
          </h1>
          <p className="text-sm tracking-[0.15em] text-champagne/50 max-w-lg mx-auto mb-12 font-light leading-relaxed">
            Премиум одежда и аксессуары высокого класса.<br />Доставка по всему миру.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollTo("#catalog")}
              className="group relative px-10 py-4 bg-gold text-obsidian text-xs tracking-[0.25em] uppercase font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]">
              <span className="relative z-10">Смотреть каталог</span>
              <div className="absolute inset-0 bg-champagne translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button onClick={() => scrollTo("#collections")}
              className="px-10 py-4 border border-gold/30 text-gold text-xs tracking-[0.25em] uppercase font-medium hover:border-gold/60 hover:bg-gold/5 transition-all duration-300">
              Коллекции
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-gold/40" />
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-32 px-6 max-w-7xl mx-auto">
        <div ref={catalogSection.ref}
          className={`transition-all duration-700 ${catalogSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3">Ассортимент</p>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne">Каталог</h2>
            </div>
            <div className="hidden md:block w-24 h-[1px] bg-gold/20 mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {CATALOG_ITEMS.map((item, i) => (
              <div key={i}
                className="group bg-obsidian p-8 hover:bg-noir transition-colors duration-500 cursor-pointer relative overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="aspect-[3/4] bg-gradient-to-br from-noir to-obsidian mb-6 flex items-center justify-center border border-gold/5 group-hover:border-gold/20 transition-colors duration-500">
                  <Icon name="Shirt" size={40} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-500" />
                </div>
                {item.badge && (
                  <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-obsidian bg-gold px-2 py-1 mb-3">{item.badge}</span>
                )}
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/40 mb-1">{item.category}</p>
                <h3 className="font-cormorant text-xl font-light text-champagne mb-3">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-cormorant text-lg text-gold">{item.price}</span>
                  <button className="text-[10px] tracking-[0.2em] uppercase text-champagne/40 hover:text-gold transition-colors group-hover:text-gold/60">
                    В корзину →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(-45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div ref={aboutSection.ref}
          className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center transition-all duration-700 ${aboutSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-6">История</p>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne mb-8 leading-tight">
              О бренде<br /><em className="text-gold/80 italic">MAISON</em>
            </h2>
            <div className="space-y-5 text-champagne/50 text-sm leading-relaxed font-light">
              <p>MAISON — это концепция роскоши, доступной тем, кто знает её настоящую цену. Мы работаем напрямую с лучшими производителями Италии, Франции и Японии, минуя посредников.</p>
              <p>Каждое изделие в нашем каталоге проходит строгий отбор: натуральные ткани, безупречный крой, долговечность. Мы не гонимся за массовостью — только за качеством.</p>
              <p>Наша миссия: сделать настоящий премиум доступным для людей с безупречным вкусом по всему миру.</p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[["500+", "Товаров"], ["40+", "Стран доставки"], ["3 года", "На рынке"]].map(([num, label], i) => (
                <div key={i}>
                  <div className="font-cormorant text-3xl text-gold font-light">{num}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-champagne/30 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-noir via-obsidian to-noir border border-gold/10 flex items-center justify-center">
              <div className="text-center">
                <div className="font-cormorant text-8xl text-gold/10 font-light tracking-widest">M</div>
                <div className="text-[10px] tracking-[0.5em] uppercase text-gold/20 mt-2">Maison</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/15" />
            <div className="absolute -top-6 -right-6 w-20 h-20 border border-gold/10" />
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-32 bg-noir">
        <div ref={collectionsSection.ref}
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${collectionsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3">Сезоны</p>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne">Коллекции</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {COLLECTIONS.map((col, i) => (
              <div key={i}
                className="group relative border border-gold/10 p-10 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="font-cormorant text-6xl text-gold/10 font-light mb-6 leading-none">{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold/50 mb-2">{col.subtitle}</p>
                  <h3 className="font-cormorant text-2xl font-light text-champagne mb-4">{col.name}</h3>
                  <p className="text-sm text-champagne/40 font-light leading-relaxed">{col.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold/40 group-hover:text-gold transition-colors duration-300">
                    <span>Смотреть</span>
                    <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-32 px-6 max-w-7xl mx-auto">
        <div ref={deliverySection.ref}
          className={`transition-all duration-700 ${deliverySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3">Логистика</p>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne">Доставка</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {[
              { icon: "MapPin", title: "По России", desc: "2–5 рабочих дней. Курьером до двери или пункт выдачи СДЭК.", detail: "Бесплатно от 5 000 ₽" },
              { icon: "Globe", title: "Международная", desc: "7–14 дней. 40+ стран мира. EMS и DHL.", detail: "От 1 200 ₽" },
              { icon: "Package", title: "Упаковка", desc: "Фирменная коробка MAISON с тканевым мешочком и сертификатом.", detail: "В подарок" },
              { icon: "RotateCcw", title: "Возврат", desc: "14 дней с момента получения. Простой процесс без лишних вопросов.", detail: "Бесплатно" },
            ].map((d, i) => (
              <div key={i} className="bg-obsidian p-8 hover:bg-noir transition-colors duration-300 group">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                  <Icon name={d.icon} size={18} className="text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-cormorant text-xl text-champagne mb-3 font-light">{d.title}</h3>
                <p className="text-xs text-champagne/40 leading-relaxed mb-4 font-light">{d.desc}</p>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60">{d.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32 bg-noir">
        <div ref={reviewsSection.ref}
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3">Клиенты</p>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne">Отзывы</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="border border-gold/10 p-8 hover:border-gold/25 transition-colors duration-500 relative"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-cormorant text-5xl text-gold/10 absolute top-4 right-6 leading-none font-light">"</div>
                <Stars count={rev.stars} />
                <p className="text-sm text-champagne/50 font-light leading-relaxed mt-4 mb-6 italic font-cormorant text-base">
                  "{rev.text}"
                </p>
                <div className="border-t border-gold/10 pt-4">
                  <div className="font-cormorant text-base text-champagne/80">{rev.name}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-champagne/30">{rev.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
        <div ref={faqSection.ref}
          className={`transition-all duration-700 ${faqSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3">Вопросы</p>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne">FAQ</h2>
          </div>
          <div className="space-y-px">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-gold/10 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group">
                  <span className="font-cormorant text-lg font-light text-champagne/80 group-hover:text-champagne transition-colors pr-4">{faq.q}</span>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} className="text-gold/40 flex-shrink-0 group-hover:text-gold transition-colors" />
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openFaq === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                  <p className="text-sm text-champagne/40 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-32 bg-noir">
        <div ref={contactsSection.ref}
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${contactsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3">Связаться</p>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-champagne mb-8">Контакты</h2>
              <p className="text-sm text-champagne/40 font-light leading-relaxed mb-10 max-w-sm">
                Свяжитесь с нами по любому вопросу — консультация по товарам, индивидуальные заказы, оптовое сотрудничество.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "Mail", label: "Email", value: "hello@maison-store.ru" },
                  { icon: "MessageCircle", label: "Telegram", value: "@maison_store" },
                  { icon: "Clock", label: "Часы работы", value: "Пн–Вс, 9:00–21:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 border border-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={14} className="text-gold/50" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-gold/40">{c.label}</div>
                      <div className="text-sm text-champagne/70 font-light mt-0.5">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-obsidian border border-gold/10 p-10">
              <h3 className="font-cormorant text-2xl text-champagne font-light mb-8">Написать нам</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-gold/40 block mb-2">Ваше имя</label>
                  <input type="text" placeholder="Александра"
                    className="w-full bg-transparent border border-gold/15 px-4 py-3 text-sm text-champagne/70 placeholder-champagne/20 focus:outline-none focus:border-gold/40 transition-colors font-light" />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-gold/40 block mb-2">Email или телефон</label>
                  <input type="text" placeholder="name@mail.ru"
                    className="w-full bg-transparent border border-gold/15 px-4 py-3 text-sm text-champagne/70 placeholder-champagne/20 focus:outline-none focus:border-gold/40 transition-colors font-light" />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-gold/40 block mb-2">Сообщение</label>
                  <textarea rows={4} placeholder="Ваш вопрос или заказ..."
                    className="w-full bg-transparent border border-gold/15 px-4 py-3 text-sm text-champagne/70 placeholder-champagne/20 focus:outline-none focus:border-gold/40 transition-colors font-light resize-none" />
                </div>
                <button className="group w-full py-4 bg-gold text-obsidian text-xs tracking-[0.25em] uppercase font-medium relative overflow-hidden hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-shadow duration-300">
                  <span className="relative z-10">Отправить сообщение</span>
                  <div className="absolute inset-0 bg-champagne translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-cormorant text-2xl font-light tracking-[0.3em] text-gold/60">MAISON</div>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)}
                className="text-[10px] tracking-[0.2em] uppercase text-champagne/25 hover:text-gold/50 transition-colors hidden md:block">
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] tracking-[0.15em] text-champagne/20">© 2026 MAISON. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
