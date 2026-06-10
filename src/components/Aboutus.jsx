import about from "../assets/about.png";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-[6%] py-10 lg:py-12"
    >
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* Image */}
          <div className="relative">
            <div className="absolute left-3 top-3 h-full w-full rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100" />

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={about}
                alt="ClickEngine Team"
                className="h-[280px] w-full rounded-3xl object-cover shadow-xl sm:h-[350px] lg:h-[420px]"
              />

              <div className="absolute left-4 top-4 rounded-full border border-orange-200 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-orange-500 shadow-md backdrop-blur-sm">
                Est. 2022 • India
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[3px] text-orange-500">
              About Us
            </span>

            <h2 className="mb-4 text-2xl font-bold leading-tight text-slate-900 lg:text-4xl">
              Driving Business Growth Through
              <span className="block bg-gradient-to-r from-[#1e90ff] to-[#ff6600] bg-clip-text text-transparent">
                Smart Digital Solutions
              </span>
            </h2>

            <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-[#FF7A00]" />

            <p className="text-justify text-sm leading-8 text-slate-600 md:text-[17px]">
              <span className="font-semibold text-slate-900">
                ClickEngine
              </span>{" "}
              helps businesses build a strong digital presence through website
              development, mobile apps, MIS dashboards, custom software, and
              performance-driven digital marketing. We combine technology,
              creativity, and strategy to deliver scalable solutions that
              increase visibility, improve efficiency, and support long-term
              business growth.
              businesses establish a powerful online presence and achieve sustainable growth.
               We specialize in website development,
            </p>

            <div className="mt-6">
              <button className="group rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1">
                Contact Us
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}