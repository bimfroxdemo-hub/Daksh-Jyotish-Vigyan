import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext"; // 👈 for language toggle

const Contact = () => {
  const { language } = useLanguage(); // current language

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-3xl text-[#FFD46B]" />,
      title: {
        en: "Phone",
        hi: "फ़ोन",
      },
      content: "70167 16063",
      action: "tel:7016716063",
    },
    {
      icon: <FaEnvelope className="text-3xl text-[#FFD46B]" />,
      title: {
        en: "Email",
        hi: "ईमेल",
      },
      content: "sanjayshastri517@gmail.com",
      action: "mailto:sanjayshastri517@gmail.com",
    },
  ];

  const addresses = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#FFD46B]" />,
      title: {
        en: "Surat Address",
        hi: "सूरत पता",
      },
      content: {
        en: "Shop No. 2, Sai Mohan Society No. 1, Gate No. 2, Nearby Pani Tanki, Bhestan, Surat 395023",
        hi: "दुकान नं. 2, साई मोहन सोसाइटी नं. 1, गेट नं. 2, पानी टंकी के पास, भेस्तान, सूरत 395023",
      },
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#FFD46B]" />,
      title: {
        en: "Lucknow Address",
        hi: "लखनऊ पता",
      },
      content: {
        en: "MLA Guest House Faizabad Road, Matiyari Chauraha, Chinhat, Lucknow, Uttar Pradesh 226028",
        hi: "एमएलए गेस्ट हाउस, फैज़ाबाद रोड, मटियारी चौराहा, चिनहट, लखनऊ, उत्तर प्रदेश 226028",
      },
    },
  ];

  const whatsappNumber = "917016716063";
  const whatsappMessage = encodeURIComponent(
    language === "en"
      ? "Namaste 🙏, I'm interested in your astrology services. Please share more details."
      : "नमस्ते 🙏, मैं आपकी ज्योतिष सेवाओं में रुचि रखता हूँ। कृपया और जानकारी साझा करें।"
  );

  return (
    <div className="min-h-screen pt-10 font-sans bg-gradient-to-b from-[#F9E8C9] via-[#F5DDA8] to-[#EBCB7A] text-[#2E1A1A]">
      {/* Hero Section */}
      <section className="py-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#8C2626] drop-shadow-[0_0_8px_rgba(255,212,107,0.3)]">
          {language === "en" ? (
            <>
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C03F35] via-[#F4A300] to-[#FFD46B]">
                Touch
              </span>
            </>
          ) : (
            <>
              संपर्क{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C03F35] via-[#F4A300] to-[#FFD46B]">
                करें
              </span>
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl text-[#4A2A2A] max-w-3xl mx-auto mb-6">
          {language === "en" ? (
            <>
              Reach out to{" "}
              <span className="text-[#8C2626] font-semibold">
                Acharya Sanjay Shastri
              </span>{" "}
              for astrology consultations and personalized guidance.
            </>
          ) : (
            <>
              व्यक्तिगत मार्गदर्शन और ज्योतिष परामर्श के लिए{" "}
              <span className="text-[#8C2626] font-semibold">
                आचार्य संजय शास्त्री
              </span>{" "}
              से संपर्क करें।
            </>
          )}
        </p>
      </section>

      {/* Contact Info + Addresses */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone + Email */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.action}
              className="group relative bg-white/10 backdrop-blur-md border border-[#FFD46B]/40 rounded-2xl shadow-lg hover:shadow-red-800 p-8 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-[#8C2626] mb-2">
                {info.title[language]}
              </h3>
              <p className="text-center text-[#4A2A2A] whitespace-pre-line font-medium group-hover:text-[#C03F35] transition">
                {info.content}
              </p>
            </a>
          ))}

          {/* Addresses */}
          {addresses.map((addr, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-md border border-[#FFD46B]/40 rounded-2xl shadow-lg hover:shadow-red-800 p-8 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="mb-4 transition-transform duration-200">
                {addr.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-[#8C2626] mb-2">
                {addr.title[language]}
              </h3>
              <p className="text-center text-[#4A2A2A] whitespace-pre-line font-medium">
                {addr.content[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Quick Actions */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 max-w-7xl mx-auto">
          {/* Left Side - Map */}
          <div className="w-full lg:w-[60%]">
            <div className="h-full rounded-2xl overflow-hidden border border-[#FFD46B]/40 shadow-lg hover:shadow-[0_0_20px_rgba(255,212,107,0.5)] transition">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.946662493421!2d72.86815477509269!3d21.156730980507846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e066238cce1%3A0xfde04837f91f401a!2sBhestan%2C%20Surat%2C%20Gujarat%20395023!5e0!3m2!1sen!2sin!4v1730447654321!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl border-0"
                title="Google Map - Bhestan, Surat"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Quick Actions */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center items-center gap-8">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full flex items-center justify-center gap-3 py-6 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white text-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]">
                <FaWhatsapp className="text-2xl" />
                {language === "en" ? "Chat on WhatsApp" : "व्हाट्सऐप पर चैट करें"}
              </button>
            </a>

            {/* Call Now */}
            <a href="tel:7016716063" className="w-full">
              <button className="w-full flex items-center justify-center gap-3 py-6 rounded-full bg-gradient-to-r from-[#C03F35] to-[#FFD46B] text-[#2E1A1A] text-xl font-semibold hover:opacity-90 shadow-lg transition">
                <FaPhoneAlt className="text-2xl" />
                {language === "en" ? "Call Now" : "अभी कॉल करें"}
              </button>
            </a>

            {/* Email Now */}
            <a
              href="mailto:sanjayshastri517@gmail.com"
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full flex items-center justify-center gap-3 py-6 rounded-full bg-gradient-to-r from-[#FFD46B] to-[#C03F35] text-[#2E1A1A] text-xl font-semibold hover:opacity-90 shadow-lg transition">
                <FaEnvelope className="text-2xl" />
                {language === "en" ? "Send Email" : "ईमेल भेजें"}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
