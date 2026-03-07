interface Specialty {
  title: string;
  description: string;
  image: string;
  doctors: string[];
}

const specialties: Specialty[] = [
  {
    title: 'Obstetrics & Gynaecology',
    description:
      'Comprehensive women\'s healthcare services including prenatal care, deliveries, and gynecological treatments.',
    image: '/images/specialty-gynecology.jpg',
    doctors: ['Dr. Archana SD (MS, OBG)'],
  },
  {
    title: 'General Medicine',
    description:
      'Expert diagnosis and treatment of various medical conditions, preventive care, and health management.',
    image: '/images/specialty-general-medicine.jpg',
    doctors: ['Dr. T. Karthik (MD)'],
  },
  {
    title: 'General Surgery',
    description:
      'Advanced surgical procedures with modern techniques and post-operative care for optimal recovery.',
    image: '/images/specialty-orthopedics.jpg',
    doctors: ['Dr. M. Lakshman Kumar (MS)'],
  },
  {
    title: 'Orthopedics',
    description:
      'Specialized care for bone, joint, and musculoskeletal conditions with advanced treatment options.',
    image: '/images/measuring-for-implant-during-orthopedic-surgery.webp',
    doctors: ['Dr. Maheswarareddy (MS)', 'Dr. Madhusudhan Yadav (MS)'],
  },
  {
    title: 'Urology',
    description:
      'Comprehensive diagnosis and treatment for urinary system disorders and male reproductive health.',
    image: '/images/specialty-urology.jpg',
    doctors: ['Dr. Rajasekhar Guddeti (MS, MCh)'],
  },
  {
    title: 'Pediatrics',
    description:
      'Dedicated healthcare services for infants, children, and adolescents with compassionate care.',
    image: '/images/specialty-general-medicine.jpg',
    doctors: ['Dr. Eswaraiah (MD)'],
  },
  {
    title: 'Neurosurgery',
    description:
      'Specialized surgical care for disorders of the brain, spine, and nervous system.',
    image: '/images/specialty-neurosurgery.jpg',
    doctors: ['Dr. Pundarikakhaiah (MCh)'],
  },
  {
    title: 'ENT',
    description:
      'Expert care for ear, nose, and throat conditions with advanced diagnostic and treatment facilities.',
    image: '/images/specialty-anesthesia.jpg',
    doctors: ['Dr. Veresh (MS)'],
  },
];

const Specialities = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#4A1A7A]/5" id="specialities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A1A7A] mb-4">
            Our Specialities
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of medical specialties to meet all your healthcare needs.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A7A]/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-semibold text-sm">
                    {specialty.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  {specialty.description}
                </p>
                {/* <div className="border-t border-gray-100 pt-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Consultants</p>
                  {specialty.doctors.map((doctor, idx) => (
                    <p key={idx} className="text-xs text-[#4A1A7A] font-medium">
                      {doctor}
                    </p>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <Button
            className="bg-[#4A1A7A] hover:bg-[#3A1560] text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight size={18} />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Specialities;
