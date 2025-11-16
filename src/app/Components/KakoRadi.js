'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShoppingCart, FiPackage } from 'react-icons/fi';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import styles from './KakoRadi.module.css';

export default function KakoRadi() {
  const howItWorksRef = useRef(null);
  const [howItWorksInView, setHowItWorksInView] = useState(0);

  const howItWorks = [
    {
      step: 1,
      icon: <HiDevicePhoneMobile />,
      title: "Izaberi telefon",
      description: "Pretraži našu ponudu i pronađi savršen telefon za sebe",
      color: "#667eea"
    },
    {
      step: 2,
      icon: <FiCheckCircle />,
      title: "Proveri detalje",
      description: "Pogledaj sve specifikacije, slike i stanje uređaja",
      color: "#f093fb"
    },
    {
      step: 3,
      icon: <FiShoppingCart />,
      title: "Naruči online",
      description: "Jednostavna kupovina u par klikova ili pozovi nas",
      color: "#43e97b"
    },
    {
      step: 4,
      icon: <FiPackage />,
      title: "Primi dostavu",
      description: "Besplatna dostava danas-za-sutra direktno na adresu",
      color: "#4facfe"
    }
  ];

  // Track scroll progress through How It Works section
  useEffect(() => {
    const handleScroll = () => {
      if (!howItWorksRef.current) return;

      const element = howItWorksRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;

      // Calculate progress (0 to 1) as user scrolls through the section
      const start = rect.top;
      const end = rect.bottom - windowHeight;

      let progress = 0;
      if (start <= 0 && end >= 0) {
        // Element is in view
        progress = Math.abs(start) / (elementHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));
      } else if (start > 0) {
        progress = 0;
      } else {
        progress = 1;
      }

      setHowItWorksInView(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={howItWorksRef} className={styles.howItWorksWrapper} id="kako-radi">
      <div className={styles.howItWorksStickyContainer}>
        {/* Header */}
        <motion.div
          className={styles.howItWorksHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Kako radi?</h2>
          <p className={styles.sectionSubtitle}>Jednostavan proces u 4 koraka</p>
        </motion.div>

        {/* Sticky Content */}
        <div className={styles.howItWorksStickyContent}>
          {/* Progress Line */}
          <div className={styles.progressLineContainer}>
            <div
              className={styles.progressLine}
              style={{
                transform: `scaleY(${howItWorksInView})`,
                transformOrigin: 'top'
              }}
            />
          </div>

          {/* Steps Cards */}
          <div className={styles.stepsCardsContainer}>
            {howItWorks.map((step, index) => {
              // Jednostavnija logika za animaciju
              // Svaki step dobija 1/4 scroll prostora (0.25)
              const totalSteps = howItWorks.length;
              const stepDuration = 1 / totalSteps; // 0.25 za 4 koraka
              const stepStart = index * stepDuration; // 0, 0.25, 0.5, 0.75
              const stepEnd = (index + 1) * stepDuration; // 0.25, 0.5, 0.75, 1.0
              const fadeMargin = 0.1; // 10% za fade in/out

              let opacity = 0;
              let y = 50;
              let scale = 0.9;

              // Fade in
              if (howItWorksInView >= stepStart && howItWorksInView < stepStart + fadeMargin) {
                const fadeProgress = (howItWorksInView - stepStart) / fadeMargin;
                opacity = fadeProgress;
                y = 50 - (50 * fadeProgress);
                scale = 0.9 + (0.1 * fadeProgress);
              }
              // Fully visible
              else if (howItWorksInView >= stepStart + fadeMargin && howItWorksInView <= stepEnd - fadeMargin) {
                opacity = 1;
                y = 0;
                scale = 1;
              }
              // Fade out
              else if (howItWorksInView > stepEnd - fadeMargin && howItWorksInView <= stepEnd) {
                const fadeProgress = (howItWorksInView - (stepEnd - fadeMargin)) / fadeMargin;
                opacity = 1 - fadeProgress;
                y = -50 * fadeProgress;
                scale = 1 - (0.1 * fadeProgress);
              }
              // Before step starts
              else if (howItWorksInView < stepStart) {
                opacity = 0;
                y = 50;
                scale = 0.9;
              }
              // After step ends
              else if (howItWorksInView > stepEnd) {
                opacity = 0;
                y = -50;
                scale = 0.9;
              }

              return (
                <div
                  key={index}
                  className={styles.stepCardApple}
                  style={{
                    opacity,
                    transform: `translate(-50%, calc(-50% + ${y}px)) scale(${scale})`,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    maxWidth: '600px',
                    willChange: 'transform, opacity',
                    transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
                  }}
                >
                  <div className={styles.stepCardInner}>
                    {/* Step Number Badge */}
                    <div
                      className={styles.stepBadge}
                      style={{ background: step.color }}
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div
                      className={styles.stepIconLarge}
                      style={{ color: step.color }}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className={styles.stepTitleLarge}>{step.title}</h3>
                    <p className={styles.stepDescriptionLarge}>{step.description}</p>

                    {/* Decorative Glow */}
                    <div
                      className={styles.stepGlow}
                      style={{ background: step.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
