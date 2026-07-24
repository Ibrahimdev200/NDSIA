'use client';

import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Gallery Database (supported by admin CMS upload mock)
const defaultPhotos = [
  { id: '1', title: 'Cohort 4 Web Development Lecture', category: 'classrooms', url: '/hero-classroom.jpg', description: 'Students learning JS syntax in the tech lab.' },
  { id: '2', title: 'Cohort 3 Graduation Celebration', category: 'graduation', url: '/graduates-hall.jpg', description: 'Over 100 students celebrated their certifications.' },
  { id: '3', title: 'Independent Solar Energy Array', category: 'infrastructure', url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80', description: 'Solar integration backup to prevent blackouts.' },
  { id: '4', title: 'Collaboration Workshop Session', category: 'workshops', url: '/group-students-1.jpg', description: 'Graduates building portfolios in groups.' },
  { id: '5', title: 'Group Practice Lab Work', category: 'workshops', url: '/group-students-2.jpg', description: 'Sharing workstation practices and assignments.' },
  { id: '6', title: 'Cohort 4 Certificate Distribution', category: 'graduation', url: '/graduates-backdrop-1.jpg', description: 'Top placement students receiving special honors.' },
  { id: '7', title: 'Hardware Orientation Class', category: 'classrooms', url: '/gallery-hardware-class.jpg', description: 'Students learning about computer hardware component assembly.' },
  { id: '8', title: 'Nembe History Presentation', category: 'workshops', url: '/gallery-nembe-presentation.jpg', description: 'A student presenting their research on the Chronicles of Nembe Traditional Pools.' },
  { id: '9', title: 'Active Classroom Session', category: 'classrooms', url: '/gallery-active-classroom.jpg', description: 'A full classroom of students working on their individual workstations.' },
  { id: '10', title: 'Cabling and Power Setup', category: 'infrastructure', url: '/gallery-cabling-setup.jpg', description: 'Students setting up UPS and power cabling backups for the computers.' },
  { id: '11', title: 'Student Group Portrait', category: 'workshops', url: '/gallery-group-portrait.jpg', description: 'A group of students posing in front of the lab green wall.' },
  { id: '12', title: 'Office Work Orientation', category: 'workshops', url: '/gallery-office-training.jpg', description: 'Students practicing printing and office coordination tasks.' },
  { id: '13', title: 'Class Presentation Group', category: 'workshops', url: '/gallery-projection-group.jpg', description: 'A student group presenting their project using the laboratory projector.' },
  { id: '14', title: 'Academic Excellence Award', category: 'graduation', url: '/gallery-award-presentation.jpg', description: 'Clarkson Faithful receiving the Best Female Academic Excellence Award.' },
  { id: '15', title: 'Outdoor Cohort Group', category: 'workshops', url: '/gallery-outdoor-group.jpg', description: 'Students and facilitators gathered outside the computer laboratory.' },
  { id: '16', title: 'Team and Student Cohort', category: 'workshops', url: '/gallery-facilitators-students.jpg', description: 'Lead facilitator Quadri Ibrahim with students in the training lab.' },
  { id: '17', title: 'Batch 4 Student Portrait', category: 'workshops', url: '/gallery-cohort-portrait.jpg', description: 'A group photo of students and instructors outside the facility.' },
  { id: '18', title: 'Computer Monitor Assembly', category: 'classrooms', url: '/gallery-monitor-assembly.jpg', description: 'Students and instructors assembling and wiring desktop monitors.' },
  { id: '19', title: 'Traditional Graduation Ceremony', category: 'graduation', url: '/gallery-traditional-celebration.jpg', description: 'Graduates celebrating in traditional Nembe attire after the ceremony.' },
  { id: '20', title: 'Best Female Academic Excellence Award', category: 'graduation', url: '/gallery-award-recipient.jpg', description: 'Ogolo Precious receiving the award for outstanding academic performance.' },
  { id: '21', title: 'Batch 4 Graduation Ceremony', category: 'graduation', url: '/gallery-cohort-graduation.jpg', description: 'Over 35 students celebrating their success after months of training.' },
  { id: '22', title: 'CBT Examination Room', category: 'classrooms', url: '/gallery-cbt-exam.jpg', description: 'A look inside the classroom set up for the computer training CBT exam.' },
  { id: '23', title: 'Active CBT Examination Hall', category: 'classrooms', url: '/gallery-exam-hall.jpg', description: 'Computers prepared for the terminal digital literacy examination.' },
  { id: '24', title: 'Hardware Wiring Discussion', category: 'classrooms', url: '/gallery-hardware-discussion.jpg', description: 'Students and facilitators discussing workstation monitor setups.' },
  { id: '25', title: 'Nembe Culture Slide Presentation', category: 'workshops', url: '/gallery-slide-presentation.jpg', description: 'A presentation on the geography, history and food culture of Nembe.' }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof defaultPhotos[0] | null>(null);
  const [photos, setPhotos] = useState(defaultPhotos);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ndsia_gallery');
      if (stored) {
        try {
          setPhotos(JSON.parse(stored));
        } catch {
          // Fallback to default
        }
      } else {
        localStorage.setItem('ndsia_gallery', JSON.stringify(defaultPhotos));
      }
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classrooms', name: 'Classrooms' },
    { id: 'graduation', name: 'Graduation' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'workshops', name: 'Workshops' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Media Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Academy Classrooms & Graduation Moments
          </h1>
          <p className="text-slate-650 dark:text-slate-350 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Photo evidence of our active computer laboratory, solar installation, and the graduating classes of Cohorts 1 to 4.
          </p>
        </div>
      </section>

      {/* Filterable Media Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0f2b5c] text-white dark:bg-blue-500'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-500 border border-slate-200/50 dark:border-slate-800/60 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl cursor-pointer transition-all relative aspect-[4/3]"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <div className="text-center space-y-2">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white mx-auto w-max">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">{photo.title}</h4>
                  <p className="text-[10px] font-bold text-slate-200 uppercase tracking-widest leading-none">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Lightbox / Overlay modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-4 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 p-2 bg-slate-950/20 text-white rounded-full hover:bg-slate-950/40 z-10"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-450 tracking-widest">{selectedPhoto.category}</span>
                <h3 className="text-xl font-extrabold text-[#0f2b5c] dark:text-white leading-tight mt-0.5">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{selectedPhoto.description}</p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
export { defaultPhotos };
