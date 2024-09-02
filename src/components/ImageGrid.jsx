// src/components/ImageGrid.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import caroselitem1 from '../assets/caroselitem1.svg';
import caroselitem2 from '../assets/caroselitem2.jpg';
import gridimage1 from '../assets/gridimage1.jpeg';
import gridimage2 from '../assets/gridimage2.png';
import gridimage3 from '../assets/gridimage3.jpg';

const ImageGrid = () => {
  const [gridRef, inView] = useInView({ threshold: 0.1 });
  const gridControls = useAnimation();

  useEffect(() => {
    if (inView) {
      gridControls.start({ opacity: 1, y: 0 });
    } else {
      gridControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, gridControls]);

  return (
    <section className="p-10 flex justify-center">
      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: 50 }}
        animate={gridControls}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="grid grid-cols-2 grid-rows-2 gap-4 max-w-4xl w-full"
      >
        {/* Grid Item Components */}
        <GridItem imageSrc={gridimage1} altText="Grid Item 1" text="MAS Announced as Official Clothing Partner for Sri Lanka Athletics until the 2028 Olympics"  />
        <GridItem imageSrc={caroselitem2} altText="Grid Item 2" text="MAS Bodyline 30th Anniversary" />
        <GridItem imageSrc={gridimage3} altText="Grid Item 3" text="Sri Lanka Athletics Sponsorship Programme" />
        <GridItem imageSrc={gridimage2} altText="Grid Item 4" text="
Inspiring Olympic Spirit: MAS signs on as official clothing partner for Paris Olympic Games 2024 & launches MAS Athlete Training Academy" />
      </motion.div>
    </section>
  );
};

// Reusable GridItem component
const GridItem = ({ imageSrc, altText, text }) => (
  <motion.div
    className="relative w-full aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg group"
  >
    {/* Image */}
    <img
      src={imageSrc}
      alt={altText}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    {/* Overlay with Text */}
    <div
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <h2 className="text-white  font-semibold text-sm text-center mr-10 ml-10">
        {text}
      </h2>
    </div>
  </motion.div>
);

export default ImageGrid;
