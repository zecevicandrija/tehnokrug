'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShoppingCart, FiPackage } from 'react-icons/fi';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import styles from './KakoRadi.module.css';

export default function KakoRadi() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Kada element uđe u viewport
      if (top <= 0 && top + height >= windowHeight) {
        // Izračunaj progress od 0 do 1
        const scrolled = Math.abs(top);
        const totalScroll = height - windowHeight;
        const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);

        setScrollProgress(progress);

        // Odredi koji step je trenutno aktivan
        const stepIndex = Math.floor(progress * howItWorks.length);
        setCurrentStep(Math.min(stepIndex, howItWorks.length - 1));
      } else if (top > 0) {
        setScrollProgress(0);
        setCurrentStep(0);
      } else {
        setScrollProgress(1);
        setCurrentStep(howItWorks.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [howItWorks.length]);

  return (
    <section ref={containerRef} className={styles.howItWorksWrapper} id="kako-radi">
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
                height: `${scrollProgress * 100}%`,
              }}
            />
          </div>

          {/* Steps Cards */}
          <div className={styles.stepsCardsContainer}>
            {howItWorks.map((step, index) => {
              // Kalkulacija za svaki step
              const stepRange = 1 / howItWorks.length; // 0.25 za 4 step-a
              const stepStart = index * stepRange;
              const stepEnd = (index + 1) * stepRange;
              const stepMiddle = (stepStart + stepEnd) / 2;

              // Izračunaj koliko je step aktivan (0 do 1)
              let stepProgress = 0;

              if (scrollProgress >= stepStart && scrollProgress <= stepEnd) {
                // Step je u svom rangu
                const localProgress = (scrollProgress - stepStart) / stepRange;

                // Fade in u prvoj polovini, fade out u drugoj
                if (localProgress <= 0.5) {
                  stepProgress = localProgress * 2; // 0 -> 1
                } else {
                  stepProgress = (1 - localProgress) * 2; // 1 -> 0
                }
              } else if (scrollProgress < stepStart) {
                // Pre nego što step počne
                stepProgress = 0;
              } else {
                // Posle što step završi
                stepProgress = 0;
              }

              const opacity = stepProgress;
              const y = (1 - stepProgress) * 30; // Pomera se od 30px do 0
              const scale = 0.95 + (stepProgress * 0.05); // Od 0.95 do 1

              return (
                <div
                  key={index}
                  className={styles.stepCardApple}
                  style={{
                    opacity,
                    transform: `translate(-50%, calc(-50% + ${y}px)) scale(${scale})`,
                    pointerEvents: stepProgress > 0.3 ? 'auto' : 'none',
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
                      style={{
                        background: step.color,
                        opacity: stepProgress * 0.3
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step indicators */}
          <div className={styles.stepIndicators}>
            {howItWorks.map((_, index) => (
              <div
                key={index}
                className={styles.stepIndicator}
                style={{
                  opacity: currentStep === index ? 1 : 0.3,
                  transform: currentStep === index ? 'scale(1.2)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
