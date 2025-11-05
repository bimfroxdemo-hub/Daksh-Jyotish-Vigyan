import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const LanguageContext = createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // check saved language from localStorage
    return localStorage.getItem("language") || "en";
  });

  const toggleLanguage = () => {
    const newLang = language === "en" ? "hi" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);
