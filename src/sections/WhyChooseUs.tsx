import { Stethoscope, HeartHandshake, Wallet, Clock, Users, Award } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Stethoscope size={32} />,
    title: 'Multi-Specialty Expertise',
    description:
      'From pediatrics to orthopedics, general medicine to neurosurgery, our team of specialists provides comprehensive care under one roof.',
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Patient-Centric Approach',
    description:
      'We prioritize personalized care, open communication, and your overall well-being at every step of your healthcare journey.',
  },
  {
    icon: <Wallet size={32} />,
    title: 'Affordable, Accessible Care',
    description:
      'We believe quality healthcare should be within reach. Our services are designed to be affordable without compromising on quality.',
  },
];

const stats = [
  { icon: <Users size={24} />, value: '9+', label: 'Expert Doctors' },
  { icon: <Award size={24} />, value: '8+', label: 'Specialties' },
  { icon: <Clock size={24} />, value: '24/7', label: 'Emergency Care' },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/why-choose-us-bg.jpg"
          alt="Medical Professional"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A1A7A]/85 via-[#4A1A7A]/75 to-[#4A1A7A]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Sri Manjeera Hospital?
          </h2>
          {/* <Button
            className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#4A1A7A] rounded-full px-8 py-3 text-sm font-bold transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            Our Experience
            <ArrowRight size={18} />
          </Button> */}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 text-center"
            >
              <div className="text-[#D4AF37] mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center text-[#4A1A7A] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
