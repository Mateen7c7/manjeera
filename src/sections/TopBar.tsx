import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const TopBar = () => {
  const socialLinks = [
    {
      icon: <Facebook size={14} />,
      href: "https://www.facebook.com/people/Sri-Manjeera-Hospital/61582157684031/?rdid=j0MxdBjAGQDIc9pH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D7YkDkoaC%2F",
      label: "Facebook",
    },
    {
      icon: <Instagram size={14} />,
      href: "https://www.instagram.com/srimanjeerahospital",
      label: "Instagram",
    },
    {
      icon: <Youtube size={14} />,
      href: "https://www.youtube.com/@ManjeeraHospital",
      label: "YouTube",
    },
  ];

  return (
    <div className="bg-[#4A1A7A] text-white py-2 hidden lg:block border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-[11px] font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#D4AF37]" />
              <div className="flex gap-3">
                <a
                  href="tel:9491320132"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  94913 20132
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="tel:9494950152"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  94949 50152
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#D4AF37]" />
              <span className="opacity-90">24/7 Emergency Services</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#D4AF37]" />
              <span className="opacity-90">Kurnool, Andhra Pradesh</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
