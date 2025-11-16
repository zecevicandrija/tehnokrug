'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FiShoppingCart, FiDollarSign, FiTruck } from 'react-icons/fi';
import { IoMdPhonePortrait } from 'react-icons/io';
import { BsShieldCheck } from 'react-icons/bs';
import styles from './Hero.module.css';

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);

  return (
    <section className={styles.hero} id="kupi">
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className={styles.heroSubheading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Dobrodošli u budućnost kupovine telefona
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Najbolji <span className={styles.gradientText}>polovni telefoni</span> sa garancijom
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Proveren kvalitet, 12 meseci garancije, besplatna dostava i povrat novca u 14 dana.
            Tvoj pouzdan partner za kupovinu i prodaju telefona u Srbiji.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiShoppingCart />
              Pretraži telefone
            </motion.button>

            <motion.button
              className={`${styles.btn} ${styles.btnSecondary}`}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(240, 147, 251, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDollarSign />
              Prodaj telefon
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className={styles.phoneShowcase}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={styles.phone3d}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneContent}>
                  <motion.div
                    className={styles.phoneLogo}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <IoMdPhonePortrait />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className={styles.floatingBadge}
            style={{ top: '10%', right: '10%' }}
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BsShieldCheck />
            <span>12 meseci garancije</span>
          </motion.div>

          <motion.div
            className={styles.floatingBadge}
            style={{ bottom: '20%', left: '5%' }}
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <FiTruck />
            <span>Besplatna dostava</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className={styles.heroBackground}>
        <motion.div
          className={styles.floatingShape}
          style={{ y: parallaxY }}
        />
        <motion.div
          className={styles.floatingShape}
          style={{ y: parallaxY2 }}
        />
        <motion.div
          className={styles.floatingShape}
          style={{ y: parallaxY3 }}
        />
      </div>
    </section>
  );
}
