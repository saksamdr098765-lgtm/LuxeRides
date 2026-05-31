import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCarSide,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Fleet",
    "Services",
    "Locations",
    "About",
    "Contact",
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
      >
        <div className="flex items-center justify-between rounded-3xl border border-white/50 bg-white/80 px-6 py-4 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
              <FaCarSide />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-tight text-zinc-900">
                Luxe Rides
              </h2>
              <p className="text-xs text-zinc-500">
                Premium Car Rentals
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-medium text-zinc-600 transition hover:text-zinc-900"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="font-medium text-zinc-700 hover:text-black">
              Sign In
            </button>

            <button className="group flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-white transition hover:bg-black">
              Book Now
              <FaArrowRight className="text-sm transition group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-zinc-800"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-28 left-1/2 z-40 w-[95%] max-w-md -translate-x-1/2"
          >
            <div className="rounded-3xl border border-white/50 bg-white/95 p-6 backdrop-blur-xl shadow-2xl">
              
              <div className="flex flex-col gap-5">
                {navLinks.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="border-b border-zinc-100 pb-3 font-medium text-zinc-700 hover:text-black"
                  >
                    {item}
                  </a>
                ))}

                <button className="mt-4 rounded-full border border-zinc-300 py-3 font-medium text-zinc-700">
                  Sign In
                </button>

                <button className="flex items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-white">
                  Book Now
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}