

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-100  rounded-lg px-[7%] py-10 lg:py-12">
      {/* Decorative blobs (same as contact section) */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          {/* Left side – Text content */}
          <div className="flex-1">
            <span className="mb-2 inline-block animate-pulse text-xs font-bold uppercase tracking-widest text-orange-500">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
              We Love to Listen to Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
            <p className="mt-3 text-slate-500">
              Ready to turn your ideas into reality? Share your vision with us.
            </p>
          </div>

          {/* Right side – Buttons + phone */}
          <div className="flex flex-col items-center gap-4 lg:items-end">
            {/* Primary CTA with animation */}
            <a
              href="#"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-7 py-3 text-sm font-bold text-white shadow-md shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200"
            >
              Estimate Project
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Or text with animated fade-in */}
            <div className="flex items-center gap-3 text-slate-400">
              <div className="h-px w-6 bg-slate-200" />
              <span className="text-xs uppercase tracking-wide">Or call us now</span>
              <div className="h-px w-6 bg-slate-200" />
            </div>

            {/* Phone number with hover scale */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-2.5 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md">
              <svg
                className="h-4 w-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-lg font-bold tracking-tight text-slate-800 lg:text-xl">
                +91 70790 00777
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}