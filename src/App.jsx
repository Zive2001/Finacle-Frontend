import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ElearningsSection from './components/ElearningsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import LandingPage from './components/landing'; // Ensure the import path is correct
import { Element } from 'react-scroll'; // Import Element for smooth scrolling

const App = () => {
  // State to track whether the header should be visible
  const [showHeader, setShowHeader] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Effect to handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled 100 pixels down (adjust as needed)
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-500`}>
      {/* Conditionally render Header based on scroll position */}
      {showHeader && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Header darkMode={darkMode} /> {/* Pass darkMode prop here */}
        </div>
      )}

      <main className="container mx-auto">
        {/* Landing Page Section with darkMode and toggleDarkMode props */}
        <LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Sections for smooth scrolling */}
        <Element name="services" className="mt-10">
          <ServicesSection />
        </Element>
        <Element name="elearnings" className="mt-10">
          <ElearningsSection />
        </Element>
        <Element name="contact" className="mt-10">
          <ContactUsSection />
        </Element>
      </main>

      <Footer />
    </div>
  );
};

export default App;
