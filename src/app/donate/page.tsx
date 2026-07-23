'use client';

import React, { useState } from 'react';
import { Heart, CheckCircle, ShieldAlert, Award, Globe, Laptop, BookOpen, School, Cpu, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    price: 50000,
    currency: '₦',
    icon: <BookOpen className="h-6 w-6" />,
    impactStatement: 'Provides one student with complete tuition, learning materials, and dedicated lab workstation access for an 8-week track.',
    details: ['8-week tuition covered', 'Classroom seat and laptop access', 'Digital study materials', 'M&E progress reports']
  },
  {
    id: 'five-students',
    name: 'Sponsor Five Students',
    price: 250000,
    currency: '₦',
    icon: <Award className="h-6 w-6" />,
    impactStatement: 'Empowers a small group of learners with professional specialization tracks and access to international freelancing portals.',
    details: ['16-week professional tracks', 'Software premium licensing pool', 'Coaching sessions with remote developers', 'Active freelancing set up guidance']
  },
  {
    id: 'internet',
    name: 'Sponsor Internet Connectivity',
    price: 500000,
    currency: '₦',
    icon: <Globe className="h-6 w-6" />,
    impactStatement: 'Covers high-speed satellite broadband internet for the entire academy lab for a period of three months.',
    details: ['Uncapped high-speed broadband', 'Enables live online coding calls', 'Allows remote freelance work on platforms', 'Funder recognition in the tech lab']
  },
  {
    id: 'equipment',
    name: 'Sponsor Lab Equipment',
    price: 1500000,
    currency: '₦',
    icon: <Cpu className="h-6 w-6" />,
    impactStatement: 'Funds three new high-end developer-grade computer workstations and local area networking switches for our lab expansion.',
    details: ['3 high-end developer computers', 'High-quality keyboards & mouse gear', 'Router & local server hardware', 'Sponsor plate on the workstations']
  },
  {
    id: 'classroom',
    name: 'Sponsor a Classroom Setup',
    price: 5000000,
    currency: '₦',
    icon: <School className="h-6 w-6" />,
    impactStatement: 'Fully equips a satellite computer classroom with desks, chairs, cooling units, and backup battery systems.',
    details: ['20 custom student computer desks', 'Ergonomic study chairs', 'Air conditioning / cooling setup', 'Backup solar battery inverter (2.5kVA)']
  },
  {
    id: 'cohort',
    name: 'Sponsor an Entire Cohort',
    price: 15000000,
    currency: '₦',
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [successReceipt, setSuccessReceipt] = useState<any | null>(null);

  const getActiveAmount = () => {
    if (selectedPackage) return selectedPackage.price;
    return parseFloat(customAmount) || 0;
  };

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setCustomAmount('');
    setErrorMessage('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedPackage(null);
    setErrorMessage('');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = getActiveAmount();
    setErrorMessage('');

    if (finalAmount <= 0) {
      setErrorMessage('Please select a package or enter a valid custom amount.');
      return;
    }
    if (!donorName || !donorEmail) {
      setErrorMessage('Please provide your name and email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission of transfer confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessReceipt({
        receiptNumber: `TRF-${Date.now().toString().slice(-6)}`,
        amount: finalAmount,
        donorName,
        donorEmail,
        packageName: selectedPackage ? selectedPackage.name : 'Custom Support Donation',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      });
      setDonorName('');
      setDonorEmail('');
      setCustomAmount('');
      setSelectedPackage(null);
    }, 1200);
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
                  <span className="text-2xl font-black text-[#0f2b5c] dark:text-blue-400">{pkg.currency}{pkg.price.toLocaleString()}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">NGN Sponsor</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Or enter a Custom Amount</h4>
            <div className="relative max-w-xs">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-base">₦</span>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="E.g., 10000"
                className="w-full pl-8 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-255 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Bank Transfers & Notification Info */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 sticky top-24">
            
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Direct Bank Transfer</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">Pay locally via bank app or transfer terminal.</p>
            </div>

            <AnimatePresence mode="wait">
              {successReceipt ? (
                <motion.div
                  key="receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-5 border border-emerald-500/10 bg-emerald-500/5 rounded-2xl space-y-5 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-450 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">Notification Submitted!</h4>
                  
                  <div className="text-left bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 p-4 rounded-xl space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1.5">
                      <span>Ref ID</span>
                      <span className="font-mono font-bold text-slate-950 dark:text-white">{successReceipt.receiptNumber}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1.5">
                      <span>Package</span>
                      <span className="font-bold text-slate-950 dark:text-white text-right truncate max-w-[150px]">{successReceipt.packageName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1.5">
                      <span>Donor Name</span>
                      <span className="font-bold text-slate-950 dark:text-white">{successReceipt.donorName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sponsor Amount</span>
                      <span className="font-black text-[#0f2b5c] dark:text-blue-400">₦{successReceipt.amount.toLocaleString()} NGN</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-400 rounded-2xl text-xs text-left space-y-2">
                    <p className="font-extrabold flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4" />
                      Required Action:
                    </p>
                    <p className="leading-relaxed text-[11px]">
                      To complete confirmation, please send a text message of the **amount** and your **name** to <strong className="font-bold text-slate-900 dark:text-white">09033675852</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <a 
                        href={`https://wa.me/2349033675852?text=Hello%20NDSIA,%20I%20just%20transferred%20%E2%82%A6${successReceipt.amount.toLocaleString()}%20for%20the%20${encodeURIComponent(successReceipt.packageName)}%20under%20the%20name%20${encodeURIComponent(successReceipt.donorName)}.%20Please%20confirm%20receipt.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow text-center text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Confirm via WhatsApp
                      </a>
                      <a 
                        href={`sms:+2349033675852?body=Hello%20NDSIA,%20I%20just%20transferred%20%E2%82%A6${successReceipt.amount.toLocaleString()}%20for%20the%20${encodeURIComponent(successReceipt.packageName)}%20under%20the%20name%20${encodeURIComponent(successReceipt.donorName)}.%20Please%20confirm%20receipt.`}
                        className="flex-grow text-center text-[10px] bg-[#0f2b5c] hover:bg-[#0a1d3f] text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Confirm via SMS
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center justify-center text-[10px] text-slate-450 dark:text-slate-500 pt-1">
                    <ShieldAlert className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Payment collection is powered by Campus Grab under Kora Payment.</span>
                  </div>

                  <button
                    onClick={() => setSuccessReceipt(null)}
                    className="text-xs font-bold text-[#0f2b5c] dark:text-blue-400 underline pt-1 cursor-pointer"
                  >
                    Sponsor Another Package
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleFormSubmit} className="space-y-5">
                  
                  {/* Selected Package Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Selected Sponsorship</label>
                    <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-250">
                      {selectedPackage ? (
                        <span className="text-slate-950 dark:text-white">{selectedPackage.name} (₦{selectedPackage.price.toLocaleString()})</span>
                      ) : customAmount ? (
                        <span className="text-slate-950 dark:text-white">Custom Support (₦{parseFloat(customAmount).toLocaleString()})</span>
                      ) : (
                        <span className="text-slate-400 text-xs">None selected (Select a tier card on the left)</span>
                      )}
                    </div>
                  </div>

                  {/* Bank Accounts Section */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Send Funds to Local Bank Account
                    </label>
                    
                    <div className="space-y-2">
                      {/* Account 1 */}
                      <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1 relative">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-black uppercase text-emerald-650 tracking-wider">United Bank For Africa (UBA)</span>
                          <button 
                            type="button"
                            onClick={() => handleCopy('6210662009')}
                            className="text-[10px] font-bold text-[#0f2b5c] dark:text-blue-400 flex items-center gap-1 hover:underline cursor-pointer"
                          >
                            {copiedText === '6210662009' ? 'Copied!' : 'Copy No'}
                          </button>
                        </div>
                        <p className="text-base font-black text-slate-950 dark:text-white font-mono tracking-wider">6210662009</p>
                        <p className="text-[10px] text-slate-450 font-bold">Account Name: CAM-RSRVD</p>
                      </div>

                      {/* Account 2 */}
                      <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1 relative">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-black uppercase text-emerald-650 tracking-wider">Parallex Bank</span>
                          <button 
                            type="button"
                            onClick={() => handleCopy('6005914013')}
                            className="text-[10px] font-bold text-[#0f2b5c] dark:text-blue-400 flex items-center gap-1 hover:underline cursor-pointer"
                          >
                            {copiedText === '6005914013' ? 'Copied!' : 'Copy No'}
                          </button>
                        </div>
                        <p className="text-base font-black text-slate-950 dark:text-white font-mono tracking-wider">6005914013</p>
                        <p className="text-[10px] text-slate-450 font-bold">Account Name: CAM-RSRVD</p>
                      </div>
                    </div>
                  </div>

                  {/* Donor Details Fields */}
                  <div className="space-y-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Funder Full Name</label>
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

                  {errorMessage && (
                    <div className="p-3 text-xs bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 rounded-xl font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || getActiveAmount() <= 0}
                    className="w-full py-4 bg-[#ea580c] hover:bg-[#c2410c] disabled:bg-slate-350 dark:disabled:bg-slate-800 text-white rounded-xl text-base font-bold transition-all shadow-md shadow-orange-500/10 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? 'Registering Transfer...' : (
                      <>
                        I Have Made the Transfer (₦{getActiveAmount().toLocaleString()})
                        <Heart className="h-4.5 w-4.5 fill-white animate-pulse" />
                      </>
                    )}
                  </button>
                  
                  <div className="p-3.5 bg-orange-550/10 border border-orange-500/20 text-orange-700 dark:text-orange-400 rounded-2xl text-[10.5px] leading-relaxed">
                    <p className="font-extrabold flex items-center gap-1 mb-1">
                      <ShieldAlert className="h-3.5 w-3.5 flex-shrink-0" />
                      Confirmation Notice:
                    </p>
                    Once payment is sent, please send a text of the **amount** and your **name** to <strong className="font-black text-slate-950 dark:text-white">09033675852</strong> for confirmation of received funds.
                  </div>

                  <div className="flex gap-2 items-center justify-center text-[10px] text-slate-450 dark:text-slate-500 pt-2">
                    <ShieldAlert className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Payment collection is powered by Campus Grab under Kora Payment.</span>
                  </div>
                </form>
              )}
            </AnimatePresence>

          </div>
        </div>

      </section>

    </div>
  );
}
export { sponsorPackages };
