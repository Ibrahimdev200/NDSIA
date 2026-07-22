'use client';

import React, { useEffect, useState } from 'react';
import { useCMS } from '@/context/CMSContext';
import { Quote, Briefcase, Plus, CheckCircle, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SuccessStoriesPage() {
  const { stories, addStory } = useCMS();
  const [mounted, setMounted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [alumName, setAlumName] = useState('');
  const [alumCohort, setAlumCohort] = useState('Cohort 3');
  const [alumBefore, setAlumBefore] = useState('');
  const [alumAfter, setAlumAfter] = useState('');
  const [alumStory, setAlumStory] = useState('');
  const [alumCompany, setAlumCompany] = useState('');
  const [alumImage, setAlumImage] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alumName && alumBefore && alumAfter && alumStory) {
      addStory({
        name: alumName,
        cohort: alumCohort,
        roleBefore: alumBefore,
        roleAfter: alumAfter,
        story: alumStory,
        company: alumCompany || undefined,
        image: alumImage
      });
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowSubmitModal(false);
        setAlumName('');
        setAlumBefore('');
        setAlumAfter('');
        setAlumStory('');
        setAlumCompany('');
      }, 3000);
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Alumni Outcomes
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Inspiring Journeys from Classrooms to Careers
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Read comprehensive case studies of how our alumni started with zero computer experience and are now driving tech innovation in Nigeria and globally.
          </p>
          <div>
            <button 
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0f2b5c] hover:bg-[#0a1d3f] text-white px-6 py-3 text-sm font-bold shadow-md transition-transform active:scale-95"
            >
              <Plus className="h-4 w-4" />
              Submit Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all relative group"
            >
              <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-850 group-hover:text-emerald-500/25 transition-colors">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-850">
                    <img src={story.image} alt={story.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0f2b5c] dark:text-white leading-tight">{story.name}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold">{story.cohort}</p>
                    {story.company && (
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-450 mt-0.5">{story.company}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs">
                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Before</span>
                    <p className="font-semibold text-slate-700 dark:text-slate-350 mt-0.5 leading-snug">{story.roleBefore}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-emerald-600">After</span>
                    <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 leading-snug">{story.roleAfter}</p>
                  </div>
                </div>

                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed italic">
                  "{story.story}"
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Graduate Submit Testimonial Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
            >
              <h3 className="text-2xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight leading-tight">
                Submit Your Testimonial
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Share your NDSIA success journey to inspire future cohorts and donors.
              </p>

              {submitSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-450 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">Story Submitted!</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your success story has been submitted and is immediately saved in the portal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTestimonialSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={alumName}
                        onChange={(e) => setAlumName(e.target.value)}
                        placeholder="E.g., Tari Ella"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Graduating Cohort</label>
                      <select 
                        value={alumCohort}
                        onChange={(e) => setAlumCohort(e.target.value)}
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      >
                        <option>Cohort 1</option>
                        <option>Cohort 2</option>
                        <option>Cohort 3</option>
                        <option>Cohort 4</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Employment Before NDSIA</label>
                      <input 
                        type="text" 
                        required
                        value={alumBefore}
                        onChange={(e) => setAlumBefore(e.target.value)}
                        placeholder="E.g., Petty Trader"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Employment After NDSIA</label>
                      <input 
                        type="text" 
                        required
                        value={alumAfter}
                        onChange={(e) => setAlumAfter(e.target.value)}
                        placeholder="E.g., Junior Web Developer"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Company / Agency (Optional)</label>
                      <input 
                        type="text" 
                        value={alumCompany}
                        onChange={(e) => setAlumCompany(e.target.value)}
                        placeholder="E.g., Global Freelancing"
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Avatar Image URL (Optional)</label>
                      <input 
                        type="text" 
                        value={alumImage}
                        onChange={(e) => setAlumImage(e.target.value)}
                        placeholder="https://..."
                        className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Describe your transformation</label>
                    <textarea 
                      rows={3}
                      required
                      value={alumStory}
                      onChange={(e) => setAlumStory(e.target.value)}
                      placeholder="My experience with NDSIA has changed my outlook..."
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button 
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="w-1/2 p-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="w-1/2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md transition-colors"
                    >
                      Publish My Story
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
