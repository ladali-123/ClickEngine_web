
const Seoservice = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Two columns with image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 mt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide">
              SEO Services
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-5 leading-tight">
              Rank Higher. Get More Traffic.
              <span className="text-blue-600 block mt-1">
                Generate More Leads.
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed">
              Our data-driven SEO strategies help businesses improve search
              visibility, increase organic traffic, and convert visitors into
              customers.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-lg font-semibold transition shadow-sm hover:shadow-md">
             Contact Us →
            </button>
          </div>

          {/* Right side - Reliable image */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/7e/14/40/7e144022b32e928944a04cc830916c94.jpg"
              alt="SEO Analytics Illustration"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why SEO - Compact and clean */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-8 border-t border-gray-100">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why SEO Is Important
          </h2>

          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>
              Search Engine Optimization helps your business appear in front of
              potential customers when they actively search for your products or
              services. A strong SEO strategy increases visibility, trust, and
              long-term growth.
            </p>

            <p>
              We focus on sustainable SEO practices that improve rankings while
              delivering measurable business results through quality traffic and
              lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Services - Two column layout with cards feel */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our SEO Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide complete SEO services designed to improve search
              rankings, drive qualified traffic, and help businesses achieve
              sustainable online growth.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Keyword Research",
                "On-Page SEO",
                "Technical SEO",
                "Local SEO",
                "Link Building",
                "SEO Reporting & Analytics",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 text-gray-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats - Card style with less height and better visual */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600">250%</h3>
            <p className="text-gray-500 text-sm mt-1">Average Traffic Growth</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600">90%</h3>
            <p className="text-gray-500 text-sm mt-1">Keywords on First Page</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600">120+</h3>
            <p className="text-gray-500 text-sm mt-1">Successful Projects</p>
          </div>
        </div>
      </section>

      {/* CTA - Compact gradient with better proportions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Ready to Grow Your Business?
          </h2>

          <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto mb-6">
            Let's improve your search rankings and bring more customers to your
            website.
          </p>

          <button className="bg-white text-blue-600 px-7 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition shadow-md hover:shadow-lg">
            Contact Us →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Seoservice;