import React, { useState } from 'react';
import { BookOpen, Video, Code, FileText, Users, Trophy, Globe, Zap } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'learning', name: 'Learning Platforms', icon: BookOpen },
    { id: 'coding', name: 'Coding Practice', icon: Code },
    { id: 'interview', name: 'Interview Prep', icon: Users },
    { id: 'career', name: 'Career Development', icon: Trophy }
  ];

  const resources = [
    {
      category: 'learning',
      title: 'Online Learning Platforms',
      items: [
        {
          name: 'Coursera',
          description: 'University-level courses from top institutions',
          link: 'https://coursera.org',
          type: 'Platform',
          cost: 'Free/Paid',
          rating: 4.8
        },
        {
          name: 'Udemy',
          description: 'Practical courses for all skill levels',
          link: 'https://udemy.com',
          type: 'Platform',
          cost: 'Paid',
          rating: 4.6
        },
        {
          name: 'edX',
          description: 'MIT, Harvard, and other top university courses',
          link: 'https://edx.org',
          type: 'Platform',
          cost: 'Free/Paid',
          rating: 4.7
        },
        {
          name: 'Khan Academy',
          description: 'Free programming and computer science courses',
          link: 'https://khanacademy.org',
          type: 'Platform',
          cost: 'Free',
          rating: 4.9
        }
      ]
    },
    {
      category: 'coding',
      title: 'Coding Practice Platforms',
      items: [
        {
          name: 'HackerRank',
          description: 'Coding challenges and skill assessments',
          link: 'https://hackerrank.com',
          type: 'Practice',
          cost: 'Free',
          rating: 4.5
        },
        {
          name: 'LeetCode',
          description: 'Algorithm and data structure problems',
          link: 'https://leetcode.com',
          type: 'Practice',
          cost: 'Free/Paid',
          rating: 4.6
        },
        {
          name: 'CodeChef',
          description: 'Competitive programming platform',
          link: 'https://codechef.com',
          type: 'Practice',
          cost: 'Free',
          rating: 4.4
        },
        {
          name: 'GeeksforGeeks',
          description: 'Programming tutorials and practice problems',
          link: 'https://geeksforgeeks.org',
          type: 'Learning',
          cost: 'Free/Paid',
          rating: 4.7
        }
      ]
    },
    {
      category: 'interview',
      title: 'Interview Preparation',
      items: [
        {
          name: 'Pramp',
          description: 'Free peer-to-peer mock interviews',
          link: 'https://pramp.com',
          type: 'Interview',
          cost: 'Free',
          rating: 4.5
        },
        {
          name: 'InterviewBit',
          description: 'Coding interview preparation',
          link: 'https://interviewbit.com',
          type: 'Interview',
          cost: 'Free',
          rating: 4.3
        },
        {
          name: 'Glassdoor',
          description: 'Company reviews and salary information',
          link: 'https://glassdoor.com',
          type: 'Research',
          cost: 'Free',
          rating: 4.2
        },
        {
          name: 'LinkedIn Learning',
          description: 'Professional development courses',
          link: 'https://linkedin.com/learning',
          type: 'Learning',
          cost: 'Paid',
          rating: 4.4
        }
      ]
    },
    {
      category: 'career',
      title: 'Career Development',
      items: [
        {
          name: 'GitHub',
          description: 'Build your coding portfolio',
          link: 'https://github.com',
          type: 'Portfolio',
          cost: 'Free',
          rating: 4.8
        },
        {
          name: 'Stack Overflow',
          description: 'Programming Q&A community',
          link: 'https://stackoverflow.com',
          type: 'Community',
          cost: 'Free',
          rating: 4.6
        },
        {
          name: 'Medium',
          description: 'Read and write about technology',
          link: 'https://medium.com',
          type: 'Blog',
          cost: 'Free/Paid',
          rating: 4.3
        },
        {
          name: 'AngelList',
          description: 'Startup jobs and networking',
          link: 'https://angel.co',
          type: 'Jobs',
          cost: 'Free',
          rating: 4.2
        }
      ]
    }
  ];

  const skillPaths = [
    {
      title: 'Frontend Development',
      duration: '3-6 months',
      difficulty: 'Beginner',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      resources: ['FreeCodeCamp', 'React Documentation', 'CSS Tricks', 'MDN Web Docs'],
      color: 'blue'
    },
    {
      title: 'Backend Development',
      duration: '4-8 months',
      difficulty: 'Intermediate',
      skills: ['Node.js', 'Python', 'Databases', 'APIs', 'Server Management'],
      resources: ['Node.js Guide', 'Python.org', 'PostgreSQL Tutorial', 'REST API Guide'],
      color: 'green'
    },
    {
      title: 'Data Science',
      duration: '6-12 months',
      difficulty: 'Intermediate',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization', 'SQL'],
      resources: ['Kaggle Learn', 'Coursera Data Science', 'Pandas Documentation', 'Matplotlib'],
      color: 'purple'
    },
    {
      title: 'Mobile Development',
      duration: '4-8 months',
      difficulty: 'Intermediate',
      skills: ['React Native', 'Flutter', 'App Store Guidelines', 'Mobile UI/UX'],
      resources: ['React Native Docs', 'Flutter Documentation', 'App Store Connect', 'Material Design'],
      color: 'orange'
    }
  ];

  const tips = [
    {
      category: 'Resume Building',
      tips: [
        'Tailor your resume for each application',
        'Include relevant projects and achievements',
        'Use action verbs and quantify results',
        'Keep it concise (1-2 pages maximum)',
        'Include links to your portfolio/GitHub'
      ]
    },
    {
      category: 'LinkedIn Optimization',
      tips: [
        'Use a professional headshot',
        'Write a compelling headline',
        'Include relevant keywords in your summary',
        'Share industry-relevant content regularly',
        'Connect with professionals in your field'
      ]
    },
    {
      category: 'Interview Success',
      tips: [
        'Research the company thoroughly',
        'Practice common technical questions',
        'Prepare STAR method examples',
        'Ask thoughtful questions about the role',
        'Follow up with a thank-you email'
      ]
    },
    {
      category: 'Networking',
      tips: [
        'Attend tech meetups and conferences',
        'Join online communities and forums',
        'Contribute to open source projects',
        'Engage with content on social media',
        'Reach out to alumni in your field'
      ]
    }
  ];

  const filteredResources = selectedCategory ? 
    resources.filter(resource => resource.category === selectedCategory) : 
    resources;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600">Curated resources to accelerate your career growth</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === '' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <section className="mb-12">
          <div className="grid gap-8">
            {filteredResources.map((resourceGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{resourceGroup.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {resourceGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded">{item.type}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            item.cost === 'Free' ? 'bg-green-100 text-green-800' : 
                            item.cost === 'Paid' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.cost}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">⭐</span>
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Visit Site →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Development Paths */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skill Development Paths</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillPaths.map((path, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(path.color)}`}>
                    {path.difficulty}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>⏱️ {path.duration}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recommended Resources</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {path.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Tips */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Success Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tipGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tipGroup.category}</h3>
                <ul className="space-y-3">
                  {tipGroup.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">💡</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;