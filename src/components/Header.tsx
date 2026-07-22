'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCMS } from '@/context/CMSContext';
import { NDSIALogo } from './NDSIALogo';
import { Menu, X, ChevronDown, Sun, Moon, Lock, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useCMS();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Skip header on admin dashboard routes to give more workspace
  const isAdminRoute = pathname?.startsWith('/admin');

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Academy',
      dropdown: [
        { name: 'About NDSIA', href: '/about' },
        { name: 'Our Story', href: '/story' },
        { name: 'Programs & Tracks', href: '/programs' },
      ],
    },
    {
      name: 'Our Impact',
      dropdown: [
        { name: 'Impact Dashboard', href: '/impact' },
        { name: 'Success Stories', href: '/stories' },
        { name: 'Media Gallery', href: '/gallery' },
      ],
    },
    {
      name: 'Governance',
      dropdown: [
        { name: 'Transparency & Reports', href: '/transparency' },
        { name: 'Partners & Sponsors', href: '/partners' },
      ],
    },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (items: { href: string }[]) => items.some((item) => pathname === item.href);

  if (isAdminRoute) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <NDSIALogo className="h-8" />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-50"
          >
            <Lock className="h-3.5 w-3.5" />
            Admin Panel
          </Link>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary-hover flex items-center gap-1"
          >
            View Site <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <NDSIALogo showTagline className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${
                    isDropdownActive(item.dropdown)
                      ? 'text-[#0f2b5c] dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0f2b5c] dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={item.href!}
                  className={`text-[15px] font-medium transition-colors ${
                    isActive(item.href!)
                      ? 'text-[#0f2b5c] dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0f2b5c] dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-900 p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive(subItem.href)
                          ? 'bg-slate-100 dark:bg-slate-800 text-[#0f2b5c] dark:text-blue-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#0f2b5c] dark:hover:text-blue-400'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Link
            href="/admin"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
            title="Admin CMS Portal"
          >
            <Lock className="h-4 w-4" />
          </Link>

          <Link
            href="/donate"
            className="flex items-center gap-2 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-95"
          >
            <Heart className="h-4 w-4 fill-white" />
            Sponsor a Student
          </Link>
        </div>

        {/* Mobile Actions Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-slate-100 dark:bg-slate-800 text-[#0f2b5c] dark:text-blue-400 font-semibold'
                                  : 'text-slate-600 dark:text-slate-400 hover:text-[#0f2b5c] dark:hover:text-blue-400'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-semibold rounded-md transition-colors ${
                        isActive(item.href!)
                          ? 'bg-slate-100 dark:bg-slate-800 text-[#0f2b5c] dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg"
                >
                  <Lock className="h-4 w-4" /> Admin Portal
                </Link>
                
                <Link
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white py-3 text-base font-bold transition-all shadow-md shadow-orange-500/10"
                >
                  <Heart className="h-5 w-5 fill-white" /> Sponsor a Student
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
