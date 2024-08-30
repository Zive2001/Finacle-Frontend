import React from 'react';

const ServiceCard = ({ title, description, image, link }) => (
  <a
    href={link} // Use the 'link' prop to specify the URL
    className="group block p-4 border rounded-lg shadow-lg flex flex-col items-center transition-colors duration-300 ease-in-out hover:bg-gray-100 cursor-pointer"
    target="_blank" // Open link in a new tab
    rel="noopener noreferrer" // Security best practice for external links
  >
    <img src={image} alt={title} className="h-20 w-20 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-[#023047]">{title}</h3>
    <p className="text-center text-[10px] font-semibold font-sans text-gray-700">{description}</p>
  </a>
);

export default ServiceCard;
