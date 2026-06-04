import React from 'react'
import { motion } from 'framer-motion'
import {
  FaUsers,
  FaGasPump,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Car({car,index}) {
  return (
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
              <span>{car.seats} Seats</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <FaCogs />
              <span>{car.gear}</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <FaGasPump />
              <span>{car.fuel}</span>
            </div>
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-black">
            Reserve Vehicle
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
  )
}
