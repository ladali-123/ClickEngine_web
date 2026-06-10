const REASONS = [
  {
    id: "01",
    title: "Strategic Planning",
    desc: "We don't just execute — we think. Every project starts with a tailored strategy aligned to your business goals, target audience, and market position.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Quick Turnaround",
    desc: "Time is business. We are built for speed without compromising quality — delivering projects on schedule so you can move faster than your competition.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline strokeLinecap="round" strokeLinejoin="round" points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "24/7 Dedicated Support",
    desc: "Our team is always available. Whether it's a query, a bug, or a new requirement — you get prompt, reliable support whenever you need it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Dedicated Team",
    desc: "You get a team fully committed to your project — not a freelancer juggling ten clients. One point of contact, complete accountability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Years of Experience",
    desc: "With 3+ years of hands-on experience across industries, we bring proven expertise to every engagement — no learning curve, just results.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Transparent Process",
    desc: "No surprises. You stay informed at every stage — clear timelines, regular updates, and honest communication from kickoff to delivery.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-slate-50 px-[7%] py-10 lg:py-12">

      {/* BG blobs */}
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
              The ClickEngine{" "}
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Advantage.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-500 lg:text-right">
            We combine strategy, speed, and commitment to deliver digital solutions that actually move the 
            needle for your business.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.id}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white 
              p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100
               hover:shadow-lg hover:shadow-blue-50"
            >
              {/* Number watermark */}
              <span className="absolute right-6 top-5 text-6xl font-black text-slate-50 
              select-none transition-colors duration-300 group-hover:text-blue-50">
                {r.id}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border
               border-blue-100 bg-blue-50 text-blue-500 transition-all duration-300
                group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500">
                {r.icon}
              </div>

              <div>
                <h3 className="mb-2 text-[17px] font-bold text-slate-900">{r.title}</h3>
                <p className="text-base leading-7 text-slate-600">{r.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-auto h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 
              transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}