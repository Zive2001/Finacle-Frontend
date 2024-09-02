// src/components/ButtonImageGallery.jsx
import React from 'react';
import { Link } from 'react-scroll';
import ourservice from '../assets/ourservice.svg';
import elearning from '../assets/elearning.svg';
import contactus from '../assets/contactus.svg';

const ButtonImageGallery = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-100"
  >
    <Link
      to="services"
      smooth={true}
      duration={1000}
      className="cursor-pointer transform transition duration-500 hover:scale-105"
    >
      <div className="flex flex-col items-center">
        <img
          src={ourservice}
          alt="Our Services"
          className="w-full h-72 object-cover rounded-lg shadow-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">Our Services</h2>
      </div>
    </Link>

    <Link
      to="elearnings"
      smooth={true}
      duration={1000}
      className="cursor-pointer transform transition duration-500 hover:scale-105"
    >
      <div className="flex flex-col items-center">
        <img
          src={elearning}
          alt="E-Learnings"
          className="w-full h-72 object-cover rounded-lg shadow-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">E-Learnings</h2>
      </div>
    </Link>

    <Link
      to="contact"
      smooth={true}
      duration={1000}
      className="cursor-pointer transform transition duration-500 hover:scale-105"
    >
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
));

export default ButtonImageGallery;
