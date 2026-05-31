import {
  FaCarSide,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white">
                <FaCarSide />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Luxe Rides
                </h2>
                <p className="text-sm text-zinc-500">
                  Premium Car Rentals
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
              Discover luxury without compromise. From executive sedans
              to exotic supercars, Luxe Rides delivers unforgettable
              driving experiences tailored to every journey.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 transition hover:border-amber-500 hover:bg-amber-500"
                  >
                    <Icon />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Fleet */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Fleet
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li><a href="#">Luxury Sedans</a></li>
              <li><a href="#">Executive SUVs</a></li>
              <li><a href="#">Sports Cars</a></li>
              <li><a href="#">Supercars</a></li>
              <li><a href="#">Convertibles</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Company
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Contact
            </h3>

            <ul className="space-y-5 text-zinc-400">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-500" />
                <span>New Delhi, India</span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-amber-500" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 text-amber-500" />
                <span>hello@luxerides.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 Luxe Rides. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}