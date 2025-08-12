import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';  // adjust path if needed

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default language English

  // t function to get translated string by key
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use translations easily
export const useTranslation = () => useContext(LanguageContext);
