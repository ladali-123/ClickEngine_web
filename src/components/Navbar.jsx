import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/#about",
    },
    {
      label: "Products & Services",
      submenu: [
        {
          label: "Admission Management System",
          path: "/admission-management-system",
        },
        {
          label: "Institute Management System",
          path: "/institute-management-system",
        },
      ],
    },
    {
      label: "Digital Marketing",
      submenu: [
        {
          label: "SEO Services",
          path: "/seo-service",
        },
        {
          label: "Social Media Marketing",
          path: "/social-media-marketing",
        },
        {
          label: "Google Ads Management",
          path: "/google-ads-management",
        },
      ],
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 shadow-sm z-50">
      <div className="h-20 flex items-center justify-between px-8 lg:px-18">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="ClickEngine"
              className="h-12 lg:h-15 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item, index) => {
            if (!item.submenu) {
              return (
                <NavItem
                  key={index}
                  title={item.label}
                  path={item.path}
                />
              );
            }

            const isProducts =
              item.label === "Products & Services";

            const isOpen = isProducts
              ? productsOpen
              : marketingOpen;

            return (
              <div
                key={index}
                className="relative after:absolute after:top-full after:left-0 after:w-full after:h-3 after:bg-transparent after:content-['']"
                onMouseEnter={() =>
                  isProducts
                    ? setProductsOpen(true)
                    : setMarketingOpen(true)
                }
                onMouseLeave={() =>
                  isProducts
                    ? setProductsOpen(false)
                    : setMarketingOpen(false)
                }
              >
                <button
                  className="
                  flex items-center gap-1
                  text-[15px]
                  font-semibold
                  text-slate-700
                  hover:text-blue-600
                  transition
                "
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>

                {isOpen && (
                  <div
                    className={`
                    absolute top-full left-0 mt-3 z-10
                    rounded-xl bg-white border border-slate-100
                    shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                    overflow-hidden
                    ${isProducts ? "w-80" : "w-72"}
                  `}
                  >
                    {item.submenu.map((subItem, idx) => (
                      <DropdownItem
                        key={idx}
                        text={subItem.label}
                        path={subItem.path}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* CTA Button */}
          <Link
            to="/getstarted"
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
          </Link>
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
            {navLinks.map((item, index) => {
              if (!item.submenu) {
                return (
                  <MobileItem
                    key={index}
                    title={item.label}
                    path={item.path}
                    closeMenu={() => setMobileOpen(false)}
                  />
                );
              }

              return (
                <details key={index} className="group">
                  <summary
                    className="
                    flex items-center justify-between
                    py-4 cursor-pointer list-none
                    font-medium text-slate-700
                  "
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <div className="pl-4 pb-3 flex flex-col gap-3 text-sm text-slate-600">
                    {item.submenu.map((subItem, idx) => (
                      <Link
                        key={idx}
                        to={subItem.path}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-blue-600"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}

            <Link
              to="/getstarted"
              onClick={() => setMobileOpen(false)}
              className="
              mt-4
              w-full
              py-3
              rounded-full
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#0066FF]
              to-[#FF7A00]
            "
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ title, path }) {
  return (
    <Link
      to={path}
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
    </Link>
  );
}

function DropdownItem({ text, path }) {
  return (
    <Link
      to={path}
      className="
        block
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
    </Link>
  );
}

function MobileItem({ title, path, closeMenu }) {
  return (
    <Link
      to={path}
      onClick={closeMenu}
      className="
        py-4
        text-left
        font-medium
        text-slate-700
        border-b
        border-slate-100
        block
      "
    >
      {title}
    </Link>
  );
}