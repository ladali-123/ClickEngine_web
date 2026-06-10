export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "10 Proven Strategies to Boost Your Website Traffic",
      description:
        "Discover actionable SEO and content marketing tactics that can double your organic visitors in just 90 days.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "May 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Future of Digital Marketing: AI & Automation",
      description:
        "How artificial intelligence is reshaping customer engagement, ad targeting, and ROI measurement for businesses.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
      date: "April 28, 2025",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Why Your Brand Needs a Strong Social Media Presence",
      description:
        "Learn why consistent, authentic engagement on social platforms builds trust and drives long-term customer loyalty.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
      date: "April 10, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="bg-white px-[7%] py-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
            Latest Insights
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
            Read Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Expert tips, industry trends, and actionable advice to grow your business online.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Meta */}
                <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold leading-tight text-slate-800 transition-colors group-hover:text-blue-600">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-slate-500 line-clamp-3">
                  {blog.description}
                </p>

                {/* Read More Link */}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-500 transition-all hover:gap-2 hover:text-orange-500"
                  >
                    Read more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: View All Blogs Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
          >
            View All Articles
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}