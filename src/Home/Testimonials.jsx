import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "Business Executive",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "The experience was exceptional from start to finish. The vehicle arrived spotless, and the service felt truly first-class. Luxe Rides exceeded every expectation.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "Travel Influencer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Luxury, comfort, and professionalism all in one. Booking was effortless, and driving the Porsche 911 made my trip unforgettable.",
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "I've used many rental services over the years, but Luxe Rides stands in a league of its own. Premium vehicles and impeccable support.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-700">
            Client Experiences
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-zinc-900">
            Trusted by Luxury Travelers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Thousands of clients choose Luxe Rides for premium comfort,
            reliability, and unforgettable journeys.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] border border-zinc-100 bg-stone-50 p-8"
            >
              {/* Quote Icon */}
              <FaQuoteRight className="absolute right-8 top-8 text-4xl text-amber-200" />

              {/* Rating */}
              <div className="mb-6 flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-lg leading-relaxed text-zinc-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4 border-t border-zinc-200 pt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-zinc-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-zinc-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-8 rounded-[40px] bg-zinc-900 p-10 text-center text-white md:grid-cols-3"
        >
          <div>
            <h3 className="text-4xl font-black">50K+</h3>
            <p className="mt-2 text-zinc-400">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">4.9/5</h3>
            <p className="mt-2 text-zinc-400">
              Average Rating
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">120+</h3>
            <p className="mt-2 text-zinc-400">
              Rental Locations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}