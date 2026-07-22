export interface Program {
  id: string;
  name: string;
  duration: string;
  skills: string[];
  outcomes: string;
  careerPaths: string[];
  objectives: string[];
  description: string;
  category: 'foundation' | 'professional' | 'accelerator' | 'innovation';
}

export interface Student {
  id: string;
  name: string;
  program: string;
  status: 'active' | 'graduated' | 'applied';
  cohort: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  cohort: string;
  roleBefore: string;
  roleAfter: string;
  story: string;
  image: string;
  company?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  type: 'sponsor' | 'academic' | 'community' | 'technical';
}

export interface Report {
  id: string;
  title: string;
  type: 'annual' | 'financial' | 'impact' | 'evaluation';
  year: string;
  downloadUrl: string;
  summary: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'ongoing' | 'completed';
  impactMetric: string;
}

export const initialPrograms: Program[] = [
  {
    id: 'prog-1',
    name: 'Foundation Programme',
    duration: '8 Weeks',
    skills: ['Computer Operations', 'Internet Navigation', 'Word Processing', 'Spreadsheets', 'Basic Cybersecurity'],
    outcomes: 'Digital Literacy Certification, preparation for professional digital roles.',
    careerPaths: ['Office Administrator', 'Data Entry Specialist', 'Customer Support Associate'],
    objectives: [
      'Understand core computer hardware and software operations.',
      'Perform standard office administrative tasks using office suites.',
      'Develop safe internet browsing and digital communication habits.'
    ],
    description: 'Designed for absolute beginners. This programme takes individuals with zero computer knowledge and builds their foundational digital literacy and confidence, opening the door to further specialization.',
    category: 'foundation'
  },
  {
    id: 'prog-2',
    name: 'Professional Tracks',
    duration: '16 Weeks',
    skills: ['Full-Stack Web Development', 'Data Analytics', 'Digital Marketing & Content Creation', 'UI/UX Product Design'],
    outcomes: 'Industry-recognized portfolio, technical proficiency certification.',
    careerPaths: ['Frontend Developer', 'Data Analyst', 'Social Media Manager', 'Junior UI/UX Designer'],
    objectives: [
      'Build dynamic and responsive websites using modern HTML/CSS/React.',
      'Analyze data sets to drive business decisions using Python and SQL.',
      'Plan and execute multi-channel digital marketing campaigns.'
    ],
    description: 'Rigorous technical tracks designed to equip students with specialized, high-demand skills requested by regional and international employers.',
    category: 'professional'
  },
  {
    id: 'prog-3',
    name: 'Career Accelerator',
    duration: '6 Weeks',
    skills: ['Resume Branding', 'Interview Preparation', 'Freelancing (Upwork/Fiverr)', 'Professional Ethics'],
    outcomes: 'Job readiness portfolio, freelance setup, active job applications submitted.',
    careerPaths: ['Global Remote Worker', 'Freelance Specialist', 'Corporate Professional'],
    objectives: [
      'Optimize professional profiles (LinkedIn, resumes, portfolio website).',
      'Establish a freelance footprint and bid for global contracts.',
      'Navigate interview processes and contract negotiations with confidence.'
    ],
    description: 'Bridges the gap between technical skills and employment. We guide graduates through job searches, interview coaching, and setting up international freelance accounts.',
    category: 'accelerator'
  },
  {
    id: 'prog-4',
    name: 'Innovation & Entrepreneurship Lab',
    duration: 'Continuous',
    skills: ['Design Thinking', 'Business Modeling', 'Pitching', 'Agile Product Development'],
    outcomes: 'Functional MVP (Minimum Viable Product), business registration, pitch deck.',
    careerPaths: ['Tech Founder', 'Product Manager', 'Social Entrepreneur'],
    objectives: [
      'Identify local challenges and design digital products to address them.',
      'Build sustainable business plans and secure seed funding.',
      'Launch scalable startups that employ community youth.'
    ],
    description: 'An incubator for ideas. We provide mentorship, internet access, electricity, and seed grants to help alumni build tech-enabled startups solving real-world challenges in the Niger Delta.',
    category: 'innovation'
  }
];

export const initialSuccessStories: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Tari Ella',
    cohort: 'Cohort 2 Graduate',
    roleBefore: 'Unemployed High School Graduate',
    roleAfter: 'Frontend Developer',
    story: 'Before joining NDSIA, Tari had never touched a computer. Through the Foundation and Professional Web Development courses, she learned coding. Today, she works remotely for a fintech agency and leads coding workshops for local girls.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    company: 'PayFlex Africa'
  },
  {
    id: 'story-2',
    name: 'Ebi Joseph',
    cohort: 'Cohort 1 Graduate',
    roleBefore: 'Petty Trader / Retail Assistant',
    roleAfter: 'Founder & Managing Director',
    story: 'Ebi learned digital marketing and office systems. Realizing the gap in local logistics services, he started a tech-enabled delivery agency. He now manages a team of five and handles local delivery for Bayelsa merchants.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    company: 'Nembe Express Courier'
  },
  {
    id: 'story-3',
    name: 'Boma Harrison',
    cohort: 'Cohort 3 Graduate',
    roleBefore: 'Junior School Teacher',
    roleAfter: 'ICT Coordinator & Database Admin',
    story: 'Boma entered the data analytics track to upskill. He was quickly promoted to ICT coordinator at his educational institution, modernizing their record system and training fellow teachers in spreadsheet management.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80'
  }
];

export const initialNews: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'NDSIA Cohort 4 Celebrates 85% Post-Graduation Employment Rate',
    excerpt: 'Our recently concluded cohort of 120 students shows record-breaking outcomes in local placements and digital freelance work.',
    content: 'We are incredibly proud to publish the outcomes of our fourth community cohort. Through direct partnerships with Bayelsa businesses and global freelancing programs, over 85% of graduates have secured full-time roles or consistent freelance projects within 90 days of graduation. The graduation ceremony was attended by community leaders and youth advocates.',
    date: '2026-06-15',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
    author: 'Precious Alagoa'
  },
  {
    id: 'news-2',
    title: 'Expanding Our Digital Lab: New Partnership with Tech Alliance',
    excerpt: 'A donation of high-speed satellite hardware and 40 workstations will double our student capacity for the upcoming intake.',
    content: 'Through a newly formed agreement with the Regional Digital Alliance, the Academy will receive major infrastructure upgrades. This includes state-of-the-art satellite internet terminal setups and forty high-end workstations. These improvements will allow us to double classroom sizes for our next cohort, starting in September.',
    date: '2026-07-02',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80',
    author: 'Tari Ella'
  }
];

export const initialPartners: Partner[] = [
  { id: 'part-1', name: 'Bayelsa State Tech Hub', logoUrl: '💼', type: 'technical' },
  { id: 'part-2', name: 'Global Empowerment Trust', logoUrl: '🌍', type: 'sponsor' },
  { id: 'part-3', name: 'Niger Delta Development Foundation', logoUrl: '🌱', type: 'community' },
  { id: 'part-4', name: 'CloudNet Infrastructure', logoUrl: '☁️', type: 'technical' }
];

export const initialReports: Report[] = [
  {
    id: 'rep-1',
    title: '2025 Annual Impact Report',
    type: 'annual',
    year: '2025',
    downloadUrl: '#',
    summary: 'A detailed breakdown of student recruitment, program outcomes, gender equality impact, and operational achievements in 2025.'
  },
  {
    id: 'rep-2',
    title: 'Audited Financial Statement Q1-Q4',
    type: 'financial',
    year: '2025',
    downloadUrl: '#',
    summary: 'Full transparency disclosure on incoming grant funding, sponsorship distribution, infrastructure costs, and trainer stipends.'
  },
  {
    id: 'rep-3',
    title: 'Monitoring & Evaluation (M&E) Framework',
    type: 'evaluation',
    year: '2026',
    downloadUrl: '#',
    summary: 'Methodology and tracking criteria used to evaluate long-term graduate career retention and community poverty reduction.'
  }
];

export const initialTeam: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Julius Alagoa',
    role: 'Founder & Executive Director',
    bio: 'Academic and community leader with 15+ years of experience advocating for educational development in the Niger Delta.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'team-2',
    name: 'Precious Alagoa',
    role: 'Program Director & Co-Founder',
    bio: 'Software engineer and educator. Passionate about bringing world-class tech training to remote communities.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'team-3',
    name: 'Tari Ella',
    role: 'Lead Technical Instructor',
    bio: 'Former NDSIA graduate, now a professional frontend developer returning as an instructor to guide the next generation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
  }
];

export const initialFAQs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How much does training at the Academy cost?',
    answer: 'All foundational programs and career tracks are 100% tuition-free for selected candidates. Our operations are fully funded through sponsorships, philanthropic donations, and corporate grants.'
  },
  {
    id: 'faq-2',
    question: 'Who is eligible to apply for the programs?',
    answer: 'We accept applicants from 16 to 45 years of age. No prior computer experience is required for the Foundation Programme. Candidates must demonstrate high motivation, commitment to attend all sessions, and a desire to seek employment or start a digital business.'
  },
  {
    id: 'faq-3',
    question: 'Where is the Academy located?',
    answer: 'Our main physical laboratory is in Nembe, Bayelsa State, Nigeria. We are equipped with high-speed internet, independent power backup, and modern computer workstations.'
  },
  {
    id: 'faq-4',
    question: 'How can organization partners support the Academy?',
    answer: 'Partners can support by sponsoring student cohorts, donating hardware, hosting virtual remote internships, mentoring students, or hiring our graduates. Go to our Donate or Contact pages to get started.'
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Community Digital Literacy Expansion',
    description: 'Spreading basic computer skills workshops across local sub-districts and schools.',
    status: 'ongoing',
    impactMetric: '4 schools reached, 250+ kids trained'
  },
  {
    id: 'proj-2',
    title: 'Solar Power Integration Project',
    description: 'Installing solar arrays to ensure 24/7 power for the laboratory during electricity blackouts.',
    status: 'completed',
    impactMetric: '100% reliance on clean solar power backup achieved'
  },
  {
    id: 'proj-3',
    title: 'Women in Tech Mentorship Network',
    description: 'Connecting female graduates with senior female developers and designers globally.',
    status: 'ongoing',
    impactMetric: '35 women paired with global industry mentors'
  }
];
