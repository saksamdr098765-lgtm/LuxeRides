import { motion } from "framer-motion";
import {
  FaCrown,
  FaArrowRight,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import PersonalData from "./PersonalData";

export default function VIPMembership() {
  const perks = [
    "Priority access to premium vehicles",
    "Exclusive member-only discounts",
    "Free vehicle upgrades",
    "24/7 dedicated concierge service",
    "Airport pickup & drop-off benefits",
    "Early booking access for limited models",
  ];
  const {whatsapp}=PersonalData

  return (
    <section className="overflow-x-hidden bg-stone-50 py-16 lg:py-24 px-5 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs sm:text-sm font-medium text-amber-700">
              <FaCrown />
              Elite Membership
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-zinc-900">
              Join the
              <span className="block text-amber-600">
                Luxe Elite Club
              </span>
            </h2>

            <p className="mt-5 text-base lg:text-lg leading-relaxed text-zinc-600">
              Elevate every journey with exclusive privileges, priority
              bookings, complimentary upgrades, and personalized luxury
              concierge services designed for our most valued members.
            </p>

            {/* Perks */}
            <div className="mt-8 space-y-4">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <FaCheck className="text-xs" />
                  </div>

                  <span className="text-sm sm:text-base text-zinc-700">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            <button onClick={()=>{window.location=`https://wa.me/${whatsapp}`}} className="group cursor-pointer mt-8 flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition hover:bg-black">
              Become a Member
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-w-0 overflow-hidden"
          >
            {/* Main Card */}
            <div className="w-full overflow-hidden rounded-[28px] lg:rounded-[40px] bg-zinc-900 p-6 sm:p-8 lg:p-10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">
                    Membership Tier
                  </p>

                  <h3 className="mt-2 text-2xl sm:text-3xl font-black">
                    Luxe Elite
                  </h3>
                </div>

                <div className="rounded-xl sm:rounded-2xl bg-amber-500 p-3 sm:p-4 text-xl sm:text-2xl">
                  <FaCrown />
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-4xl sm:text-5xl lg:text-6xl font-black">
                  ₹4,999
                </h4>

                <p className="mt-2 text-sm sm:text-base text-zinc-400">
                  per year
                </p>
              </div>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-zinc-400">
                    Vehicle Upgrades
                  </span>

                  <span className="font-semibold">
                    Included
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm sm:text-base text-zinc-400">
                    Concierge Support
                  </span>

                  <span className="font-semibold">
                    24/7
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm sm:text-base text-zinc-400">
                    Priority Reservations
                  </span>

                  <span className="font-semibold">
                    Unlimited
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute left-3 top-3 sm:left-6 sm:top-6 rounded-2xl bg-white p-3 sm:p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <FaStar className="text-amber-500" />

                <div>
                  <p className="text-sm font-bold text-zinc-900">
                    VIP Benefits
                  </p>

                  <span className="text-xs text-zinc-500">
                    Premium Access
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stat */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 rounded-2xl bg-white p-3 sm:p-4 shadow-xl">
              <h4 className="text-lg sm:text-2xl font-black text-zinc-900">
                2,500+
              </h4>

              <p className="text-xs sm:text-sm text-zinc-500">
                Active Members
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}