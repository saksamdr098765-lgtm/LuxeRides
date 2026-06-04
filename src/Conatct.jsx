import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaCrown,
  FaCar,
} from "react-icons/fa";
import PersonalData from "./Home/PersonalData";

export default function Contact() {
const {whatsappNumber:whatsapp,phone,email,address}=PersonalData

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
✨ *NEW LUXEDRIVES BOOKING*

━━━━━━━━━━━━━━

👤 *Customer Information*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

🚘 *Vehicle Selected*
${formData.vehicle}

📅 *Journey Details*
Date: ${formData.date}
Time: ${formData.time}

📍 *Pickup Location*
${formData.pickup}

🏁 *Drop-off Location*
${formData.dropoff}

📝 *Special Requests*
${formData.message || "None"}

━━━━━━━━━━━━━━
Sent from LuxeDrives Website
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-stone-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
            alt="Luxury Car"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            Luxury Booking
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Reserve Your Luxury Ride
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
            Submit your booking request and our concierge team will help arrange
            the perfect luxury vehicle for your journey.
          </p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-white p-8 shadow-xl lg:col-span-2"
          >
            <h2 className="text-3xl font-black text-zinc-900">
              Booking Details
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  required
                  className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  required
                  className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
                />

                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
                >
                  <option value="">Select Vehicle</option>
                  <option>Mercedes S-Class</option>
                  <option>BMW 7 Series</option>
                  <option>Range Rover Sport</option>
                  <option>Porsche 911</option>
                  <option>Rolls Royce Ghost</option>
                  <option>Lamborghini Huracan</option>
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  required
                  className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
                />

                <input
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  type="time"
                  required
                  className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
                />
              </div>

              <input
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                type="text"
                placeholder="Pickup Location"
                required
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
              />

              <input
                name="dropoff"
                value={formData.dropoff}
                onChange={handleChange}
                type="text"
                placeholder="Drop-off Location"
                required
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Special Requests..."
                className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-amber-500"
              />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-2xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-black"
              >
                Submit Booking Request
              </button>
            </form>
          </motion.div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-[32px] bg-zinc-900 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <FaPhoneAlt className="mt-1 text-amber-400" />
                  <span>{phone}</span>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="mt-1 text-amber-400" />
                  <span>{email}</span>
                </div>

                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-1 text-amber-400" />
                  <span>{address}</span>
                </div>

                <div className="flex gap-4">
                  <FaClock className="mt-1 text-amber-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold">
                Why Book With Us?
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <FaCrown className="text-amber-500" />
                  Premium luxury fleet
                </div>

                <div className="flex gap-3">
                  <FaShieldAlt className="text-amber-500" />
                  Fully insured vehicles
                </div>

                <div className="flex gap-3">
                  <FaCar className="text-amber-500" />
                  Professional chauffeurs
                </div>

                <div className="flex gap-3">
                  <FaClock className="text-amber-500" />
                  24/7 booking assistance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}