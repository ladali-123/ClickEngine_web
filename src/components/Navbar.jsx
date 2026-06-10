import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 shadow-sm z-50">
      <div className="h-20 flex items-center justify-between px-8 lg:px-18">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="ClickEngine"
            className="h-12 lg:h-15 w-auto cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavItem title="Home" />
          <NavItem title="About Us" />

          {/* Products & Services */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] font-semibold text-slate-700
             hover:text-blue-600 transition">
              Products & Services
              <ChevronDown size={16} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-3 w-80 rounded-xl bg-white border
               border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden">
                <DropdownItem text="Admission Management System" />
                <DropdownItem text="Institute Management System" />
              </div>
            )}
          </div>

          {/* Digital Marketing */}
          <div
            className="relative"
            onMouseEnter={() => setMarketingOpen(true)}
            onMouseLeave={() => setMarketingOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] font-semibold text-slate-700
             hover:text-blue-600 transition">
              Digital Marketing
              <ChevronDown size={16} />
            </button>

            {marketingOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-xl bg-white border
               border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden">
                <DropdownItem text="SEO Services" />
                <DropdownItem text="Social Media Marketing" />
                <DropdownItem text="Google Ads Management" />
              </div>
            )}
          </div>

          <NavItem title="Contact" />

          {/* CTA Button */}
          <button
            className="
              ml-2
              px-7
              py-2.5
              rounded-full
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#0066FF]
              to-[#FF7A00]
              shadow-lg
              hover:shadow-xl
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X size={28} className="text-slate-700" />
            ) : (
              <Menu size={28} className="text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col px-5 py-4">
            <MobileItem title="Home" />
            <MobileItem title="About Us" />

            <details className="group">
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none font-medium text-slate-700">
                Products & Services
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>

              <div className="pl-4 pb-3 flex flex-col gap-3 text-sm text-slate-600">
                <button className="text-left">
                  Admission Management System
                </button>
                <button className="text-left">
                  Institute Management System
                </button>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none font-medium text-slate-700">
                Digital Marketing
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>

              <div className="pl-4 pb-3 flex flex-col gap-3 text-sm text-slate-600">
                <button className="text-left">SEO Services</button>
                <button className="text-left">
                  Social Media Marketing
                </button>
                <button className="text-left">
                  Google Ads Management
                </button>
              </div>
            </details>

            <MobileItem title="Contact" />

            <button className="mt-4 w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#0066FF] to-[#FF7A00]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ title }) {
  return (
    <button
      className="
        relative
        text-[15px]
        font-semibold
        text-slate-700
        hover:text-blue-600
        transition

        after:absolute
        after:left-1/2
        after:-translate-x-1/2
        after:-bottom-2
        after:h-[3px]
        after:w-0
        after:bg-blue-600
        after:rounded-full
        hover:after:w-6
        after:transition-all
      "
    >
      {title}
    </button>
  );
}

function DropdownItem({ text }) {
  return (
    <button
      className="
        w-full
        px-5
        py-4
        text-left
        text-sm
        font-medium
        text-slate-700
        border-b
        border-slate-100
        last:border-b-0
        hover:bg-slate-50
        hover:text-blue-600
        transition
      "
    >
      {text}
    </button>
  );
}

function MobileItem({ title }) {
  return (
    <button className="py-4 text-left font-medium text-slate-700 border-b border-slate-100">
      {title}
    </button>
  );
}