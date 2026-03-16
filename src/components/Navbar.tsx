import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "Pacientes", href: "/pacientes" },
  { label: "Contacto", href: "/contacto" },
];

const whatsappUrl =
  "https://wa.me/50767573153?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        data-header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "header-glass scrolled shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="FisioGMED"
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link-animated text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-[#2E3A6E] hover:text-[#E87F35]"
                      : "text-white hover:text-[#E87F35]"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-[#E87F35] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#D06A20]"
              >
                Agendar Cita
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
            >
              <span className={`block w-6 h-0.5 transition-colors duration-300 ${isScrolled ? "bg-[#2E3A6E]" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 transition-colors duration-300 ${isScrolled ? "bg-[#2E3A6E]" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 transition-colors duration-300 ${isScrolled ? "bg-[#2E3A6E]" : "bg-white"}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay Menu — Glassmorphic */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{
            background: 'rgba(46, 58, 110, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-2xl font-medium hover:text-[#E87F35] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-primary bg-[#E87F35] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-[#D06A20]"
              onClick={() => setIsOpen(false)}
            >
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </>
  );
}
