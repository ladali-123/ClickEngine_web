import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r bg-gray-700 text-white ">
      <div className="px-[7%] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-14 w-auto object-contain"
                />
               
              </div>
              <p className="md:text-[17px] text-sm text-blue-100 leading-relaxed">
                Delivering excellence through innovative solutions and customer-centric approach.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20 hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-[17px]">
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
              <ul className="space-y-2 text-sm md:text-[17px]">
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    SEO & Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 transition hover:text-white hover:underline">
                    App Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
              <ul className="space-y-3 text-sm md:text-[17px]">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-blue-100">123 Business Ave, Tech Park, Mumbai - 400001</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-blue-100">+91 70790 00777</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-100">hello@example.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar – Copyright & Legal */}
          <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-blue-100">
            <p>© {new Date().getFullYear()} BrandName. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4 text-xs">
              <a href="#" className="hover:text-white hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-white hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-white hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}