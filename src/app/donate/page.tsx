'use client';

import React, { useState, useEffect } from 'react';
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
  const [successReceipt, setSuccessReceipt] = useState<any | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

    if (typeof window !== 'undefined' && !(window as any).Korapay) {
      setErrorMessage('Kora checkout script is loading. Please try again in a few seconds.');
      return;
    }

    setIsSubmitting(true);

    try {
      (window as any).Korapay.initialize({
        key: 'pk_live_9DGexGCNVapTDahCKfgGUjN3jmPHZoSo2XbPMci3',
        reference: `NDSIA-DON-${Date.now()}`,
        amount: finalAmount * 100,
        currency: 'NGN',
        customer: {
          name: donorName,
          email: donorEmail
        },
        onSuccess: (response: any) => {
          setIsSubmitting(false);
          setSuccessReceipt({
            receiptNumber: response.reference || `REC-${Date.now().toString().slice(-6)}`,
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
        },
        onClose: () => {
          setIsSubmitting(false);
        },
        onFailed: (error: any) => {
          setIsSubmitting(false);
          setErrorMessage(error?.message || 'Payment transaction failed. Please check your card and try again.');
        }
      });
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('An error occurred while launching Kora Checkout. Please try again.');
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

        {/* Right Column: Checkout Simulator & Confirmation */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 sticky top-24">
            
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Donation Checkout</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">Secure payment portal powered by Kora.</p>
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
                    <span>Receipt Reference</span>
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
                    <span className="font-black text-[#0f2b5c] dark:text-blue-400">₦{successReceipt.amount.toLocaleString()} NGN</span>
                  </div>
                </div>
                
                <p className="text-[10px] text-slate-450 leading-relaxed pt-1">
                  Thank you for investing in the future of Nembe! A confirmation has been registered for this transaction reference.
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
                      <span className="text-slate-950 dark:text-white">{selectedPackage.name} (₦{selectedPackage.price.toLocaleString()})</span>
                    ) : customAmount ? (
                      <span className="text-slate-950 dark:text-white">Custom Support (₦{parseFloat(customAmount).toLocaleString()})</span>
                    ) : (
                      <span className="text-slate-400">None selected (Select a package on the left)</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Full Name</label>
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
                  {isSubmitting ? 'Opening Secure Checkout...' : (
                    <>
                      Proceed to Payment (₦{getActiveAmount().toLocaleString()})
                      <Heart className="h-4.5 w-4.5 fill-white animate-pulse" />
                    </>
                  )}
                </button>
                
                <div className="flex gap-2 items-start justify-center text-[10px] text-slate-400">
                  <ShieldAlert className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Secure 256-bit encrypted checkout powered by Kora Payments.</span>
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
