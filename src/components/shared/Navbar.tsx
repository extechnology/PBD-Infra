import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { navItems } from "../../constants/navbarData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-gold-900/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center  group">
            <img src="/logos/logo2.png" className="w-28" alt="logo" />
            {/* <span
              className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white drop-shadow-md"
              }`}
            >
              PBD <span className="text-gold-500">INFRA</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.link}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      isActive
                        ? "text-gold-500 after:scale-x-100"
                        : scrolled
                          ? "text-gray-300 hover:text-gold-400"
                          : "text-white hover:text-gold-400"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              className="bg-gold-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 active:scale-95"
            >
              Contact Now!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black shadow-xl border-t border-white/10 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex justify-between items-center px-3 py-4 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-gold-500/10 text-gold-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-gold-400"
                }`
              }
            >
              {item.title}
              <ChevronRight size={18} className="text-gray-500" />
            </NavLink>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gold-500 text-black px-6 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
