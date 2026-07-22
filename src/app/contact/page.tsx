'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('sponsor');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSuccess(false), 5000);
      }, 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Connect With NDSIA Administration
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Have questions about candidate admissions, volunteer trainer applications, equipment shipments, or corporate partnerships? Let us know.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Details & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Physical Campus</h3>
            <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed">
              We operate out of a modern learning facility in Nembe, Bayelsa State, fully configured with fiber-backed satellite networks and independent solar battery banks.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <MapPin className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Academy Hub</h4>
                <p className="text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                  Government Craft and Development Center, Bassambiri, Bayelsa State, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Email Address</h4>
                <p className="text-slate-500 dark:text-slate-450 mt-1">
                  General Inquiry: <a href="mailto:infondsia@outlook.com" className="text-[#0f2b5c] dark:text-blue-400 font-bold hover:underline">infondsia@outlook.com</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Telephone & WhatsApp</h4>
                <p className="text-slate-500 dark:text-slate-400 mt-1 font-semibold flex flex-wrap gap-2 items-center">
                  <span>+234 (0) 807 406 2750</span>
                  <a 
                    href="https://wa.me/2348074062750" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold transition-transform active:scale-95 shadow-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Styled Map Placeholder */}
          <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="absolute inset-0 bg-[radial-gradient(#0596690f_1px,transparent_1px)] bg-[size:16px_16px] -z-10" />
            <MapPin className="h-10 w-10 text-emerald-500" />
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Nembe Coordinates (Bayelsa State)</p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">4°32'N 6°15'E</p>
            </div>
            <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
              Located in the coastal delta region of Nigeria. Our satellite classrooms coordinate directly with the central state hub in Yenagoa.
            </p>
          </div>
        </div>

        {/* Right Column: Interaction Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
            
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mb-2">Send us a Message</h3>
            <p className="text-xs text-slate-450 dark:text-slate-550 mb-6">Select your inquiry type so we can route it directly to the responsible board member.</p>

            {success ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-450 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-extrabold text-lg text-slate-950 dark:text-white">Message Transmitted!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting NDSIA. We have received your query and will reply within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="E.g., Julius Alagoa"
                      className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E.g., julius@domain.com"
                      className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Inquiry Category</label>
                  <select 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                  >
                    <option value="sponsor">Sponsorship & Donations</option>
                    <option value="partner">Corporate Partnerships</option>
                    <option value="volunteer">Volunteer Instruction</option>
                    <option value="student">Student Admissions & Inquiries</option>
                    <option value="other">General Questions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Message / Inquiry Details</label>
                  <textarea 
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how you would like to collaborate or ask your question..."
                    className="w-full text-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[#0f2b5c] hover:bg-[#0a1d3f] disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? 'Transmitting Message...' : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
}
