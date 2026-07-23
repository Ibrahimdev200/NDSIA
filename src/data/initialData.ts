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
  { id: 'part-4', name: 'CloudNet Infrastructure', logoUrl: '☁️', type: 'technical' },
  { id: 'part-5', name: 'CampusGrab', logoUrl: '/campusgrab.png', type: 'sponsor' }
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
    id: 'team-ombu',
    name: 'Vice Admiral Victor Ombu (Rtd)',
    role: 'Originator (Opu-Nembe Youth Computer Training) & Chairman, Peace Steering Committee of Opu-Nembe',
    bio: 'Pioneer of the initial Opu-Nembe Youth Computer Training. Led the peace steering committee that established the foundational digital training pathways for Nembe youths.',
    image: '/victor-ombu.jpg'
  },
  {
    id: 'team-quadri',
    name: 'Quadri Damilare Ibrahim',
    role: 'Facilitator & Head of NDSIA',
    bio: 'Lead coordinator, developer, and chief facilitator directing operations, core curriculum, and developer tracks at the Academy.',
    image: '/quadri-ibrahim.jpg'
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
