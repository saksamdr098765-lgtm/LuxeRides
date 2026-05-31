import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCarSide,
  FaArrowRight,
} from "react-icons/fa";

export default function BookingSearch() {
  return (
    <section className="bg-white py-16 lg:py-24 px-5 lg:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs sm:text-sm font-medium text-amber-700">
            Premium Reservation
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900">
            Find Your Next Luxury Ride
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base lg:text-lg text-zinc-500">
            Choose your destination, schedule, and preferred vehicle.
            Luxe Rides will handle the rest.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] lg:rounded-[36px] border border-zinc-200 bg-white p-4 sm:p-6 lg:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
        >
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-5">

            {/* Location */}
            <div className="group rounded-2xl lg:rounded-3xl border border-zinc-200 p-4 lg:p-5 transition hover:border-zinc-900">
              <div className="mb-3 flex items-center gap-3">
                <FaMapMarkerAlt className="text-zinc-600" />

                <span className="text-sm font-semibold text-zinc-600">
                  Pickup Location
                </span>
              </div>

              <input
                type="text"
                placeholder="New Delhi"
                className="w-full bg-transparent text-base lg:text-lg font-semibold text-zinc-900 outline-none"
              />
            </div>

            {/* Pickup Date */}
            <div className="group rounded-2xl lg:rounded-3xl border border-zinc-200 p-4 lg:p-5 transition hover:border-zinc-900">
              <div className="mb-3 flex items-center gap-3">
                <FaCalendarAlt className="text-zinc-600" />

                <span className="text-sm font-semibold text-zinc-600">
                  Pickup Date
                </span>
              </div>

              <input
                type="date"
                className="w-full bg-transparent text-base lg:text-lg font-semibold text-zinc-900 outline-none"
              />
            </div>

            {/* Return Date */}
            <div className="group rounded-2xl lg:rounded-3xl border border-zinc-200 p-4 lg:p-5 transition hover:border-zinc-900">
              <div className="mb-3 flex items-center gap-3">
                <FaCalendarAlt className="text-zinc-600" />

                <span className="text-sm font-semibold text-zinc-600">
                  Return Date
                </span>
              </div>

              <input
                type="date"
                className="w-full bg-transparent text-base lg:text-lg font-semibold text-zinc-900 outline-none"
              />
            </div>

            {/* Vehicle */}
            <div className="group rounded-2xl lg:rounded-3xl border border-zinc-200 p-4 lg:p-5 transition hover:border-zinc-900">
              <div className="mb-3 flex items-center gap-3">
                <FaCarSide className="text-zinc-600" />

                <span className="text-sm font-semibold text-zinc-600">
                  Vehicle Type
                </span>
              </div>

              <select className="w-full bg-transparent text-base lg:text-lg font-semibold text-zinc-900 outline-none">
                <option>Luxury Sedan</option>
                <option>Executive SUV</option>
                <option>Sports Car</option>
                <option>Convertible</option>
                <option>Supercar</option>
              </select>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="flex w-full items-center justify-center gap-3 rounded-2xl lg:rounded-3xl bg-zinc-900 px-6 py-5 text-base lg:text-lg font-semibold text-white transition hover:bg-black"
            >
              Search Fleet
              <FaArrowRight />
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 border-t border-zinc-100 pt-6">
            <div className="grid grid-cols-2 gap-3 text-center text-xs sm:text-sm text-zinc-500 md:flex md:flex-wrap md:justify-center md:gap-8">
              <span>✓ 24/7 Support</span>
              <span>✓ Fully Insured</span>
              <span>✓ Instant Booking</span>
              <span>✓ No Hidden Fees</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}