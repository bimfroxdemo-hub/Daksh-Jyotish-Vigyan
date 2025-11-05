import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaAward,
} from "react-icons/fa";
import acharyaHero from "../../public/Astro/Maharajji.jpg";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: <FaBookOpen className="text-4xl text-[#FFD46B]" />,
      label: {
        en: "Kundalis Served",
        hi: "कुंडलियाँ बनाई गईं",
      },
      number: 150,
      suffix: "k+",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#FFD46B]" />,
      label: {
        en: "Years Experience",
        hi: "वर्षों का अनुभव",
      },
      number: 23,
      suffix: "+",
    },
    {
      icon: <FaUsers className="text-4xl text-[#FFD46B]" />,
      label: {
        en: "Happy Clients",
        hi: "संतुष्ट ग्राहक",
      },
      number: 130,
      suffix: "k+",
    },
    {
      icon: <FaAward className="text-4xl text-[#FFD46B]" />,
      label: { en: "Awards", hi: "पुरस्कार" },
      number: 10,
      suffix: "+",
    },
  ];

  const expertise = [
    {
      en: "Vedic Astrology & Kundali Analysis",
      hi: "वैदिक ज्योतिष और कुंडली विश्लेषण",
    },
    {
      en: "Marriage Compatibility & Matching",
      hi: "विवाह संगतता और मिलान",
    },
    {
      en: "Career & Business Consultation",
      hi: "कैरियर और व्यवसाय परामर्श",
    },
    {
      en: "Vastu Shastra for Home & Office",
      hi: "घर और कार्यालय के लिए वास्तु शास्त्र",
    },
    {
      en: "Gemstone Recommendation & Therapy",
      hi: "रत्न परामर्श और चिकित्सा",
    },
    {
      en: "Muhurat Selection for Auspicious Events",
      hi: "शुभ कार्यों के लिए मुहूर्त चयन",
    },
    {
      en: "Numerology & Name Correction",
      hi: "अंक ज्योतिष और नाम सुधार",
    },
    {
      en: "Spiritual Healing & Remedies",
      hi: "आध्यात्मिक उपचार और उपाय",
    },
    {
      en: "Child Birth & Naming Ceremony",
      hi: "संतान जन्म और नामकरण संस्कार",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: {
        en: "Acharya Sanjay Shastri's guidance changed my life. His predictions were accurate and his remedies truly worked!",
        hi: "आचार्य संजय शास्त्री के मार्गदर्शन ने मेरी जिंदगी बदल दी। उनकी भविष्यवाणियाँ सटीक थीं और उनके उपाय वास्तव में कारगर रहे!",
      },
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      text: {
        en: "Best vastu consultant I've ever met. My business grew significantly after following his advice.",
        hi: "सबसे अच्छे वास्तु सलाहकार जिनसे मैं मिला। उनके सुझाव मानने के बाद मेरा व्यापार तेजी से बढ़ा।",
      },
      rating: 5,
    },
    {
      name: "Anjali Verma",
      location: "Delhi",
      text: {
        en: "The gemstone recommendation was perfect. I felt positive changes within weeks. Highly recommended!",
        hi: "रत्न सुझाव एकदम सही था। कुछ ही हफ्तों में सकारात्मक बदलाव महसूस हुए। अत्यधिक अनुशंसित!",
      },
      rating: 5,
    },
    {
      name: "Vikram Mehta",
      location: "Jaipur",
      text: {
        en: "Very humble and knowledgeable astrologer. Helped me find peace and success through proper remedies.",
        hi: "बहुत ही विनम्र और ज्ञानी ज्योतिषी। उन्होंने उचित उपायों से मुझे शांति और सफलता पाने में मदद की।",
      },
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      location: "Pune",
      text: {
        en: "Accurate predictions and clear explanations. I always consult him before taking big life decisions.",
        hi: "सटीक भविष्यवाणियाँ और स्पष्ट व्याख्या। मैं हमेशा बड़े निर्णयों से पहले उनसे परामर्श करती हूँ।",
      },
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setAnimatedValues(
        stats.map((stat) =>
          stat.number >= 5
            ? Math.floor(stat.number * progress)
            : (stat.number * progress).toFixed(1)
        )
      );
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9E8C9] via-[#F5DDA8] to-[#EBCB7A] text-[#2E1A1A] font-sans pt-20">
      {/* Hero Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C03F35] to-[#FFD46B] rounded-full blur-3xl opacity-20"></div>
            <img
              src={acharyaHero}
              alt="Acharya Sanjay Shastri"
              className="relative w-full rounded-2xl shadow-2xl border border-[#FFD46B]/30"
            />
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8C2626]">
              {language === "en" ? "About " : "परिचय "}
              <span className="bg-gradient-to-r from-[#C03F35] via-[#F4A300] to-[#FFD46B] bg-clip-text text-transparent">
                Acharya Sanjay Shastri
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-[#4A2A2A]">
              {language === "en"
                ? "With over 23 years of dedicated practice in Vedic astrology and vastu shastra, Acharya Sanjay Shastri has guided thousands towards happiness and prosperity."
                : "23 वर्षों से अधिक के अनुभव के साथ, आचार्य संजय शास्त्री ने वैदिक ज्योतिष और वास्तु शास्त्र के माध्यम से हजारों लोगों को सुख और समृद्धि की राह दिखाई है।"}
            </p>

            <p className="text-lg leading-relaxed text-[#4A2A2A]">
              {language === "en"
                ? "Born into a family of astrologers, he inherited celestial wisdom and combines it with modern insight."
                : "ज्योतिषियों के परिवार में जन्मे, उन्होंने अपने पूर्वजों से यह दिव्य ज्ञान प्राप्त किया और आधुनिक दृष्टिकोण से उसे जोड़ा।"}
            </p>

            <p className="text-lg leading-relaxed text-[#4A2A2A]">
              {language === "en"
                ? "He specializes in Kundali analysis, marriage matching, career guidance, and gemstone recommendations."
                : "वे कुंडली विश्लेषण, विवाह मिलान, करियर मार्गदर्शन और रत्न परामर्श में विशेषज्ञ हैं।"}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-[#FFD46B]/40 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-[#C03F35] mb-2">
                {animatedValues[i]}
                {stat.suffix}
              </h3>
              <p className="text-[#4A2A2A] font-medium">
                {stat.label[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#8C2626]">
          {language === "en" ? "Areas of " : "विशेषज्ञता के "}
          <span className="bg-gradient-to-r from-[#C03F35] via-[#F4A300] to-[#FFD46B] bg-clip-text text-transparent">
            {language === "en" ? "Expertise" : "क्षेत्र"}
          </span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-[#FFD46B]/40 rounded-xl p-6 text-left flex items-start space-x-3 hover:scale-105 transition-all"
            >
              <FaCheckCircle className="text-red-700 text-xl mt-1" />
              <p className="text-[#2E1A1A] font-medium">{item[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Fixed Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#EBCB7A]/30 to-[#F9E8C9]/10 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8C2626]">
          {language === "en" ? "What Our " : "हमारे "}
          <span className="bg-gradient-to-r from-[#C03F35] via-[#F4A300] to-[#FFD46B] bg-clip-text text-transparent">
            {language === "en" ? "Clients Say" : "ग्राहक कहते हैं"}
          </span>
        </h2>
        <p className="text-lg text-[#4A2A2A] mb-12">
          {language === "en"
            ? "Trusted by thousands across India"
            : "भारत भर में हजारों लोगों का विश्वास"}
        </p>

        <div className="relative flex flex-col items-center justify-center">
          {/* Testimonial Card */}
          <div className="w-full md:w-2/3 bg-white/10 backdrop-blur-md border border-[#FFD46B]/40 rounded-2xl p-8 text-left shadow-lg z-10">
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-[#FFB300] mr-1" />
              ))}
            </div>
            <p className="italic text-[#4A2A2A] mb-4">
              “{testimonials[currentIndex].text[language]}”
            </p>
            <div className="border-t border-[#FFD46B]/30 pt-4">
              <p className="font-semibold text-[#8C2626]">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-[#4A2A2A]">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Buttons - mobile bottom / desktop sides */}
          <div className="flex justify-between items-center w-full max-w-xs mt-8 md:hidden">
            <button
              onClick={handlePrev}
              className="bg-[#C03F35] text-white p-3 rounded-full hover:bg-[#8C2626] transition z-20"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#C03F35] text-white p-3 rounded-full hover:bg-[#8C2626] transition z-20"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Desktop Buttons */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-10 bg-[#C03F35] text-white p-3 rounded-full hover:bg-[#8C2626] transition z-20"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-10 bg-[#C03F35] text-white p-3 rounded-full hover:bg-[#8C2626] transition z-20"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
