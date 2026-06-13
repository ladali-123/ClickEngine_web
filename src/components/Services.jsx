import { useNavigate } from "react-router-dom";  // only useNavigate, no Link

const SERVICES = [
  {
    tag: "WEB DESIGN",
    title: "Website Design & Development",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    path: "/Webdevservices",
  },
  {
    tag: "SEO",
    title: "Search Engine Optimization",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    path: "seoservice",
  },
  {
    tag: "PPC",
    title: "Digital Media & PPC Advertising",
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80",
    path: "digitalmedia",
  },
  {
    tag: "MARKETING",
    title: "Content Marketing Services",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    path: "Marketing",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleReadMore = (path) => {
    if (path !== "#") {
      navigate(path);
    }
  };

  return (
    <section id="services" className="relative overflow-hidden bg-white px-[7%] py-10 lg:py-12">
      {/* ... rest of the JSX remains exactly the same ... */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
            Services We Provide
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
            Our Digital Marketing{" "}
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-slate-500">
            Complete digital solutions — from building your web presence to ranking it,
            advertising it, and growing it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group relative flex flex-row items-stretch bg-white border border-slate-200 rounded-2xl
               overflow-hidden cursor-pointer hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              style={{ minHeight: "220px" }}
            >
              <div className="flex flex-col justify-between p-7 z-10 w-[55%]">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {s.tag}
                  </p>
                  <h3 className="text-2xl font-bold leading-snug text-slate-900">
                    {s.title}
                  </h3>
                </div>
                <button
                  onClick={() => handleReadMore(s.path)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 group-hover:text-blue-500 transition-colors duration-200 w-fit border-none bg-transparent p-0 cursor-pointer"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-[50%]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}