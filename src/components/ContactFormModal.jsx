
const Seoservice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* WHY CHOOSE US SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              Why Choose Us
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Helping Businesses Grow Through
              <span className="block text-blue-600">Digital Marketing</span>
            </h1>
            <p className="mt-5 text-gray-600 leading-relaxed">
              We help brands increase visibility, generate quality leads,
              improve conversions, and build a strong online presence through
              data-driven marketing strategies.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Proven SEO & Organic Growth Strategies",
                "Google Ads & Performance Marketing",
                "Dedicated Marketing Specialists",
                "Transparent Reporting & Analytics",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div>
            <img
              src="https://picsum.photos/id/20/800/500"
              alt="Marketing team"
              className="w-full rounded-2xl shadow-xl object-cover h-[280px] md:h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION - clearly visible */}
      <div className="max-w-4xl mx-auto px-6 pb-20 lg:pb-28">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Contact Us
            </h2>
            <p className="mt-2 text-gray-500">
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
              <option>SEO Services</option>
              <option>Google Ads</option>
              <option>Social Media Marketing</option>
              <option>Website Development</option>
            </select>

            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seoservice;