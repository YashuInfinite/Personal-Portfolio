import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'THOUGHTS', href: '#testimonials' },
    { name: 'SKILLS', href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:border-orange-400 group-hover:scale-105 transition-all duration-300 shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/89150253?v=4"
              alt="Yashwanth R Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-orange-400 transition-colors font-heading leading-tight uppercase">
              Portfolio<span className="text-orange-500">.</span>
            </span>
          </div>
        </a>

        {/* Desktop Menu Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] text-white/70 hover:text-orange-300 hover:bg-gradient-to-r hover:from-orange-500/15 hover:to-amber-500/10 rounded-full transition-all duration-200 uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Download Resume Button */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 hover:brightness-110 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-orange-500 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-white/80 hover:text-orange-400 hover:border-orange-500/40 transition-all text-center uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

