'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { FiCheckCircle, FiShoppingCart, FiPackage } from 'react-icons/fi';
import styles from './KakoRadi.module.css';

export default function KakoRadi() {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const lastScrollTimeRef = useRef(0);

  const howItWorks = [
    {
      step: 1,
      icon: <HiDevicePhoneMobile />,
      title: "Izaberi telefon",
      description: "Pretraži našu bogatu ponudu i izaberi telefon koji ti se sviđa",
      color: '#667eea',
    },
    {
      step: 2,
      icon: <FiCheckCircle />,
      title: "Proveri detalje",
      description: "Proveri specifikacije, cenu i garanciju za izabrani uređaj",
      color: '#764ba2',
    },
    {
      step: 3,
      icon: <FiShoppingCart />,
      title: "Naruči online",
      description: "Jednostavan checkout proces sa različitim opcijama plaćanja",
      color: '#f093fb',
    },
    {
      step: 4,
      icon: <FiPackage />,
      title: "Primi dostavu",
      description: "Brza dostava na kućnu adresu sa mogućnošću provere pre preuzimanja",
      color: '#4facfe',
    }
  ];

  // Intersection Observer za detekciju kada sekcija uđe u viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLocked(true);
          } else {
            // Ako smo završili sve stepove, otključaj
            if (currentStep >= howItWorks.length - 1) {
              setIsLocked(false);
            }
          }
        });
      },
      {
        threshold: 0.5, // Aktiviraj kada je 50% sekcije vidljivo
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [currentStep, howItWorks.length]);

  // Wheel event handler za scroll control
  const handleWheel = useCallback((e) => {
    if (!isLocked) return;

    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTimeRef.current;

    // Debounce - sprečava previše brze scroll-ove
    if (timeSinceLastScroll < 800) {
      e.preventDefault();
      return;
    }

    lastScrollTimeRef.current = now;

    if (e.deltaY > 0) {
      // Scroll dole
      if (currentStep < howItWorks.length - 1) {
        e.preventDefault();
        setCurrentStep(prev => Math.min(prev + 1, howItWorks.length - 1));
      } else {
        // Završili smo sve stepove, otključaj scroll
        setIsLocked(false);
      }
    } else {
      // Scroll gore
      if (currentStep > 0) {
        e.preventDefault();
        setCurrentStep(prev => Math.max(prev - 1, 0));
      }
    }
  }, [isLocked, currentStep, howItWorks.length]);

  // Dodaj wheel event listener
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      section.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  // Touch support za mobilne uređaje
  const touchStartY = useRef(0);
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!isLocked) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    // Minimum swipe distance
    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      // Swipe gore (scroll dole)
      if (currentStep < howItWorks.length - 1) {
        e.preventDefault();
        setCurrentStep(prev => Math.min(prev + 1, howItWorks.length - 1));
      } else {
        setIsLocked(false);
      }
    } else {
      // Swipe dole (scroll gore)
      if (currentStep > 0) {
        e.preventDefault();
        setCurrentStep(prev => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.howItWorksSection}
      id="kako-radi"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.sectionContainer}>
        {/* Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Kako radi?</h2>
          <p className={styles.sectionSubtitle}>Jednostavan proces u 4 koraka</p>
        </motion.div>

        {/* Main Content Area */}
        <div className={styles.contentWrapper}>
          {/* Progress Line */}
          <div className={styles.progressLineContainer}>
            <div className={styles.progressLineBackground} />
            <motion.div
              className={styles.progressLine}
              animate={{
                height: `${(currentStep / (howItWorks.length - 1)) * 100}%`
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Step Numbers na liniji */}
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className={styles.progressNode}
                style={{
                  top: `${(index / (howItWorks.length - 1)) * 100}%`
                }}
                animate={{
                  scale: currentStep >= index ? 1.2 : 1,
                  opacity: currentStep >= index ? 1 : 0.4
                }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={styles.progressNodeInner}
                  style={{
                    background: currentStep >= index ? step.color : 'rgba(102, 126, 234, 0.3)',
                    boxShadow: currentStep >= index
                      ? `0 0 20px ${step.color}80`
                      : 'none'
                  }}
                >
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cards Stack */}
          <div className={styles.cardsStack}>
            <AnimatePresence mode="wait">
              {howItWorks.map((step, index) => {
                const isActive = currentStep === index;
                const isPast = currentStep > index;
                const isFuture = currentStep < index;

                return (
                  <motion.div
                    key={index}
                    className={styles.stepCard}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : isFuture ? 0.3 : 0,
                      scale: isActive ? 1 : isFuture ? 0.8 : 0.9,
                      y: isActive ? 0 : isFuture ? 100 : -100,
                      filter: isActive ? 'blur(0px)' : `blur(${isFuture ? 15 : 0}px)`,
                      zIndex: isActive ? 10 : isFuture ? 5 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    style={{
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    {/* Glassmorphism Card */}
                    <div className={styles.cardGlass}>
                      {/* Gradient Background */}
                      <div
                        className={styles.cardGradient}
                        style={{
                          background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`
                        }}
                      />

                      {/* Icon */}
                      <motion.div
                        className={styles.iconContainer}
                        animate={{
                          scale: isActive ? [1, 1.1, 1] : 1,
                          rotate: isActive ? [0, 5, -5, 0] : 0
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      >
                        <div
                          className={styles.iconGlow}
                          style={{ background: step.color }}
                        />
                        <div
                          className={styles.icon}
                          style={{ color: step.color }}
                        >
                          {step.icon}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className={styles.cardContent}>
                        <div className={styles.stepNumber}>Korak {step.step}</div>
                        <h3 className={styles.cardTitle}>{step.title}</h3>
                        <p className={styles.cardDescription}>{step.description}</p>
                      </div>

                      {/* Decorative Border */}
                      <div
                        className={styles.cardBorder}
                        style={{
                          background: `linear-gradient(135deg, ${step.color}, transparent)`
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Step Indicators */}
        <div className={styles.stepIndicators}>
          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              className={styles.indicator}
              animate={{
                width: currentStep === index ? '40px' : '12px',
                opacity: currentStep === index ? 1 : 0.4,
                backgroundColor: currentStep >= index ? step.color : '#667eea50'
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentStep(index)}
              style={{
                cursor: 'pointer',
                boxShadow: currentStep === index
                  ? `0 0 15px ${step.color}80`
                  : 'none'
              }}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        {currentStep < howItWorks.length - 1 && (
          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className={styles.scrollHintIcon}>↓</div>
            <span>Skroluj za sledeći korak</span>
          </motion.div>
        )}
      </div>

      {/* Background Decorative Elements */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgCircle} style={{ background: howItWorks[currentStep].color }} />
        <div className={styles.bgCircle2} style={{ background: howItWorks[currentStep].color }} />
      </div>
    </section>
  );
}
