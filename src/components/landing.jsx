import React, { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; // Import Link for smooth scrolling
import logofinacle2 from '../assets/logofinacle2.svg';
import ourservice from '../assets/ourservice.svg';
import elearning from '../assets/elearning.svg';
import contactus from '../assets/contactus.svg';
import bodyline2 from '../assets/bodyline2.png';

const LandingPage = () => {
  // Create a ref for the target section
  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <img
        src={bodyline2}
        alt="Logo"
        className="absolute top-4 right-4 h-12 w-auto" // Adjust size and position
      />


      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <img
          src={logofinacle2}
          alt="Logo"
          className="mb-8 h-30 w-auto"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to The Finacle Website</h1>
        <p className="text-lg text-gray-600 mb-8 font-semibold">
          Finance Inner Circle
        </p>
        <button
          onClick={handleScroll}
          className="bg-[#023047] hover:bg-[#253a47] text-white font-bold py-3 px-6 rounded-full"
        >
          Get Started
        </button>
      </section>

      {/* Image Gallery with Smooth Scroll Links */}
      <section
        ref={targetRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-100"
      >
        <Link to="services" smooth={true} duration={1000} className="cursor-pointer transform transition duration-500 hover:scale-105">
          <div className="flex flex-col items-center">
            <img
              src={ourservice}
              alt="Our Services"
              className="w-full h-72 object-cover rounded-lg shadow-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">Our Services</h2>
          </div>
        </Link>

        <Link to="elearnings" smooth={true} duration={1000} className="cursor-pointer transform transition duration-500 hover:scale-105">
          <div className="flex flex-col items-center">
            <img
              src={elearning}
              alt="E-Learnings"
              className="w-full h-72 object-cover rounded-lg shadow-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">E-Learnings</h2>
          </div>
        </Link>

        <Link to="contact" smooth={true} duration={1000} className="cursor-pointer transform transition duration-500 hover:scale-105">
          <div className="flex flex-col items-center">
            <img
              src={contactus}
              alt="Contact Us"
              className="w-full h-72 object-cover rounded-lg shadow-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
