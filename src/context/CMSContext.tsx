'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Program,
  SuccessStory,
  NewsArticle,
  Partner,
  Report,
  TeamMember,
  FAQ,
  Project,
  Student,
  initialPrograms,
  initialSuccessStories,
  initialNews,
  initialPartners,
  initialReports,
  initialTeam,
  initialFAQs,
  initialProjects
} from '../data/initialData';

interface CMSContextType {
  programs: Program[];
  stories: SuccessStory[];
  news: NewsArticle[];
  partners: Partner[];
  reports: Report[];
  team: TeamMember[];
  faqs: FAQ[];
  projects: Project[];
  students: Student[];
  darkMode: boolean;
  toggleDarkMode: () => void;
  
  // Update functions
  addProgram: (p: Omit<Program, 'id'>) => void;
  updateProgram: (id: string, p: Program) => void;
  deleteProgram: (id: string) => void;

  addStory: (s: Omit<SuccessStory, 'id'>) => void;
  updateStory: (id: string, s: SuccessStory) => void;
  deleteStory: (id: string) => void;

  addNews: (n: Omit<NewsArticle, 'id'>) => void;
  updateNews: (id: string, n: NewsArticle) => void;
  deleteNews: (id: string) => void;

  addPartner: (p: Omit<Partner, 'id'>) => void;
  updatePartner: (id: string, p: Partner) => void;
  deletePartner: (id: string) => void;

  addReport: (r: Omit<Report, 'id'>) => void;
  updateReport: (id: string, r: Report) => void;
  deleteReport: (id: string) => void;

  addTeam: (t: Omit<TeamMember, 'id'>) => void;
  updateTeam: (id: string, t: TeamMember) => void;
  deleteTeam: (id: string) => void;

  addFAQ: (f: Omit<FAQ, 'id'>) => void;
  updateFAQ: (id: string, f: FAQ) => void;
  deleteFAQ: (id: string) => void;

  addProject: (p: Omit<Project, 'id'>) => void;
  updateProject: (id: string, p: Project) => void;
  deleteProject: (id: string) => void;

  addStudent: (s: Omit<Student, 'id'>) => void;
  updateStudentStatus: (id: string, status: 'active' | 'graduated' | 'applied') => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getOrInit = <T,>(key: string, initial: T): T => {
        const val = localStorage.getItem(key);
        if (val) {
          try {
            return JSON.parse(val) as T;
          } catch {
            return initial;
          }
        }
        localStorage.setItem(key, JSON.stringify(initial));
        return initial;
      };

      setPrograms(getOrInit('ndsia_programs', initialPrograms));
      setStories(getOrInit('ndsia_stories', initialSuccessStories));
      setNews(getOrInit('ndsia_news', initialNews));
      setPartners(getOrInit('ndsia_partners', initialPartners));
      setReports(getOrInit('ndsia_reports', initialReports));
      setTeam(getOrInit('ndsia_team', initialTeam));
      setFaqs(getOrInit('ndsia_faqs', initialFAQs));
      setProjects(getOrInit('ndsia_projects', initialProjects));
      
      const initialStudents: Student[] = [
        { id: 'stud-1', name: 'Tari Ella', program: 'Professional Tracks', status: 'graduated', cohort: 'Cohort 2' },
        { id: 'stud-2', name: 'Ebi Joseph', program: 'Foundation Programme', status: 'graduated', cohort: 'Cohort 1' },
        { id: 'stud-3', name: 'Boma Harrison', program: 'Professional Tracks', status: 'graduated', cohort: 'Cohort 3' },
        { id: 'stud-4', name: 'Michael Kiri', program: 'Foundation Programme', status: 'active', cohort: 'Cohort 4' },
        { id: 'stud-5', name: 'Tamara Ayiba', program: 'Professional Tracks', status: 'active', cohort: 'Cohort 4' }
      ];
      setStudents(getOrInit('ndsia_students', initialStudents));

      const savedTheme = localStorage.getItem('ndsia_theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
      setInitialized(true);
    }
  }, []);

  // Save helper
  const save = (key: string, data: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (typeof window !== 'undefined') {
      if (nextMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('ndsia_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('ndsia_theme', 'light');
      }
    }
  };

  // Program CMS Actions
  const addProgram = (p: Omit<Program, 'id'>) => {
    const newProg = { ...p, id: `prog-${Date.now()}` };
    const updated = [...programs, newProg];
    setPrograms(updated);
    save('ndsia_programs', updated);
  };
  const updateProgram = (id: string, p: Program) => {
    const updated = programs.map((x) => (x.id === id ? p : x));
    setPrograms(updated);
    save('ndsia_programs', updated);
  };
  const deleteProgram = (id: string) => {
    const updated = programs.filter((x) => x.id !== id);
    setPrograms(updated);
    save('ndsia_programs', updated);
  };

  // Success Story CMS Actions
  const addStory = (s: Omit<SuccessStory, 'id'>) => {
    const newStory = { ...s, id: `story-${Date.now()}` };
    const updated = [...stories, newStory];
    setStories(updated);
    save('ndsia_stories', updated);
  };
  const updateStory = (id: string, s: SuccessStory) => {
    const updated = stories.map((x) => (x.id === id ? s : x));
    setStories(updated);
    save('ndsia_stories', updated);
  };
  const deleteStory = (id: string) => {
    const updated = stories.filter((x) => x.id !== id);
    setStories(updated);
    save('ndsia_stories', updated);
  };

  // News CMS Actions
  const addNews = (n: Omit<NewsArticle, 'id'>) => {
    const newNews = { ...n, id: `news-${Date.now()}` };
    const updated = [newNews, ...news];
    setNews(updated);
    save('ndsia_news', updated);
  };
  const updateNews = (id: string, n: NewsArticle) => {
    const updated = news.map((x) => (x.id === id ? n : x));
    setNews(updated);
    save('ndsia_news', updated);
  };
  const deleteNews = (id: string) => {
    const updated = news.filter((x) => x.id !== id);
    setNews(updated);
    save('ndsia_news', updated);
  };

  // Partner CMS Actions
  const addPartner = (p: Omit<Partner, 'id'>) => {
    const newPartner = { ...p, id: `part-${Date.now()}` };
    const updated = [...partners, newPartner];
    setPartners(updated);
    save('ndsia_partners', updated);
  };
  const updatePartner = (id: string, p: Partner) => {
    const updated = partners.map((x) => (x.id === id ? p : x));
    setPartners(updated);
    save('ndsia_partners', updated);
  };
  const deletePartner = (id: string) => {
    const updated = partners.filter((x) => x.id !== id);
    setPartners(updated);
    save('ndsia_partners', updated);
  };

  // Report CMS Actions
  const addReport = (r: Omit<Report, 'id'>) => {
    const newReport = { ...r, id: `rep-${Date.now()}` };
    const updated = [newReport, ...reports];
    setReports(updated);
    save('ndsia_reports', updated);
  };
  const updateReport = (id: string, r: Report) => {
    const updated = reports.map((x) => (x.id === id ? r : x));
    setReports(updated);
    save('ndsia_reports', updated);
  };
  const deleteReport = (id: string) => {
    const updated = reports.filter((x) => x.id !== id);
    setReports(updated);
    save('ndsia_reports', updated);
  };

  // Team Member CMS Actions
  const addTeam = (t: Omit<TeamMember, 'id'>) => {
    const newTeam = { ...t, id: `team-${Date.now()}` };
    const updated = [...team, newTeam];
    setTeam(updated);
    save('ndsia_team', updated);
  };
  const updateTeam = (id: string, t: TeamMember) => {
    const updated = team.map((x) => (x.id === id ? t : x));
    setTeam(updated);
    save('ndsia_team', updated);
  };
  const deleteTeam = (id: string) => {
    const updated = team.filter((x) => x.id !== id);
    setTeam(updated);
    save('ndsia_team', updated);
  };

  // FAQ CMS Actions
  const addFAQ = (f: Omit<FAQ, 'id'>) => {
    const newFAQ = { ...f, id: `faq-${Date.now()}` };
    const updated = [...faqs, newFAQ];
    setFaqs(updated);
    save('ndsia_faqs', updated);
  };
  const updateFAQ = (id: string, f: FAQ) => {
    const updated = faqs.map((x) => (x.id === id ? f : x));
    setFaqs(updated);
    save('ndsia_faqs', updated);
  };
  const deleteFAQ = (id: string) => {
    const updated = faqs.filter((x) => x.id !== id);
    setFaqs(updated);
    save('ndsia_faqs', updated);
  };

  // Project CMS Actions
  const addProject = (p: Omit<Project, 'id'>) => {
    const newProj = { ...p, id: `proj-${Date.now()}` };
    const updated = [...projects, newProj];
    setProjects(updated);
    save('ndsia_projects', updated);
  };
  const updateProject = (id: string, p: Project) => {
    const updated = projects.map((x) => (x.id === id ? p : x));
    setProjects(updated);
    save('ndsia_projects', updated);
  };
  const deleteProject = (id: string) => {
    const updated = projects.filter((x) => x.id !== id);
    setProjects(updated);
    save('ndsia_projects', updated);
  };

  // Student Actions
  const addStudent = (s: Omit<Student, 'id'>) => {
    const newStud = { ...s, id: `stud-${Date.now()}` };
    const updated = [...students, newStud];
    setStudents(updated);
    save('ndsia_students', updated);
  };
  const updateStudentStatus = (id: string, status: 'active' | 'graduated' | 'applied') => {
    const updated = students.map((x) => (x.id === id ? { ...x, status } : x));
    setStudents(updated);
    save('ndsia_students', updated);
  };

  return (
    <CMSContext.Provider
      value={{
        programs,
        stories,
        news,
        partners,
        reports,
        team,
        faqs,
        projects,
        students,
        darkMode,
        toggleDarkMode,
        addProgram,
        updateProgram,
        deleteProgram,
        addStory,
        updateStory,
        deleteStory,
        addNews,
        updateNews,
        deleteNews,
        addPartner,
        updatePartner,
        deletePartner,
        addReport,
        updateReport,
        deleteReport,
        addTeam,
        updateTeam,
        deleteTeam,
        addFAQ,
        updateFAQ,
        deleteFAQ,
        addProject,
        updateProject,
        deleteProject,
        addStudent,
        updateStudentStatus
      }}
    >
      {initialized ? children : <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-800 dark:text-slate-200">Loading Academy Portal...</div>}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
