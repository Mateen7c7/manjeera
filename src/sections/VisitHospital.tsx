import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, User } from 'lucide-react';

const VisitHospital = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hospital-building.jpg"
                alt="Sri Manjeera Hospital Building"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A7A]/30 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D4AF37] rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4A1A7A] rounded-full opacity-20"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Location Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#4A1A7A] to-[#6B2D9F] rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin size={40} className="text-white" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A1A7A]">
              Visit Our Hospital
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Sri Manjeera Hospital is conveniently located in Kurnool, providing 
              accessible healthcare services to the community. Our modern facility 
              is equipped with state-of-the-art medical equipment and staffed by 
              experienced healthcare professionals.
            </p>

            {/* Address Card */}
            <div className="bg-[#4A1A7A]/5 rounded-xl p-6 border-l-4 border-[#4A1A7A]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A1A7A] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#4A1A7A] mb-1">Our Location</p>
                  <p className="text-gray-600 text-sm">
                    #50-760/A/120, Viswabharathi Hospital Line,<br />
                    Gayathri Estate, KURNOOL - 518 002
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#D4AF37]/10 rounded-xl p-6 border-l-4 border-[#D4AF37]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#4A1A7A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#4A1A7A] mb-1">Contact Us</p>
                  <p className="text-gray-600 text-sm font-bold">94913 20132</p>
                </div>
              </div>
            </div>

            {/* Managing Director */}
            <div className="bg-gradient-to-r from-[#4A1A7A]/10 to-[#D4AF37]/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4A1A7A] rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  {/* <p className="text-xs text-gray-500 uppercase tracking-wider">Managing Director</p> */}
                  <p className="font-bold text-[#4A1A7A]">G. PRASAD</p>
                  <p className="text-sm text-gray-600">Cell: 94949 50152</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="bg-[#4A1A7A] hover:bg-[#3A1560] text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              Get Directions
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitHospital;
