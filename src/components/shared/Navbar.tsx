import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../../constants/navbarData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl  border-black/5 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <img
              src="/logos/logo2.png"
              className="w-28 object-contain"
              alt="logo"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  `relative py-2 text-[11px] font-medium uppercase tracking-[0.25em] transition-all duration-300  after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive
                      ? "text-gold-400 after:scale-x-100"
                      : scrolled
                        ? "text-black/70 hover:text-gold-400"
                        : "text-white hover:text-gold-500"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="rounded-full text-[11px] bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact Now !
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 flex items-center justify-center md:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X size={30} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-x-4 top-24 z-50 overflow-hidden  border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <NavLink
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between  px-4 py-4 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                          isActive
                            ? "bg-gold-500 text-white"
                            : "text-black/70 hover:bg-black/5 hover:text-black"
                        }`
                      }
                    >
                      {item.title}

                      <ChevronRight size={18} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-5"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center  bg-gold-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-black/90"
                >
                  Contact Now
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
