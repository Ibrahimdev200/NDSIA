'use client';

import React, { useState, useEffect } from 'react';
import { initialPartners } from '@/data/initialData';
import { ShieldCheck, Plus, CheckCircle, Handshake, Users, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartnersPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  // Partner application form state
  const [showFormModal, setShowFormModal] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('technical');
  const [orgContact, setOrgContact] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgProposal, setOrgProposal] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPartners(initialPartners);
  }, []);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orgName && orgContact && orgEmail) {
      const newPartner = {
        id: `part-${Date.now()}`,
        name: orgName,
        logoUrl: '🤝',
        type: orgType as 'sponsor' | 'academic' | 'community' | 'technical'
      };
      setPartners(prev => [...prev, newPartner]);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowFormModal(false);
        setOrgName('');
        setOrgContact('');
        setOrgEmail('');
        setOrgProposal('');
      }, 3000);
    }
  };

  const tabs = [
    { id: 'all', name: 'All Partners' },
    { id: 'sponsor', name: 'Philanthropic Sponsors' },
    { id: 'technical', name: 'Technology Partners' },
    { id: 'community', name: 'Community Alliances' }
  ];

  const filteredPartners = activeTab === 'all'
    ? partners
    : partners.filter(p => p.type === activeTab);

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Strategic Alliances
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Supporting Organizations & Strategic Partners
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            We collaborate with state government boards, digital networks, and global sponsors to deliver zero-cost education to the Nembe community.
          </p>
          <div>
            <button
              onClick={() => setShowFormModal(true)}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-sm font-bold shadow-md transition-transform active:scale-95"
            >
              <Handshake className="h-4.5 w-4.5" />
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0f2b5c] text-white dark:bg-blue-500'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-500 border border-slate-200/50 dark:border-slate-800/60 hover:bg-slate-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150/50 dark:border-slate-800/60 rounded-3xl text-center space-y-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow min-h-[160px]"
            >
              <span className="text-4xl bg-white dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200/40">
                {partner.logoUrl}
              </span>
              <div>
                <h4 className="font-extrabold text-sm text-slate-950 dark:text-white leading-tight">{partner.name}</h4>
                <span className="text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-450 mt-1 block tracking-wider">{partner.type}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Partners Value Block */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-250/30 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Sponsor Cohorts', desc: 'Fund tuition, laptops, and internet operational costs for a cohort block. Receive audited impact logs and naming rights.' },
            { title: 'Hire Technical Grads', desc: 'Bridge your company tech vacancies. Hire certified remote frontend coders, analysts, and designers directly from Nembe.' },
            { title: 'Donate Hardware', desc: 'Donate developer laptops, satellite routers, solar equipment, and lab monitors. Direct custom clearance handled by NDSIA.' }
          ].map((val, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl space-y-3">
              <h4 className="font-extrabold text-base text-slate-950 dark:text-white flex items-center justify-between">
                {val.title}
                <ArrowUpRight className="h-4.5 w-4.5 text-emerald-500" />
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed pt-1">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Application Form Modal */}
      <AnimatePresence>
        {showFormModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
            >
              <h3 className="text-2xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
                Partner Registration
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Establish a strategic alliance to support tech literacy in Bayelsa.
              </p>

              {submitSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-450 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">Proposal Received!</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your details are saved. The NDSIA partnerships coordinator will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4 mt-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Organization Name</label>
                      <input
                        type="text"
                        required
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="E.g., Tech Alliance"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Partnership Model</label>
                      <select
                        value={orgType}
                        onChange={(e) => setOrgType(e.target.value)}
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      >
                        <option value="sponsor">Financial Sponsorship</option>
                        <option value="technical">Technical / Hardware Support</option>
                        <option value="academic">Academic / Mentorship Pool</option>
                        <option value="community">Community / NGO Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Contact Person Name</label>
                      <input
                        type="text"
                        required
                        value={orgContact}
                        onChange={(e) => setOrgContact(e.target.value)}
                        placeholder="E.g., Jane Cooper"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Contact Email</label>
                      <input
                        type="email"
                        required
                        value={orgEmail}
                        onChange={(e) => setOrgEmail(e.target.value)}
                        placeholder="jane@techalliance.org"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Describe your partnership proposal</label>
                    <textarea
                      rows={3}
                      required
                      value={orgProposal}
                      onChange={(e) => setOrgProposal(e.target.value)}
                      placeholder="We wish to partner by donating workstations or hosting remote webinars..."
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowFormModal(false)}
                      className="w-1/2 p-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md transition-colors"
                    >
                      Submit Proposal
                    </button>
                  </div>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
