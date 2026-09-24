import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Code, Mail } from 'lucide-react';

const KaggleIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.825 23.859h-3.225l-6.26-8.564-2.17 1.95v6.614H3.87V.141h3.300v13.593l7.98-9.352h3.915l-7.23 8.32 7.00 11.158z"/>
  </svg>
);

interface SocialPlatform {
  name: string;
  url: string;
  icon: React.ReactNode;
  isExternal: boolean;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yashwanth-r-750b7918b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <Linkedin className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:text-orange-400 transition-colors" />,
    isExternal: true,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/YashuInfinite',
    icon: <Github className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:text-orange-400 transition-colors" />,
    isExternal: true,
  },
  {
    name: 'GreasyFork',
    url: 'https://greasyfork.org/en/users/1405453-yashwanth-r',
    icon: <Code className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:text-orange-400 transition-colors" />,
    isExternal: true,
  },
  {
    name: 'Email',
    url: 'mailto:yashwanth6678@gmail.com',
    icon: <Mail className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:text-orange-400 transition-colors" />,
    isExternal: false,
  },
  {
    name: 'Kaggle',
    url: 'https://www.kaggle.com/yashu1wwww/code',
    icon: <KaggleIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:text-orange-400 transition-colors" />,
    isExternal: true,
  },
];

export const Connect: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="connect" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Multi-Layered Ambient Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-orange-600/10 via-amber-500/10 to-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 font-mono text-xs tracking-widest uppercase shadow-lg shadow-black/40"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white uppercase font-heading leading-tight"
          >
            LET'S <span className="text-gradient-orange">CONNECT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-sm sm:text-base font-sans"
          >
            Connect with me across professional platforms, open-source communities, and research.
          </motion.p>
        </div>

        {/* 5 Social Glass Cards Grid (Desktop 5-cols, Tablet 3+2, Mobile 1-col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {socialPlatforms.map((platform, idx) => {
            const isHovered = hoveredIdx === idx;

            // Animated spark particles behind icon
            const sparkParticles = [
              { top: '10%', left: '15%', color: '#FFD700', size: '3px', delay: 0 },
              { top: '20%', right: '12%', color: '#FF8C00', size: '2px', delay: 0.2 },
              { bottom: '15%', left: '20%', color: '#FFB800', size: '3px', delay: 0.4 },
              { bottom: '25%', right: '18%', color: '#FFD700', size: '2.5px', delay: 0.6 },
              { top: '50%', left: '8%', color: '#FFB800', size: '2px', delay: 0.8 },
            ];

            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target={platform.isExternal ? '_blank' : undefined}
                rel={platform.isExternal ? 'noopener noreferrer' : undefined}
                aria-label={`Connect with Yashwanth R on ${platform.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative flex flex-col items-center justify-center p-8 sm:p-9 rounded-[22px] bg-white/[0.05] border border-white/[0.08] backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_35px_rgba(249,115,22,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer overflow-hidden min-h-[170px]"
              >
                {/* Glass Reflection Sweep Effect on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm z-20"
                  initial={{ x: '-100%' }}
                  animate={isHovered ? { x: ['-100%', '200%'] } : { x: '-100%' }}
                  transition={isHovered ? { duration: 0.75, ease: 'easeInOut' } : { duration: 0 }}
                />

                {/* Soft Orange Glow Background Layer */}
                <div className={`absolute inset-0 rounded-[22px] bg-gradient-to-b from-orange-500/10 via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                {/* Icon Container with Spark Particle Effects Behind */}
                <div className="relative mb-5 flex items-center justify-center">
                  {/* Energy Pulse Ring Behind Icon */}
                  <div className={`absolute -inset-4 rounded-full bg-gradient-to-r from-[#FFD700]/20 via-[#FF8C00]/30 to-[#FFD700]/20 blur-md transition-all duration-500 pointer-events-none ${isHovered ? 'scale-125 opacity-100' : 'scale-90 opacity-40'}`} />

                  {/* Spark Particles Layer */}
                  {sparkParticles.map((pt, ptIdx) => (
                    <motion.span
                      key={ptIdx}
                      className="absolute rounded-full pointer-events-none z-0"
                      style={{
                        width: pt.size,
                        height: pt.size,
                        backgroundColor: pt.color,
                        boxShadow: `0 0 6px ${pt.color}, 0 0 10px rgba(255, 215, 0, 0.8)`,
                        top: pt.top,
                        left: pt.left,
                        right: pt.right,
                        bottom: pt.bottom,
                      }}
                      animate={{
                        y: isHovered ? [0, -8, 2, -6, 0] : [0, -3, 1, -2, 0],
                        x: isHovered ? [0, 5, -5, 3, 0] : [0, 2, -2, 1, 0],
                        scale: isHovered ? [1, 1.8, 1.2, 1.6, 1] : [0.7, 1.2, 0.8, 1.1, 0.7],
                        opacity: isHovered ? [0.6, 1, 0.7, 1, 0.6] : [0.25, 0.6, 0.3, 0.55, 0.25],
                      }}
                      transition={{
                        duration: 1.8 + ptIdx * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: pt.delay,
                      }}
                    />
                  ))}

                  {/* Icon Component */}
                  <motion.div
                    className="relative z-10 transition-transform duration-300 group-hover:scale-112"
                    animate={isHovered ? { scale: 1.12 } : { scale: 1 }}
                  >
                    {platform.icon}
                  </motion.div>
                </div>

                {/* Platform Name */}
                <span className="relative z-10 text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-heading tracking-wide">
                  {platform.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
