import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaChartLine,
  FaRegStar,
  FaWhatsapp,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import acharya from "/Astro/Maharajji.jpg";
import heroBg from "/Astro/hero.png";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();

  const features = [
    {
      icon: <FaRegStar className="text-4xl text-[#FFD46B] mb-3" />,
      title:
        language === "en" ? "Expert Astrology" : "विशेषज्ञ ज्योतिष सेवा",
      description:
        language === "en"
          ? "Detailed Kundali analysis and accurate predictions."
          : "विस्तृत कुंडली विश्लेषण और सटीक भविष्यवाणियाँ।",
    },
    {
      icon: <FaHeart className="text-4xl text-[#D36B4A] mb-3" />,
      title:
        language === "en" ? "Relationship Guidance" : "संबंध मार्गदर्शन",
      description:
        language === "en"
          ? "Marriage compatibility and personalized solutions."
          : "विवाह अनुकूलता और व्यक्तिगत समाधान।",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#C03F35] mb-3" />,
      title:
        language === "en" ? "Career & Business" : "कैरियर और व्यवसाय",
      description:
        language === "en"
          ? "Success strategies based on planetary insights."
          : "ग्रहों की स्थिति के अनुसार सफलता की रणनीतियाँ।",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      feedback:
        language === "en"
          ? "Acharya Ji’s guidance changed my life. His predictions are incredibly accurate and remedies worked wonders!"
          : "आचार्य जी के मार्गदर्शन ने मेरी ज़िंदगी बदल दी। उनकी भविष्यवाणियाँ अद्भुत रूप से सटीक हैं और उपाय बहुत प्रभावी रहे!",
      rating: 5,
    },
    {
      name: "Ravi Patel",
      feedback:
        language === "en"
          ? "Truly blessed to have consulted him. He helped me make the right career decisions with confidence."
          : "उनसे परामर्श लेना वास्तव में सौभाग्य की बात थी। उन्होंने मुझे सही करियर निर्णय लेने में आत्मविश्वास दिया।",
      rating: 4,
    },
    {
      name: "Neha Verma",
      feedback:
        language === "en"
          ? "A divine experience! He explains astrology in such a simple yet powerful way. Highly recommended."
          : "एक दिव्य अनुभव! वे ज्योतिष को बेहद सरल और प्रभावशाली तरीके से समझाते हैं। अत्यधिक अनुशंसित।",
      rating: 5,
    },
  ];

  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="min-h-screen font-sans text-[#2E1A1A] bg-[#F9E8C9] relative">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#6B1919]/90 via-[#8C2626]/80 to-[#C03F35]/70"></div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left space-y-6 text-[#F9E8C9]">
              {/* Trusted Section + Language Toggle */}
              <div className="flex items-center justify-center md:justify-start gap-4 relative">
                <span className="inline-block px-4 py-2 bg-[#FFD46B]/20 border border-[#FFD46B]/50 text-[#FFD46B] rounded-full text-sm font-medium shadow-[0_0_10px_rgba(255,212,107,0.4)]">
                  {language === "en"
                    ? "🔱 Trusted by 10,000+ Devotees"
                    : "🔱 10,000+ भक्तों का विश्वास"}
                </span>

                <div
                  onClick={toggleLanguage}
                  className={`w-20 h-8 flex items-center rounded-full p-1 cursor-pointer relative transition ${
                    language === "en"
                      ? "bg-orange-400"
                      : "bg-yellow-500"
                  }`}
                >
                  <span
                    className={`absolute text-xs font-bold left-2 transition-all ${
                      language === "en"
                        ? "text-[#2E1A1A]"
                        : "text-[#2E1A1A]/60"
                    }`}
                  >
                    EN
                  </span>
                  <span
                    className={`absolute text-xs font-bold right-2 transition-all ${
                      language === "en"
                        ? "text-[#2E1A1A]/60"
                        : "text-[#2E1A1A]"
                    }`}
                  >
                    HI
                  </span>

                  <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition ${
                      language === "en"
                        ? "translate-x-0"
                        : "translate-x-12"
                    }`}
                  ></div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-[0_0_10px_rgba(192,63,53,0.6)]">
                {language === "en" ? "Divine Guidance" : "दैवीय मार्गदर्शन"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD46B] via-[#F4A300] to-[#C03F35]">
                  {language === "en"
                    ? "For a Better Tomorrow"
                    : "एक बेहतर कल के लिए"}
                </span>
              </h1>

              <p className="text-lg text-[#FDEFCB] max-w-xl mx-auto md:mx-0">
                {language === "en"
                  ? "Achieve peace, prosperity, and happiness through expert astrology and spiritual wisdom from "
                  : "विशेषज्ञ ज्योतिष और आध्यात्मिक ज्ञान के माध्यम से शांति, समृद्धि और खुशियाँ प्राप्त करें "}
                <span className="font-semibold text-[#FFD46B]">
                  Acharya Sanjay Shastri
                </span>
                .
              </p>

              {/* ✅ Only WhatsApp Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://wa.me/917016716063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#1EBE57] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] transition"
                >
                  <FaWhatsapp className="text-2xl" />{" "}
                  {language === "en"
                    ? "Chat on WhatsApp"
                    : "व्हाट्सएप पर चैट करें"}
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute w-72 h-72 bg-gradient-to-r from-[#C03F35] to-[#FFD46B] rounded-full blur-3xl opacity-25 animate-pulse"></div>
              <div className="relative">
                <img
                  src={acharya}
                  alt="Acharya Sanjay Shastri"
                  className="rounded-full shadow-2xl w-80 sm:w-96 object-cover border-4 border-[#FFD46B]/40"
                />
                <div className="absolute inset-0 bg-black/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FFF8EB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1919] mb-12">
            {language === "en"
              ? "Our Key Services"
              : "हमारी प्रमुख सेवाएँ"}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-[#8C2626]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-[#8C2626] to-[#C03F35] text-[#FDEFCB]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-10">
          {[
            { label: language === "en" ? "Kundalis Read" : "पढ़ी गई कुंडलियाँ", value: 150 },
            { label: language === "en" ? "Years Experience" : "सालों का अनुभव", value: 25 },
            { label: language === "en" ? "Happy Clients" : "संतुष्ट ग्राहक", value: 130, isK: true },
            { label: language === "en" ? "Awards" : "पुरस्कार", value: 10 },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">
                {inView && (
                  <>
                    <CountUp end={stat.value} duration={3} />
                    {stat.value >= 100 || stat.isK ? "K+" : "+"}
                  </>
                )}
              </h3>
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FFF8EB]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1919] mb-12">
            {language === "en"
              ? "What People Say"
              : "लोग क्या कहते हैं"}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-8 rounded-2xl border-t-4 border-[#FFD46B]"
              >
                <p className="text-gray-700 mb-4 italic">
                  “{item.feedback}”
                </p>
                <div className="flex justify-center text-[#FFD46B] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h4 className="font-semibold text-[#6B1919]">
                  - {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C03F35] to-[#8C2626] text-center text-[#FDEFCB]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {language === "en"
            ? "Seek Guidance from the Divine Today"
            : "आज ही दैवीय मार्गदर्शन प्राप्त करें"}
        </h2>
        <a
          href="https://wa.me/917016716063"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#1EBE57] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] transition"
        >
          <FaWhatsapp className="text-2xl" />{" "}
          {language === "en" ? "Chat on WhatsApp" : "व्हाट्सएप पर चैट करें"}
        </a>
      </section>
    </div>
  );
};

export default Home;