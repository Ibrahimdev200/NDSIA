'use client';

import React, { useState, useEffect } from 'react';
import { useCMS } from '@/context/CMSContext';
import { 
  BarChart, 
  BookOpen, 
  Users, 
  Newspaper, 
  Image as ImageIcon, 
  MessageSquare, 
  Handshake, 
  FileText, 
  Layout, 
  HelpCircle,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  FileSpreadsheet,
  Lock,
  ExternalLink
} from 'lucide-react';
import { defaultPhotos } from '../gallery/page'; // import defaultPhotos to seed gallery additions

export default function AdminPage() {
  const cms = useCMS();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'programs' | 'students' | 'news' | 'gallery' | 'testimonials' | 'partners' | 'reports' | 'projects' | 'team' | 'faqs'>('overview');
  
  // Modal editor states
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Local state for gallery updates since it is stored in localStorage separately
  const [galleryPhotos, setGalleryPhotos] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ndsia_gallery');
      if (stored) {
        setGalleryPhotos(JSON.parse(stored));
      } else {
        setGalleryPhotos(defaultPhotos);
      }
    }
  }, []);

  const saveGallery = (updated: any[]) => {
    setGalleryPhotos(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ndsia_gallery', JSON.stringify(updated));
    }
  };

  if (!mounted) return null;

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <BarChart className="h-4 w-4" /> },
    { id: 'programs', label: 'Programs', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'students', label: 'Students Portal', icon: <Users className="h-4 w-4" /> },
    { id: 'news', label: 'News Updates', icon: <Newspaper className="h-4 w-4" /> },
    { id: 'gallery', label: 'Gallery Archive', icon: <ImageIcon className="h-4 w-4" /> },
    { id: 'testimonials', label: 'Success Testimonials', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'partners', label: 'Partners List', icon: <Handshake className="h-4 w-4" /> },
    { id: 'reports', label: 'Disclosures / Reports', icon: <FileText className="h-4 w-4" /> },
    { id: 'projects', label: 'Impact Projects', icon: <Layout className="h-4 w-4" /> },
    { id: 'team', label: 'Team Members', icon: <Users className="h-4 w-4" /> },
    { id: 'faqs', label: 'Academy FAQs', icon: <HelpCircle className="h-4 w-4" /> },
  ] as const;

  // Generic Edit Triggers
  const triggerAdd = () => {
    setEditId(null);
    setFormData({});
    setShowModal(true);
  };

  const triggerEdit = (id: string, currentData: any) => {
    setEditId(id);
    setFormData({ ...currentData });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this record? This action updates your portal database immediately.')) {
      switch (activeTab) {
        case 'programs': cms.deleteProgram(id); break;
        case 'news': cms.deleteNews(id); break;
        case 'testimonials': cms.deleteStory(id); break;
        case 'partners': cms.deletePartner(id); break;
        case 'reports': cms.deleteReport(id); break;
        case 'team': cms.deleteTeam(id); break;
        case 'faqs': cms.deleteFAQ(id); break;
        case 'projects': cms.deleteProject(id); break;
        case 'gallery':
          const updatedGallery = galleryPhotos.filter(p => p.id !== id);
          saveGallery(updatedGallery);
          break;
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editId) {
      // UPDATE ACTION
      switch (activeTab) {
        case 'programs': cms.updateProgram(editId, formData); break;
        case 'news': cms.updateNews(editId, formData); break;
        case 'testimonials': cms.updateStory(editId, formData); break;
        case 'partners': cms.updatePartner(editId, formData); break;
        case 'reports': cms.updateReport(editId, formData); break;
        case 'team': cms.updateTeam(editId, formData); break;
        case 'faqs': cms.updateFAQ(editId, formData); break;
        case 'projects': cms.updateProject(editId, formData); break;
        case 'gallery':
          const updatedGallery = galleryPhotos.map(p => p.id === editId ? formData : p);
          saveGallery(updatedGallery);
          break;
      }
    } else {
      // ADD ACTION
      switch (activeTab) {
        case 'programs': 
          cms.addProgram({
            ...formData, 
            skills: formData.skillsStr ? formData.skillsStr.split(',').map((s: string) => s.trim()) : [],
            careerPaths: formData.careerPathsStr ? formData.careerPathsStr.split(',').map((c: string) => c.trim()) : [],
            objectives: formData.objectivesStr ? formData.objectivesStr.split(',').map((o: string) => o.trim()) : [],
          }); 
          break;
        case 'news': 
          cms.addNews({
            ...formData,
            date: new Date().toISOString().split('T')[0],
            author: formData.author || 'Admin Director'
          }); 
          break;
        case 'testimonials': 
          cms.addStory(formData); 
          break;
        case 'partners': 
          cms.addPartner(formData); 
          break;
        case 'reports': 
          cms.addReport(formData); 
          break;
        case 'team': 
          cms.addTeam(formData); 
          break;
        case 'faqs': 
          cms.addFAQ(formData); 
          break;
        case 'projects': 
          cms.addProject(formData); 
          break;
        case 'gallery':
          const newPhoto = { ...formData, id: `photo-${Date.now()}` };
          saveGallery([...galleryPhotos, newPhoto]);
          break;
      }
    }
    
    setShowModal(false);
  };

  return (
    <div className="flex min-h-[80vh] bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 space-y-6 hidden md:block">
        <div className="flex items-center gap-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <Lock className="h-3.5 w-3.5" />
          NDSIA Database CMS
        </div>
        
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none ${
                activeTab === item.id
                  ? 'bg-slate-100 dark:bg-slate-800 text-[#0f2b5c] dark:text-blue-400'
                  : 'text-slate-550 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-[#0f2b5c] dark:hover:text-blue-400'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. CENTRAL PANEL CONTENT */}
      <main className="flex-grow p-6 md:p-8 space-y-6 overflow-y-auto">
        
        {/* Mobile quick tab list */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${
                activeTab === item.id ? 'bg-[#0f2b5c] text-white' : 'bg-white border border-slate-200 text-slate-650'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-black text-[#0f2b5c] dark:text-white tracking-tight uppercase">
              {activeTab} Management
            </h1>
            <p className="text-xs text-slate-400 mt-1">Updates made here directly modify local state and render in user-facing pages.</p>
          </div>
          
          {activeTab !== 'overview' && activeTab !== 'students' && (
            <button
              onClick={triggerAdd}
              className="flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-bold shadow transition-transform active:scale-95"
            >
              <Plus className="h-4 w-4" />
              Add Record
            </button>
          )}
        </div>

        {/* A. OVERVIEW VIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Registered Students', val: cms.students.length, icon: <Users className="h-6 w-6 text-blue-500" /> },
                { title: 'Active Programs', val: cms.programs.length, icon: <BookOpen className="h-6 w-6 text-emerald-500" /> },
                { title: 'Testimonials Published', val: cms.stories.length, icon: <MessageSquare className="h-6 w-6 text-orange-500" /> },
                { title: 'News Stories', val: cms.news.length, icon: <Newspaper className="h-6 w-6 text-slate-500" /> }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                    <p className="text-3xl font-black text-[#0f2b5c] dark:text-blue-400 mt-1">{stat.val}</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Live Applications Table */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-emerald-600" />
                Recent Student Applications
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase">
                      <th className="py-3 px-4">Applicant Name</th>
                      <th className="py-3 px-4">Chosen Program</th>
                      <th className="py-3 px-4">Status State</th>
                      <th className="py-3 px-4">Cohort Batch</th>
                      <th className="py-3 px-4">Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cms.students.slice(-5).reverse().map((student) => (
                      <tr key={student.id} className="border-b border-slate-100 dark:border-slate-850 text-xs font-semibold">
                        <td className="py-3.5 px-4 text-slate-900 dark:text-white font-extrabold">{student.name}</td>
                        <td className="py-3.5 px-4 text-slate-500">{student.program}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                            student.status === 'graduated' 
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-450' 
                              : student.status === 'active'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-450'
                              : 'bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-450'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">{student.cohort}</td>
                        <td className="py-3.5 px-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => cms.updateStudentStatus(student.id, 'active')}
                              className="text-xs text-blue-500 hover:underline"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => cms.updateStudentStatus(student.id, 'graduated')}
                              className="text-xs text-emerald-500 hover:underline"
                            >
                              Graduate
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* B. STUDENTS PORTAL MANAGER */}
        {activeTab === 'students' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase">
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Program Track</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Cohort</th>
                    <th className="py-3 px-4 text-right">Approve Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {cms.students.map((student) => (
                    <tr key={student.id} className="border-b border-slate-100 dark:border-slate-850 text-xs">
                      <td className="py-3 px-4 text-slate-400 font-mono">{student.id}</td>
                      <td className="py-3 px-4 font-bold text-slate-950 dark:text-white">{student.name}</td>
                      <td className="py-3 px-4 text-slate-500 font-medium">{student.program}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                          student.status === 'graduated'
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                            : student.status === 'active'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-500 font-semibold">{student.cohort}</td>
                      <td className="py-3 px-4 text-right flex justify-end gap-2.5">
                        <button
                          onClick={() => cms.updateStudentStatus(student.id, 'active')}
                          className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 text-[10px] font-bold rounded"
                        >
                          Active
                        </button>
                        <button
                          onClick={() => cms.updateStudentStatus(student.id, 'graduated')}
                          className="px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[10px] font-bold rounded"
                        >
                          Graduated
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* C. EDIT TABLES FOR OTHER SECTIONS */}
        {activeTab !== 'overview' && activeTab !== 'students' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase">
                    <th className="py-3 px-4">Title / Name</th>
                    <th className="py-3 px-4">Metadata</th>
                    <th className="py-3 px-4 text-right">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    activeTab === 'programs' ? cms.programs :
                    activeTab === 'news' ? cms.news :
                    activeTab === 'testimonials' ? cms.stories :
                    activeTab === 'partners' ? cms.partners :
                    activeTab === 'reports' ? cms.reports :
                    activeTab === 'projects' ? cms.projects :
                    activeTab === 'team' ? cms.team :
                    activeTab === 'faqs' ? cms.faqs :
                    galleryPhotos // fallback to gallery list
                  ).map((item: any) => (
                    <tr key={item.id} className="border-b border-slate-100 dark:border-slate-850 text-xs font-medium">
                      <td className="py-4 px-4">
                        <div className="font-extrabold text-slate-900 dark:text-white">{item.name || item.title || item.question}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 max-w-sm overflow-hidden truncate">
                          {item.description || item.excerpt || item.story || item.answer || item.summary || item.bio}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        {item.duration || item.date || item.cohort || item.type || item.status || item.role}
                      </td>
                      <td className="py-4 px-4 text-right space-x-2">
                        <button
                          onClick={() => triggerEdit(item.id, item)}
                          className="p-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 rounded text-blue-500 hover:text-blue-600 transition-colors inline-block"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 rounded text-red-500 hover:text-red-650 transition-colors inline-block"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>

      {/* 3. DYNAMIC DIALOG FORM EDITOR MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
            <h3 className="text-xl font-extrabold text-[#0f2b5c] dark:text-white uppercase tracking-tight">
              {editId ? 'Modify Record' : 'Create New Record'}
            </h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
              
              {/* Conditional Fields based on Active Tab */}
              
              {/* A. Programs Fields */}
              {activeTab === 'programs' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Name</label>
                      <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Duration</label>
                      <input type="text" required value={formData.duration || ''} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Category</label>
                    <select value={formData.category || 'foundation'} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl focus:outline-none">
                      <option value="foundation">foundation</option>
                      <option value="professional">professional</option>
                      <option value="accelerator">accelerator</option>
                      <option value="innovation">innovation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Skills (Comma Separated)</label>
                    <input type="text" placeholder="HTML, CSS, React" value={formData.skillsStr || (formData.skills ? formData.skills.join(', ') : '')} onChange={(e) => setFormData({ ...formData, skillsStr: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Description</label>
                    <textarea rows={3} value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* B. News Fields */}
              {activeTab === 'news' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Article Title</label>
                    <input type="text" required value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Author Name</label>
                    <input type="text" value={formData.author || ''} onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Excerpt</label>
                    <input type="text" required value={formData.excerpt || ''} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Cover Image URL</label>
                    <input type="text" value={formData.image || ''} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Article Content</label>
                    <textarea rows={4} value={formData.content || ''} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* C. Testimonial/Story Fields */}
              {activeTab === 'testimonials' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Alum Name</label>
                      <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Intake Cohort</label>
                      <input type="text" required value={formData.cohort || ''} onChange={(e) => setFormData({ ...formData, cohort: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Before State</label>
                      <input type="text" required value={formData.roleBefore || ''} onChange={(e) => setFormData({ ...formData, roleBefore: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">After Employment</label>
                      <input type="text" required value={formData.roleAfter || ''} onChange={(e) => setFormData({ ...formData, roleAfter: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Company (Optional)</label>
                    <input type="text" value={formData.company || ''} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Biography / Story</label>
                    <textarea rows={3} value={formData.story || ''} onChange={(e) => setFormData({ ...formData, story: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* D. Gallery Fields */}
              {activeTab === 'gallery' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Photo Title</label>
                    <input type="text" required value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Category</label>
                      <select value={formData.category || 'classrooms'} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl focus:outline-none">
                        <option value="classrooms">classrooms</option>
                        <option value="graduation">graduation</option>
                        <option value="infrastructure">infrastructure</option>
                        <option value="workshops">workshops</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Image URL</label>
                      <input type="text" required value={formData.url || ''} onChange={(e) => setFormData({ ...formData, url: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Short Description</label>
                    <input type="text" value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* E. Partners Fields */}
              {activeTab === 'partners' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Partner Name</label>
                    <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Logo Icon Emoji</label>
                      <input type="text" placeholder="E.g., 💼 or 🤝" value={formData.logoUrl || ''} onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Type Segment</label>
                      <select value={formData.type || 'technical'} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl focus:outline-none">
                        <option value="sponsor">sponsor</option>
                        <option value="technical">technical</option>
                        <option value="academic">academic</option>
                        <option value="community">community</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* F. Disclosures / Reports Fields */}
              {activeTab === 'reports' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Report Title</label>
                      <input type="text" required value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Publish Year</label>
                      <input type="text" required value={formData.year || ''} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Category Type</label>
                    <select value={formData.type || 'annual'} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl focus:outline-none">
                      <option value="annual">annual</option>
                      <option value="financial">financial</option>
                      <option value="impact">impact</option>
                      <option value="evaluation">evaluation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Brief Summary</label>
                    <textarea rows={3} value={formData.summary || ''} onChange={(e) => setFormData({ ...formData, summary: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* G. Team Fields */}
              {activeTab === 'team' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Member Name</label>
                      <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Role Title</label>
                      <input type="text" required value={formData.role || ''} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Avatar Image URL</label>
                    <input type="text" value={formData.image || ''} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Short Biography</label>
                    <textarea rows={3} value={formData.bio || ''} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* H. Projects Fields */}
              {activeTab === 'projects' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Project Title</label>
                    <input type="text" required value={formData.title || ''} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Status State</label>
                      <select value={formData.status || 'ongoing'} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl focus:outline-none">
                        <option value="planning">planning</option>
                        <option value="ongoing">ongoing</option>
                        <option value="completed">completed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Impact Metric</label>
                      <input type="text" required value={formData.impactMetric || ''} onChange={(e) => setFormData({ ...formData, impactMetric: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Project Description</label>
                    <textarea rows={3} value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* I. FAQs Fields */}
              {activeTab === 'faqs' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Question</label>
                    <input type="text" required value={formData.question || ''} onChange={(e) => setFormData({ ...formData, question: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Answer</label>
                    <textarea rows={4} value={formData.answer || ''} onChange={(e) => setFormData({ ...formData, answer: e.target.value })} className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none" />
                  </div>
                </>
              )}

              {/* Submission buttons */}
              <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-1/2 p-3 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                >
                  Save to Database
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
