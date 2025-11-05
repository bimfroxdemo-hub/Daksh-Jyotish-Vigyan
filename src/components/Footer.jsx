import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#2e0f0f] via-[#4a1c1c] to-[#160606] text-[#f5e6c8] mt-1 overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,235,175,0.15),transparent_70%)] opacity-50"></div>

      {/* Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="/Astro/dakshlogo.png"
                alt="Daksh Jyotish Vigyan Logo"
                className="w-24 h-28 object-contain drop-shadow-[0_0_15px_rgba(255,230,150,0.3)]"
              />
              <div>
                <h3 className="text-lg font-bold text-[#f8d57e] tracking-wide">
                  Daksh Jyotish Vigyan
                </h3>
                <p className="text-sm text-[#e7c6a1] italic">
                  Acharya Sanjay Shastri
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#e9d9b8]">
              Guiding your path through the wisdom of the stars.<br />
              Ancient knowledge, modern insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#f8d57e] mb-4 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#f8d57e] rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#ffcc80] transition-all text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ffcc80] transition-all text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/zodiac_sign" className="hover:text-[#ffcc80] transition-all text-sm">
                  Zodiac Sign
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffcc80] transition-all text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ffcc80] transition-all text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#f8d57e] mb-4 relative inline-block">
              Services
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#f8d57e] rounded-full"></span>
            </h4>
            <ul className="space-y-2 text-sm text-[#e9d9b8]">
              <li>
                <Link to="/services#kundali" className="hover:text-[#ffcc80] transition-all">
                  Kundali Analysis
                </Link>
              </li>
              <li>
                <Link to="/services#vastu" className="hover:text-[#ffcc80] transition-all">
                  Vastu Consultation
                </Link>
              </li>
              <li>
                <Link to="/services#marriage" className="hover:text-[#ffcc80] transition-all">
                  Marriage & Relationship Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#career" className="hover:text-[#ffcc80] transition-all">
                  Career & Business Guidance
                </Link>
              </li>
              <li>
                <Link to="/services#gemstone" className="hover:text-[#ffcc80] transition-all">
                  Gemstone Recommendation
                </Link>
              </li>
              <li>
                <Link to="/services#muhurat" className="hover:text-[#ffcc80] transition-all">
                  Muhurat Selection
                </Link>
              </li>
              <li>
                <Link to="/services#numerology" className="hover:text-[#ffcc80] transition-all">
                  Numerology & Name Correction
                </Link>
              </li>
              <li>
                <Link to="/services#spiritual" className="hover:text-[#ffcc80] transition-all">
                  Spiritual Remedies & Healing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#f8d57e] mb-4 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#f8d57e] rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-[#f8d57e] mt-1" />
                <a href="tel:7016716063" className="hover:text-[#ffcc80] transition-all">
                  70167 16063
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-[#f8d57e] mt-1" />
                <a
                  href="mailto:sanjayshastri517@gmail.com"
                  className="hover:text-[#ffcc80] transition-all break-all"
                >
                  sanjayshastri517@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#f8d57e] mt-1" />
                <span className="text-[#e9d9b8]">
                  Shop No. 2, Sai Mohan Society No. 1, <br />Gate No. 2, Nearby Pani Tanki,<br /> Bhestan, Surat 395023
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#f8d57e] mt-1" />
                <span className="text-[#e9d9b8]">
                  MLA Guest House Faizabad Road, <br />Matiyari Chauraha, Chinhat, <br />Lucknow, Uttar Pradesh 226028
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f8d57e]/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#e7c6a1] space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            © 2025 <span className="text-[#f8d57e]">Daksh Jyotish Vigyan</span>. All rights reserved.<br />  Produly Made By <a href="https://www.bimfrox.com/" className="text-green-800">Bimfrox</a>
          </p>
          <div className="flex space-x-5 text-lg">
            <a href="#" className="hover:text-[#ffcc80] transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#ffcc80] transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ffcc80] transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
