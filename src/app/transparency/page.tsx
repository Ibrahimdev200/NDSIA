'use client';

import React, { useEffect, useState } from 'react';
import { useCMS } from '@/context/CMSContext';
import { 
  Download, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  DollarSign, 
  CheckCircle,
  HelpCircle,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransparencyPage() {
  const { reports, faqs } = useCMS();
  const [mounted, setMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [downloadingReportId, setDownloadingReportId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleDownloadClick = (reportId: string, title: string) => {
    setDownloadingReportId(reportId);
    setTimeout(() => {
      setDownloadingReportId(null);
      // Create mock file download
      alert(`[Mock Download] "${title}" has been generated as a PDF file and successfully saved to your downloads folder.`);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Good Governance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Transparency, Accountability, & M&E Reports
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            We operate with absolute transparency. Review our financial records, monitoring frameworks, and download audited annual reports.
          </p>
        </div>
      </section>

      {/* Financials & Budget Allocation Infographic */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <DollarSign className="h-4.5 w-4.5" />
            Financial Integrity
          </div>
          <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
            How Sponsorship Funds Are Spent
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Every dollar contributed goes directly toward delivering value. Student cohorts pay zero tuition, and our operations are continuously audited to prevent mismanagement.
          </p>

          <div className="space-y-4">
            {[
              { label: 'Tech Lab Facilities & Satellite Internet', val: '45%', color: 'bg-blue-900 dark:bg-blue-500' },
              { label: 'Student Workstations & Laptops', val: '25%', color: 'bg-emerald-600 dark:bg-emerald-500' },
              { label: 'Trainer & Mentorship Stipends', val: '20%', color: 'bg-orange-650 dark:bg-orange-500' },
              { label: 'Operational Administration & Power Backup', val: '10%', color: 'bg-slate-450 dark:bg-slate-500' }
            ].map((budget, idx) => (
              <div key={idx} className="space-y-1.5 text-sm font-semibold">
                <div className="flex justify-between">
                  <span className="text-slate-700 dark:text-slate-300">{budget.label}</span>
                  <span className="text-[#0f2b5c] dark:text-blue-400 font-extrabold">{budget.val}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${budget.color} rounded-full`} style={{ width: budget.val }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Infographic Visual Block */}
        <div className="lg:col-span-6 p-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-6">
          <h3 className="font-extrabold text-lg text-slate-950 dark:text-white flex items-center gap-2">
            <ShieldCheck className="h-5.5 w-5.5 text-emerald-600" />
            Admissions & Auditing Protocols
          </h3>
          
          <ul className="space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <li className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 dark:text-slate-200">50% Gender Equality Guarantee</strong>
                <p className="mt-1">All application classes reserve at least half of available workstations for female candidates to encourage gender equity in tech.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 dark:text-slate-200">Continuous M&E Auditing</strong>
                <p className="mt-1">We track graduate employment status at 30, 90, and 180 days post-graduation to measure the long-term impact on household income.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 dark:text-slate-200">Open-Book Reporting</strong>
                <p className="mt-1">Financial Ledgers are uploaded quarterly for review by our major strategic partners and philanthropic sponsors.</p>
              </div>
            </li>
          </ul>
        </div>

      </section>

      {/* Reports Downloads List */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Annual Disclosures & Downloads</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Click below to generate and download our audited transparency materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div 
                key={report.id}
                className="bg-white dark:bg-slate-900 border border-slate-100/60 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 text-[#0f2b5c] dark:text-blue-400 flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded uppercase tracking-wider">
                      {report.type} ({report.year})
                    </span>
                    <h4 className="font-extrabold text-base text-slate-950 dark:text-white mt-2 leading-tight">{report.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed mt-2">{report.summary}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleDownloadClick(report.id, report.title)}
                    disabled={downloadingReportId === report.id}
                    className="w-full flex items-center justify-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-xl border border-slate-200/50 dark:border-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {downloadingReportId === report.id ? 'Generating PDF...' : 'Download Report PDF'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Help Desk
          </span>
          <h2 className="text-3xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Find answers on funding distribution, curriculum access, and student admission criteria.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="border border-slate-150 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-950/20"
            >
              <button
                onClick={() => handleToggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0f2b5c] dark:text-white text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors focus:outline-none"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                  {faq.question}
                </span>
                {activeFaq === faq.id ? <ChevronUp className="h-4.5 w-4.5 text-slate-400" /> : <ChevronDown className="h-4.5 w-4.5 text-slate-400" />}
              </button>

              <AnimatePresence>
                {activeFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden border-t border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900"
                  >
                    <p className="p-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
