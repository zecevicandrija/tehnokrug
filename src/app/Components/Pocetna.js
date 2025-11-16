'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdPhonePortrait } from 'react-icons/io';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import KakoRadi from './KakoRadi';
import Testimonijali from './Testimonijali';
import KupitiProdati from './KupitiProdati';
import CTA from './CTA';
import Footer from './Footer';
import styles from './Pocetna.module.css';

// Loading Component
function Loader() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.loaderContent}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className={styles.loaderIcon}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <IoMdPhonePortrait />
        </motion.div>
        <motion.h2
          className={styles.loaderText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          tehnoKrug
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}

export default function Pocetna() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Mouse follower effect */}
      <motion.div
        className={styles.mouseFollower}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
      />

      {/* All sections as components */}
      <Hero />
      <Stats />
      <KakoRadi />
      <Testimonijali />
      <KupitiProdati />
      <CTA />
      <Footer />
    </div>
  );
}
