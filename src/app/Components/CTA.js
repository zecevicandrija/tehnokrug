'use client';

import { motion } from 'framer-motion';
import { FiShoppingCart, FiDollarSign } from 'react-icons/fi';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.ctaContent}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={styles.ctaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Spreman da počneš?
        </motion.h2>
        <motion.p
          className={styles.ctaText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Pridruži se hiljadama zadovoljnih korisnika i pronađi svoj savršeni telefon danas!
        </motion.p>
        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiShoppingCart />
            Pregledaj ponudu
          </motion.button>
          <motion.button
            className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDollarSign />
            Proceni telefon
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
