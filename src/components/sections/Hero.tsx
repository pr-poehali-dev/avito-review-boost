export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0c09]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="opacity-0 animate-fade-in delay-100 font-body text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] mb-8">
          Премиум Дропшиппинг
        </p>

        <h1 className="opacity-0 animate-fade-up delay-200 font-display text-6xl md:text-8xl lg:text-[110px] font-light leading-[0.9] tracking-[0.05em] text-[#e8dcc8] mb-8">
          LUXE
          <br />
          <em className="gold-gradient not-italic">DROP</em>
        </h1>

        <div className="opacity-0 animate-fade-in delay-300 flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7d6a]">
            Премиальная одежда и аксессуары
          </p>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
        </div>

        <p className="opacity-0 animate-fade-up delay-400 font-display text-xl md:text-2xl font-light text-[#b8a88a] italic mb-14 max-w-2xl mx-auto leading-relaxed">
          Эксклюзивные вещи высокого класса — прямо к вашей двери
        </p>

        <div className="opacity-0 animate-fade-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => scrollTo("#catalog")}
            className="bg-[#c9a84c] text-[#0e0c09] px-10 py-4 font-body text-xs tracking-[0.3em] uppercase hover:bg-[#e8d5a3] transition-all duration-300"
          >
            Смотреть каталог
          </button>
          <button
            onClick={() => scrollTo("#collections")}
            className="border border-[#c9a84c]/40 text-[#c9a84c] px-10 py-4 font-body text-xs tracking-[0.3em] uppercase hover:border-[#c9a84c] transition-all duration-300"
          >
            Коллекции
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-600">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#5a5040]">Прокрутите</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
