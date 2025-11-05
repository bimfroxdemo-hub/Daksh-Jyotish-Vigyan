import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/Astro/dakshlogo.png";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const whatsappNumber = "917016716063";
  const whatsappMessage = encodeURIComponent(
    "Namaste 🙏, I’d like to book a consultation with Acharya Sanjay Shastri. Please share more details."
  );

  const navLinks = [
    { name: { en: "Home", hi: "मुखपृष्ठ" }, path: "/" },
    { name: { en: "About Us", hi: "हमारे बारे में" }, path: "/about" },
    { name: { en: "Zodiac Sign", hi: "राशि चिन्ह" }, path: "/zodiac_sign" },
    { name: { en: "Services", hi: "सेवाएँ" }, path: "/services" },
    { name: { en: "Contact", hi: "संपर्क करें" }, path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#3a0d0d]/95 shadow-md border-b border-[#f5d49b]/30 backdrop-blur-md"
          : "bg-gradient-to-r from-[#4b0f0f]/90 via-[#7a2e2e]/90 to-[#4b0f0f]/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Daksh Jyotish Vigyan Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(245,212,155,0.6)]"
            />
            <div className="flex flex-col ml-2 leading-tight">
              <h1
                className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-[#f8e5b0]" : "text-[#f9e6c5]"
                }`}
              >
                {language === "en"
                  ? "Daksh Jyotish Vigyan"
                  : "दक्ष ज्योतिष विज्ञान"}
              </h1>
              <p
                className={`text-xs tracking-wide italic ${
                  scrolled ? "text-[#ffcf7f]" : "text-[#ffe4a3]"
                }`}
              >
                {language === "en"
                  ? "Acharya Sanjay Shastri"
                  : "आचार्य संजय शास्त्री"}
              </p>
            </div>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-[#f6c27a] to-[#f5e0b8] text-[#4b0f0f] shadow-lg"
                    : scrolled
                    ? "text-[#f8e8c3] hover:text-[#f6d28b]"
                    : "text-[#fff4db] hover:text-[#f6d28b]"
                }`}
              >
                {link.name[language]}
              </Link>
            ))}
          </div>

          {/* ✅ Right WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold px-5 py-2 rounded-md shadow-md transition duration-300 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white hover:opacity-90 hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.52 3.48A11.75 11.75 0 0 0 12 .25C5.5.25.25 5.5.25 12a11.73 11.73 0 0 0 1.59 5.97L.25 24l6.18-1.6A11.73 11.73 0 0 0 12 23.75c6.5 0 11.75-5.25 11.75-11.75a11.7 11.7 0 0 0-3.23-8.52zM12 21.75a9.76 9.76 0 0 1-4.98-1.34l-.36-.21-3.67.95.98-3.57-.23-.38A9.74 9.74 0 0 1 2.25 12C2.25 6.63 6.63 2.25 12 2.25S21.75 6.63 21.75 12 17.37 21.75 12 21.75zM17.34 14.2c-.29-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.9 1.14-.16.19-.33.21-.61.06-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.69-1.6-1.98-.16-.29-.02-.45.12-.6.12-.12.29-.33.43-.49.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.51.07-.78.36-.26.29-1.02.99-1.02 2.4s1.04 2.78 1.18 2.97c.15.19 2.03 3.09 4.9 4.33.68.29 1.21.46 1.63.59.68.21 1.3.18 1.8.11.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z" />
              </svg>
              {language === "en"
                ? "Book Consultation"
                : "परामर्श बुक करें"}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              scrolled ? "text-[#f6d28b]" : "text-[#f9e6c5]"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden flex flex-col mt-2 pb-4 space-y-2 border-t border-[#f6d28b]/30 rounded-md ${
              scrolled
                ? "bg-[#4b0f0f]/95 backdrop-blur-md"
                : "bg-[#4b0f0f]/95 backdrop-blur-md"
            } animate-slide-down`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-[#f6c27a] to-[#f5e0b8] text-[#4b0f0f]"
                    : "text-[#f8e8c3] hover:text-[#f6d28b]"
                }`}
              >
                {link.name[language]}
              </Link>
            ))}

            {/* ✅ Mobile WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-2 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white font-semibold px-5 py-2 rounded-md shadow-md hover:opacity-90 hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] transition flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.52 3.48A11.75 11.75 0 0 0 12 .25C5.5.25.25 5.5.25 12a11.73 11.73 0 0 0 1.59 5.97L.25 24l6.18-1.6A11.73 11.73 0 0 0 12 23.75c6.5 0 11.75-5.25 11.75-11.75a11.7 11.7 0 0 0-3.23-8.52zM12 21.75a9.76 9.76 0 0 1-4.98-1.34l-.36-.21-3.67.95.98-3.57-.23-.38A9.74 9.74 0 0 1 2.25 12C2.25 6.63 6.63 2.25 12 2.25S21.75 6.63 21.75 12 17.37 21.75 12 21.75zM17.34 14.2c-.29-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.9 1.14-.16.19-.33.21-.61.06-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.69-1.6-1.98-.16-.29-.02-.45.12-.6.12-.12.29-.33.43-.49.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.51.07-.78.36-.26.29-1.02.99-1.02 2.4s1.04 2.78 1.18 2.97c.15.19 2.03 3.09 4.9 4.33.68.29 1.21.46 1.63.59.68.21 1.3.18 1.8.11.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z" />
              </svg>
              {language === "en"
                ? "Book Consultation"
                : "परामर्श बुक करें"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
