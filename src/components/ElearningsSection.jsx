import React from 'react';
import ServiceCard from './ServiceCard';
import vendoricon from '../assets/vendoricon.svg';
import sopicon from '../assets/sopicon.svg';
import trainingicon from '../assets/trainingicon.svg';
import learningicon from '../assets/learningicon.svg';


const ElearningsSection = () => (
  
    <section className="p-6">
    <h2 className="text-2xl font-bold mb-4">E Learnings</h2>
    <div className="grid grid-cols-4 gap-4">
      {/* Repeat ServiceCard component for each service */}
      <ServiceCard title="Vendor Creation" description=" Ensuring swift processing and efficient communication for all financial correspondences." image={vendoricon} />
      <ServiceCard title="Finance Training" description="Navigate seamlessly through our Foreign Travel Desk, facilitating hassle-free applications" image={trainingicon} />
      <ServiceCard title="Learning Materials" description="Description of service 3" image={learningicon} />
      <ServiceCard title="Finance SOP" description="Description of service 3" image={sopicon} />
      
    </div>
  </section>
);

export default ElearningsSection;

