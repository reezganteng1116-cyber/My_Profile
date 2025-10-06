import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md shadow-md border-b border-cyan-500/20"
      data-aos="fade-down"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-cyan-400 font-extrabold text-2xl tracking-wide hover:scale-105 transition-transform"
            >
              My Portfolio
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-200 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              data-aos="zoom-in"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        data-aos={open ? "fade-down" : undefined}
      >
        <div className="px-4 pt-3 pb-6 space-y-3 bg-gray-900/95 shadow-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300"
              data-aos="fade-left"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
