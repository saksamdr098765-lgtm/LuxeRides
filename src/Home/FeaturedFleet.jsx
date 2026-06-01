import { motion } from "framer-motion";
import {
  FaUsers,
  FaGasPump,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";

const cars = [
  {
    id: 1,
    name: "Mercedes S-Class",
    category: "Luxury Sedan",
    price: "₹100000",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200",
  },
  {
    id: 2,
    name: "Range Rover Sport",
    category: "Executive SUV",
    price: "₹150000",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200",
  },
  {
    id: 3,
    name: "Porsche 911",
    category: "Sports Car",
    price: "₹200000",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
  },
];

export default function FeaturedFleet() {
  return (
    <section className="bg-stone-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-700">
            Premium Collection
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-zinc-900">
            Featured Fleet
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Discover our handpicked selection of luxury vehicles
            crafted for comfort, performance, and prestige.
          </p>
        </motion.div>

        {/* Fleet Grid */}
      {/* Fleet Grid */}
<div className="lg:grid lg:grid-cols-3 lg:gap-8">
  {/* Mobile Horizontal Scroll */}
  <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:hidden scrollbar-hide">
    {cars.map((car, index) => (
      <motion.div
        key={car.id}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ y: -10 }}
        className="group min-w-[85vw] snap-center overflow-hidden rounded-[32px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
      >
        <div className="overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600">
              {car.category}
            </span>

            <span className="font-bold text-amber-600">
              {car.price}/day
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold text-zinc-900">
            {car.name}
          </h3>

          <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <FaUsers />
              <span>5 Seats</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <FaCogs />
              <span>Auto</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <FaGasPump />
              <span>Petrol</span>
            </div>
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-black">
            Reserve Vehicle
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:col-span-3">
    {cars.map((car, index) => (
      <motion.div
        key={car.id}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ y: -10 }}
        className="group overflow-hidden rounded-[32px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
      >
        <div className="overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600">
              {car.category}
            </span>

            <span className="font-bold text-amber-600">
              {car.price}/day
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold text-zinc-900">
            {car.name}
          </h3>

          <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <FaUsers />
              <span>5 Seats</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <FaCogs />
              <span>Auto</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <FaGasPump />
              <span>Petrol</span>
            </div>
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-black">
            Reserve Vehicle
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="rounded-full border border-zinc-300 px-8 py-4 font-semibold text-zinc-800 transition hover:bg-white">
            View Entire Fleet
          </button>
        </motion.div>
      </div>
    </section>
  );
}