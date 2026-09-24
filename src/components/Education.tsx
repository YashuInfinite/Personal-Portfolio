import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, School, Calendar, Building2, Landmark } from 'lucide-react';

interface EducationCardData {
  id: string;
  year: string;
  course: string;
  college: string;
  university: string;
  icon: React.ElementType;
}

const EDUCATION_DATA: EducationCardData[] = [
  {
    id: 'mca',
    year: '2024 - 2026',
    course: 'MCA',
    college: 'Shridevi Institute of Engineering & Technology, Tumkur',
    university: 'VTU, Belagavi',
    icon: GraduationCap,
  },
  {
    id: 'bca',
    year: '2019 - 2022',
    course: 'BCA',
    college: 'Government First Grade College, Tumkur',
    university: 'Tumkur University',
    icon: BookOpen,
  },
  {
    id: 'puc',
    year: '2016 - 2018',
    course: 'PUC - PCMB',
    college: 'Vasavi Composite PU College, Tumkur',
    university: 'Department of Pre-University Education',
    icon: School,
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/40">
            <GraduationCap className="w-3.5 h-3.5 text-orange-500" />
            <span>ACADEMIC QUALIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tighter uppercase">
            ACADEMIC <span className="text-gradient-orange">EDUCATION</span>
          </h2>
        </div>

        {/* Education 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EDUCATION_DATA.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white/[0.04] backdrop-blur-xl rounded-[24px] p-7 border border-white/[0.08] hover:border-orange-500/50 hover:shadow-[0_20px_40px_rgba(249,115,22,0.18)] transition-all duration-300 flex flex-col justify-between group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-orange-500/80 before:via-amber-400 before:to-indigo-500/80"
              >
                {/* Ambient Corner Glow on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-orange-500/20 via-amber-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Top Row: Year Badge at Top-Left & Education Icon at Top-Right */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-transparent border border-orange-500/30 text-orange-300 text-xs font-mono font-bold tracking-wide shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      {item.year}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Course Name */}
                  <div>
                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                      {item.course}
                    </h3>
                  </div>

                  {/* College & University Details */}
                  <div className="space-y-3 pt-2">
                    {/* College */}
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">College</span>
                        <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                          {item.college}
                        </p>
                      </div>
                    </div>

                    {/* University / Board */}
                    <div className="flex items-start gap-2.5">
                      <Landmark className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">University / Board</span>
                        <p className="text-xs font-mono font-semibold text-indigo-300/90 leading-snug">
                          {item.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


