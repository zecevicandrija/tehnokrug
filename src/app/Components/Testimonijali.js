'use client';

import { motion } from 'framer-motion';
import { IoMdStar } from 'react-icons/io';
import styles from './Testimonijali.module.css';

export default function Testimonijali() {
  const testimonials = [
    {
      name: "Marko Petrović",
      role: "Klijent",
      rating: 5,
      comment: "Odličan servis! Telefon stigao za 24h, u perfektnom stanju. Garancija od 12 meseci je ono što me je ubedilo. Preporučujem!",
      avatar: "https://i.pravatar.cc/150?img=12",
      date: "Pre 2 dana"
    },
    {
      name: "Ana Jovanović",
      role: "Klijent",
      rating: 5,
      comment: "Prodala sam telefon brzo i jednostavno. Isplata odmah nakon provere. Profesionalna ekipa i fer cene. Top iskustvo!",
      avatar: "https://i.pravatar.cc/150?img=5",
      date: "Pre nedelju dana"
    },
    {
      name: "Stefan Nikolić",
      role: "Klijent",
      rating: 5,
      comment: "Najbolji odnos cene i kvaliteta. Telefon prošao sve testove, radi besprekorno. Garancija od 12 meseci daje osećaj sigurnosti.",
      avatar: "https://i.pravatar.cc/150?img=33",
      date: "Pre 3 dana"
    },
    {
      name: "Jelena Đorđević",
      role: "Klijent",
      rating: 5,
      comment: "Profesionalna usluga, brza dostava i odlična komunikacija! Kupila sam iPhone 13 i prezadovoljna sam. Sve pohvale!",
      avatar: "https://i.pravatar.cc/150?img=9",
      date: "Pre 5 dana"
    },
    {
      name: "Nikola Jovanović",
      role: "Klijent",
      rating: 5,
      comment: "Otkup telefona je bio neverovatno brz. Procenili cenu odmah, poslao telefon i dobio pare isti dan. Vrhunski!",
      avatar: "https://i.pravatar.cc/150?img=51",
      date: "Pre 4 dana"
    },
    {
      name: "Milica Stanković",
      role: "Klijent",
      rating: 5,
      comment: "Kupovina na rate uz Banca Intesa je bila idealno rešenje za mene. Telefon stigao brzo, sve uredno upakovano!",
      avatar: "https://i.pravatar.cc/150?img=23",
      date: "Pre nedelju dana"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Šta kažu naši klijenti</h2>
        <p className={styles.sectionSubtitle}>Pridružite se hiljadama zadovoljnih korisnika</p>
      </motion.div>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className={styles.testimonialHeader}>
              <motion.img
                src={testimonial.avatar}
                alt={testimonial.name}
                className={styles.testimonialAvatar}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <div className={styles.testimonialInfo}>
                <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                <p className={styles.testimonialRole}>{testimonial.role}</p>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={styles.star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      <IoMdStar />
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.testimonialComment}>"{testimonial.comment}"</p>
            <div className={styles.testimonialDate}>{testimonial.date}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
