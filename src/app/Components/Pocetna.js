'use client';

import { useState, useEffect } from 'react';
import styles from './Pocetna.module.css';

export default function Pocetna() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Marko Petrović",
      rating: 5,
      comment: "Odličan servis! Telefon stigao za 24h, u perfektnom stanju. Preporučujem!",
      image: "👨‍💼"
    },
    {
      name: "Ana Jovanović",
      rating: 5,
      comment: "Prodala sam telefon brzo i jednostavno. Isplata odmah nakon provere. Top!",
      image: "👩‍💼"
    },
    {
      name: "Stefan Nikolić",
      rating: 5,
      comment: "Najbolji odnos cene i kvaliteta. Garancija od 12 meseci je odlična.",
      image: "👨‍🎓"
    },
    {
      name: "Jelena Đorđević",
      rating: 5,
      comment: "Profesionalna usluga, brza dostava i odlična komunikacija!",
      image: "👩‍💻"
    }
  ];

  const whyBuyReasons = [
    {
      icon: "💳",
      title: "Plaćanje na rate",
      description: "Možeš da platiš na 3 do 12 rata ukoliko si Banca Intesa korisnik"
    },
    {
      icon: "🛡️",
      title: "Garancija 12 meseci",
      description: "Garantujemo 12 meseci na ceo uređaj"
    },
    {
      icon: "↩️",
      title: "Povrat novca u 14 dana",
      description: "Vraćamo novac u 14 dana ukoliko se predomisliš"
    },
    {
      icon: "✓",
      title: "Proveren kvalitet",
      description: "Detaljno provereni telefoni kroz 90 testova"
    },
    {
      icon: "🚚",
      title: "Besplatna dostava",
      description: "Danas-za-sutra, besplatna i osigurana dostava"
    }
  ];

  const whySellReasons = [
    {
      icon: "💰",
      title: "Saznaj odmah cenu",
      description: "Saznaj odmah cenu tvog uređaja bez čekanja"
    },
    {
      icon: "⚡",
      title: "Isplata isti dan",
      description: "Isplaćujemo novac isti dan nakon provere"
    },
    {
      icon: "🤝",
      title: "Garantovana isplata",
      description: "Garantovana isplata dogovorene cene*"
    },
    {
      icon: "📦",
      title: "Besplatno slanje",
      description: "Brzo, besplatno, osigurano slanje ili ti dođi do nas"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>tehnoKrug</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Tvoj pouzdan partner za kupovinu i prodaju telefona
          </p>

          <div className={styles.heroButtons}>
            <div className={styles.heroCard}>
              <div className={styles.cardIcon}>📱</div>
              <h3>Kupi telefon</h3>
              <p>Pronađi savršen telefon po najboljoj ceni</p>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                Pretraži telefone
              </button>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.cardIcon}>💵</div>
              <h3>Prodaj telefon</h3>
              <p>Prodaj svoj telefon brzo i sigurno</p>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>
                Proceni cenu
              </button>
            </div>
          </div>
        </div>

        <div className={styles.heroBackground}>
          <div className={styles.floatingShape}></div>
          <div className={styles.floatingShape}></div>
          <div className={styles.floatingShape}></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Šta kažu naši klijenti</h2>
          <p className={styles.sectionSubtitle}>Pridružite se hiljadama zadovoljnih korisnika</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={styles.testimonialCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>{testimonial.image}</div>
                <div>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.testimonialComment}>{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Buy Section */}
      <section className={styles.whyBuy}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Zašto kupiti kod nas?</h2>
          <p className={styles.sectionSubtitle}>Pružamo najkvalitetniju uslugu na tržištu</p>
        </div>

        <div className={styles.reasonsGrid}>
          {whyBuyReasons.map((reason, index) => (
            <div
              key={index}
              className={styles.reasonCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Sell Section */}
      <section className={styles.whySell}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Zašto prodati sa tehnoKrug-om?</h2>
          <p className={styles.sectionSubtitle}>Brz, pouzdan i transparentan otkup telefona</p>
        </div>

        <div className={styles.reasonsGrid}>
          {whySellReasons.map((reason, index) => (
            <div
              key={index}
              className={styles.reasonCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          *Ukoliko uređaj odgovara opisu, ili ti vraćamo uređaj
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>
              <span className={styles.gradientText}>tehnoKrug</span>
            </h3>
            <p className={styles.footerDescription}>
              Tvoj pouzdan partner za kupovinu i prodaju telefona u Srbiji.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Kontakt</h4>
            <p>📧 info@tehnokrug.rs</p>
            <p>📞 +381 11 123 4567</p>
            <p>📍 Beograd, Srbija</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Radno vreme</h4>
            <p>Ponedeljak - Petak: 09:00 - 20:00</p>
            <p>Subota: 10:00 - 18:00</p>
            <p>Nedelja: Zatvoreno</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Pratite nas</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 tehnoKrug. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
}
