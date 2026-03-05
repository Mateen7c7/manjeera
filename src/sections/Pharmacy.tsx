const Pharmacy = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#4A1A7A]/10 via-white to-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Large 24/7 Text */}
            <div className="flex items-baseline gap-2">
              <span className="text-8xl lg:text-9xl font-bold text-[#4A1A7A]">24</span>
              <span className="text-6xl lg:text-7xl font-bold text-[#D4AF37]">/</span>
              <span className="text-8xl lg:text-9xl font-bold text-[#D4AF37]">7</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A1A7A]">
              Pharmacy Available
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              At Sri Manjeera Hospital, your convenience and continuity of care matter. 
              That's why we offer a fully functional 24/7 in-house pharmacy, ensuring that 
              essential medications are always available day or night.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-[#4A1A7A]/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#4A1A7A]">Always Open</span>
              </div>
              <div className="flex items-center gap-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-[#D4AF37]">In-House</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/pharmacy.jpg"
                alt="24/7 Pharmacy"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A1A7A]/10 to-[#D4AF37]/10"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#4A1A7A] rounded-full opacity-10"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#D4AF37] rounded-full opacity-10"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4A1A7A] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Full Stock</p>
                  <p className="text-xs text-gray-500">All Medicines Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pharmacy;
