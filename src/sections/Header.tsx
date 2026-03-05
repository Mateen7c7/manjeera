import { useState, useEffect } from "react";
import { Menu, X, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "./TopBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Specialities", href: "#specialities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {!isScrolled && <TopBar />}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <img
                src="/images/logo.jpeg"
                alt="Sri Manjeera Hospital Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#4A1A7A] leading-tight">
                SRI MANJEERA
              </span>
              <span className="text-[10px] text-[#D4AF37] tracking-wider font-semibold">
                HOSPITAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#4A1A7A] transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#4A1A7A] hover:bg-[#3A1560] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-105">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#4A1A7A] transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-[#4A1A7A] hover:bg-[#3A1560] text-white rounded-full px-6 py-2 text-sm font-medium w-full mt-2">
                Book Appointment
              </Button>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <a
                  href="tel:9491320132"
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 bg-[#4A1A7A]/10 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-[#4A1A7A]" />
                  </div>
                  94913 20132
                </a>
                <a
                  href="tel:9494950152"
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-[#4A1A7A]" />
                  </div>
                  94949 50152
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.facebook.com/people/Sri-Manjeera-Hospital/61582157684031/?rdid=j0MxdBjAGQDIc9pH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D7YkDkoaC%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#4A1A7A]/10 rounded-full flex items-center justify-center text-[#4A1A7A]"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/srimanjeerahospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#4A1A7A]/10 rounded-full flex items-center justify-center text-[#4A1A7A]"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@ManjeeraHospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#4A1A7A]/10 rounded-full flex items-center justify-center text-[#4A1A7A]"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
