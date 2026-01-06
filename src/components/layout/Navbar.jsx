import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, Calendar } from "lucide-react";
import { SITE_DATA } from "../../constants/siteData";
import { NAVIGATION_MENU } from "../../constants/navigationData";

const DropdownItem = ({ item, onNavigate, level = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Calculate if dropdown should open to the left
  const shouldOpenLeft = () => {
    if (!dropdownRef.current) return false;
    const rect = dropdownRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    return rect.right + 220 > viewportWidth;
  };

  return (
    <div
      ref={dropdownRef}
      className="relative border-b border-gray-100 dark:border-white/5 last:border-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={item.path}
        className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-bold transition-all text-left ${
          isOpen
            ? "bg-[#2262b2] text-white"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#2262b2]"
        }`}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
          } else if (onNavigate) {
            onNavigate();
          }
        }}
      >
        <span>{item.name}</span>
        {hasChildren && (
          <ChevronRight
            className={`w-4 h-4 ml-3 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        )}
      </a>

      {hasChildren && isOpen && (
        <div
          className={`md:absolute bg-white dark:bg-[#0f172a] shadow-2xl border border-gray-200 dark:border-white/5 min-w-[220px] z-50 top-0 animate-fadeIn transition-all ${
            shouldOpenLeft() ? "right-full mr-0" : "left-full ml-0"
          }`}
        >
          {item.children.map((child, index) => (
            <DropdownItem
              key={index}
              item={child}
              onNavigate={onNavigate}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const navRef = useRef(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Calculate dropdown position to prevent overflow
  const getDropdownPosition = (menuName) => {
    const element = dropdownRefs.current[menuName];
    if (!element) return "left-0";

    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // If dropdown would go off right edge, align to right
    if (rect.left + 220 > viewportWidth - 20) {
      return "right-0";
    }
    return "left-0";
  };

  const menuItems = NAVIGATION_MENU;

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-gray-900 text-white text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>📧 {SITE_DATA.contact.email}</span>
            <span>📞 {SITE_DATA.contact.phone}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/learn/resources/faq"
              className="hover:text-blue-400 transition-colors"
            >
              FAQ
            </a>
            <span>|</span>
            <a href="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-white/5"
            : "bg-white dark:bg-gray-900 lg:top-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                        {SITE_DATA.brand.name}
                      </span>
                      <span className="text-2xl font-black tracking-tight text-blue-600 dark:text-blue-400">
                        {SITE_DATA.brand.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Menu - 6 Items + CTA Button */}
            <div className="hidden lg:flex items-center space-x-0 h-full">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  ref={(el) => (dropdownRefs.current[item.name] = el)}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.path}
                    className={`px-5 h-full flex items-center text-[13px] font-bold transition-colors ${
                      scrolled
                        ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-blue-600"
                        : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 hover:text-blue-600"
                    } ${
                      activeMenu === item.name
                        ? "bg-gray-50 dark:bg-white/5 text-blue-600"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1.5 transition-transform ${
                          activeMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Level 1 Dropdown */}
                  {item.children && activeMenu === item.name && (
                    <div
                      className={`absolute top-full bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-white/5 min-w-[220px] z-50 animate-fadeIn ${getDropdownPosition(
                        item.name
                      )}`}
                    >
                      {item.children.map((child, index) => (
                        <DropdownItem key={index} item={child} level={1} />
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Book Consultation Button */}
              <a
                href="/services/consultation"
                className="ml-4 px-6 py-3 bg-primary hover:bg-primary-dark-1 text-white transition-all font-bold text-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK CONSULTATION</span>
              </a>
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 text-gray-900 dark:text-white"
              >
                {isOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 overflow-y-auto animate-fadeIn">
            <div className="border-t border-gray-100 dark:border-white/5">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 dark:border-white/5"
                >
                  <div className="flex items-center justify-between px-6 py-5">
                    <a
                      href={item.path}
                      className="text-sm font-bold text-gray-900 dark:text-white"
                      onClick={(e) => {
                        if (!item.children) setIsOpen(false);
                        else e.preventDefault();
                      }}
                    >
                      {item.name}
                    </a>
                    {item.children && (
                      <button
                        onClick={() =>
                          setActiveMobileMenu(
                            activeMobileMenu === item.name ? null : item.name
                          )
                        }
                        className={`p-2 rounded ${
                          activeMobileMenu === item.name
                            ? "bg-blue-600 text-white"
                            : "text-gray-400"
                        }`}
                      >
                        <ChevronDown
                          className={`w-6 h-6 transition-transform ${
                            activeMobileMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && activeMobileMenu === item.name && (
                    <div className="bg-gray-50 dark:bg-black/20 pb-4">
                      {item.children.map((child, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-600/20"
                        >
                          <div className="flex items-center justify-between px-10 py-3">
                            <a
                              href={child.path}
                              className="font-semibold text-gray-700 dark:text-gray-300 text-sm"
                              onClick={(e) => {
                                if (!child.children) setIsOpen(false);
                                else e.preventDefault();
                              }}
                            >
                              {child.name}
                            </a>
                            {child.children && (
                              <button
                                onClick={() =>
                                  setActiveMobileSubmenu(
                                    activeMobileSubmenu === child.name
                                      ? null
                                      : child.name
                                  )
                                }
                                className="p-1"
                              >
                                <ChevronDown
                                  className={`w-4 h-4 text-gray-400 transition-transform ${
                                    activeMobileSubmenu === child.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>
                          {child.children &&
                            activeMobileSubmenu === child.name && (
                              <div className="ml-10 pb-3 flex flex-col space-y-2">
                                {child.children.map((sub, idx) => (
                                  <a
                                    key={idx}
                                    href={sub.path}
                                    className="text-[13px] text-gray-600 dark:text-gray-400 hover:text-blue-600 py-2 pl-4"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    • {sub.name}
                                  </a>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-6 pb-20">
              <a
                href="/services/consultation"
                className="w-full text-center py-4 bg-primary hover:bg-primary-dark-1 text-white font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK CONSULTATION</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
