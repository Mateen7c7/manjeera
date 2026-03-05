import { Stethoscope } from 'lucide-react';

interface Doctor {
  name: string;
  qualification: string;
  specialty: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: 'Dr karthik MD General medicine ',
    qualification: 'MD',
    specialty: 'Diabetologist',
    image: '/images/doctors/1.jpg',
  },
  {
    name: 'Dr BhaskarReddy',
    qualification: 'MS',
    specialty: 'General Medicine',
    image: '/images/doctors/2.jpg',
  },
  {
    name: 'Dr Rajasekhar Guddeti',
    qualification: 'MS',
    specialty: 'Urology',
    image: '/images/doctors/3.jpg',
  },
  {
    name: 'Dr madhusudhan YADAV ',
    qualification: 'MS',
    specialty: 'knee replacement',
    image: '/images/doctors/4.jpg',
  },
  {
    name: 'Dr Archana SD',
    qualification: 'MS',
    specialty: 'OBG',
    image: '/images/doctors/5.jpg',
  }
];

const Doctors = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#4A1A7A]/5 to-white" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4A1A7A]/10 px-4 py-2 rounded-full mb-4">
            <Stethoscope size={18} className="text-[#4A1A7A]" />
            <span className="text-sm text-[#4A1A7A] font-medium">Expert Medical Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A1A7A] mb-4">
            Consultant Doctors
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our team of experienced and qualified doctors are dedicated to providing 
            the best healthcare services to our patients.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A7A]/60 via-transparent to-transparent"></div>
              </div>

              {/* Doctor Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-[#4A1A7A] mb-1 group-hover:text-[#D4AF37] transition-colors duration-200">
                  {doctor.name}
                </h3>
                <p className="text-[#D4AF37] font-semibold text-sm mb-2">
                  {doctor.qualification}
                </p>
                <div className="inline-block bg-[#4A1A7A]/10 px-4 py-1.5 rounded-full">
                  <span className="text-xs font-medium text-[#4A1A7A]">
                    {doctor.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
