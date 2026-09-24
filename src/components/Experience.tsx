import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, ExternalLink, Globe, Calendar, Building2, Sparkles, Monitor, RefreshCw } from 'lucide-react';

export const Experience: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <section id="experience" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Orbs & Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/40">
            <Briefcase className="w-3.5 h-3.5 text-orange-500" />
            <span>PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tighter uppercase">
            WORK <span className="text-gradient-orange">EXPERIENCE</span>
          </h2>
        </div>

        {/* Premium Company Showcase Card */}
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
            
            {/* Left Side: Company Details */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              
              {/* Company Logo Frame */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-black/80 border border-white/15 p-3 flex items-center justify-center shadow-xl shrink-0 group-hover:border-orange-500/50 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] transition-all">
                  <img
                    src="https://shritek.com/wp-content/uploads/2024/02/shritek-removed-pic.png"
                    alt="Shritek Innovations Logo"
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current Position
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-wide uppercase">
                    Shritek Innovations
                  </h3>
                </div>
              </div>

              {/* Role & Duration Details */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Role Title</span>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <h4 className="text-xl font-extrabold text-orange-400 font-heading">
                      Software Engineer
                    </h4>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Duration</span>
                  <div className="flex items-center gap-2 text-white/80 font-mono text-xs font-semibold">
                    <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-orange-300">
                      June 2023 – Present
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Link Button with Rich Gradient */}
              <div className="pt-2">
                <a
                  href="https://shritek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 hover:brightness-110 text-black font-black text-xs font-mono uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:scale-105 transition-all group/btn"
                >
                  <Globe className="w-4 h-4 text-black" />
                  <span>Visit Company Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Side: 3D Premium Desktop Monitor Mockup displaying live website */}
            <div className="lg:col-span-7 relative w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="relative group/monitor"
              >
                {/* Ambient Orange Glow Behind Monitor */}
                <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-indigo-500/30 blur-xl opacity-40 group-hover/monitor:opacity-80 transition duration-500 pointer-events-none" />

                {/* Desktop Monitor Outer Shell */}
                <div className="relative bg-[#0d0d12] rounded-[24px] border border-white/15 p-2 sm:p-3 shadow-2xl shadow-orange-500/10 group-hover/monitor:border-orange-500/40 transition-colors">
                  
                  {/* Top Monitor Bar / Bezel controls */}
                  <div className="bg-[#14141d] rounded-t-[18px] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/50" />
                    </div>

                    <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-white/10 text-[11px] text-white/70 max-w-xs truncate">
                      <Globe className="w-3 h-3 text-orange-400 shrink-0" />
                      <span className="truncate">https://shritek.com</span>
                    </div>

                    <a
                      href="https://shritek.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-orange-400 transition-colors flex items-center gap-1 text-[10px]"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Screen Display Container */}
                  <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] bg-black rounded-b-[18px] overflow-hidden border border-white/5 group-hover/monitor:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all">
                    
                    {/* Glass Reflection Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-60 group-hover/monitor:opacity-30 transition-opacity" />

                    {/* Loading Skeleton */}
                    {isIframeLoading && (
                      <div className="absolute inset-0 bg-[#0a0a0f] z-10 flex flex-col items-center justify-center gap-3 p-6 text-center">
                        <RefreshCw className="w-6 h-6 text-orange-500 animate-spin" />
                        <span className="text-xs font-mono text-white/60">Loading Shritek Innovations...</span>
                      </div>
                    )}

                    {/* Live Website Embedded Iframe */}
                    <iframe
                      src="https://shritek.com"
                      className="w-full h-full rounded-b-[18px]"
                      loading="lazy"
                      scrolling="yes"
                      style={{ border: 'none' }}
                      title="Shritek Innovations Website"
                      onLoad={() => setIsIframeLoading(false)}
                    />
                  </div>

                  {/* Monitor Stand Base */}
                  <div className="w-32 h-3 bg-gradient-to-b from-neutral-800 to-neutral-900 mx-auto rounded-b-md border-x border-b border-white/10 shadow-md" />
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
