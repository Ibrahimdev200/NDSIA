'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Award, Heart, Calendar } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-[#0f2b5c]/10 via-transparent to-emerald-500/5 dark:from-[#0b1329] dark:to-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
            Our Journey
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
            The Genesis, Success, and Future of NDSIA
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg leading-relaxed font-medium">
            How a grassroots volunteer project in a single community classroom successfully graduated four student cohorts and is now scaling to impact thousands in Bayelsa State.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 max-w-3xl mx-auto px-4 space-y-12">
        
        {/* Part 1: How the Training Started */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Part 1</span>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">
            A Spark in the Riverine Delta
          </h2>
          <p className="text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
            In early 2025, a few educators and tech enthusiasts observed a critical bottleneck: while smartphones were ubiquitous in Nembe, computer literacy was almost non-existent. Local youths and adults lacked the computer operation skills required to apply for digital services, operate standard office software, or write digital documents. Most had never even turned on a computer before.
          </p>
          <p className="text-slate-655 dark:text-slate-400 leading-relaxed text-sm font-medium">
            With committed community support and volunteered resources, we established a temporary training academy. The curriculum focused on essential computer operations: how to turn on and navigate a computer, Microsoft Word, PowerPoint, Excel, how to search and browse the internet, and how to operate and print documents using a printer.
          </p>
        </div>

        {/* Part 2: Completion of Four Cohorts */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Part 2</span>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">
            Proof of Concept: 4 Batches, 450 Graduates
          </h2>
          <p className="text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
            What started as a trial quickly transformed into a structured community mission. Across 2025 and 2026, we have successfully run four training batches:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-2">
              <h4 className="font-extrabold text-[#0f2b5c] dark:text-blue-400">2025 Batches (1, 2, & 3)</h4>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                Trained three batches in 2025. **Batch 1** trained 100 students, **Batch 2** trained 100 students, and **Batch 3** scaled up to train 150 students. All graduates achieved confidence in basic operating systems, typing, Office suites, internet search, and printer management.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-2">
              <h4 className="font-extrabold text-emerald-600 dark:text-emerald-400">2026 Batch (4)</h4>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                Trained **Batch 4** in 2026, adding another 100 students to the alumni list. This brings the cumulative total of digital literacy graduates trained by the academy to **450 students** who are now doing exceptionally well.
              </p>
            </div>
          </div>
        </div>

        {/* Part 3: Transforming Lives */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Part 3</span>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">
            Stories of Life Transformation
          </h2>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
            The true impact of NDSIA is measured in human outcomes. Many of our graduates entered our doors with zero computer skills, struggling to find a pathway to self-reliance.
          </p>
          <div className="p-6 border-l-4 border-emerald-500 bg-emerald-500/5 rounded-r-2xl italic text-slate-700 dark:text-slate-300 text-sm sm:text-base">
            "Before NDSIA, I had never touched a computer. I relied on small retail sales to survive. After completing the Professional Track in Web Development, I started building sites for clients on Upwork. Now, I support my family, pay for my university education, and teach as a volunteer at the Academy."
            <span className="block font-bold not-italic text-xs text-[#0f2b5c] dark:text-blue-400 uppercase tracking-widest mt-2">— Tari Ella, Cohort 2 Alumna</span>
          </div>
          <p className="text-slate-650 dark:text-slate-450 leading-relaxed text-sm font-medium">
            Graduates are now employed in schools, local councils, logistics operations, and private business offices. Others operate printing hubs and digital design agencies within Bayelsa State.
          </p>
        </div>

        {/* Part 4: Why we are expanding */}
        <div className="space-y-6 pt-4 border-t border-slate-200/50 dark:border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">
            The Expansion: Scaling Our Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
            Having proven that riverine youths can achieve top-tier digital proficiency within months, the local computer class is scaling into the **Nembe Digital Skills & Innovation Academy (NDSIA)**.
          </p>
          <p className="text-slate-650 dark:text-slate-450 leading-relaxed text-sm font-medium">
            We are building a dedicated campus housing state-of-the-art labs, independent solar power grids to circumvent electrical outages, satellite broadband connections, and coworking hubs for graduate freelancers. Our goal is to train 1,000 students per year and incubate 20 tech startups in the Niger Delta by 2028.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/donate" className="flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-8 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/10">
              Sponsor Our Expansion
              <Heart className="h-4 w-4 fill-white" />
            </Link>
            <Link href="/programs" className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white font-bold px-8 py-3 rounded-full text-sm transition-colors">
              Explore Our Programs
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
