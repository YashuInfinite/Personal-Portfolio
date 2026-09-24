import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, ExternalLink, Globe, RefreshCw, Rocket } from 'lucide-react';

interface AutomationProject {
  title: string;
  url: string;
}

const AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    title: '100 YouTube Auto Likes',
    url: 'https://github.com/YashuInfinite/100-YouTube-Auto-Likes',
  },
  {
    title: '100 YouTube Auto Subscribers',
    url: 'https://github.com/YashuInfinite/100-Youtube-Auto-Subscribers',
  },
  {
    title: '500 YouTube Auto Comments',
    url: 'https://github.com/YashuInfinite/500-Auto-Youtube-Comments',
  },
  {
    title: 'IMDb Movies & TV Shows Ratings Count Tool',
    url: 'https://github.com/YashuInfinite/IMDb-Movies-TV-Shows-Rating-Finder-Tool',
  },
  {
    title: 'BookMyShow Movies Ratings & Interest Count Tool',
    url: 'https://github.com/YashuInfinite/BookMyShow-Movies-Rating-Interest-Count-Tool',
  },
];

const FuturisticRocket: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center shrink-0 w-10 h-10">
      {/* Soft Ambient Glowing Aura */}
      <motion.div
        className="absolute inset-0 bg-orange-500/20 rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:bg-orange-500/40 transition-all duration-300 pointer-events-none"
        animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Exhaust Flame & Sparks behind rocket */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
        {/* Main Glowing Flame */}
        <motion.div
          className="w-5 h-2.5 bg-gradient-to-r from-orange-500 via-amber-400 to-transparent rounded-full blur-[2px] opacity-80 group-hover:opacity-100 group-hover:w-8 group-hover:blur-[1px] transition-all duration-300"
          animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Tiny Sparks & Particles emitting behind */}
        <motion.span
          className="absolute -left-2 top-0 w-1 h-1 bg-amber-300 rounded-full blur-[0.5px]"
          animate={{ x: [-2, -8], y: [-1, -4], opacity: [1, 0], scale: [1, 0.2] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut', delay: 0.1 }}
        />
        <motion.span
          className="absolute -left-1 bottom-0 w-1.5 h-1.5 bg-orange-400 rounded-full blur-[0.5px]"
          animate={{ x: [-1, -10], y: [1, 5], opacity: [1, 0], scale: [1, 0.2] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
        />
        <motion.span
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-200 rounded-full blur-[0.5px]"
          animate={{ x: [0, -12], opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'easeOut', delay: 0.2 }}
        />
      </div>

      {/* Rocket Icon Container with Continuous Floating & Hover Launch */}
      <motion.div
        className="relative z-10 text-orange-400 group-hover:text-orange-300 transition-colors duration-300"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="transform transition-transform duration-300 ease-out group-hover:translate-x-[8px] group-hover:-translate-y-[8px]">
          <Rocket className="w-6 h-6 -rotate-45 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
        </div>
      </motion.div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <section id="projects" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Orbs & Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/40">
            <Code className="w-3.5 h-3.5 text-orange-500" />
            <span>FEATURED PROJECT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tighter uppercase">
            PERSONAL <span className="text-gradient-orange">PROJECTS</span>
          </h2>
        </div>

        {/* Premium Project Showcase Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.04] backdrop-blur-xl rounded-[24px] p-6 sm:p-10 border border-white/[0.08] hover:border-orange-500/40 shadow-2xl shadow-orange-500/5 transition-all duration-500 relative overflow-hidden group"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-indigo-500/10 rounded-[24px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Side: Single Premium Glassmorphism Container */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div
                className="p-[28px] rounded-[20px] shadow-[0_0_30px_rgba(249,115,22,0.08)] border transition-all duration-300 space-y-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Project List */}
                <div className="flex flex-col space-y-5">
                  {AUTOMATION_PROJECTS.map((project, idx) => (
                    <React.Fragment key={project.title}>
                      {idx > 0 && (
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                      )}
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="group flex items-center justify-between gap-4 cursor-pointer py-1"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <FuturisticRocket />
                          <div className="relative min-w-0">
                            <span className="text-base sm:text-[18px] font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 block truncate">
                              {project.title}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
                          </div>
                        </div>

                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-orange-400 group-hover:rotate-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                      </motion.a>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: 3D iMac / Studio Display Frame displaying live website */}
            <div className="lg:col-span-7 relative w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="relative group/monitor"
              >
                {/* Ambient Orange Glow Behind Studio Display */}
                <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-indigo-500/30 blur-xl opacity-40 group-hover/monitor:opacity-80 transition duration-500 pointer-events-none" />

                {/* Apple Studio Display Metallic Frame */}
                <div className="relative bg-[#0d0d12] rounded-[24px] border border-white/15 p-2 sm:p-3 shadow-2xl shadow-orange-500/10 group-hover/monitor:border-orange-500/40 transition-colors">
                  
                  {/* Top Monitor Bar / Apple Bezel Header */}
                  <div className="bg-[#14141d] rounded-t-[18px] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/50" />
                    </div>

                    <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-white/10 text-[11px] text-white/70 max-w-xs truncate">
                      <Globe className="w-3 h-3 text-orange-400 shrink-0" />
                      <span className="truncate">https://yashwanthwebproject.netlify.app/</span>
                    </div>

                    <a
                      href="https://yashwanthwebproject.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-orange-400 transition-colors flex items-center gap-1 text-[10px]"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Display Screen Container */}
                  <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] bg-black rounded-b-[18px] overflow-hidden border border-white/5 group-hover/monitor:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all">
                    
                    {/* Glass Reflection Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-60 group-hover/monitor:opacity-30 transition-opacity" />

                    {/* Loading Skeleton */}
                    {isIframeLoading && (
                      <div className="absolute inset-0 bg-[#0a0a0f] z-10 flex flex-col items-center justify-center gap-3 p-6 text-center">
                        <RefreshCw className="w-6 h-6 text-orange-500 animate-spin" />
                        <span className="text-xs font-mono text-white/60">Loading Portfolio Showcase...</span>
                      </div>
                    )}

                    {/* Live Website Embedded Iframe */}
                    <iframe
                      src="https://yashwanthwebproject.netlify.app/"
                      className="w-full h-full rounded-b-[18px]"
                      loading="lazy"
                      scrolling="yes"
                      style={{ border: 'none' }}
                      title="My Web Development Portfolio"
                      onLoad={() => setIsIframeLoading(false)}
                    />
                  </div>

                  {/* iMac Metallic Stand */}
                  <div className="w-32 h-3.5 bg-gradient-to-b from-neutral-800 to-neutral-900 mx-auto rounded-b-md border-x border-b border-white/10 shadow-md" />
                  <div className="w-48 h-1.5 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 mx-auto rounded-full shadow-lg" />
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};


