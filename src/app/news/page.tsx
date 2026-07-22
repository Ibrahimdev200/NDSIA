'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';
import { Calendar, User, Search, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsPage() {
  const { news } = useCMS();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  useEffect(() => {
    setMounted(true);
    // Listen for hash parameter to open direct articles
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const article = news.find(n => n.id === hashId);
      if (article) {
        setSelectedArticle(article);
      }
    }
  }, [news]);

  const handleOpenArticle = (art: any) => {
    setSelectedArticle(art);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${art.id}`);
    }
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const filteredNews = news.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 min-h-screen">
      
      <AnimatePresence mode="wait">
        {selectedArticle ? (
          /* DETAILED ARTICLE VIEW */
          <motion.div
            key="article-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-6"
          >
            <button
              onClick={handleCloseArticle}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white uppercase tracking-wider focus:outline-none"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Newsroom
            </button>

            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(selectedArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                By {selectedArticle.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] dark:text-white tracking-tight leading-tight pt-2">
              {selectedArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed font-bold border-l-4 border-emerald-500 pl-4 py-1 italic">
              {selectedArticle.excerpt}
            </p>

            <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 text-sm sm:text-base whitespace-pre-line font-medium pt-4 border-t border-slate-100 dark:border-slate-800">
              {selectedArticle.content}
            </div>
          </motion.div>
        ) : (
          /* LIST VIEW */
          <motion.div
            key="article-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-hidden"
          >
            {/* Header */}
            <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
                  NDSIA Updates
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
                  News, Press Releases & Announcements
                </h1>
                <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                  Stay updated with our expanding infrastructures, graduation dates, admissions intake schedules, and local tech ecosystem developments.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto mt-4">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full text-sm focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredNews.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  No articles matched your search query. Try typing another keyword.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredNews.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => handleOpenArticle(article)}
                      className="group bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-[#0f2b5c] text-white text-xs font-bold px-3 py-1 rounded shadow flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                      <div className="p-6 md:p-8 space-y-3">
                        <h3 className="font-extrabold text-xl text-slate-950 dark:text-white leading-snug group-hover:text-emerald-650 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="pt-4 flex items-center justify-between border-t border-slate-200/50 dark:border-slate-800">
                          <span className="text-xs font-bold text-slate-400">By {article.author}</span>
                          <span className="text-xs font-extrabold text-[#0f2b5c] dark:text-blue-400 group-hover:text-emerald-600 flex items-center gap-1">
                            Read Article <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
