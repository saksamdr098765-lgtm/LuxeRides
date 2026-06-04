import { motion } from "framer-motion";
import {
  FaUsers,
  FaGasPump,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PersonalData from "./PersonalData";

const cars = [
  {
    id: 1,
    name: "Thar 4x4 Soft Top Automatic",
    category: "Off-Road SUV",
    price: "₹4500",
    image: "/fleet/thar.webp",
  },
  {
    id: 2,
    name: "Swift Manual",
    category: "Hatchback",
    price: "₹1800",
    image: "/fleet/swift.jpg",
  },
  {
    id: 3,
    name: "Scorpio S11",
    category: "SUV",
    price: "₹3500",
    image: "/fleet/scorpios11.avif",
  },
];

export default function FeaturedFleet() {
  const navigate=useNavigate()
  const {whatsapp}=PersonalData
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
<div className="flex gap-5 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scrollbar-hide lg:hidden">
  {cars.map((car, index) => (
    <motion.div
      key={car.id}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative min-w-[85%] snap-center overflow-hidden rounded-[30px]"
    >
      {/* Image */}
      <img
        src={car.image}
        alt={car.name}
        className="h-[500px] w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Category */}
      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
          {car.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="mb-2 text-sm tracking-[0.25em] text-amber-400 uppercase">
          Premium Collection
        </p>

        <h3 className="text-3xl font-black text-white">
          {car.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          Experience unmatched comfort, performance and style with our
          premium vehicle fleet.
        </p>

        <button
          onClick={() => {
            const message = `Hi LuxeDrives, I would like to book the ${car.name}. Please share availability and pricing details.`;

            window.open(
              `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
              "_blank"
            );
          }}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
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

            {/* <span className="font-bold text-amber-600">
              {car.price}/day
            </span> */}
          </div>

          <h3 className="mt-5 text-2xl font-bold text-zinc-900">
            {car.name}
          </h3>
{/* 
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
          </div> */}

          <button onClick={() => {
  const message = `Hi LuxeDrives, I would like to book the ${car.name}. Please share availability and pricing details.`;

  window.open(
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}} className="mt-8 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-black">
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
          <button onClick={()=>{navigate('/fleet')}} className="rounded-full border border-zinc-300 px-8 py-4 font-semibold text-zinc-800 transition hover:bg-white">
            View Entire Fleet
          </button>
        </motion.div>
      </div>
    </section>
  );
}