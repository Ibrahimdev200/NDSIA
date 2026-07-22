'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { initialSuccessStories, initialProjects } from '@/data/initialData';
import { 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Clock, 
  CheckCircle,
  BarChart2,
  PieChart,
  Percent,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ImpactPage() {
  const stories = initialSuccessStories;
  const projects = initialProjects;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Measurable Outcomes
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Demonstrated Social & Economic Impact
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            We measure our success by the tangible changes in our graduates' lives: income generated, businesses launched, and digital capacity retained in the Nembe community.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC COUNTER GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Cohorts Completed', value: '4' },
            { label: 'Students Graduated', value: '450+' },
            { label: 'Employment Rate', value: '85%' },
            { label: 'Women Placement', value: '52%' },
            { label: 'Businesses Started', value: '18' },
            { label: 'Remote Freelancers', value: '45+' },
            { label: 'Partner Orgs', value: '12' },
            { label: 'Training Hours', value: '12,000+' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl text-center"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] dark:text-blue-400 font-sans tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE INFOGRAPHICS (SVG CHARTS) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Alumni Growth & Demographics</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              A visual breakdown of program participation and career placement trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Chart 1: Placement Demographics */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-950 dark:text-white flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-emerald-500" />
                  Alumni Placement Channels
                </h3>
                <span className="text-xs font-bold text-slate-400">Cohort 1 - 4 Outcomes</span>
              </div>

              {/* Responsive SVG Bar Chart */}
              <div className="w-full h-64 relative flex items-end justify-around border-b border-slate-200 dark:border-slate-800 pb-2">
                {[
                  { name: 'Remote Freelance', pct: 35, color: '#0f2b5c', darkColor: '#3b82f6' },
                  { name: 'Local Corporate/ICT', pct: 30, color: '#059669', darkColor: '#10b981' },
                  { name: 'Entrepreneurship', pct: 20, color: '#ea580c', darkColor: '#f97316' },
                  { name: 'Further Education', pct: 15, color: '#64748b', darkColor: '#94a3b8' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-1/5 group">
                    {/* Tooltip percentage indicator */}
                    <div className="mb-2 bg-slate-950 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity absolute translate-y-[-110%]">
                      {item.pct}%
                    </div>
                    {/* The bar */}
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${item.pct * 2.2}px` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="w-full rounded-t-lg bg-primary hover:opacity-90 transition-opacity"
                      style={{ 
                        backgroundColor: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? item.darkColor : item.color
                      }}
                    />
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-2 text-center leading-none">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  <p className="font-bold text-slate-500">Highest Sector</p>
                  <p className="font-extrabold text-base text-[#0f2b5c] dark:text-blue-400 mt-1">Remote Contracts (35%)</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  <p className="font-bold text-slate-500">Employment Speed</p>
                  <p className="font-extrabold text-base text-emerald-600 dark:text-emerald-400 mt-1">&lt; 90 Days post-grad</p>
                </div>
              </div>
            </div>

            {/* Chart 2: Participation Demographics (Gender Equality) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-950 dark:text-white flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-emerald-500" />
                  Gender Distribution
                </h3>
                <span className="text-xs font-bold text-slate-400">Active Equality Impact</span>
              </div>

              {/* Custom SVG Pie Chart Graphic */}
              <div className="w-full h-64 flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
                  {/* Female Segment (52%) -> Stroke Dasharray representation */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="32"
                    strokeDasharray="261.38 502.65" // 52% of 502.65 circumference
                    strokeDashoffset="0"
                    className="dark:stroke-emerald-500"
                  />
                  {/* Male Segment (48%) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#0f2b5c"
                    strokeWidth="32"
                    strokeDasharray="241.27 502.65" // 48% of 502.65 circumference
                    strokeDashoffset="-261.38"
                    className="dark:stroke-blue-500"
                  />
                </svg>
              </div>

              <div className="flex justify-around items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-emerald-600 dark:bg-emerald-500 rounded" />
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">Women Empowered</p>
                    <p className="text-xs text-slate-400 mt-0.5">52% Participation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-[#0f2b5c] dark:bg-blue-500 rounded" />
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">Youth & Adults</p>
                    <p className="text-xs text-slate-400 mt-0.5">48% Participation</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BEFORE-AND-AFTER STORIES */}
      <section className="py-20 bg-white dark:bg-slate-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Case Studies
          </span>
          <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Before and After Stories</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Read direct stories showing the transformation in earnings and careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-800">
                  <img src={story.image} alt={story.name} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-950 dark:text-white leading-none">{story.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 font-semibold">{story.cohort}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl space-y-1">
                  <span className="text-[10px] font-black uppercase text-red-500 tracking-wider">Before Joining NDSIA</span>
                  <p className="font-bold text-slate-800 dark:text-slate-200 text-sm mt-0.5">{story.roleBefore}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Struggling with inconsistent basic income, zero computer literacy.</p>
                </div>
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">After Graduation</span>
                  <p className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm mt-0.5">{story.roleAfter}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Operating professional digital interfaces, earning stable monthly revenues.</p>
                </div>
              </div>

              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed italic">
                "{story.story}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROJECTS AND TARGETS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Current Impact Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Ongoing developments building infrastructure and services in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-widest ${
                    proj.status === 'completed' 
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400'
                  }`}>
                    {proj.status}
                  </span>
                  <h4 className="font-extrabold text-base text-slate-950 dark:text-white leading-tight pt-1">{proj.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed pt-1">{proj.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-250/30 dark:border-slate-800 text-xs">
                  <span className="font-bold text-slate-400 block uppercase tracking-wider text-[9px]">Impact Metric</span>
                  <p className="font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">{proj.impactMetric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
