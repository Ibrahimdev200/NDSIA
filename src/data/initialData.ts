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
    name: 'Basic Computer Operations',
    duration: '4 Weeks',
    skills: ['Starting & Shutting Down', 'Mouse & Keyboard Skills', 'Operating System Basics', 'File & Folder Management', 'System Setting Utilities'],
    outcomes: 'Confidence in operating a personal computer from scratch, understanding basic digital systems.',
    careerPaths: ['Office assistant', 'Administrative worker', 'Independent computer operator'],
    objectives: [
      'Learn how to properly power on, shut down, and restart a computer.',
      'Master keyboard typing and mouse navigation skills.',
      'Create, copy, move, rename, and delete files and folders cleanly.'
    ],
    description: 'Designed for absolute beginners who have never touched or turned on a computer in their lives. We build basic familiarity, mouse coordination, typing confidence, and core system knowledge.',
    category: 'foundation'
  },
  {
    id: 'prog-2',
    name: 'Microsoft Office Productivity',
    duration: '6 Weeks',
    skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Formatting & Formulas', 'Data Entry & Spreadsheets'],
    outcomes: 'Ability to create letters, calculations, tables, and presentation slide decks.',
    careerPaths: ['Clerical Assistant', 'Office Secretary', 'Data Entry Operator', 'Store Record Keeper'],
    objectives: [
      'Write and format professional documents, letters, and resumes in Microsoft Word.',
      'Build calculations, lists, tables, and basic charts in Microsoft Excel.',
      'Design slide presentation decks using templates and formatting in Microsoft PowerPoint.'
    ],
    description: 'Master the standard office tools. Students learn how to write letters, manage invoices and inventory lists in spreadsheets, and build slides for community and business needs.',
    category: 'professional'
  },
  {
    id: 'prog-3',
    name: 'Internet & Search Literacy',
    duration: '3 Weeks',
    skills: ['Web Browsing', 'Search Engine Optimization', 'Email Management', 'Online Safety Basics', 'Digital Form Submission'],
    outcomes: 'Independent online research capabilities, safe navigation, and email communication.',
    careerPaths: ['Digital Support Clerk', 'Information Searcher', 'Online Service Operator'],
    objectives: [
      'Navigate web browsers and perform smart searches on Google.',
      'Create and manage professional email accounts to send attachments.',
      'Fill and submit online application forms and understand safety basics.'
    ],
    description: 'Open the gate to the web. Students learn to browse safely, identify scams, send emails with attachments, perform google research, and submit online forms.',
    category: 'accelerator'
  },
  {
    id: 'prog-4',
    name: 'Printing & Document Utilities',
    duration: '3 Weeks',
    skills: ['Printer Setup', 'Print Settings', 'Scanning & Copies', 'Hardware Connections', 'Basic Maintenance'],
    outcomes: 'Full competency in printing documents, scanning, and managing office equipment.',
    careerPaths: ['Business Center Operator', 'Office Document Clerk', 'Printing Assistant'],
    objectives: [
      'Connect computers to printers and run print tests.',
      'Configure print settings like double-sided, color, margins, and paper sizes.',
      'Scan physical documents to digital PDF files and make physical copies.'
    ],
    description: 'Practical training on operating printing machines. Students learn how to connect computers to printers, scan documents, adjust print settings, and manage office paper assets.',
    category: 'innovation'
  }
];

export const initialSuccessStories: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Tari Ella',
    cohort: 'Batch 2 Graduate',
    roleBefore: 'Petty Retail Seller / Unemployed',
    roleAfter: 'Office Secretary',
    story: 'Before joining NDSIA, Tari had never turned on a computer in her life. Through the training, she mastered Microsoft Word, PowerPoint, Excel, and printing. Today, she works as a school secretary managing computer records with confidence.',
    image: '/graduates-backdrop-1.jpg',
    company: 'Nembe Model School'
  },
  {
    id: 'story-2',
    name: 'Ebi Joseph',
    cohort: 'Batch 1 Graduate',
    roleBefore: 'High School Graduate / Petty Trader',
    roleAfter: 'Business Center Manager',
    story: 'Ebi started with zero computer experience. He learned spreadsheets, printing operations, and internet usage. He has now set up a local business center that handles printing, typing, and document scans for community residents.',
    image: '/group-students-1.jpg',
    company: 'Nembe Digital Services'
  },
  {
    id: 'story-3',
    name: 'Boma Harrison',
    cohort: 'Batch 3 Graduate',
    roleBefore: 'Primary School Teacher',
    roleAfter: 'School ICT Coordinator',
    story: 'Boma upskilled in Microsoft Office suite and internet search. He was promoted to ICT coordinator at his educational institution, modernizing their record system and training fellow teachers in document formatting and basic spreadsheet calculations.',
    image: '/group-students-2.jpg'
  }
];

export const initialNews: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'NDSIA Batch 4 Celebrates Successful Digital Literacy Graduation',
    excerpt: 'Our recently concluded Batch 4 of 100 students shows record-breaking outcomes in local administrative placements and office work.',
    content: 'We are incredibly proud to publish the outcomes of our fourth community training batch. Over 85% of Batch 4 graduates (representing 100 students trained in Microsoft Word, PowerPoint, Excel, Internet operations, and physical printing) have successfully transitioned into administrative roles, secretary placements, and computer center operator jobs in Bayelsa. The graduation ceremony was celebrated by local chiefs, community leaders, and proud parents.',
    date: '2026-06-15',
    image: '/news-classroom-1.jpg',
    author: 'Precious Alagoa'
  },
  {
    id: 'news-2',
    title: 'Expanding Our Digital Lab: New Partnership with Tech Alliance',
    excerpt: 'A donation of high-speed satellite hardware and 40 workstations will double our student capacity for the upcoming intake.',
    content: 'Through a newly formed agreement with the Regional Digital Alliance, the Academy will receive major infrastructure upgrades. This includes state-of-the-art satellite internet terminal setups and forty high-end workstations. These improvements will allow us to double classroom sizes for our next cohort, starting in September.',
    date: '2026-07-02',
    image: '/news-classroom-2.jpg',
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
