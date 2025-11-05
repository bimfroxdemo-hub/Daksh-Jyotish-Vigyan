import React from "react";
import {
  FaBookOpen,
  FaHome,
  FaHeart,
  FaBriefcase,
  FaGem,
  FaCalendarAlt,
  FaHashtag,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";


import kundaliImg from "/public/Astro/kundali.png";
import vastuImg from "/public/Astro/vastu.png";
import marriageImg from "/public/Astro/vivah.png";
import careerImg from "/public/Astro/business.png";
import gemstoneImg from "/public/Astro/stone.png";
import muhuratImg from "/public/Astro/muhurat.png";
import numerologyImg from "/public/Astro/number.png";
import remediesImg from "/public/Astro/om.png";

const Services = () => {
  const { language } = useLanguage();

  const whatsappNumber = "917016716063";
  const whatsappMessage = encodeURIComponent(
    "Namaste 🙏, I’m interested in your astrology services. Please share more details."
  );

  const translations = {
    en: {
      title: "Our Services",
      subtitle:
        "Personalized astrology and spiritual guidance to illuminate your path toward peace, prosperity, and fulfillment.",
      free: "✨ Free Initial Consultation Available ✨",
      ctaTitle: "Not Sure Which Service You Need?",
      ctaText:
        "Schedule a free consultation with Acharya Sanjay Shastri and receive divine guidance tailored to your journey.",
      ctaButton: "Chat on WhatsApp",
      services: [
        {
          title: "Kundali Analysis",
          description:
            "Comprehensive birth chart analysis revealing your strengths, challenges, and life path.",
          image: kundaliImg,
        },
        {
          title: "Vastu Consultation",
          description:
            "Transform your home or workspace into a harmonious environment filled with positive energy.",
          image: vastuImg,
        },
        {
          title: "Marriage & Relationship Solutions",
          description:
            "Compatibility matching and remedies for relationship challenges.",
          image: marriageImg,
        },
        {
          title: "Career & Business Guidance",
          description:
            "Strategic career and business planning based on planetary strengths.",
          image: careerImg,
        },
        {
          title: "Gemstone Recommendation",
          description:
            "Personalized gemstone guidance to balance planetary energies.",
          image: gemstoneImg,
        },
        {
          title: "Muhurat Selection",
          description:
            "Choose the most auspicious time for important life events.",
          image: muhuratImg,
        },
        {
          title: "Numerology & Name Correction",
          description:
            "Unlock the power of numbers for personal and business success.",
          image: numerologyImg,
        },
        {
          title: "Spiritual Remedies & Healing",
          description:
            "Ancient remedies and mantras to attract peace and prosperity.",
          image: remediesImg,
        },
      ],
    },

    hi: {
      title: "हमारी सेवाएँ",
      subtitle:
        "आपके जीवन के मार्ग को शांति, समृद्धि और सफलता की ओर प्रकाशित करने के लिए व्यक्तिगत ज्योतिषीय और आध्यात्मिक मार्गदर्शन।",
      free: "✨ निःशुल्क प्रारंभिक परामर्श उपलब्ध ✨",
      ctaTitle: "क्या आपको नहीं पता कौन-सी सेवा उपयुक्त है?",
      ctaText:
        "आचार्य संजय शास्त्री से निःशुल्क परामर्श लें और अपने जीवन के अनुसार दिव्य मार्गदर्शन प्राप्त करें।",
      ctaButton: "व्हाट्सएप पर चैट करें",
      services: [
        {
          title: "कुंडली विश्लेषण",
          description:
            "आपकी जन्म कुंडली का विस्तृत विश्लेषण — आपकी शक्तियाँ, चुनौतियाँ और जीवन का मार्ग जानें।",
          image: kundaliImg,
        },
        {
          title: "वास्तु परामर्श",
          description:
            "अपने घर या कार्यालय को सकारात्मक ऊर्जा से भरपूर बनाएं।",
          image: vastuImg,
        },
        {
          title: "विवाह एवं संबंध समाधान",
          description:
            "संबंधों में सामंजस्य और विवाह हेतु उचित समय का निर्धारण।",
          image: marriageImg,
        },
        {
          title: "करियर एवं व्यवसाय मार्गदर्शन",
          description:
            "ग्रहों की स्थिति के अनुसार करियर और व्यवसाय की रणनीति तैयार करें।",
          image: careerImg,
        },
        {
          title: "रत्न परामर्श",
          description:
            "ग्रहों को संतुलित करने और जीवन में सकारात्मकता लाने हेतु उपयुक्त रत्न की सलाह।",
          image: gemstoneImg,
        },
        {
          title: "मुहूर्त चयन",
          description:
            "विवाह, व्यवसाय आरंभ या यात्रा जैसे कार्यों के लिए शुभ समय चुनें।",
          image: muhuratImg,
        },
        {
          title: "अंक ज्योतिष एवं नाम सुधार",
          description:
            "अंकों की शक्ति जानें और सफलता के लिए नाम सुधार कराएं।",
          image: numerologyImg,
        },
        {
          title: "आध्यात्मिक उपाय एवं उपचार",
          description:
            "प्राचीन मंत्रों और उपायों से मन की शांति और समृद्धि प्राप्त करें।",
          image: remediesImg,
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen pt-10 font-sans bg-gradient-to-b from-[#F9E8C9] via-[#F5DDA8] to-[#EBCB7A] text-[#2E1A1A]">
      {/* Hero Section */}
      <section className="py-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#8C2626] drop-shadow-[0_0_8px_rgba(255,212,107,0.3)]">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-[#4A2A2A] max-w-3xl mx-auto mb-8">
          {t.subtitle}
        </p>
        <div className="inline-block bg-[#FFD46B]/20 border border-[#FFD46B]/50 rounded-full px-6 py-3 shadow-[0_0_15px_rgba(255,212,107,0.3)]">
          <p className="text-[#8C2626] font-semibold">{t.free}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-9">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFF6E5]/80 border border-[#FFD46B]/40 rounded-2xl shadow-lg hover:shadow-red-800 hover:border-[#FFD46B]/70 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C03F35]/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#FFD46B]/20 rounded-full shadow-inner">
                    {[
                      <FaBookOpen />,
                      <FaHome />,
                      <FaHeart />,
                      <FaBriefcase />,
                      <FaGem />,
                      <FaCalendarAlt />,
                      <FaHashtag />,
                      <FaStar />,
                    ][index]}
                  </div>
                  <h3 className="text-xl font-semibold text-[#8C2626]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#4A2A2A] text-base flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <div className="flex justify-center mt-8">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,211,102,0.6)]">
                      <FaWhatsapp className="text-xl" />
                      {language === "en"
                        ? "Contact on WhatsApp"
                        : "व्हाट्सएप पर संपर्क करें"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-[#8C2626]/90 via-[#D36B4A]/80 to-[#FFD46B]/90 text-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 sm:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E1A1A] drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-[#3A1E1E]/90 mb-8 max-w-2xl mx-auto font-medium">
            {t.ctaText}
          </p>

          {/* WhatsApp CTA Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-3 mx-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]">
              <FaWhatsapp className="text-2xl" />
              {t.ctaButton}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
