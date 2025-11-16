'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoMdPhonePortrait } from 'react-icons/io';
import { FiThumbsUp, FiTruck } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';
import styles from './Stats.module.css';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { number: 15000, suffix: '+', label: 'Prodatih telefona', icon: <IoMdPhonePortrait /> },
    { number: 98, suffix: '%', label: 'Zadovoljnih klijenata', icon: <FiThumbsUp /> },
    { number: 12, suffix: 'mес', label: 'Garancija', icon: <BsShieldCheck /> },
    { number: 24, suffix: 'h', label: 'Dostava', icon: <FiTruck /> },
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <motion.div
              className={styles.statIcon}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {stat.icon}
            </motion.div>
            <div className={styles.statNumber}>
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
