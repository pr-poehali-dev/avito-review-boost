export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080604] border-t border-[#c9a84c]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl tracking-[0.15em] text-gold mb-4">
              LUXEDROP
            </div>
            <p className="font-body text-xs text-[#5a5040] leading-relaxed max-w-xs">
              Кураторский дропшиппинг-бутик премиальной одежды и аксессуаров
              ведущих европейских домов моды.
            </p>
          </div>

          <div>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-5">
              Навигация
            </p>
            <ul className="space-y-3">
              {[
                ["#catalog", "Каталог"],
                ["#collections", "Коллекции"],
                ["#brand", "О бренде"],
                ["#delivery", "Доставка"],
                ["#contacts", "Контакты"],
              ].map(([href, label]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-body text-xs text-[#5a5040] hover:text-[#c9a84c] transition-colors tracking-wide"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-5">
              Контакты
            </p>
            <div className="space-y-3">
              <p className="font-body text-xs text-[#5a5040]">+7 (999) 000-00-00</p>
              <p className="font-body text-xs text-[#5a5040]">order@luxedrop.ru</p>
              <p className="font-body text-xs text-[#5a5040]">@luxedrop_manager</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#c9a84c]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-[#3a3020]">
            © 2025 LUXEDROP. Все права защищены
          </p>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#c9a84c]/20" />
            <span className="font-body text-[9px] tracking-[0.15em] text-[#3a3020]">
              Политика конфиденциальности
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
