'use client';

import React, { useState } from 'react';
import { Heart, CheckCircle, ShieldAlert, Award, Globe, Laptop, BookOpen, School, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface Package {
  id: string;
  name: string;
  price: number;
  currency: string;
  icon: React.ReactNode;
  impactStatement: string;
  details: string[];
}

const sponsorPackages: Package[] = [
  {
    id: 'one-student',
    name: 'Sponsor One Student',
    price: 50,
    currency: '$',
    icon: <BookOpen className="h-6 w-6" />,
    impactStatement: 'Provides one student with complete tuition, learning materials, and dedicated lab workstation access for an 8-week track.',
    details: ['8-week tuition covered', 'Classroom seat and laptop access', 'Digital study materials', 'M&E progress reports']
  },
  {
    id: 'five-students',
    name: 'Sponsor Five Students',
    price: 250,
    currency: '$',
    icon: <Award className="h-6 w-6" />,
    impactStatement: 'Empowers a small group of learners with professional specialization tracks and access to international freelancing portals.',
    details: ['16-week professional tracks', 'Software premium licensing pool', 'Coaching sessions with remote developers', 'Active freelancing set up guidance']
  },
  {
    id: 'internet',
    name: 'Sponsor Internet Connectivity',
    price: 500,
    currency: '$',
    icon: <Globe className="h-6 w-6" />,
    impactStatement: 'Covers high-speed satellite broadband internet for the entire academy lab for a period of three months.',
    details: ['Uncapped high-speed broadband', 'Enables live online coding calls', 'Allows remote freelance work on platforms', 'Funder recognition in the tech lab']
  },
  {
    id: 'equipment',
    name: 'Sponsor Lab Equipment',
    price: 1500,
    currency: '$',
    icon: <Cpu className="h-6 w-6" />,
    impactStatement: 'Funds three new high-end developer-grade computer workstations and local area networking switches for our lab expansion.',
    details: ['3 high-end developer computers', 'High-quality keyboards & mouse gear', 'Router & local server hardware', 'Sponsor plate on the workstations']
  },
  {
    id: 'classroom',
    name: 'Sponsor a Classroom Setup',
    price: 5000,
    currency: '$',
    icon: <School className="h-6 w-6" />,
    impactStatement: 'Fully equips a satellite computer classroom with desks, chairs, cooling units, and backup battery systems.',
    details: ['20 custom student computer desks', 'Ergonomic study chairs', 'Air conditioning / cooling setup', 'Backup solar battery inverter (2.5kVA)']
  },
  {
    id: 'cohort',
    name: 'Sponsor an Entire Cohort',
    price: 15000,
    currency: '$',
    icon: <Heart className="h-6 w-6" />,
    impactStatement: 'Complete sponsorship for a community intake of 60 students: tuition, hardware, satellite internet, solar backup, and mentors.',
    details: ['60 students fully trained', 'Facility operating costs for 4 months', 'Stipends for lead local instructors', 'Dedicated cohort landing page and donor audit']
  }
];

export default function DonatePage() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<any | null>(null);

  const getActiveAmount = () => {
    if (selectedPackage) return selectedPackage.price;
    return parseFloat(customAmount) || 0;
  };

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedPackage(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = getActiveAmount();
    if (finalAmount > 0 && donorName && donorEmail) {
      setIsSubmitting(true);
      
      // Simulate transaction processing
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessReceipt({
          receiptNumber: `REC-${Date.now().toString().slice(-6)}`,
          amount: finalAmount,
          donorName,
          donorEmail,
          packageName: selectedPackage ? selectedPackage.name : 'Custom Support Donation',
          date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        });
        
        // Reset form inputs
        setDonorName('');
        setDonorEmail('');
        setCardNumber('');
        setCardExpiry('');
        setCardCVV('');
      }, 2500);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f2b5c]/10 via-transparent to-orange-500/5 dark:from-[#0b1329] dark:to-slate-900 border-b border-slate-250/30 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold text-[#ea580c] dark:text-orange-400 uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
            Support NDSIA
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
            Sponsor Digital Empowerment.
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg leading-relaxed font-medium">
            Join international foundations and local partners. 100% of individual contributions are spent on classroom facilities and technical resources.
          </p>
        </div>
      </section>

      {/* Main Donation Interaction */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Tiers Selection */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Choose a Sponsorship Package</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">Every package corresponds to an exact, audited outcome inside our academy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sponsorPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => handleSelectPackage(pkg)}
                className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col justify-between hover:shadow-lg ${
                  selectedPackage?.id === pkg.id
                    ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-500/5 shadow-md shadow-emerald-500/5'
                    : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-slate-200'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    selectedPackage?.id === pkg.id 
                      ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-400 dark:text-slate-500'
                  }`}>
                    {pkg.icon}
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{pkg.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">{pkg.impactStatement}</p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-slate-850 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#0f2b5c] dark:text-blue-400">{pkg.currency}{pkg.price}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">USD Sponsor</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Or enter a Custom Amount</h4>
            <div className="relative max-w-xs">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-base">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="E.g., 100"
                className="w-full pl-8 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Checkout Simulator & Confirmation */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 sticky top-24">
            
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Transaction Simulator</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">Secure, encrypted sandbox checkout.</p>
            </div>

            {successReceipt ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 border border-emerald-500/10 bg-emerald-500/5 rounded-2xl space-y-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-450 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Sponsorship Confirmed!</h4>
                
                <div className="text-left bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 p-4 rounded-xl space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1.5">
                    <span>Receipt Number</span>
                    <span className="font-mono font-bold text-slate-950 dark:text-white">{successReceipt.receiptNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1.5">
                    <span>Package Tier</span>
                    <span className="font-bold text-slate-950 dark:text-white">{successReceipt.packageName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1.5">
                    <span>Funder Name</span>
                    <span className="font-bold text-slate-950 dark:text-white">{successReceipt.donorName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Donation Amount</span>
                    <span className="font-black text-[#0f2b5c] dark:text-blue-400">${successReceipt.amount} USD</span>
                  </div>
                </div>
                
                <p className="text-[10px] text-slate-450 leading-relaxed pt-1">
                  Thank you for investing in the future of Nembe! A mock tax receipt has been generated and dispatched to your simulated inbox.
                </p>
                <button
                  onClick={() => setSuccessReceipt(null)}
                  className="text-xs font-bold text-[#0f2b5c] dark:text-blue-400 underline pt-1"
                >
                  Sponsor Another package
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Selected Package</label>
                  <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-250">
                    {selectedPackage ? (
                      <span className="text-slate-950 dark:text-white">{selectedPackage.name} (${selectedPackage.price})</span>
                    ) : customAmount ? (
                      <span className="text-slate-950 dark:text-white">Custom Support (${customAmount})</span>
                    ) : (
                      <span className="text-slate-400">None selected</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Donor Name</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="jane@foundation.org"
                      className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="h-px bg-slate-200/60 dark:bg-slate-800/60 my-2" />

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Card Number</label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4000 1234 5678 9010"
                    className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Expiry Date</label>
                    <input
                      type="text"
                      required
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">CVV</label>
                    <input
                      type="password"
                      required
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value)}
                      placeholder="123"
                      className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || getActiveAmount() <= 0}
                  className="w-full py-4 bg-[#ea580c] hover:bg-[#c2410c] disabled:bg-slate-350 dark:disabled:bg-slate-800 text-white rounded-xl text-base font-bold transition-all shadow-md shadow-orange-500/10 active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Verifying Sandbox Card...' : (
                    <>
                      Confirm Sponsor Payment (${getActiveAmount()})
                      <Heart className="h-4.5 w-4.5 fill-white" />
                    </>
                  )}
                </button>
                
                <div className="flex gap-2 items-start justify-center text-[10px] text-slate-400">
                  <ShieldAlert className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Sandbox Simulator. No real billing or debit charges are triggered.</span>
                </div>
              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
}
export { sponsorPackages };
