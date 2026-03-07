import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4A1A7A]/10 px-4 py-2 rounded-full">
              <MapPin size={16} className="text-[#4A1A7A]" />
              <span className="text-sm text-[#4A1A7A]">
                Kurnool, Andhra Pradesh
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Sri Manjeera{' '}
              <span className="text-[#4A1A7A]">Hospital</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-[#D4AF37] font-medium">
              Quality Healthcare | Expert Doctors | Patient-First Approach
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Sri Manjeera Hospital is a trusted healthcare facility in Kurnool, 
              dedicated to providing comprehensive medical services with a patient-first 
              approach. Our team of experienced consultants and specialists are committed 
              to delivering quality healthcare to the community.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Located at Viswabharathi Hospital Line, Gayathri Estate, we offer 
              a wide range of medical specialties including Obstetrics & Gynaecology, 
              General Medicine, General Surgery, Orthopedics, Urology, Pediatrics, 
              Neurosurgery, and ENT services.
            </p>

            {/* Contact Info */}
            {/* <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-[#4A1A7A]">
                <Phone size={18} />
                <span className="font-semibold">94913 20132</span>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="bg-[#4A1A7A] hover:bg-[#3A1560] text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <a href="tel:9491320132">Book an Appointment</a>
              </Button>
              <a
                href="#doctors"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#4A1A7A] transition-colors duration-200 font-medium"
              >
                Meet Our Doctors
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-doctor.jpg"
                alt="Sri Manjeera Hospital Doctor"
                className="w-full h-auto object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#4A1A7A] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full opacity-20"></div>
            </div>

            {/* Managing Director Card */}
            {/* <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 border-l-4 border-[#D4AF37]">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Managing Director</p>
              <p className="font-bold text-[#4A1A7A]">G. PRASAD</p>
              <p className="text-sm text-gray-600">Cell: 94949 50152</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
