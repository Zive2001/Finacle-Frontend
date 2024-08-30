import React from 'react';
import image16 from '../assets/image16.svg'; 
import bodyline3 from '../assets/bodyline3.png'; 
import maslogo from '../assets/maslogo.png'; 


const Footer = () => {
  return (
    <footer className="p-6 bg-gray-800 text-white text-center">
      {/* Use the imported SVG image */}
      <img src={maslogo} alt="MAS Icon" className="h-11 w-auto mx-auto align-baseline absolute  left-10" />
      <img src={bodyline3} alt="MAS Icon" className="h-8 w-auto mx-auto align-baseline absolute  right-10" />
      
      <p className="mt-2">© 2024 MAS Bodyline. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
