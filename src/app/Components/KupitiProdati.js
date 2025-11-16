'use client';

import { motion } from 'framer-motion';
import {
  FiCreditCard,
  FiRefreshCw,
  FiTruck,
  FiAward,
  FiShield
} from 'react-icons/fi';
import {
  IoMdCheckmarkCircle
} from 'react-icons/io';
import {
  BsLightningChargeFill,
  BsShieldCheck,
  BsBoxSeam,
  BsCashStack
} from 'react-icons/bs';
import styles from './KupitiProdati.module.css';

export default function KupitiProdati() {
  const whyBuyReasons = [
    {
      icon: <FiCreditCard />,
      title: "Plaćanje na rate",
      description: "Možeš da platiš na 3 do 12 rata ukoliko si Banca Intesa korisnik",
      color: "#667eea"
    },
    {
      icon: <BsShieldCheck />,
      title: "Garancija 12 meseci",
      description: "Garantujemo 12 meseci na ceo uređaj sa punom podrškom",
      color: "#f093fb"
    },
    {
      icon: <FiRefreshCw />,
      title: "Povrat novca u 14 dana",
      description: "Vraćamo novac u 14 dana ukoliko se predomisliš, bez pitanja",
      color: "#4facfe"
    },
    {
      icon: <IoMdCheckmarkCircle />,
      title: "Proveren kvalitet",
      description: "Detaljno provereni telefoni kroz 90+ profesionalnih testova",
      color: "#43e97b"
    },
    {
      icon: <FiTruck />,
      title: "Besplatna dostava",
      description: "Danas-za-sutra, besplatna i osigurana dostava širom Srbije",
      color: "#fa709a"
    },
    {
      icon: <FiAward />,
      title: "Originalna oprema",
      description: "Svi telefoni dolaze sa originalnim punjačem i pakovanjem",
      color: "#feca57"
    }
  ];

  const whySellReasons = [
    {
      icon: <BsLightningChargeFill />,
      title: "Saznaj odmah cenu",
      description: "Trenutna procena vrednosti tvog telefona bez čekanja",
      color: "#f093fb"
    },
    {
      icon: <BsCashStack />,
      title: "Isplata isti dan",
      description: "Isplaćujemo novac isti dan nakon provere uređaja",
      color: "#43e97b"
    },
    {
      icon: <FiShield />,
      title: "Garantovana isplata",
      description: "Garantovana isplata dogovorene cene ako uređaj odgovara opisu*",
      color: "#667eea"
    },
    {
      icon: <BsBoxSeam />,
      title: "Besplatno slanje",
      description: "Brzo, besplatno, osigurano slanje ili dođi kod nas",
      color: "#4facfe"
    }
  ];

  return (
    <>
      {/* Why Buy Section */}
      <section className={styles.whyBuy}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Zašto kupiti kod nas?</h2>
          <p className={styles.sectionSubtitle}>Pružamo najkvalitetniju uslugu na tržištu</p>
        </motion.div>

        <div className={styles.reasonsGrid}>
          {whyBuyReasons.map((reason, index) => (
            <motion.div
              key={index}
              className={styles.reasonCard}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
            >
              <motion.div
                className={styles.reasonIcon}
                style={{ color: reason.color }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
              <motion.div
                className={styles.reasonGlow}
                style={{ background: reason.color }}
                whileHover={{ scale: 1.5, opacity: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Sell Section */}
      <section className={styles.whySell} id="prodaj">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Zašto prodati sa tehnoKrug-om?</h2>
          <p className={styles.sectionSubtitle}>Brz, pouzdan i transparentan otkup telefona</p>
        </motion.div>

        <div className={styles.reasonsGrid}>
          {whySellReasons.map((reason, index) => (
            <motion.div
              key={index}
              className={styles.reasonCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <motion.div
                className={styles.reasonIcon}
                style={{ color: reason.color }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
              <motion.div
                className={styles.reasonGlow}
                style={{ background: reason.color }}
                whileHover={{ scale: 1.5, opacity: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.disclaimer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          *Ukoliko uređaj odgovara opisu, ili ti vraćamo uređaj
        </motion.p>
      </section>
    </>
  );
}
