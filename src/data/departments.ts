export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  overview: {
    whatIs: string;
    whyChoose: string;
    industryDemand: string;
    salaryRange: string;
  };
  skills: {
    technical: string[];
    soft: string[];
    certifications: string[];
  };
  careerPath: {
    entry: {
      roles: string[];
      salary: string;
      responsibilities: string[];
    };
    mid: {
      roles: string[];
      salary: string;
      responsibilities: string[];
    };
    senior: {
      roles: string[];
      salary: string;
      responsibilities: string[];
    };
  };
  howToStart: {
    education: string[];
    projects: string[];
    internships: string[];
    freelancing: string[];
  };
  companies: string[];
}

export const departments: Department[] = [
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Build applications and systems that power the digital world',
    icon: 'Code',
    color: 'blue',
    overview: {
      whatIs: 'Software development involves creating, testing, and maintaining applications and systems. It encompasses everything from mobile apps to enterprise software.',
      whyChoose: 'High demand, excellent growth prospects, creative problem-solving, and the ability to impact millions of users worldwide.',
      industryDemand: 'Tamil Nadu has the highest demand for software developers with 40% of IT jobs requiring programming skills.',
      salaryRange: 'Entry: ₹3-6 LPA | Mid: ₹6-12 LPA | Senior: ₹12-25 LPA'
    },
    skills: {
      technical: ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Spring Boot', 'Git', 'SQL', 'AWS'],
      soft: ['Problem-solving', 'Analytical thinking', 'Communication', 'Team collaboration', 'Adaptability'],
      certifications: ['Oracle Java Certification', 'AWS Developer Associate', 'Microsoft Azure Developer', 'Google Cloud Professional']
    },
    careerPath: {
      entry: {
        roles: ['Junior Software Engineer', 'Trainee Developer', 'Associate Software Engineer'],
        salary: '₹3-6 LPA',
        responsibilities: ['Code implementation', 'Bug fixes', 'Unit testing', 'Learning new technologies']
      },
      mid: {
        roles: ['Software Engineer', 'Senior Developer', 'Tech Lead', 'Full Stack Developer'],
        salary: '₹6-12 LPA',
        responsibilities: ['System design', 'Code review', 'Mentoring juniors', 'Architecture decisions']
      },
      senior: {
        roles: ['Principal Engineer', 'Engineering Manager', 'Solution Architect', 'Technical Director'],
        salary: '₹12-25 LPA',
        responsibilities: ['Strategic planning', 'Team management', 'Technology roadmap', 'Stakeholder communication']
      }
    },
    howToStart: {
      education: ['BCA with programming focus', 'Online courses (Coursera, Udemy)', 'Coding bootcamps', 'Self-learning'],
      projects: ['E-commerce website', 'Task management app', 'Weather dashboard', 'Social media platform'],
      internships: ['TCS', 'Infosys', 'Wipro', 'Zoho', 'Local startups'],
      freelancing: ['Upwork', 'Fiverr', 'Freelancer', 'Toptal', 'Local client projects']
    },
    companies: ['TCS', 'Infosys', 'Wipro', 'Zoho', 'Freshworks', 'PayPal', 'Amazon', 'Microsoft', 'HCL', 'Cognizant']
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Create stunning websites and web applications',
    icon: 'Globe',
    color: 'green',
    overview: {
      whatIs: 'Web development focuses on building websites and web applications using frontend and backend technologies.',
      whyChoose: 'High creativity, immediate visual results, strong freelance opportunities, and growing demand for web presence.',
      industryDemand: 'Every business needs a web presence. Tamil Nadu has 35% of IT jobs in web development.',
      salaryRange: 'Entry: ₹2.5-5 LPA | Mid: ₹5-10 LPA | Senior: ₹10-20 LPA'
    },
    skills: {
      technical: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Node.js', 'MongoDB', 'PHP', 'WordPress'],
      soft: ['Creativity', 'Attention to detail', 'Client communication', 'Time management', 'UX thinking'],
      certifications: ['Google Web Developer', 'Meta Frontend Developer', 'Full Stack Web Developer', 'AWS Web Services']
    },
    careerPath: {
      entry: {
        roles: ['Junior Web Developer', 'Frontend Developer', 'Web Designer', 'WordPress Developer'],
        salary: '₹2.5-5 LPA',
        responsibilities: ['Website creation', 'UI implementation', 'Basic functionality', 'Content updates']
      },
      mid: {
        roles: ['Senior Web Developer', 'Full Stack Developer', 'Frontend Lead', 'Web Application Developer'],
        salary: '₹5-10 LPA',
        responsibilities: ['Complex web apps', 'API integration', 'Performance optimization', 'Team coordination']
      },
      senior: {
        roles: ['Web Architect', 'Frontend Manager', 'Technical Lead', 'Solution Architect'],
        salary: '₹10-20 LPA',
        responsibilities: ['Architecture design', 'Technology decisions', 'Team leadership', 'Client relations']
      }
    },
    howToStart: {
      education: ['HTML/CSS/JS fundamentals', 'React/Angular courses', 'Backend technologies', 'Version control (Git)'],
      projects: ['Portfolio website', 'E-commerce site', 'Blog platform', 'Restaurant website'],
      internships: ['Web agencies', 'Startups', 'Zoho', 'Freshworks', 'Digital marketing companies'],
      freelancing: ['99designs', 'Toptal', 'Upwork', 'Local businesses', 'Personal network']
    },
    companies: ['Zoho', 'Freshworks', 'PayPal', 'Flipkart', 'Swiggy', 'Paytm', 'Web agencies', 'Startups', 'Digital marketing firms']
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    description: 'Transform data into actionable insights and predictions',
    icon: 'BarChart3',
    color: 'purple',
    overview: {
      whatIs: 'Data science combines statistics, programming, and domain knowledge to extract insights from data.',
      whyChoose: 'Fastest-growing field, high salaries, impact on business decisions, and solving real-world problems.',
      industryDemand: 'Tamil Nadu companies are rapidly adopting data-driven decisions, creating 25% growth in data roles.',
      salaryRange: 'Entry: ₹4-7 LPA | Mid: ₹7-15 LPA | Senior: ₹15-30 LPA'
    },
    skills: {
      technical: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Machine Learning', 'Statistics', 'Excel', 'Pandas'],
      soft: ['Critical thinking', 'Business acumen', 'Communication', 'Curiosity', 'Attention to detail'],
      certifications: ['Google Data Analytics', 'IBM Data Science', 'Microsoft Azure Data Scientist', 'Tableau Desktop']
    },
    careerPath: {
      entry: {
        roles: ['Data Analyst', 'Junior Data Scientist', 'Business Analyst', 'Reporting Analyst'],
        salary: '₹4-7 LPA',
        responsibilities: ['Data cleaning', 'Basic analysis', 'Report creation', 'Dashboard development']
      },
      mid: {
        roles: ['Data Scientist', 'Senior Data Analyst', 'ML Engineer', 'Data Engineer'],
        salary: '₹7-15 LPA',
        responsibilities: ['Predictive modeling', 'Algorithm development', 'Advanced analytics', 'Data pipeline creation']
      },
      senior: {
        roles: ['Principal Data Scientist', 'Data Science Manager', 'Chief Data Officer', 'Analytics Director'],
        salary: '₹15-30 LPA',
        responsibilities: ['Strategy development', 'Team leadership', 'Business consulting', 'Innovation driving']
      }
    },
    howToStart: {
      education: ['Statistics fundamentals', 'Python/R programming', 'Machine learning courses', 'Business analytics'],
      projects: ['Sales forecasting', 'Customer segmentation', 'Sentiment analysis', 'Recommendation system'],
      internships: ['Mu Sigma', 'Fractal Analytics', 'Latentview', 'Tiger Analytics', 'Banks'],
      freelancing: ['Kaggle competitions', 'Consulting projects', 'Data analysis gigs', 'Research projects']
    },
    companies: ['Mu Sigma', 'Fractal Analytics', 'Latentview', 'Tiger Analytics', 'TCS', 'Infosys', 'Wipro', 'Ford', 'Hyundai']
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    description: 'Create innovative mobile applications for iOS and Android',
    icon: 'Smartphone',
    color: 'indigo',
    overview: {
      whatIs: 'Mobile app development involves creating applications for smartphones and tablets on iOS and Android platforms.',
      whyChoose: 'Growing mobile market, creative freedom, potential for viral apps, and strong freelance opportunities.',
      industryDemand: 'With 750+ million smartphone users in India, mobile app demand is skyrocketing in Tamil Nadu.',
      salaryRange: 'Entry: ₹3-6 LPA | Mid: ₹6-12 LPA | Senior: ₹12-22 LPA'
    },
    skills: {
      technical: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Dart', 'Firebase', 'REST APIs', 'Git'],
      soft: ['User experience thinking', 'Problem-solving', 'Creativity', 'Attention to detail', 'Persistence'],
      certifications: ['Google Associate Android Developer', 'Apple iOS Developer', 'React Native Developer', 'Flutter Developer']
    },
    careerPath: {
      entry: {
        roles: ['Junior Mobile Developer', 'Android Developer', 'iOS Developer', 'App Developer Trainee'],
        salary: '₹3-6 LPA',
        responsibilities: ['App feature development', 'Bug fixing', 'UI implementation', 'App testing']
      },
      mid: {
        roles: ['Senior Mobile Developer', 'Lead Mobile Developer', 'Mobile App Architect', 'Cross-platform Developer'],
        salary: '₹6-12 LPA',
        responsibilities: ['App architecture', 'Performance optimization', 'Team mentoring', 'Technical decisions']
      },
      senior: {
        roles: ['Mobile Engineering Manager', 'Principal Mobile Engineer', 'Mobile Product Manager', 'CTO'],
        salary: '₹12-22 LPA',
        responsibilities: ['Strategic planning', 'Product roadmap', 'Team management', 'Technology leadership']
      }
    },
    howToStart: {
      education: ['Mobile development courses', 'Programming fundamentals', 'UI/UX design basics', 'Platform-specific training'],
      projects: ['Todo app', 'Weather app', 'Social media app', 'E-commerce app'],
      internships: ['Zoho', 'Freshworks', 'Startups', 'Mobile app companies', 'Product companies'],
      freelancing: ['App development projects', 'Maintenance contracts', 'Custom solutions', 'Prototype development']
    },
    companies: ['Zoho', 'Freshworks', 'Paytm', 'Swiggy', 'Flipkart', 'Ola', 'Mobile app startups', 'Product companies']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protect digital assets and systems from cyber threats',
    icon: 'Shield',
    color: 'red',
    overview: {
      whatIs: 'Cybersecurity involves protecting computer systems, networks, and data from digital attacks and unauthorized access.',
      whyChoose: 'High demand, excellent job security, intellectual challenges, and critical importance to organizations.',
      industryDemand: 'Tamil Nadu has 30% shortage of cybersecurity professionals, creating excellent opportunities.',
      salaryRange: 'Entry: ₹4-8 LPA | Mid: ₹8-16 LPA | Senior: ₹16-35 LPA'
    },
    skills: {
      technical: ['Ethical Hacking', 'Network Security', 'Incident Response', 'Vulnerability Assessment', 'Linux', 'Python', 'Wireshark'],
      soft: ['Analytical thinking', 'Attention to detail', 'Continuous learning', 'Problem-solving', 'Communication'],
      certifications: ['CEH', 'CISSP', 'CISA', 'Security+', 'OSCP', 'CCSP']
    },
    careerPath: {
      entry: {
        roles: ['Security Analyst', 'SOC Analyst', 'Junior Penetration Tester', 'Cybersecurity Trainee'],
        salary: '₹4-8 LPA',
        responsibilities: ['Monitoring security events', 'Incident response', 'Vulnerability scanning', 'Report generation']
      },
      mid: {
        roles: ['Security Engineer', 'Penetration Tester', 'Security Consultant', 'Information Security Specialist'],
        salary: '₹8-16 LPA',
        responsibilities: ['Security assessments', 'Policy development', 'Risk analysis', 'Security tool implementation']
      },
      senior: {
        roles: ['Security Architect', 'CISO', 'Security Manager', 'Principal Security Engineer'],
        salary: '₹16-35 LPA',
        responsibilities: ['Security strategy', 'Team leadership', 'Governance', 'Executive reporting']
      }
    },
    howToStart: {
      education: ['Cybersecurity fundamentals', 'Networking basics', 'Operating systems', 'Programming languages'],
      projects: ['Vulnerability assessment', 'Security audit', 'Incident response plan', 'Security tool setup'],
      internships: ['HCL', 'Wipro', 'TCS', 'Government agencies', 'Cybersecurity firms'],
      freelancing: ['Security consulting', 'Penetration testing', 'Security audits', 'Compliance projects']
    },
    companies: ['HCL', 'Wipro', 'TCS', 'Infosys', 'Quick Heal', 'Cybersecurity firms', 'Government agencies', 'Banks']
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'Design intuitive and beautiful user experiences',
    icon: 'Palette',
    color: 'pink',
    overview: {
      whatIs: 'UI/UX design focuses on creating user-friendly interfaces and experiences for digital products.',
      whyChoose: 'High creativity, growing demand, good work-life balance, and impact on user satisfaction.',
      industryDemand: 'Tamil Nadu companies are prioritizing user experience, creating 40% growth in design roles.',
      salaryRange: 'Entry: ₹3-6 LPA | Mid: ₹6-12 LPA | Senior: ₹12-25 LPA'
    },
    skills: {
      technical: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping', 'HTML/CSS', 'User Research'],
      soft: ['Creativity', 'Empathy', 'Communication', 'Problem-solving', 'Attention to detail'],
      certifications: ['Google UX Design', 'Adobe Certified Expert', 'Figma Professional', 'Human-Computer Interaction']
    },
    careerPath: {
      entry: {
        roles: ['Junior UI Designer', 'UX Designer', 'Visual Designer', 'Product Designer'],
        salary: '₹3-6 LPA',
        responsibilities: ['UI mockups', 'Prototyping', 'User research', 'Design system creation']
      },
      mid: {
        roles: ['Senior UX Designer', 'Lead Designer', 'Product Designer', 'UX Researcher'],
        salary: '₹6-12 LPA',
        responsibilities: ['Design strategy', 'User journey mapping', 'Design leadership', 'Cross-functional collaboration']
      },
      senior: {
        roles: ['Design Manager', 'Principal Designer', 'Head of Design', 'Design Director'],
        salary: '₹12-25 LPA',
        responsibilities: ['Design vision', 'Team management', 'Strategic decisions', 'Stakeholder management']
      }
    },
    howToStart: {
      education: ['Design principles', 'User psychology', 'Design tools', 'Portfolio development'],
      projects: ['Mobile app redesign', 'Website UI/UX', 'Dashboard design', 'Design system'],
      internships: ['Design agencies', 'Startups', 'Product companies', 'Zoho', 'Freshworks'],
      freelancing: ['Design projects', 'Logo design', 'Web design', 'App design']
    },
    companies: ['Zoho', 'Freshworks', 'PayPal', 'Design agencies', 'Startups', 'Product companies', 'E-commerce firms']
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Build and manage scalable cloud infrastructure',
    icon: 'Cloud',
    color: 'cyan',
    overview: {
      whatIs: 'Cloud computing involves delivering computing services over the internet, including storage, processing, and networking.',
      whyChoose: 'Future of IT, high demand, excellent salaries, and opportunity to work with cutting-edge technologies.',
      industryDemand: 'Tamil Nadu companies are rapidly migrating to cloud, creating 50% growth in cloud roles.',
      salaryRange: 'Entry: ₹4-8 LPA | Mid: ₹8-16 LPA | Senior: ₹16-30 LPA'
    },
    skills: {
      technical: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Linux', 'Python', 'Terraform', 'DevOps'],
      soft: ['Problem-solving', 'Continuous learning', 'Communication', 'Analytical thinking', 'Collaboration'],
      certifications: ['AWS Solutions Architect', 'Azure Fundamentals', 'Google Cloud Professional', 'Docker Certified Associate']
    },
    careerPath: {
      entry: {
        roles: ['Cloud Support Engineer', 'Junior Cloud Engineer', 'DevOps Trainee', 'Cloud Operations Analyst'],
        salary: '₹4-8 LPA',
        responsibilities: ['Cloud monitoring', 'Basic deployments', 'Incident response', 'Documentation']
      },
      mid: {
        roles: ['Cloud Engineer', 'DevOps Engineer', 'Cloud Architect', 'Site Reliability Engineer'],
        salary: '₹8-16 LPA',
        responsibilities: ['Infrastructure design', 'Automation', 'Performance optimization', 'Security implementation']
      },
      senior: {
        roles: ['Principal Cloud Architect', 'Cloud Engineering Manager', 'DevOps Director', 'Cloud Solutions Architect'],
        salary: '₹16-30 LPA',
        responsibilities: ['Strategic planning', 'Team leadership', 'Architecture decisions', 'Cost optimization']
      }
    },
    howToStart: {
      education: ['Cloud platforms', 'Linux administration', 'Networking', 'Programming basics'],
      projects: ['Web app deployment', 'CI/CD pipeline', 'Infrastructure automation', 'Monitoring setup'],
      internships: ['AWS', 'Microsoft', 'Google', 'TCS', 'Infosys', 'Cloud service providers'],
      freelancing: ['Cloud migration projects', 'DevOps consulting', 'Infrastructure setup', 'Training services']
    },
    companies: ['AWS', 'Microsoft', 'Google', 'TCS', 'Infosys', 'Wipro', 'HCL', 'Accenture', 'Startups']
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence/ML',
    description: 'Build intelligent systems that can learn and adapt',
    icon: 'Brain',
    color: 'orange',
    overview: {
      whatIs: 'AI/ML involves creating systems that can perform tasks that typically require human intelligence.',
      whyChoose: 'Cutting-edge technology, high impact, excellent salaries, and solving complex problems.',
      industryDemand: 'Tamil Nadu is becoming an AI hub with 60% growth in AI/ML roles across industries.',
      salaryRange: 'Entry: ₹5-10 LPA | Mid: ₹10-20 LPA | Senior: ₹20-40 LPA'
    },
    skills: {
      technical: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Statistics'],
      soft: ['Research mindset', 'Problem-solving', 'Mathematical thinking', 'Patience', 'Continuous learning'],
      certifications: ['TensorFlow Developer', 'AWS Machine Learning', 'Google Cloud ML Engineer', 'Microsoft Azure AI']
    },
    careerPath: {
      entry: {
        roles: ['ML Engineer', 'Data Scientist', 'AI Developer', 'Research Assistant'],
        salary: '₹5-10 LPA',
        responsibilities: ['Model development', 'Data preprocessing', 'Algorithm implementation', 'Model evaluation']
      },
      mid: {
        roles: ['Senior ML Engineer', 'AI Researcher', 'ML Architect', 'Principal Data Scientist'],
        salary: '₹10-20 LPA',
        responsibilities: ['Advanced modeling', 'Research projects', 'Architecture design', 'Team mentoring']
      },
      senior: {
        roles: ['AI Engineering Manager', 'Chief AI Officer', 'Research Director', 'AI Consultant'],
        salary: '₹20-40 LPA',
        responsibilities: ['Strategic planning', 'Research direction', 'Team leadership', 'Innovation driving']
      }
    },
    howToStart: {
      education: ['Mathematics/Statistics', 'Programming', 'Machine learning courses', 'Deep learning'],
      projects: ['Chatbot development', 'Image recognition', 'Recommendation system', 'Predictive modeling'],
      internships: ['Research labs', 'AI startups', 'TCS', 'Infosys', 'Product companies'],
      freelancing: ['AI consulting', 'Model development', 'Research projects', 'Training services']
    },
    companies: ['TCS', 'Infosys', 'Wipro', 'AI startups', 'Research institutions', 'Product companies', 'Consulting firms']
  },
  {
    id: 'database-administration',
    name: 'Database Administration',
    description: 'Manage and optimize database systems for organizations',
    icon: 'Database',
    color: 'emerald',
    overview: {
      whatIs: 'Database administration involves managing, maintaining, and optimizing database systems for organizations.',
      whyChoose: 'Critical role, job security, good work-life balance, and growing with big data trends.',
      industryDemand: 'Every organization needs database management, creating steady demand in Tamil Nadu.',
      salaryRange: 'Entry: ₹3-6 LPA | Mid: ₹6-12 LPA | Senior: ₹12-22 LPA'
    },
    skills: {
      technical: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Database Design', 'Backup & Recovery', 'Performance Tuning'],
      soft: ['Attention to detail', 'Problem-solving', 'Analytical thinking', 'Communication', 'Patience'],
      certifications: ['Oracle DBA', 'Microsoft SQL Server', 'MySQL DBA', 'MongoDB Developer']
    },
    careerPath: {
      entry: {
        roles: ['Junior DBA', 'Database Developer', 'SQL Developer', 'Database Analyst'],
        salary: '₹3-6 LPA',
        responsibilities: ['Database monitoring', 'Basic maintenance', 'Query optimization', 'Data backup']
      },         
      mid: {
        roles: ['Database Administrator', 'Senior DBA', 'Database Engineer', 'Data Architect'],
        salary: '₹6-12 LPA',
        responsibilities: ['Database design', 'Performance tuning', 'Security management', 'Capacity planning']
      },  
      senior: {
        roles: ['Principal DBA', 'Database Manager', 'Chief Data Officer', 'Database Architect'],
        salary: '₹12-22 LPA',
        responsibilities: ['Strategic planning', 'Team leadership', 'Technology decisions', 'Governance']
      }
    },

    
    howToStart: {
      education: ['Database fundamentals', 'SQL mastery', 'Database design', 'Administration courses'],
      projects: ['Database design', 'Performance optimization', 'Migration projects', 'Backup solutions'],
      internships: ['Banks', 'IT companies', 'Government agencies', 'Healthcare organizations'],
      freelancing: ['Database consulting', 'Migration services', 'Optimization projects', 'Training services']
    },  

    
    companies: ['Banks', 'IT companies', 'Healthcare', 'Government agencies', 'E-commerce', 'Manufacturing']
  },
  {
    id: 'network-administration',
    name: 'Network Administration',
    description: 'Design and maintain computer networks and systems',
    icon: 'Network',
    color: 'teal',
    overview: {
      whatIs: 'Network administration involves managing and maintaining computer networks, ensuring connectivity and security.',
      whyChoose: 'Essential infrastructure role, job security, hands-on work, and growing with remote work trends.',
      industryDemand: 'With digital transformation, network roles are growing steadily in Tamil Nadu organizations.',
      salaryRange: 'Entry: ₹3-5 LPA | Mid: ₹5-10 LPA | Senior: ₹10-18 LPA' 
    },
    skills: {
      technical: ['Cisco', 'Juniper', 'TCP/IP', 'Routing', 'Switching', 'Firewalls', 'VPN', 'Network Security'],
      soft: ['Problem-solving', 'Analytical thinking', 'Communication', 'Attention to detail', 'Patience'],
      certifications: ['CCNA', 'CCNP', 'CompTIA Network+', 'Juniper JNCIA']
    },
    careerPath: {
      entry: {
        roles: ['Network Technician', 'Junior Network Engineer', 'Network Support Specialist', 'NOC Analyst'],
        salary: '₹3-5 LPA',
        responsibilities: ['Network monitoring', 'Basic troubleshooting', 'Cable management', 'Documentation']
      },
      mid: {
        roles: ['Network Engineer', 'Network Administrator', 'Senior Network Engineer', 'Network Analyst'],
        salary: '₹5-10 LPA',
        responsibilities: ['Network design', 'Security implementation', 'Performance optimization', 'Project management']
      },
      senior: {
        roles: ['Network Architect', 'Network Manager', 'Principal Network Engineer', 'IT Infrastructure Manager'],
        salary: '₹10-18 LPA',
        responsibilities: ['Strategic planning', 'Team leadership', 'Architecture decisions', 'Vendor management']
      }
    },
    howToStart: {
      education: ['Networking fundamentals', 'Cisco training', 'Security basics', 'Hands-on practice'],
      projects: ['Home lab setup', 'Network simulation', 'Security implementation', 'Performance monitoring'],
      internships: ['IT companies', 'Service providers', 'Government agencies', 'Educational institutions'],
      freelancing: ['Network consulting', 'Setup services', 'Troubleshooting', 'Training services']
    },
    companies: ['Service providers', 'IT companies', 'Government agencies', 'Educational institutions', 'Healthcare']
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Promote products and services through digital channels',
    icon: 'Megaphone',
    color: 'yellow',
    overview: {
      whatIs: 'Digital marketing involves promoting products and services through digital channels like social media, search engines, and email.',
      whyChoose: 'Creative field, high demand, measurable results, and opportunities for entrepreneurship.',
      industryDemand: 'Tamil Nadu businesses are rapidly adopting digital marketing, creating 45% growth in marketing roles.',
      salaryRange: 'Entry: ₹2-4 LPA | Mid: ₹4-8 LPA | Senior: ₹8-15 LPA'
    },
    skills: {
      technical: ['Google Ads', 'Facebook Ads', 'SEO', 'SEM', 'Analytics', 'Email Marketing', 'Content Management', 'Social Media'],
      soft: ['Creativity', 'Communication', 'Analytical thinking', 'Adaptability', 'Writing skills'],
      certifications: ['Google Ads', 'Google Analytics', 'Facebook Blueprint', 'HubSpot', 'SEMrush']
    },
    careerPath: {
      entry: {
        roles: ['Digital Marketing Executive', 'SEO Specialist', 'Social Media Executive', 'Content Writer'],
        salary: '₹2-4 LPA',
        responsibilities: ['Campaign execution', 'Content creation', 'Social media management', 'Basic analytics']
      },
      mid: {
        roles: ['Digital Marketing Manager', 'SEO Manager', 'PPC Specialist', 'Content Marketing Manager'],
        salary: '₹4-8 LPA',
        responsibilities: ['Strategy development', 'Campaign optimization', 'Team coordination', 'ROI analysis']
      },
      senior: {
        roles: ['Digital Marketing Director', 'Head of Marketing', 'Marketing Consultant', 'Chief Marketing Officer'],
        salary: '₹8-15 LPA',
        responsibilities: ['Strategic planning', 'Team leadership', 'Budget management', 'Business growth']
      }
    },
    howToStart: {
      education: ['Digital marketing courses', 'Analytics training', 'Content creation', 'Social media management'],
      projects: ['Personal blog', 'Social media campaigns', 'SEO optimization', 'Email campaigns'],
      internships: ['Digital agencies', 'Startups', 'E-commerce companies', 'Media companies'],
      freelancing: ['Campaign management', 'Content creation', 'SEO services', 'Social media management']
    },
    companies: ['Digital agencies', 'E-commerce companies', 'Startups', 'Media companies', 'Consulting firms']
  }
];