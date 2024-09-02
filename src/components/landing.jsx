import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 
import logofinacle2 from '../assets/logofinacle2.svg';
import ButtonImageGallery from '../components/ButtonImageGallery';
import bodyline2 from '../assets/bodyline2.png';
import maslogo2 from '../assets/maslogo2.png';
import ImageGrid from '../components/ImageGrid';

const LandingPage = ({ darkMode, toggleDarkMode }) => {
  const targetRef = useRef(null);
  const controls = useAnimation(); 
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      });
    } else {
      controls.start({
        y: -200,
        opacity: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [inView, controls]);

  const handleScroll = () => {
    const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds
    let start = null;
  
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1); // Ensure percent does not exceed 1
      window.scrollTo(0, startPosition + distance * percent);
  
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  };
  

  const letterAnimation = {
    initial: { color: '#000' },
    animate: (i) => ({
      color: ['#000', '#c1121f', '#000'], 
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 10,
        ease: 'easeInOut',
      },
    }),
  };

  const dotsAnimation = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: [0, -5, 0], 
      transition: {
        delay: 2.8, 
        duration: 3,
        repeat: Infinity,
        repeatDelay: 7,
        ease: 'easeInOut',
      },
    },
  };

  const welcomeText = "Welcome to The Finacle Website";

  return (
    <motion.div
      className={`font-sans min-h-screen relative transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <motion.img
        src={bodyline2}
        alt="Bodyline Logo"
        className="absolute top-4 right-4 h-12 w-auto"
        initial={{ scale:0.8, opacity: 0 }}
        animate={{ scale:1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        src={maslogo2}
        alt="MAS Logo"
        className="absolute top-4 left-4 h-12 w-auto"
        initial={{ scale:0.8, opacity: 0 }}
        animate={{ scale:1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      /> */}

      <motion.section
        className="flex flex-col items-center justify-center min-h-screen"
        ref={ref} 
        animate={controls} 
        initial={{ y: 0, opacity: 1 }} 
      >
        <motion.img
          src={logofinacle2}
          alt="Logo"
          className="mb-8 h-30 w-auto cursor-pointer"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={toggleDarkMode}  // Updated to use the prop
        />
        <motion.h1
          className="text-5xl font-bold mb-4 flex items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {welcomeText.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="initial"
              animate="animate"
              variants={letterAnimation}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char} 
            </motion.span>
          ))}
          <motion.span
            className="ml-2 flex"
            initial="initial"
            animate="animate"
            variants={dotsAnimation}
          >
            <span className="inline-block">.</span>
            <span className="inline-block">.</span>
            <span className="inline-block">.</span>
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-lg mb-8 font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Finance Inner Circle
        </motion.p>
        <motion.button
          onClick={handleScroll}
          className="bg-[#023047] hover:bg-[#285571] text-white font-bold py-3 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Get Started
        </motion.button>
        </motion.section>

<ImageGrid />
<ButtonImageGallery ref={targetRef} className="mb-10"/>
    </motion.div>
  );
};

export default LandingPage;
