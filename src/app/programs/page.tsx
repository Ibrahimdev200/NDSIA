'use client';

import React, { useEffect, useState } from 'react';
import { initialPrograms } from '@/data/initialData';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  GraduationCap, 
  Award, 
  Users, 
  Briefcase, 
  CornerDownRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProgramsPage() {
  const programs = initialPrograms;
  const [mounted, setMounted] = useState(false);
  
  // Registration Form State
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedProgramName, setSelectedProgramName] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantAge, setApplicantAge] = useState('');
  const [applicationReason, setApplicationReason] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenApplyModal = (programName: string) => {
    setSelectedProgramName(programName);
    setShowApplyModal(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail && applicantPhone && selectedProgramName) {
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        setShowApplyModal(false);
        setApplicantName('');
        setApplicantEmail('');
        setApplicantPhone('');
        setApplicantAge('');
        setApplicationReason('');
      }, 3000);
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Our Curriculum
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Practical Technical Education Leading Directly to Careers
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Browse our tuition-free digital programs. Every course incorporates project portfolios, remote-work tools, and global industry standards.
          </p>
        </div>
      </section>

      {/* 2. DETAILED PROGRAMS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {programs.map((prog, idx) => (
            <motion.div 
              key={prog.id}
              id={prog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-start p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 shadow-sm relative ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Left Column: Program Identity */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase bg-[#0f2b5c] text-white dark:bg-blue-900 px-3 py-1 rounded-full tracking-widest">
                    {prog.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <Clock className="h-4 w-4" /> {prog.duration}
                  </span>
                </div>
                
                <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
                  {prog.name}
                </h2>
                
                <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base font-medium">
                  {prog.description}
                </p>

                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 rounded-2xl space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-650 tracking-wider">Primary Outcome</span>
                  <p className="font-extrabold text-[#0f2b5c] dark:text-blue-400 text-sm mt-0.5">{prog.outcomes}</p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => handleOpenApplyModal(prog.name)}
                    className="flex items-center gap-2 bg-[#0f2b5c] hover:bg-[#0a1d3f] text-white font-bold text-sm px-6 py-3 rounded-full shadow transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Apply for Next Intake
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Skills, Career Paths, and Objectives */}
              <div className="w-full lg:w-1/2 space-y-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl">
                
                {/* Skills Section */}
                <div className="space-y-3">
                  <h4 className="font-bold text-[#0f2b5c] dark:text-white text-sm uppercase tracking-wider">Core Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {prog.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-900/10 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-800" />

                {/* Career Paths */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0f2b5c] dark:text-white text-sm uppercase tracking-wider">Target Career Paths</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-550 dark:text-slate-400">
                    {prog.careerPaths.map((path, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CornerDownRight className="h-3.5 w-3.5 text-emerald-500" />
                        {path}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-800" />

                {/* Learning Objectives */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0f2b5c] dark:text-white text-sm uppercase tracking-wider">Learning Objectives</h4>
                  <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                    {prog.objectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ADDITIONAL FEATURES SECTION (Mentorship, Internships, Incubator) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Beyond the Classroom</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              We complement technical classes with professional structures that ensure graduate success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#0f2b5c] dark:text-blue-450 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-extrabold text-lg text-slate-950 dark:text-white">Global Mentorship</h4>
              <p className="text-sm text-slate-500 dark:text-slate-450 leading-relaxed">
                Every professional track student is paired with a remote mentor—senior software developers and product designers working in EMEA or America—for weekly portfolio guidance.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-405 flex items-center justify-center">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="font-extrabold text-lg text-slate-950 dark:text-white">Remote Internships</h4>
              <p className="text-sm text-slate-500 dark:text-slate-455 leading-relaxed">
                We partner with regional tech firms and international outsourcing companies to host remote internships inside the NDSIA lab, validating the students' practical competencies.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-650 dark:text-orange-400 flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <h4 className="font-extrabold text-lg text-slate-950 dark:text-white">Alumni Freelance Lab</h4>
              <p className="text-sm text-slate-500 dark:text-slate-450 leading-relaxed">
                Graduates receive desk access, high-speed power backup, and internet inside our coworking facility, allowing them to start freelancing immediately with zero infrastructure cost.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE APPLICATION MODAL */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-605 dark:bg-orange-950/40 dark:text-orange-400 flex items-center justify-center mx-auto animate-pulse">
                <Clock className="h-8 w-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight uppercase">
                  Coming Soon!
                </h3>
                <p className="text-xs font-bold text-emerald-650 dark:text-emerald-400 uppercase tracking-widest">
                  {selectedProgramName} Admission
                </p>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Admissions and registration for the next cohort batch are currently preparation-locked. Follow our newsletter and news updates for announcements on application openings!
              </p>

              <button 
                type="button"
                onClick={() => setShowApplyModal(false)}
                className="w-full p-3.5 bg-[#0f2b5c] hover:bg-[#0a1d3f] text-white rounded-xl text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
