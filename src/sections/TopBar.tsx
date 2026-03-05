import { Phone, Clock, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#4A1A7A] text-white py-2 hidden sm:block border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs font-medium">
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
              <span>24/7 Emergency Services</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#D4AF37]" />
            <span>Kurnool, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
