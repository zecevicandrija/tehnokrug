'use client';

import { motion, useScroll } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import { IoMdPhonePortrait } from 'react-icons/io';
import styles from './Footer.module.css';

export default function Footer() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <footer className={styles.footer} id="kontakt">
        <div className={styles.footerContent}>
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.footerLogo}>
              <IoMdPhonePortrait className={styles.footerLogoIcon} />
              <span>tehno<span className={styles.gradientText}>Krug</span></span>
            </h3>
            <p className={styles.footerDescription}>
              Tvoj pouzdan partner za kupovinu i prodaju telefona u Srbiji.
              Kvalitet, sigurnost i transparentnost su naši prioriteti.
            </p>
            <div className={styles.socialLinks}>
              <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                Facebook
              </motion.a>
              <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                Twitter
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Kontakt</h4>
            <p>📧 info@tehnokrug.rs</p>
            <p>📞 +381 11 123 4567</p>
            <p>📱 +381 64 123 4567</p>
            <p>📍 Knez Mihailova 15, Beograd</p>
          </motion.div>

          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Radno vreme</h4>
            <p><FiClock /> Ponedeljak - Petak</p>
            <p>09:00 - 20:00</p>
            <p><FiClock /> Subota</p>
            <p>10:00 - 18:00</p>
            <p><FiClock /> Nedelja: Zatvoreno</p>
          </motion.div>

          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Brzi linkovi</h4>
            <a href="#kupi" className={styles.footerLink}>Kupi telefon</a>
            <a href="#prodaj" className={styles.footerLink}>Prodaj telefon</a>
            <a href="#kako-radi" className={styles.footerLink}>Kako radi?</a>
            <a href="#kontakt" className={styles.footerLink}>Kontakt</a>
          </motion.div>
        </div>

        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; 2024 tehnoKrug. Sva prava zadržana.</p>
          <div className={styles.footerBottomLinks}>
            <a href="#">Politika privatnosti</a>
            <a href="#">Uslovi korišćenja</a>
            <a href="#">Kolačići</a>
          </div>
        </motion.div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        className={styles.scrollToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0, scale: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </>
  );
}
