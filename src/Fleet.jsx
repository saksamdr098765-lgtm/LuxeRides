import { motion } from "framer-motion";
import {
  FaUsers,
  FaGasPump,
  FaCogs,
  FaArrowRight,
  FaCar,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";
import PersonalData from "./Home/PersonalData";

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
  {
    id: 4,
    name: "Scorpio N",
    category: "Premium SUV",
    price: "₹4000",
    image: "/fleet/scropion.jpeg",
  },
  {
    id: 5,
    name: "Thar Roxx",
    category: "Off-Road SUV",
    price: "₹5000",
    image: "/fleet/tharrox.webp",
  },
  {
    id: 6,
    name: "Audi A4",
    category: "Luxury Sedan",
    price: "₹7000",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200",
  },
  {
    id: 7,
    name: "Fronx Automatic",
    category: "Compact SUV",
    price: "₹2500",
    image: "/fleet/fronx.avif",
  },
  {
    id: 8,
    name: "Thar 4x2 Manual",
    category: "Off-Road SUV",
    price: "₹4000",
    image: "/fleet/thar42.jpg",
  },
  {
    id: 9,
    name: "Fortuner",
    category: "Premium SUV",
    price: "₹6500",
    image: "/fleet/fortuner.jpg",
  },
];

export default function Fleet() {
  const {whatsapp}=PersonalData
  return (
    <div className="bg-stone-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-32 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            Premium Vehicle Collection
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Our Luxury Fleet
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
            Discover a curated collection of luxury sedans, executive SUVs,
            supercars, and chauffeur-driven vehicles tailored for every journey.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          <div className="text-center">
            <FaCar className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">50+</h3>
            <p className="text-zinc-500">Luxury Cars</p>
          </div>

          <div className="text-center">
            <FaCrown className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">15+</h3>
            <p className="text-zinc-500">Premium Brands</p>
          </div>

          <div className="text-center">
            <FaShieldAlt className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">100%</h3>
            <p className="text-zinc-500">Insured Fleet</p>
          </div>

          <div className="text-center">
            <FaUsers className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">24/7</h3>
            <p className="text-zinc-500">Support</p>
          </div>
        </div>
      </section>

    

      {/* FLEET GRID */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

                  {/* <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-6">
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
}} className="mt-8 flex w-full items-center cursor-pointer justify-center gap-3 rounded-2xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-black">
                    Reserve Vehicle
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Drive Luxury?
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Experience unmatched comfort, prestige, and performance with
            LuxeDrives premium vehicle collection.
          </p>

          <button  onClick={()=>{window.location=`https://wa.me/${whatsapp}`}} className="mt-8 cursor-pointer rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400">
            Book Your Vehicle
          </button>
        </div>
      </section> 
    </div>
  );
}