
const SocialMediaMarketing = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Two columns with image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-blue-600
             text-sm font-semibold tracking-wide mt-12">
              Social Media Marketing
            </span>

            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-5 leading-tight">
              Grow Your Brand. Engage Your Audience.
              <span className="text-blue-600 block mt-1">
                Drive Real Results.
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed">
              Our data-driven social media strategies help brands build
              meaningful connections, increase engagement, and turn followers
              into loyal customers.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-lg font-semibold transition shadow-sm hover:shadow-md">
              Contact →
            </button>
          </div>

          {/* Right side - Reliable image */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/51/bb/85/51bb85fb7ec640b7c3233a45a79f8efb.jpg"
              alt="Social Media Marketing Illustration"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Social Media - Compact and clean */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12 border-t border-gray-100">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Social Media Matters
          </h2>

          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>
              Social media platforms are where your customers spend their time.
              A strong social presence builds brand awareness, fosters
              community, and drives website traffic that converts.
            </p>

            <p>
              We focus on organic and paid strategies tailored to each platform,
              ensuring your brand stands out and delivers measurable business
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services - Two column layout with cards feel */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Social Media Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide complete social media management services designed to
              grow your online presence, engage your audience, and drive
              conversions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Content Strategy",
                "Community Management",
                "Paid Social Ads",
                "Influencer Marketing",
                "Analytics & Reporting",
                "Social Listening",
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
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600">3.5x</h3>
            <p className="text-gray-500 text-sm mt-1">Average Engagement Rate</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600">200%</h3>
            <p className="text-gray-500 text-sm mt-1">Follower Growth (6 months)</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600">150+</h3>
            <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* CTA - Compact gradient with better proportions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Ready to Dominate Social Media?
          </h2>

          <p className="text-pink-100 text-base md:text-lg max-w-xl mx-auto mb-6">
            Let's create a custom strategy that grows your brand and drives real
            engagement.
          </p>

          <button className="bg-white text-blue-600 px-7 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition shadow-md hover:shadow-lg">
            Contact Us →
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;