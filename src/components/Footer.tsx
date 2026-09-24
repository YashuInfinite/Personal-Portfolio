import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 py-3 sm:py-4 overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-2">
        
        {/* Main Text Container with Center Illumination Effect */}
        <div className="relative group cursor-pointer">
          {/* Synchronized Center Illumination Aura */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                opacity: [0, 0, 0.95, 0, 0],
                scale: [0.8, 0.9, 1.25, 0.9, 0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                times: [0, 0.43, 0.50, 0.57, 1],
                ease: "easeInOut",
              }}
              className="absolute -inset-4 bg-gradient-to-r from-orange-600/30 via-amber-500/50 to-orange-600/30 rounded-3xl blur-xl pointer-events-none"
            />
          )}

          {/* Text with Spark/Flash sync */}
          <motion.h3
            animate={
              shouldReduceMotion
                ? {}
                : {
                    color: [
                      "rgba(255, 255, 255, 0.9)",
                      "rgba(255, 255, 255, 0.9)",
                      "rgba(255, 180, 100, 1)",
                      "rgba(255, 255, 255, 0.9)",
                      "rgba(255, 255, 255, 0.9)",
                    ],
                    textShadow: [
                      "0 0 0px rgba(249,115,22,0)",
                      "0 0 5px rgba(249,115,22,0.2)",
                      "0 0 25px rgba(249,115,22,0.9), 0 0 40px rgba(249,115,22,0.6)",
                      "0 0 5px rgba(249,115,22,0.2)",
                      "0 0 0px rgba(249,115,22,0)",
                    ],
                  }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.43, 0.50, 0.57, 1],
                    ease: "easeInOut",
                  }
            }
            className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wider font-sans relative z-10 transition-all duration-300 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]"
          >
            Designed &amp; Developed by Yashwanth R
          </motion.h3>
        </div>

        {/* F1 Racing Track & Animated Car */}
        {!shouldReduceMotion && (
          <div className="w-full max-w-4xl relative h-7 sm:h-8 flex items-center overflow-hidden">
            
            {/* Cyberpunk Track Line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-[1px]" />

            {/* Center Burst Flare Trigger */}
            <motion.div
              animate={{
                opacity: [0, 0, 1, 0, 0],
                scale: [0.5, 0.8, 1.8, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                times: [0, 0.44, 0.50, 0.56, 1],
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/60 rounded-full blur-md pointer-events-none z-20"
            />

            {/* Moving F1 Car Container */}
            <motion.div
              animate={{
                x: ["-15vw", "calc(50% - 50px)", "calc(50% + 50px)", "105vw"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                times: [0, 0.44, 0.56, 1],
                ease: "linear",
              }}
              className="absolute top-1/2 -translate-y-1/2 flex items-center z-30"
            >
              {/* Exhaust Spark Particles & Light Trail Behind Car */}
              <div className="relative flex items-center">
                
                {/* Exhaust Light Trail */}
                <div className="w-16 sm:w-24 h-2 bg-gradient-to-l from-orange-500 via-amber-500/60 to-transparent rounded-full blur-[2px] opacity-80 animate-pulse -mr-2" />

                {/* Particle Sparks Behind Rear Wing */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1 -ml-6 pointer-events-none">
                  <motion.span
                    animate={{
                      scale: [0.8, 1.5, 0],
                      opacity: [1, 0.8, 0],
                      x: [0, -25],
                      y: [0, (Math.random() - 0.5) * 15],
                    }}
                    transition={{ duration: 0.4, repeat: Infinity, ease: "easeOut" }}
                    className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]"
                  />
                  <motion.span
                    animate={{
                      scale: [0.6, 1.2, 0],
                      opacity: [1, 0.6, 0],
                      x: [0, -35],
                      y: [0, (Math.random() - 0.5) * 20],
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.1, ease: "easeOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_#f59e0b]"
                  />
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 0],
                      opacity: [1, 0.9, 0],
                      x: [0, -20],
                      y: [0, (Math.random() - 0.5) * 12],
                    }}
                    transition={{ duration: 0.35, repeat: Infinity, delay: 0.2, ease: "easeOut" }}
                    className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"
                  />
                </div>

                {/* Inline SVG F1 Racing Car */}
                <div className="relative w-20 sm:w-28 md:w-32 h-auto drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]">
                  <svg
                    viewBox="0 0 160 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Rear Wing Structure */}
                    <path
                      d="M10 18H28L24 8H8L10 18Z"
                      fill="#1E293B"
                      stroke="#F97316"
                      strokeWidth="1.5"
                    />
                    <path d="M12 8H24V11H12V8Z" fill="#F97316" />
                    {/* Rain LED Light at Rear */}
                    <circle cx="9" cy="13" r="2" fill="#FF0000" className="animate-ping" />

                    {/* Main Chassis Body */}
                    <path
                      d="M20 32C25 24 40 18 65 18H100C120 18 138 26 152 33C155 35 152 38 145 38H30C22 38 18 35 20 32Z"
                      fill="url(#f1ChassisGrad)"
                    />
                    
                    {/* Orange Sidepod Intake Line */}
                    <path
                      d="M50 24C65 24 85 22 105 28L120 32H60L50 24Z"
                      fill="url(#f1OrangeGrad)"
                    />

                    {/* Cockpit & Halo Protection */}
                    <path
                      d="M62 18C68 12 82 12 88 18H62Z"
                      fill="#0F172A"
                      stroke="#94A3B8"
                      strokeWidth="1"
                    />
                    {/* Driver Helmet (Glowing Visor) */}
                    <circle cx="73" cy="15" r="4" fill="#E2E8F0" />
                    <path d="M72 14H76V16H72V14Z" fill="#F97316" />

                    {/* Front Nose & Splitter Wing */}
                    <path
                      d="M135 32L158 35C160 35.5 160 37 156 37H132L135 32Z"
                      fill="#0F172A"
                    />
                    <path d="M148 34L159 35.5V37H148V34Z" fill="#F97316" />

                    {/* Rear Pirelli Wheel */}
                    <g className="origin-[32px_36px] animate-[spin_0.4s_linear_infinite]">
                      <circle cx="32" cy="36" r="11" fill="#090D16" stroke="#F97316" strokeWidth="2" />
                      <circle cx="32" cy="36" r="6" fill="#1E293B" />
                      <line x1="32" y1="25" x2="32" y2="47" stroke="#F97316" strokeWidth="1" />
                      <line x1="21" y1="36" x2="43" y2="36" stroke="#F97316" strokeWidth="1" />
                    </g>

                    {/* Front Pirelli Wheel */}
                    <g className="origin-[125px_36px] animate-[spin_0.4s_linear_infinite]">
                      <circle cx="125" cy="36" r="10" fill="#090D16" stroke="#F97316" strokeWidth="2" />
                      <circle cx="125" cy="36" r="5" fill="#1E293B" />
                      <line x1="125" y1="26" x2="125" y2="46" stroke="#F97316" strokeWidth="1" />
                      <line x1="115" y1="36" x2="135" y2="36" stroke="#F97316" strokeWidth="1" />
                    </g>

                    {/* Underbody Ground Effect Glow */}
                    <rect x="25" y="38" width="110" height="3" fill="#F97316" opacity="0.8" rx="1.5" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="f1ChassisGrad" x1="20" y1="18" x2="155" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1E293B" />
                        <stop offset="0.5" stopColor="#0F172A" />
                        <stop offset="1" stopColor="#020617" />
                      </linearGradient>
                      <linearGradient id="f1OrangeGrad" x1="50" y1="24" x2="120" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF8A00" />
                        <stop offset="1" stopColor="#E65100" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

              </div>
            </motion.div>

          </div>
        )}

      </div>

      {/* Floating Scroll To Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 text-black font-black shadow-xl shadow-orange-500/30 hover:brightness-110 hover:scale-110 active:scale-95 transition-all duration-300 group border border-amber-300/40"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};
