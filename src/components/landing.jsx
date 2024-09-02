import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation for scroll-based animation
import { useInView } from 'react-intersection-observer'; // Import useInView for scroll detection
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logofinacle2 from '../assets/logofinacle2.svg';
import ourservice from '../assets/ourservice.svg';
import elearning from '../assets/elearning.svg';
import contactus from '../assets/contactus.svg';
import bodyline2 from '../assets/bodyline2.png';
import maslogo2 from '../assets/maslogo2.png';
import caroselitem1 from '../assets/caroselitem1.svg';

const LandingPage = () => {
  const targetRef = useRef(null);
  const controls = useAnimation(); // Initialize animation controls
  const [ref, inView] = useInView({ threshold: 0.1 }); // Observe the hero section

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
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
  };

  return (
    <motion.div
      className="font-sans bg-gray-50 min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header logos with motion */}
      <motion.img
        src={bodyline2}
        alt="Bodyline Logo"
        className="absolute top-4 right-4 h-12 w-auto"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        src={maslogo2}
        alt="MAS Logo"
        className="absolute top-4 left-4 h-12 w-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Hero Section with scroll-triggered animation */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen bg-white"
        ref={ref} // Attach the ref for scroll detection
        animate={controls} // Use controls for animation
        initial={{ y: 0, opacity: 1 }} // Initial state before animation
      >
        <motion.img
          src={logofinacle2}
          alt="Logo"
          className="mb-8 h-30 w-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.h1
          className="text-5xl font-bold text-gray-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Welcome to The Finacle Website
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8 font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Finance Inner Circle
        </motion.p>
        <motion.button
          onClick={handleScroll}
          className="bg-[#023047] hover:bg-[#253a47] text-white font-bold py-3 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Gallery Slideshow Section */}
      <motion.section
        className="p-10 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src={caroselitem1}
                alt="Slide 1"
                className="w-100 h-100 rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="https://via.placeholder.com/800x400?text=Slide+2"
                alt="Slide 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="https://via.placeholder.com/800x400?text=Slide+3"
                alt="Slide 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </Slider>
        </div>
      </motion.section>

      {/* Button Image Gallery with Smooth Scroll Links */}
      <section
        ref={targetRef}
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
    </motion.div>
  );
};

export default LandingPage;
