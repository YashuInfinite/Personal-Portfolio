import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Award, FileText, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export const About: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="about" className="py-20 relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Multi-Layered Mesh Aurora */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/40">
            <User className="w-3.5 h-3.5 text-orange-500" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tighter uppercase">
            About <span className="text-gradient-orange">Yashwanth R</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Media Player Monitor & 3 Equal-Width Buttons */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group">
              {/* Glowing gradient back-glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-orange-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
              
              <div className="relative bg-[#09090e]/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/15 group-hover:border-orange-500/30 flex flex-col space-y-5 shadow-2xl transition-all duration-300">
                
                {/* Monitor Top Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-orange-400 font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span>FEATURED STREAM</span>
                  </div>
                </div>

                {/* 16:9 Landscape Video Container */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-inner">
                  <iframe
                    src="https://www.youtube.com/embed/qoBLeO1uRrY"
                    title="Yashwanth R Media Stream"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none rounded-2xl" />
                </div>

                {/* Three Equal-Width Premium Buttons with Gradient Fills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1">
                  <motion.a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={triggerConfetti}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:from-orange-500/15 hover:to-amber-500/10 border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-400 text-[11px] font-mono font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-lg shadow-black/40 min-h-[72px]"
                  >
                    <Download className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="leading-tight">Download Resume</span>
                  </motion.a>

                  <motion.a
                    href="https://drive.google.com/file/d/17Pi5uizJfNfJIWOazbUKPzXqAi2xdroA/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:from-orange-500/15 hover:to-amber-500/10 border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-400 text-[11px] font-mono font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-lg shadow-black/40 min-h-[72px]"
                  >
                    <Award className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="leading-tight">AWS Certified Cloud Practitioner</span>
                  </motion.a>

                  <motion.a
                    href={PERSONAL_INFO.researchPaperUrl || "https://zenodo.org/records/21846323"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:from-orange-500/15 hover:to-amber-500/10 border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-400 text-[11px] font-mono font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-lg shadow-black/40 min-h-[72px]"
                  >
                    <FileText className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="leading-tight">Research Paper</span>
                  </motion.a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Terminal Display Monitor with Styled Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative group h-full">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-indigo-500/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500 pointer-events-none" />

              {/* Main Display Frame */}
              <div className="relative h-full bg-[#09090e]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-start shadow-2xl space-y-4">
                
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  </div>
                </div>

                {/* Scrollable Content Display */}
                <div className="overflow-y-auto max-h-[550px] pr-2 space-y-5 text-white/82 text-[16px] lg:text-[18px] leading-[1.9] font-light">
                  <p>
                    I'm Yashwanth R, a <span className="text-orange-400 font-semibold">Full Stack Web Developer</span> from Tumakuru, Karnataka, with a Master of Computer Applications (MCA) and hands-on industry experience in web development.
                  </p>

                  <p>
                    As an <span className="text-orange-400 font-semibold">AWS Certified Cloud Practitioner</span>, I specialize in designing, developing, and maintaining modern web applications using technologies such as <span className="text-orange-400 font-semibold">JavaScript</span>, <span className="text-orange-400 font-semibold">PHP</span>, <span className="text-orange-400 font-semibold">Node.js</span>, <span className="text-orange-400 font-semibold">Express.js</span> and <span className="text-orange-400 font-semibold">Git</span>. Alongside web development, I have experience as a <span className="text-orange-400 font-semibold">Bot Developer</span>, building automation solutions that improve productivity and streamline workflows. I also have a strong interest in <span className="text-orange-400 font-semibold">Bug Bounty Hunting</span>, continuously exploring web security, identifying vulnerabilities, and following secure development practices.
                  </p>

                  <p>
                    Over the course of my career, I have successfully completed <span className="text-orange-400 font-semibold">50+ projects</span>, including <span className="text-orange-400 font-semibold">12+ full-stack web applications</span>, delivering solutions that prioritize performance, scalability, security, and user experience. My industry experience has provided valuable exposure to real-world software development practices, collaborative workflows, and production-ready application development.
                  </p>

                  <p>
                    I am passionate about continuous learning, automation, cybersecurity, and creating innovative digital solutions that solve real-world problems. I enjoy turning ideas into reliable, high-quality applications while constantly expanding my knowledge of emerging technologies and industry best practices.
                  </p>
                </div>

                {/* Subtle Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-orange-500/[0.02] pointer-events-none rounded-3xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


