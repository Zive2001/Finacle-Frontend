import React from 'react';
import ServiceCard from './ServiceCard';
import lettericon from '../assets/lettericon.svg'
import foreignicon2 from '../assets/foreignicon2.svg'
import capexicon from '../assets/capexicon.svg'
import cashadicon from '../assets/cashadicon.svg'
import devicon from '../assets/devicon.svg'
import deathdonicon from '../assets/deathdonicon.svg'
import infoicon from '../assets/infoicon.svg'

const ServicesSection = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4">Our Services</h2>
    <div className="grid grid-cols-4 gap-4">
      {/* Repeat ServiceCard component for each service */}
      <ServiceCard title="Letter Requests" description=" Ensuring swift processing and efficient communication for all financial correspondences." image={lettericon} />
      <ServiceCard title="Foreign Travel Desk" description="Navigate seamlessly through our Foreign Travel Desk, facilitating hassle-free applications" image={foreignicon2}/>
      <ServiceCard title="CAPEX Requests" description="Description of service 3" image={capexicon} />
      <ServiceCard title="Cash Advance Requests" description="Description of service 3" image={cashadicon} />
      <ServiceCard title="Development Requests" description="Description of service 3" image={devicon} />
      <ServiceCard title="Death Donations" description="Description of service 3" image={deathdonicon} />
      <ServiceCard title="Additional Information" description="Description of service 3" image={infoicon} />
    </div>
  </section>
);

export default ServicesSection;
