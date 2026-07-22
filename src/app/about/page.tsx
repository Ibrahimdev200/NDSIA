'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { initialTeam } from '@/data/initialData';
import { Shield, Users, Award, BookOpen, Target, Sparkles, Heart, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const team = initialTeam;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Empowering Minds & Transforming the Digital Landscape of Bayelsa State
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Nembe Digital Skills & Innovation Academy (NDSIA) is built upon the foundation of the successful Opu-Nembe Youth Computer Training, an initiative organized in 2025 by the **Peace Steering Committee of Opu-Nembe** under the chairmanship of **RTD former Vice Admiral Victor Ombu**. NDSIA is dedicated to equipping young people and adults with modern digital skills leading to employment, entrepreneurship, and sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* 2. MISSION, VISION, VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-4 hover:border-[#0f2b5c]/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 text-[#0f2b5c] dark:text-blue-400 flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f2b5c] dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-medium">
              To build an inclusive, tech-driven ecosystem in Bayelsa State where every individual—regardless of their background—has the skills, access, and opportunity to thrive in the global digital economy.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-4 hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f2b5c] dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-medium">
              To deliver free, world-class computer literacy and professional software education that transitions learners from absolute computer beginners into self-sufficient remote freelancers, employees, and digital business founders.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Our Core Anchors</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              The values that guide our trainers, structure our curriculum, and build donor confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Inclusivity First', desc: 'We reserve at least 50% of cohort placements for women and disadvantaged youths, bridging the gender tech divide.', icon: <Users className="h-6 w-6" /> },
              { title: 'Radical Transparency', desc: 'We publish annual impact and audited financial reports so donors see exactly how funds translate to life-changing results.', icon: <Shield className="h-6 w-6" /> },
              { title: 'Excellence & Livelihood', desc: 'We focus on practical, project-based curriculum designed around standard international tracks leading directly to income.', icon: <Award className="h-6 w-6" /> }
            ].map((value, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm text-center space-y-4"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 text-[#0f2b5c] dark:text-blue-400 flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-950 dark:text-white">{value.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET THE TEAM */}
      <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Our Leaders
          </span>
          <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Meet the NDSIA Board & Instructors</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            The passionate administrators and software developers bringing tech literacy to Nembe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-square w-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-extrabold text-lg text-slate-950 dark:text-white">{member.name}</h4>
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{member.role}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JOIN US CALL TO ACTION */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Become Part of the Story</h2>
          <p className="text-slate-650 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Whether you want to sponsor equipment, hire our talented graduates, volunteer as an instructor, or apply for our next student cohort, we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow shadow-orange-500/10">
              Sponsor a Student
            </Link>
            <Link href="/contact" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-slate-100 transition-all">
              Partner or Volunteer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
