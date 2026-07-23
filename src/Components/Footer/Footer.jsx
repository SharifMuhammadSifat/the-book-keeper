import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-600 to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h2 className="text-lg font-bold">TheBookKeeper</h2>
          </div>

          <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
            TheBookKeeper fuels self, conversation description and add a
            seasoned mastery to the centuries and ambition.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Social Media</h3>

          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-red-500 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <MdEmail className="text-white" />
              <span>email@bookkeeper.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white text-xs" />
              <span>(333)-335-7895</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}