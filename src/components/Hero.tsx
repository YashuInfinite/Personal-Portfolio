import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';
import { motion } from 'motion/react';

interface GoldSparkNameProps {
  name: string;
}

const GoldSparkName: React.FC<GoldSparkNameProps> = ({ name }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const letters = name.split('');

  return (
    <div
      className="relative inline-block cursor-default whitespace-nowrap select-none group py-1.5 my-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Light sweep beam on hover across text */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent blur-sm z-20"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: ['-100%', '200%'] } : { x: '-100%' }}
        transition={isHovered ? { duration: 0.85, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 } : { duration: 0 }}
      />

      {/* Soft Golden Ambient Glow */}
      <div
        className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#FFD700]/10 via-[#FFB800]/15 to-[#FFD700]/10 blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
      />

      <h1 className="relative z-10 flex items-center justify-center lg:justify-start whitespace-nowrap text-xl sm:text-4xl lg:text-5xl font-black tracking-[2px] sm:tracking-[3px] text-white uppercase font-heading leading-none">
        {letters.map((char, charIdx) => {
          if (char === ' ') {
            return <span key={charIdx} className="w-2.5 sm:w-3.5 lg:w-4" />;
          }

          // Generate golden spark particle configurations per letter
          const sparks = [
            { top: '-4px', left: '15%', color: '#FFD700', delay: charIdx * 0.12 },
            { top: '18%', right: '-4px', color: '#FFB800', delay: charIdx * 0.12 + 0.25 },
            { bottom: '-4px', left: '55%', color: '#FFD700', delay: charIdx * 0.12 + 0.5 },
            { top: '65%', left: '-3px', color: '#FFF8DC', delay: charIdx * 0.12 + 0.75 },
          ];

          return (
            <motion.span
              key={charIdx}
              className="relative inline-block transition-transform duration-300"
              whileHover={{ scale: 1.12, y: -2 }}
            >
              {/* Main White Character with Golden Glow */}
              <span
                className={`relative z-10 text-white transition-all duration-300 ${
                  isHovered
                    ? 'drop-shadow-[0_0_12px_rgba(255,215,0,0.9)] text-[#FFFFFF]'
                    : 'drop-shadow-[0_0_6px_rgba(255,215,0,0.45)] text-white'
                }`}
              >
                {char}
              </span>

              {/* Shimmering Gold Spark Particles */}
              {sparks.map((spark, sparkIdx) => (
                <motion.span
                  key={sparkIdx}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: sparkIdx % 2 === 0 ? '3px' : '2px',
                    height: sparkIdx % 2 === 0 ? '3px' : '2px',
                    backgroundColor: spark.color,
                    boxShadow: `0 0 5px ${spark.color}, 0 0 8px rgba(255, 215, 0, 0.8)`,
                    top: spark.top,
                    left: spark.left,
                    right: spark.right,
                    bottom: spark.bottom,
                  }}
                  animate={{
                    y: [0, -3, 1, -2, 0],
                    x: [0, 2, -2, 1, 0],
                    opacity: isHovered ? [0.5, 1, 0.6, 1, 0.5] : [0.25, 0.85, 0.35, 0.75, 0.25],
                    scale: isHovered ? [0.9, 1.4, 1.0, 1.3, 0.9] : [0.6, 1.1, 0.7, 1.0, 0.6],
                  }}
                  transition={{
                    duration: 2.2 + (sparkIdx % 2) * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: spark.delay,
                  }}
                />
              ))}

              {/* Tiny Sparkle Star effect on hover */}
              {isHovered && (
                <motion.span
                  className="absolute text-[8px] text-[#FFD700] pointer-events-none -top-2 left-1/2 -translate-x-1/2 drop-shadow-[0_0_6px_#FFD700]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 90] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: charIdx * 0.08 }}
                >
                  ✦
                </motion.span>
              )}
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Three.js Interactive 3D Background Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-85 sm:opacity-95 transition-opacity duration-700 pointer-events-auto">
        <ThreeCanvas interactive={true} />
      </div>

      {/* Multi-Layered Ambient Aurora & UX Glow Mesh */}
      <div className="absolute -top-20 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/20 via-amber-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column: Refined Typography Info */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col justify-center pointer-events-auto">
            {/* Top Badge with Subtle Gradient Border */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 hover:border-orange-500/40 px-3.5 py-1.5 rounded-full w-fit mx-auto lg:mx-0 shadow-lg shadow-black/40 transition-colors">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/90 font-mono">AWS Certified Cloud Practitioner</span>
            </div>

            {/* Refined Proportional Typography Heading */}
            <div className="space-y-1 flex flex-col items-center lg:items-start">
              <GoldSparkName name="YASHWANTH R" />
              <p className="text-xs sm:text-sm font-mono text-orange-400 uppercase tracking-widest font-bold">
                Web Dev • Bot Developer • Security Researcher
              </p>
            </div>

            {/* Subtitle / Focus statement */}
            <p className="text-white/70 text-xs sm:text-sm max-w-xl font-light leading-relaxed font-sans italic mx-auto lg:mx-0">
              Specialist in Web Development, Bug Bounty, and Automation. Building scalable web applications, intelligent bots, automated scrapers, and real-time analytics solutions.
            </p>

            {/* Sharp Border-Left Metric Dividers */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-1">
              <div className="border-l-2 border-orange-500 pl-3 text-left">
                <div className="text-2xl sm:text-3xl font-black text-white">{PERSONAL_INFO.stats.totalProjects}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Projects Built</div>
              </div>
              <div className="border-l-2 border-white/20 pl-3 text-left">
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">{PERSONAL_INFO.stats.webApps}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono font-bold">Web Projects</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href={PERSONAL_INFO.knowMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 hover:brightness-110 text-black font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:scale-105 transition-all group"
              >
                <span>KNOW MORE</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] mr-1">CONNECT:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-500/50 hover:bg-gradient-to-tr hover:from-orange-500/10 hover:to-white/5 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-500/50 hover:bg-gradient-to-tr hover:from-orange-500/10 hover:to-white/5 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-500/50 hover:bg-gradient-to-tr hover:from-orange-500/10 hover:to-white/5 transition-all"
                title="Direct Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Floating Circular Profile Picture with Glowing Ring */}
          <div className="lg:col-span-5 relative flex items-center justify-center pointer-events-auto">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative flex items-center justify-center p-4 group/photo"
            >
              {/* Outer Ambient Glow for the Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-500/20 to-indigo-500/30 blur-2xl group-hover/photo:scale-110 group-hover/photo:opacity-100 transition-all duration-500 pointer-events-none" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center">
                {/* Orbiting Electric Spark Particles SVG Ring */}
                <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="96"
                    fill="none"
                    stroke="url(#heroRingGradient)"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                    className="animate-spin text-orange-500/60"
                    style={{ animationDuration: '18s' }}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="96"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    className="opacity-70 group-hover/photo:opacity-100 transition-opacity"
                  />
                  {/* Traveling Spark Energy Arc on Hover */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="96"
                    fill="none"
                    stroke="#ffedd5"
                    strokeWidth="3.5"
                    strokeDasharray="25 360"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                    className="opacity-80 group-hover/photo:opacity-100 transition-opacity filter drop-shadow-[0_0_10px_rgba(249,115,22,1)]"
                  />
                  <defs>
                    <linearGradient id="heroRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Perfect Circular Profile Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-orange-500/80 shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover/photo:shadow-[0_0_50px_rgba(249,115,22,0.8)] group-hover/photo:border-orange-400 transition-all duration-500 flex items-center justify-center p-0 bg-transparent">
                  <img
                    src="https://avatars.githubusercontent.com/u/89150253?v=4"
                    alt="Yashwanth R Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover/photo:scale-105 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


