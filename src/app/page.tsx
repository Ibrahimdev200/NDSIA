'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  initialPrograms, 
  initialSuccessStories, 
  initialNews, 
  initialPartners, 
  initialProjects 
} from '@/data/initialData';
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Briefcase, 
  TrendingUp, 
  CheckCircle, 
  BookOpen, 
  Clock, 
  Heart, 
  MapPin, 
  Code,
  Calendar,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Quick Stat Counter Component
const StatItem: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none flex items-center gap-4 hover:border-emerald-500/50 transition-colors"
    >
      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
        {icon}
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-extrabold text-[#0f2b5c] dark:text-blue-400 font-sans tracking-tight">
          {value}
        </div>
        <div className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

export default function HomePage() {
  const programs = initialPrograms;
  const stories = initialSuccessStories;
  const news = initialNews;
  const partners = initialPartners;
  const projects = initialProjects;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-24 pb-16">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30 text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Scaling a Proven Community Initiative
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f2b5c] dark:text-white leading-[1.1]"
            >
              Empowering People.<br />
              <span className="bg-gradient-to-r from-emerald-600 to-[#0f2b5c] dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                Transforming Communities.
              </span><br />
              Building the Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-350 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium"
            >
              The Nembe Digital Skills & Innovation Academy (NDSIA) equips young people and adults in Bayelsa State with free, high-impact digital skills for remote work, local employment, and tech entrepreneurship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/programs"
                className="flex items-center justify-center gap-2 rounded-full bg-[#0f2b5c] hover:bg-[#0a1d3f] text-white px-8 py-4 text-base font-bold shadow-lg shadow-blue-900/10 dark:shadow-none hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all"
              >
                Explore Programs
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-base font-bold shadow-lg shadow-emerald-700/10 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all"
              >
                Sponsor a Student
                <Heart className="h-5 w-5 fill-white" />
              </Link>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-6 border-t border-slate-200/60 dark:border-slate-800/40 grid grid-cols-3 gap-4"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0f2b5c] dark:text-blue-400">4 Cohorts</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Completed</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0f2b5c] dark:text-blue-400">85%+</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Employment Rate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0f2b5c] dark:text-blue-400">100% Free</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Tuition Sponsorship</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visuals (Autoplay Loop Video Display) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl group"
            >
              {/* Using high-quality placeholder styling with a premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 via-blue-900/40 to-orange-500/10 z-10 pointer-events-none" />
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-34288-large.mp4"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                poster="/hero-video-poster.jpg"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 glass p-5 rounded-2xl shadow-lg">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Live Classroom Loop
                </p>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">Nembe Tech Hub in Action</h3>
                <p className="text-xs text-slate-600 dark:text-slate-350 mt-0.5">Students practicing code and collaborating.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. IMPACT COUNTER */}
      <section className="bg-slate-50 dark:bg-slate-950 py-12 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem label="Students Graduated" value="450+" icon={<GraduationCap className="h-6 w-6" />} />
            <StatItem label="Employment Rate" value="85%" icon={<Briefcase className="h-6 w-6" />} />
            <StatItem label="Women Empowered" value="52%" icon={<Users className="h-6 w-6" />} />
            <StatItem label="Hours of Training" value="12,000+" icon={<Clock className="h-6 w-6" />} />
          </div>
        </div>
      </section>

      {/* 3. WHY WE EXIST */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Bridging the Divide
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
                Why the Nembe Academy Exists
              </h2>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                Nembe is a historically rich, riverine community in Bayelsa State. However, geographical isolation and historical economic dependency on oil and gas have limited diversification, leaving many talented youths without access to the burgeoning global digital economy.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Empowering Talents</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">We provide internet, laptops, power backup, and top-tier training, giving youth the same tech opportunities as peers in metropolitan cities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Community Self-Sustenance</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">By training local talent, they earn income from global markets and spend locally, uplifting families and local merchants.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                  <img src="/group-students-1.jpg" alt="Students collaboration" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                  <img src="/group-students-2.jpg" alt="Active laboratory session" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                  <img src="/graduates-hall.jpg" alt="Graduates celebrating" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                  <img src="/graduates-backdrop-1.jpg" alt="Mentorship one-on-one" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR STORY PREVIEW */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
              Proven Path
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">
              Opu-Nembe Youth Computer Training
            </h2>
            <p className="text-slate-650 dark:text-slate-400 text-sm md:text-base font-medium">
              We are not starting from scratch. NDSIA is the institutional scaling of the grassroots Opu-Nembe Youth Computer Training. Launched in 2025 by the **Peace Steering Committee of Opu-Nembe** under the leadership of Chairman **RTD former Vice Admiral Victor Ombu**, the initiative has successfully graduated **450+ students** using community-backed resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline connection line */}
            <div className="hidden md:block absolute top-[50px] left-[12.5%] right-[12.5%] h-1 bg-slate-250 dark:bg-slate-800 -z-10" />

            {[
              { year: '2025', title: 'Batches 1 & 2', desc: 'Launched academy. Trained 200 students (100 in Batch 1, 100 in Batch 2) in basic computers, Microsoft Word, PowerPoint, Excel, and printing.' },
              { year: '2025', title: 'Batch 3 Scaling', desc: 'Scaled classrooms to train 150 students in Batch 3, expanding basic computer operations, typing, and internet research.' },
              { year: '2026', title: 'Batch 4 Intake', desc: 'Trained 100 students in Batch 4, bringing the cumulative total of digital empowerment graduates to 450.' },
              { year: '2026+', title: 'Future Academy', desc: 'Constructing a permanent campus structure to offer standard digital empowerment to thousands across Bayelsa.' }
            ].map((step, idx) => (
              <motion.div 
                key={step.year} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#0f2b5c] text-white dark:bg-blue-900 flex items-center justify-center font-bold text-lg mb-4">
                  {step.year}
                </div>
                <h3 className="font-bold text-lg text-slate-950 dark:text-white">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/story" 
              className="inline-flex items-center gap-2 font-bold text-[#0f2b5c] dark:text-blue-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
            >
              Read Our Complete Story
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROGRAMS PREVIEW */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
                Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b5c] dark:text-white mt-3 tracking-tight">
                Our Educational Offerings
              </h2>
            </div>
            <Link href="/programs" className="flex items-center gap-2 font-bold text-[#0f2b5c] dark:text-blue-400 hover:underline">
              View Detailed Curriculum <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.slice(0, 4).map((prog) => (
              <div 
                key={prog.id}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#0f2b5c] dark:text-blue-450 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-950 dark:text-white leading-snug">{prog.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mt-2">
                    <Clock className="h-3.5 w-3.5" /> {prog.duration}
                  </div>
                  <p className="text-xs text-slate-550 dark:text-slate-400 mt-3 leading-relaxed">
                    {prog.description.slice(0, 110)}...
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-900">
                  <Link 
                    href={`/programs#${prog.id}`}
                    className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1"
                  >
                    Outcomes & Skills <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES PREVIEW */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
              Real Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">
              Transforming Lives in Nembe
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium">
              Read how members of the Nembe community transitioned from zero computer skills to full-time careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.slice(0, 3).map((story) => (
              <div 
                key={story.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100/60 dark:border-slate-800/60 shadow-xl flex flex-col justify-between"
              >
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex-shrink-0">
                      <img src={story.image} alt={story.name} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-950 dark:text-white leading-none">{story.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-semibold">{story.cohort}</p>
                      {story.company && (
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 font-bold">{story.company}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Before</span>
                      <p className="font-semibold text-slate-700 dark:text-slate-300 mt-0.5">{story.roleBefore}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">After</span>
                      <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{story.roleAfter}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/stories" 
              className="inline-flex items-center gap-2 font-bold text-[#0f2b5c] dark:text-blue-400 hover:text-emerald-600 transition-colors group"
            >
              Meet More Graduates
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SPONSOR STUDENT CALL-TO-ACTION */}
      <section className="py-20 bg-[#0f2b5c] text-white relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/20 px-4 py-1.5 rounded-full border border-orange-500/30">
            Philanthropic Sponsorship
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Sponsor a Student. Transform a Life.
          </h2>
          <p className="text-blue-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            100% of your donation directly funds student laptops, electricity, satellite internet access, and training resources. Help us expand from 100 to 300 students in the next cohort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 text-base font-bold shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sponsor Now
              <Heart className="h-5 w-5 fill-white" />
            </Link>
            <Link
              href="/transparency"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-8 py-4 text-base font-bold border border-white/20 transition-colors"
            >
              Read Audit Reports
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
                Press Room
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b5c] dark:text-white mt-3 tracking-tight">
                Latest News & Academy Updates
              </h2>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-2 font-bold text-[#0f2b5c] dark:text-blue-400 hover:underline">
              Visit Newsroom <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.slice(0, 2).map((article) => (
              <div 
                key={article.id}
                className="group bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-[#0f2b5c] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-3">
                  <h3 className="font-extrabold text-xl text-slate-950 dark:text-white leading-snug group-hover:text-emerald-650 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-slate-200/50 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">By {article.author}</span>
                    <Link 
                      href={`/news#${article.id}`}
                      className="text-xs font-extrabold text-[#0f2b5c] dark:text-blue-400 group-hover:text-emerald-600 flex items-center gap-1"
                    >
                      Read Full Article <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARTNERS LOGO GRID */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Supporting Organizations & Strategic Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex items-center gap-2 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl filter saturate-50 hover:saturate-100 transition-all">{partner.logoUrl}</span>
                <span className="font-bold text-sm text-slate-700 dark:text-slate-350">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
