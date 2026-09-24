import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';

interface TestimonialItem {
  id: string;
  author: string;
  avatar: string;
  feedback: string;
}

const TESTIMONIAL_DATA: TestimonialItem[] = [
  {
    id: "toufik",
    author: "Toufik",
    avatar: "/images/toufik.jpg",
    feedback: "Great work on the project! I was impressed with the attention to detail and the level of creativity.",
  },
  {
    id: "shankar",
    author: "Shankar",
    avatar: "/images/shankar.jpg",
    feedback: "Your project was amazing! I loved the way you incorporated different elements to create a cohesive design.",
  },
  {
    id: "pavan",
    author: "Pavan",
    avatar: "/images/pavan.jpg",
    feedback: "I was blown away by your project; the level of creativity was fantastic! I really liked it.",
  },
  {
    id: "manoj",
    author: "Manoj",
    avatar: "/images/manoj.jpg",
    feedback: "I liked his bot development skills on social media, the way he implements new projects and tries out projects.",
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Responsive items per page detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(TESTIMONIAL_DATA.length / itemsPerPage);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  // Compute currently displayed items
  const getCurrentItems = () => {
    const startIndex = activeIndex * itemsPerPage;
    return TESTIMONIAL_DATA.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Ambient Aurora Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-l from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/40">
            <MessageSquareQuote className="w-3.5 h-3.5 text-orange-500" />
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tighter uppercase">
            COLLEAGUE <span className="text-gradient-orange">THOUGHTS</span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm font-light">
            Feedback from colleagues and collaborators.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-${itemsPerPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`grid gap-6 sm:gap-8 ${
                  itemsPerPage === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {getCurrentItems().map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative bg-white/[0.04] backdrop-blur-xl rounded-[24px] p-7 sm:p-8 border border-white/[0.08] hover:border-orange-500/50 hover:shadow-[0_20px_45px_rgba(249,115,22,0.18)] transition-all duration-300 flex flex-col justify-between group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-orange-500/70 before:via-amber-400 before:to-transparent"
                  >
                    {/* Glass Reflection Accent */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                    <div className="space-y-6 relative z-10">
                      {/* Profile Image & Name Row */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full p-[2px] bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:scale-105 transition-transform duration-300 shrink-0">
                          <img
                            src={item.avatar}
                            alt={item.author}
                            referrerPolicy="no-referrer"
                            className="w-full h-full rounded-full object-cover object-center bg-neutral-900"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white tracking-wide font-heading group-hover:text-orange-400 transition-colors">
                            {item.author}
                          </h3>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-[16px] text-gray-300 font-light leading-[1.8] italic">
                        "{item.feedback}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Elegant Navigation Dots Only */}
          <div className="flex items-center justify-center gap-2.5 pt-10">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.6)]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
