import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  User,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Specialities", href: "#specialities" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={18} />,
      text: "#50-760/A/120, Viswabharathi Hospital Line, Gayathri Estate, KURNOOL - 518 002",
    },
    {
      icon: <Phone size={18} />,
      text: "94913 20132",
      href: "tel:9491320132",
    },
    {
      icon: <User size={18} />,
      text: "Managing Director: G. PRASAD (94949 50152)",
    },
    {
      icon: <Clock size={18} />,
      text: "24/7 Emergency Services",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/people/Sri-Manjeera-Hospital/61582157684031/?rdid=j0MxdBjAGQDIc9pH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D7YkDkoaC%2F",
      label: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/srimanjeerahospital",
      label: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/@ManjeeraHospital",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#4A1A7A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <img
                  src="/images/logo.jpeg"
                  alt="Sri Manjeera Hospital Logo"
                  className="w-full h-full object-contain rounded-full border-2 border-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  SRI MANJEERA
                </span>
                <span className="text-sm text-[#D4AF37] tracking-wider font-semibold">
                  HOSPITAL
                </span>
              </div>
            </a>

            <p className="text-white/80 text-sm leading-relaxed">
              Sri Manjeera Hospital is a trusted healthcare facility in Kurnool,
              dedicated to providing comprehensive medical services with a
              patient-first approach. Our team of experienced consultants are
              committed to delivering quality healthcare to the community.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#4A1A7A] transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#D4AF37] hover:pl-2 transition-all duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#D4AF37] mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/80 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#3A1560] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/60 text-sm">
            ©2026 All Rights Reserved. Sri Manjeera Hospital | Designed with
            care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
