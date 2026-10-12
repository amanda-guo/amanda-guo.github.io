import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { CareerTimeline } from './components/CareerTimeline';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Work } from './components/Work';

export type Theme = 'light' | 'dark';

const Preloader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
    className="fixed inset-0 z-[999] bg-stone-50 dark:bg-neutral-950 flex items-center justify-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-5"
    >
      <p className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.35em] text-neutral-700 dark:text-neutral-300">
        Amanda
      </p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
        className="h-px bg-blue-500/40"
      />
    </motion.div>
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <FeaturedWork />
    <CareerTimeline />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>(() =>
    window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative bg-stone-50 dark:bg-neutral-950 min-h-screen text-neutral-950 dark:text-white selection:bg-blue-500/20 transition-colors duration-300">
          <Navbar theme={theme} onThemeChange={setTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
