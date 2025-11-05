import { useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // ✅ Import global context

const Zodiac = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { language } = useLanguage(); // ✅ Use global language

  const zodiacSigns = [
    {
      name: { en: "Aries", hi: "मेष राशि" },
      symbol: "♈",
      image: "/Astro/aries (2).png",
      element: { en: "Fire", hi: "अग्नि" },
      planet: { en: "Mars (Mangal)", hi: "मंगल ग्रह" },
      traits: {
        en: "The year 2026 will be very favorable for Aries. You’ll experience peace, success, and recognition through hard work. Career and business growth, financial improvement, and new opportunities are likely, especially in the second half of the year. Family life will be harmonious with minor early issues resolving soon. Love relationships will strengthen, and students will perform well. Take care of your health, especially digestion and your mother’s well-being. Worship Lord Hanuman and offer water to the Sun for positive results.",
        hi: "वर्ष 2026 मेष राशि वालों के लिए बहुत अनुकूल रहेगा। कड़ी मेहनत से आपको शांति, सफलता और पहचान मिलेगी। करियर और व्यवसाय में वृद्धि, आर्थिक सुधार और नए अवसर मिलने की संभावना है, खासकर वर्ष के उत्तरार्ध में। पारिवारिक जीवन सौहार्दपूर्ण रहेगा और छोटी-मोटी शुरुआती परेशानियाँ जल्द ही सुलझ जाएँगी। प्रेम संबंध मज़बूत होंगे और छात्र अच्छा प्रदर्शन करेंगे। अपने स्वास्थ्य, खासकर पाचन और अपनी माँ के स्वास्थ्य का ध्यान रखें। सकारात्मक परिणामों के लिए हनुमान जी की पूजा करें और सूर्य को जल अर्पित करें।",
      },
    },
    {
      name: { en: "Taurus", hi: "वृषभ राशि" },
      symbol: "♉",
      image: "/Astro/taurusC.png",
      element: { en: "Earth", hi: "पृथ्वी" },
      planet: { en: "Venus (Shukra)", hi: "शुक्र ग्रह" },
      traits: {
        en: "In 2026, Taurus natives will enjoy a satisfying year marked by stability and progress. Career and finances will flourish, especially after June, while students will perform well in exams. Love and married life may face early challenges but improve later. Though family life might be slightly unsettled, joy will return with understanding. Financial gains will rise despite initial expenses. Maintaining physical and mental health through proper diet, yoga, and meditation is advised. Offering service to the poor before bedtime will bring peace and positivity.",
        hi: "2026 में, वृषभ राशि के जातक स्थिरता और प्रगति से भरपूर एक संतोषजनक वर्ष का आनंद लेंगे। करियर और वित्तीय स्थिति में, खासकर जून के बाद, सुधार होगा, जबकि छात्र परीक्षाओं में अच्छा प्रदर्शन करेंगे। प्रेम और वैवाहिक जीवन में शुरुआती चुनौतियों का सामना करना पड़ सकता है, लेकिन बाद में सुधार होगा। हालाँकि पारिवारिक जीवन थोड़ा अस्थिर हो सकता है, लेकिन समझदारी से खुशियाँ लौट आएंगी। शुरुआती खर्चों के बावजूद, वित्तीय लाभ में वृद्धि होगी। उचित आहार, योग और ध्यान के माध्यम से शारीरिक और मानसिक स्वास्थ्य बनाए रखने की सलाह दी जाती है। सोने से पहले गरीबों की सेवा करने से शांति और सकारात्मकता आएगी।",
      },
    },
    {
      name: { en: "Gemini", hi: "मिथुन राशि" },
      symbol: "♊",
      image: "/Astro/Gemini.png",
      element: { en: "Air", hi: "वायु" },
      planet: { en: "Mercury (Budha)", hi: "बुध ग्रह" },
      traits: {
        en: "In 2026, Gemini natives will focus on spiritual and personal growth. Love life will flourish in the first half, with harmony and possible marriage. Career may face early obstacles but will progress through hard work and discipline. Financially, expect fluctuations with gains from new or foreign ventures but avoid overspending. Health remains stable with minor issues—avoid oily and spicy foods, especially if diabetic. For positive results, worship Lord Shiva, wear a Panchmukhi Rudraksha, and plant a Peepal tree.",
        hi: "2026 में, मिथुन राशि के जातक आध्यात्मिक और व्यक्तिगत विकास पर ध्यान केंद्रित करेंगे। प्रेम जीवन पहले भाग में मधुरता और संभावित विवाह के साथ फल-फूलेगा। करियर में शुरुआती बाधाओं का सामना करना पड़ सकता है, लेकिन कड़ी मेहनत और अनुशासन से प्रगति होगी। आर्थिक रूप से, नए या विदेशी उद्यमों से लाभ के साथ उतार-चढ़ाव की उम्मीद करें, लेकिन ज़्यादा खर्च करने से बचें। स्वास्थ्य मामूली समस्याओं के साथ स्थिर रहेगा—तेल और मसालेदार भोजन से बचें, खासकर अगर मधुमेह रोगी हैं। सकारात्मक परिणामों के लिए, भगवान शिव की पूजा करें, पंचमुखी रुद्राक्ष धारण करें और पीपल का पेड़ लगाएं।",
      },
    },
    {
      name: { en: "Cancer", hi: "कर्क राशि" },
      symbol: "♋",
      image: "/Astro/cancer.png",
      element: { en: "Water", hi: "जल" },
      planet: { en: "Moon (Chandra)", hi: "चंद्र ग्रह" },
      traits: {
        en: "In 2026, Cancer natives will focus on self-reliance, determination, and major life decisions. Love life will flourish — relationships may lead to marriage, and singles could meet their ideal partner. Career and business prospects are strong, especially for creative ventures. Financially, careful planning and saving will bring stability mid-year. Students will achieve good results, particularly in competitive exams. Health may fluctuate due to stress, so self-care and balance are essential. Tip: Plant and nurture a tree daily.",
        hi: "2026 में, कर्क राशि के जातक आत्मनिर्भरता, दृढ़ संकल्प और जीवन के बड़े फैसलों पर ध्यान केंद्रित करेंगे। प्रेम जीवन फल-फूलेगा—रिश्ते विवाह तक पहुँच सकते हैं, और अविवाहित जातकों को अपना आदर्श साथी मिल सकता है। करियर और व्यवसाय की संभावनाएँ प्रबल हैं, खासकर रचनात्मक कार्यों के लिए। आर्थिक रूप से, सावधानीपूर्वक योजना और बचत वर्ष के मध्य में स्थिरता लाएगी। छात्र अच्छे परिणाम प्राप्त करेंगे, खासकर प्रतियोगी परीक्षाओं में। तनाव के कारण स्वास्थ्य में उतार-चढ़ाव हो सकता है, इसलिए आत्म-देखभाल और संतुलन आवश्यक है। सुझाव: प्रतिदिन एक पेड़ लगाएँ और उसका पोषण करें।",
      },
    },
    {
      name: { en: "Leo", hi: "सिंह राशि" },
      symbol: "♌",
      image: "/Astro/leo.png",
      element: { en: "Fire", hi: "अग्नि" },
      planet: { en: "Sun (Surya)", hi: "सूर्य ग्रह" },
      traits: {
        en: "In 2026, Leo natives will see growth, strength, and success through effort and courage. The year may begin with career fluctuations but will improve later. Financial challenges may arise, so plan wisely. Job promotions and new opportunities are likely, especially for government employees. Family and love life will be joyful and harmonious, with strong bonds and support. Remedy: Offer water to the rising sun or donate jaggery or copper daily.",
        hi: "2026 में, सिंह राशि के जातकों को प्रयास और साहस के बल पर विकास, शक्ति और सफलता मिलेगी। वर्ष की शुरुआत करियर में उतार-चढ़ाव के साथ हो सकती है, लेकिन बाद में इसमें सुधार होगा। वित्तीय चुनौतियाँ आ सकती हैं, इसलिए सोच-समझकर योजना बनाएँ। नौकरी में पदोन्नति और नए अवसर मिलने की संभावना है, खासकर सरकारी कर्मचारियों के लिए। पारिवारिक और प्रेम जीवन आनंदमय और सामंजस्यपूर्ण रहेगा, मज़बूत रिश्तों और सहयोग के साथ। उपाय: उगते सूर्य को जल अर्पित करें या प्रतिदिन गुड़ या तांबे का दान करें।",
      },
    },
    {
      name: { en: "Virgo (Kanya)", hi: "कन्या राशि" },
      symbol: "♍",
      image: "/Astro/virgo.png",
      element: { en: "Earth", hi: "पृथ्वी" },
      planet: { en: "Mercury (Budha)", hi: "बुध ग्रह" },
      traits: {
        en: "The year 2026 will be special for Virgo natives, bringing confidence, success, and completion of pending tasks. The first half favors career, finance, and education, while love life may see minor ups and downs. Avoid lending money and major decisions after July, as challenges may arise. Despite high expenses, income will remain steady. With care toward health and balance, you’ll achieve growth in personal, professional, and family relationships.",
        hi: "वर्ष 2026 कन्या राशि वालों के लिए विशेष रहेगा, यह आत्मविश्वास, सफलता और लंबित कार्यों को पूरा करने वाला होगा। वर्ष का पहला भाग करियर, वित्त और शिक्षा के लिए अनुकूल रहेगा, जबकि प्रेम जीवन में थोड़े उतार-चढ़ाव देखने को मिल सकते हैं। जुलाई के बाद पैसे उधार देने और बड़े फैसले लेने से बचें, क्योंकि चुनौतियाँ आ सकती हैं। अधिक खर्चों के बावजूद, आय स्थिर रहेगी। स्वास्थ्य और संतुलन का ध्यान रखने से, आप व्यक्तिगत, व्यावसायिक और पारिवारिक संबंधों में प्रगति हासिल करेंगे।",
      },
    },
    {
      name: { en: "Libra", hi: "तुला राशि" },
      symbol: "♎",
      image: "/Astro/libra.png",
      element: { en: "Air", hi: "वायु" },
      planet: { en: "Venus (Shukra)", hi: "शुक्र ग्रह" },
      traits: {
        en: "The year 2026 will bring major positive changes for Libra natives, filling life with energy, discipline, and success. Career and business growth will be strong, with increased prestige and financial stability. Love and family life will be harmonious, with chances of marriage and family celebrations. Health will remain good, bringing vitality and relief from past ailments. Overall, 2026 promises progress, happiness, and stability in all areas of life.",
        hi: "वर्ष 2026 तुला राशि वालों के लिए बड़े सकारात्मक बदलाव लेकर आएगा, जीवन को ऊर्जा, अनुशासन और सफलता से भर देगा। करियर और व्यवसाय में वृद्धि होगी, प्रतिष्ठा में वृद्धि और वित्तीय स्थिरता होगी। प्रेम और पारिवारिक जीवन सामंजस्यपूर्ण रहेगा, विवाह और पारिवारिक समारोहों के योग बनेंगे। स्वास्थ्य अच्छा रहेगा, जिससे जीवन शक्ति और पुरानी बीमारियों से राहत मिलेगी। कुल मिलाकर, 2026 जीवन के सभी क्षेत्रों में प्रगति, खुशी और स्थिरता का वादा करता है।",
      },
    },
    {
      name: { en: "Scorpio", hi: "वृश्चिक राशि" },
      symbol: "♏",
      image: "/Astro/scorpio.png",
      element: { en: "Water", hi: "जल" },
      planet: { en: "Mars (Mangal)", hi: "मंगल ग्रह" },
      traits: {
        en: "For Scorpio natives, the year 2026 will bring mixed results. Career growth and recognition are indicated, but patience will be tested in personal life. Early in the year, relationships may face stress, though improvement will come mid-year. Financial ups and downs are likely, so control over expenses is essential. Health will remain stable, with yoga and meditation helping mental balance. Overall, 2026 will reward Scorpios with success and stability through wisdom, patience, and hard work.",
        hi: "वृश्चिक राशि वालों के लिए वर्ष 2026 मिले-जुले परिणाम लेकर आएगा। करियर में उन्नति और पहचान के संकेत हैं, लेकिन निजी जीवन में धैर्य की परीक्षा होगी। साल की शुरुआत में रिश्तों में तनाव आ सकता है, हालाँकि साल के मध्य में सुधार होगा। आर्थिक उतार-चढ़ाव की संभावना है, इसलिए खर्चों पर नियंत्रण ज़रूरी है। स्वास्थ्य स्थिर रहेगा, योग और ध्यान मानसिक संतुलन में मदद करेंगे। कुल मिलाकर, 2026 वृश्चिक राशि वालों को बुद्धि, धैर्य और कड़ी मेहनत के माध्यम से सफलता और स्थिरता प्रदान करेगा।",
      },
    },
    {
      name: { en: "Sagittarius", hi: "धनु राशि" },
      symbol: "♐",
      image: "/Astro/Sagittarius.png",
      element: { en: "Fire", hi: "अग्नि" },
      planet: { en: "Jupiter (Guru)", hi: "बृहस्पति ग्रह" },
      traits: {
        en: "The year 2026 will bring growth and transformation for Sagittarius natives. Early challenges in relationships will resolve through honest communication, bringing harmony by year’s end. Career progress will come after initial pressure, with new opportunities and financial stability later in the year. Family life will improve over time, and health will remain mostly good with care and balance. Overall, this year encourages self-improvement, patience, and positivity for long-term success and emotional fulfillment.",
        hi: "वर्ष 2026 धनु राशि वालों के लिए विकास और परिवर्तन लेकर आएगा। रिश्तों में शुरुआती चुनौतियाँ ईमानदार संवाद के ज़रिए हल होंगी और साल के अंत तक सामंजस्य स्थापित होगा। शुरुआती दबाव के बाद करियर में प्रगति होगी, साथ ही साल के अंत में नए अवसर और आर्थिक स्थिरता भी मिलेगी। पारिवारिक जीवन समय के साथ बेहतर होगा, और देखभाल और संतुलन के साथ स्वास्थ्य ज़्यादातर अच्छा रहेगा। कुल मिलाकर, यह वर्ष दीर्घकालिक सफलता और भावनात्मक संतुष्टि के लिए आत्म-सुधार, धैर्य और सकारात्मकता को प्रोत्साहित करता है।",
      },
    },
    {
      name: { en: "Capricorn (Makara)", hi: "मकर राशि" },
      symbol: "♑",
      image: "/Astro/capricorn.png",
      element: { en: "Earth", hi: "पृथ्वी" },
      planet: { en: "Saturn (Shani)", hi: "शनि ग्रह" },
      traits: {
        en: "For Capricorn natives, the year 2026 will bring both challenges and progress. Early months may feel stressful with work pressure and relationship misunderstandings, but the second half promises stability and success. Career growth and business expansion are likely after midyear. Financially, careful planning will lead to stability by year-end. Family harmony will gradually improve, and health will remain strong overall. This year encourages patience, self-reflection, and balance for long-term success and personal fulfillment.",
        hi: "मकर राशि वालों के लिए, वर्ष 2026 चुनौतियाँ और प्रगति दोनों लेकर आएगा। शुरुआती महीने काम के दबाव और रिश्तों में ग़लतफ़हमियों के कारण तनावपूर्ण हो सकते हैं, लेकिन दूसरा भाग स्थिरता और सफलता का वादा करता है। वर्ष के मध्य के बाद करियर में वृद्धि और व्यवसाय का विस्तार होने की संभावना है। आर्थिक रूप से, सावधानीपूर्वक योजना बनाने से वर्ष के अंत तक स्थिरता आएगी। पारिवारिक सौहार्द धीरे-धीरे सुधरेगा और स्वास्थ्य समग्र रूप से अच्छा रहेगा। यह वर्ष दीर्घकालिक सफलता और व्यक्तिगत संतुष्टि के लिए धैर्य, आत्म-चिंतन और संतुलन को प्रोत्साहित करता है।",
      },
    },
    {
      name: { en: "Aquarius", hi: "कुंभ राशि" },
      symbol: "♒",
      image: "/Astro/aquarius.png",
      element: { en: "Air", hi: "वायु" },
      planet: { en: "Saturn (Shani)", hi: "शनि ग्रह" },
      traits: {
        en: "For Aquarius natives, the year 2026 will be a period of reflection, adaptation, and steady growth. Early in the year, love and relationships may face misunderstandings and distance, but mutual trust will strengthen bonds later. Career progress will start slowly, picking up pace after June with new opportunities and promotions. Financially, stability will improve in the second half, favoring long-term investments. Family relations will stay supportive, though minor disagreements may occur. Health needs attention, especially digestion and stress. Overall, 2026 will bring balance, self-awareness, and gradual success.",
        hi: "कुंभ राशि वालों के लिए, वर्ष 2026 चिंतन, अनुकूलन और स्थिर विकास का काल होगा। वर्ष की शुरुआत में, प्रेम और रिश्तों में गलतफहमियों और दूरियों का सामना करना पड़ सकता है, लेकिन बाद में आपसी विश्वास रिश्तों को और मज़बूत करेगा। करियर में प्रगति धीरे-धीरे शुरू होगी, जो जून के बाद नए अवसरों और पदोन्नति के साथ गति पकड़ेगी। आर्थिक रूप से, दूसरी छमाही में स्थिरता में सुधार होगा, जो दीर्घकालिक निवेश के लिए अनुकूल होगा। पारिवारिक रिश्ते सहयोगी बने रहेंगे, हालाँकि छोटी-मोटी असहमतियाँ हो सकती हैं। स्वास्थ्य पर ध्यान देने की आवश्यकता है, विशेष रूप से पाचन और तनाव पर। कुल मिलाकर, 2026 संतुलन, आत्म-जागरूकता और क्रमिक सफलता लेकर आएगा।",
      },
    },
    {
      name: { en: "Pisces (Meena)", hi: "मीन राशि" },
      symbol: "♓",
      image: "/Astro/pisces.png",
      element: { en: "Water", hi: "जल" },
      planet: { en: "Jupiter (Guru)", hi: "बृहस्पति ग्रह" },
      traits: {
        en: "For Pisces natives, the year 2026 will bring emotional fulfillment, career stability, and steady growth. Early in the year, some confusion or family disagreements may arise, but harmony will return with patience and honest communication. Love life will deepen, with chances of engagement or marriage for some. Career progress may be slow initially but will improve after June, bringing new opportunities. Financially, control over spending is needed, though income will rise later. Overall, 2026 favors balance, creativity, and emotional strength.",
        hi: "मीन राशि वालों के लिए, वर्ष 2026 भावनात्मक संतुष्टि, करियर में स्थिरता और निरंतर विकास लेकर आएगा। वर्ष की शुरुआत में, कुछ भ्रम या पारिवारिक मतभेद हो सकते हैं, लेकिन धैर्य और ईमानदार बातचीत से सामंजस्य फिर से स्थापित होगा। प्रेम जीवन में प्रगाढ़ता आएगी, कुछ लोगों के लिए सगाई या विवाह के योग बनेंगे। शुरुआत में करियर की प्रगति धीमी हो सकती है, लेकिन जून के बाद इसमें सुधार होगा और नए अवसर मिलेंगे। आर्थिक रूप से, खर्च पर नियंत्रण आवश्यक है, हालाँकि बाद में आय में वृद्धि होगी। कुल मिलाकर, 2026 संतुलन, रचनात्मकता और भावनात्मक मजबूती का पक्षधर है।",
      },
    },
  ];

  // const generalHoroscope = {
  //   en: "✨ The stars bless you with divine guidance. Follow dharma, remain humble, and let your karma lead the way. ✨",
  //   hi: "✨ सितारे आपको दिव्य मार्गदर्शन प्रदान करते हैं। धर्म का पालन करें, विनम्र रहें और अपने कर्म को मार्गदर्शक बनने दें। ✨",
  // };

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const firstWord = (text) => text.split(" ")[0];

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-b from-[#F9E8C9] via-[#F5DDA8] to-[#EBCB7A] text-[#2E1A1A] font-sans">
      {/* Header */}
      <section className="py-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C03F35] via-[#F4A300] to-[#FFD46B] drop-shadow-[0_0_8px_rgba(255,212,107,0.5)]">
            {language === "en" ? "✨ Zodiac Signs ✨" : "✨ राशियाँ ✨"}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#4A2A2A]">
          {language === "en"
            ? "Discover your Vedic zodiac secrets — explore traits, ruling planets, and cosmic guidance."
            : "अपनी वैदिक राशि के रहस्यों को जानें — स्वभाव, ग्रह और ब्रह्मांडीय मार्गदर्शन को समझें।"}
        </p>
      </section>

      {/* Zodiac Grid */}
      <section className="py-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              onClick={() => toggleFlip(index)}
              className="relative w-full h-[400px] sm:h-[440px] md:h-[460px] cursor-pointer [perspective:1000px] transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] shadow-xl border border-[#E5C07B]/60 hover:border-[#FFD46B]/90 bg-black">
                  <img
                    src={sign.image}
                    alt={sign.name[language]}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center p-3">
                    <div className="text-4xl md:text-5xl mb-1 text-[#FFD46B]">
                      {sign.symbol}
                    </div>
                    <h3 className="text-base md:text-xl font-semibold text-[#FFF6E5] leading-tight">
                      {firstWord(sign.name[language])}
                    </h3>
                    <button className="mt-3 bg-gradient-to-r from-[#FFD46B] to-[#F5DDA8] text-[#2E1A1A] font-semibold py-1 px-4 rounded-full text-xs hover:scale-105 transition-all">
                      {language === "en" ? "Show More" : "अधिक जानें"}
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFF6E5] via-[#F9E8C9] to-[#EBCB7A] rounded-2xl border border-[#FFD46B]/40 shadow-lg p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-[#C03F35]/40">
                  <div>
                    <div className="text-4xl md:text-5xl mb-2 text-[#C03F35]">
                      {sign.symbol}
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#8C2626] mb-1">
                      {sign.name[language]}
                    </h3>
                    <p className="text-sm">
                      <strong>{language === "en" ? "Element:" : "तत्व:"}</strong>{" "}
                      {sign.element[language]}
                    </p>
                    <p className="text-sm">
                      <strong>{language === "en" ? "Planet:" : "ग्रह:"}</strong>{" "}
                      {sign.planet[language]}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-[#4A2A2A] italic">
                      “{sign.traits[language]}”
                    </p>
                    {/* <p className="mt-3 text-xs text-[#6B1919]/70">
                      {generalHoroscope[language]}
                    </p> */}
                  </div>
                  <button className="mt-3 bg-gradient-to-r from-[#C03F35] to-[#FFD46B] text-[#2E1A1A] font-semibold py-1 px-5 rounded-full text-xs hover:scale-105 transition-all">
                    {language === "en" ? "Back" : "वापस"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Zodiac;
