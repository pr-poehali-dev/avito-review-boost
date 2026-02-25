import { useState, useEffect } from "react";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "Коллекции", href: "#collections" },
  { label: "О бренде", href: "#brand" },
  { label: "Доставка", href: "#delivery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-2xl tracking-[0.15em] text-gold cursor-pointer"
        >
          LUXEDROP
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-body text-xs tracking-[0.2em] uppercase text-[#b8a88a] hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] px-5 py-2 text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0e0c09] transition-all duration-300"
          onClick={() => handleNav("#contacts")}
        >
          Заказать
        </button>

        <button
          className="md:hidden text-gold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-[#c9a84c] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-4 bg-[#c9a84c] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#c9a84c] transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-[#c9a84c]/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left font-body text-xs tracking-[0.2em] uppercase text-[#b8a88a] hover:text-gold transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
