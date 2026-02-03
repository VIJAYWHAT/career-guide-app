import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Target, TrendingUp } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;    
    scores: { [key: string]: number };
  }[];
}


const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);  
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const questions: Question[] = [   
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: [
        { text: "Creative and visual projects", scores: { "ui-ux-design": 3, "digital-marketing": 2, "web-development": 1 } },
        { text: "Analytical and data-driven", scores: { "data-science": 3, "ai-ml": 2, "software-development": 1 } },
        { text: "Problem-solving and logical", scores: { "software-development": 3, "cybersecurity": 2, "cloud-computing": 1 } },
        { text: "People-focused and collaborative", scores: { "digital-marketing": 3, "ui-ux-design": 2, "network-administration": 1 } }
      ]
    },
    {
      id: 2,
      question: "Which skill set interests you most?",
      options: [
        { text: "Programming and coding", scores: { "software-development": 3, "web-development": 2, "ai-ml": 2 } },
        { text: "Design and user experience", scores: { "ui-ux-design": 3, "web-development": 2, "mobile-development": 1 } },
        { text: "Data analysis and statistics", scores: { "data-science": 3, "ai-ml": 2, "database-administration": 1 } },
        { text: "Marketing and communication", scores: { "digital-marketing": 3, "ui-ux-design": 1, "web-development": 1 } }
      ]
    },
    {
      id: 3,
      question: "What type of projects excite you?",
      options: [
        { text: "Building mobile apps", scores: { "mobile-development": 3, "ui-ux-design": 2, "software-development": 1 } },
        { text: "Creating websites", scores: { "web-development": 3, "ui-ux-design": 2, "digital-marketing": 1 } },
        { text: "Analyzing business data", scores: { "data-science": 3, "ai-ml": 2, "database-administration": 1 } },
        { text: "Securing systems", scores: { "cybersecurity": 3, "network-administration": 2, "cloud-computing": 1 } }
      ]
    },
    {
      id: 4,
      question: "What's your preferred work style?",
      options: [
        { text: "Independent and self-directed", scores: { "software-development": 2, "web-development": 2, "ai-ml": 1 } },
        { text: "Collaborative team projects", scores: { "ui-ux-design": 2, "digital-marketing": 3, "mobile-development": 1 } },
        { text: "Research and experimentation", scores: { "ai-ml": 3, "data-science": 2, "cybersecurity": 1 } },
        { text: "Structured and process-oriented", scores: { "database-administration": 3, "network-administration": 2, "cloud-computing": 1 } }
      ]
    },
    {
      id: 5,
      question: "Which technology trend interests you most?",
      options: [
        { text: "Artificial Intelligence and Machine Learning", scores: { "ai-ml": 3, "data-science": 2, "software-development": 1 } },
        { text: "Cloud Computing and DevOps", scores: { "cloud-computing": 3, "network-administration": 2, "software-development": 1 } },
        { text: "Cybersecurity and Privacy", scores: { "cybersecurity": 3, "network-administration": 2, "database-administration": 1 } },
        { text: "Mobile and Web Technologies", scores: { "mobile-development": 2, "web-development": 3, "ui-ux-design": 1 } }
      ]
    },
    {
      id: 6,
      question: "What motivates you in your career?",
      options: [
        { text: "Creating innovative solutions", scores: { "software-development": 2, "ai-ml": 3, "mobile-development": 1 } },
        { text: "Helping businesses grow", scores: { "digital-marketing": 3, "data-science": 2, "web-development": 1 } },
        { text: "Ensuring security and reliability", scores: { "cybersecurity": 3, "network-administration": 2, "database-administration": 2 } },
        { text: "Designing beautiful experiences", scores: { "ui-ux-design": 3, "web-development": 2, "mobile-development": 1 } }
      ]
    }
  ];

  const careerPaths = {
    "software-development": {
      name: "Software Development",
      description: "Build applications and systems that power the digital world",
      salary: "₹3-6 LPA (Entry) | ₹6-12 LPA (Mid) | ₹12-25 LPA (Senior)",
      skills: ["Java", "Python", "JavaScript", "React", "Node.js"],
      companies: ["TCS", "Infosys", "Wipro", "Zoho", "Freshworks"]
    },
    "web-development": {
      name: "Web Development",
      description: "Create stunning websites and web applications",
      salary: "₹2.5-5 LPA (Entry) | ₹5-10 LPA (Mid) | ₹10-20 LPA (Senior)",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      companies: ["Zoho", "Freshworks", "PayPal", "Flipkart", "Web agencies"]
    },
    "data-science": {
      name: "Data Science & Analytics",
      description: "Transform data into actionable insights and predictions",
      salary: "₹4-7 LPA (Entry) | ₹7-15 LPA (Mid) | ₹15-30 LPA (Senior)",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
      companies: ["Mu Sigma", "Fractal Analytics", "Latentview", "TCS", "Infosys"]
    },
    "mobile-development": {
      name: "Mobile App Development",
      description: "Create innovative mobile applications for iOS and Android",
      salary: "₹3-6 LPA (Entry) | ₹6-12 LPA (Mid) | ₹12-22 LPA (Senior)",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Java"],
      companies: ["Zoho", "Freshworks", "Paytm", "Swiggy", "Flipkart"]
    },
    "ui-ux-design": {
      name: "UI/UX Design",
      description: "Design intuitive and beautiful user experiences",
      salary: "₹3-6 LPA (Entry) | ₹6-12 LPA (Mid) | ₹12-25 LPA (Senior)",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      companies: ["Zoho", "Freshworks", "PayPal", "Design agencies", "Startups"]
    },
    "cybersecurity": {
      name: "Cybersecurity",
      description: "Protect digital assets and systems from cyber threats",
      salary: "₹4-8 LPA (Entry) | ₹8-16 LPA (Mid) | ₹16-35 LPA (Senior)",
      skills: ["Ethical Hacking", "Network Security", "Incident Response", "Linux"],
      companies: ["HCL", "Wipro", "TCS", "Infosys", "Cybersecurity firms"]
    },
    "ai-ml": {
      name: "Artificial Intelligence/ML",
      description: "Build intelligent systems that can learn and adapt",
      salary: "₹5-10 LPA (Entry) | ₹10-20 LPA (Mid) | ₹20-40 LPA (Senior)",
      skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning"],
      companies: ["TCS", "Infosys", "Wipro", "AI startups", "Research institutions"]
    },
    "cloud-computing": {
      name: "Cloud Computing",
      description: "Build and manage scalable cloud infrastructure",
      salary: "₹4-8 LPA (Entry) | ₹8-16 LPA (Mid) | ₹16-30 LPA (Senior)",
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      companies: ["AWS", "Microsoft", "Google", "TCS", "Infosys"]
    },
    "digital-marketing": {
      name: "Digital Marketing",
      description: "Promote products and services through digital channels",
      salary: "₹2-4 LPA (Entry) | ₹4-8 LPA (Mid) | ₹8-15 LPA (Senior)",
      skills: ["Google Ads", "SEO", "Social Media", "Analytics", "Content Marketing"],
      companies: ["Digital agencies", "E-commerce companies", "Startups", "Media companies"]
    },
    "database-administration": {
      name: "Database Administration",
      description: "Manage and optimize database systems for organizations",
      salary: "₹3-6 LPA (Entry) | ₹6-12 LPA (Mid) | ₹12-22 LPA (Senior)",
      skills: ["SQL", "MySQL", "PostgreSQL", "Oracle", "Database Design"],
      companies: ["Banks", "IT companies", "Healthcare", "Government agencies"]
    },
    "network-administration": {
      name: "Network Administration",
      description: "Design and maintain computer networks and systems",
      salary: "₹3-5 LPA (Entry) | ₹5-10 LPA (Mid) | ₹10-18 LPA (Senior)",
      skills: ["Cisco", "Networking", "TCP/IP", "Firewalls", "VPN"],
      companies: ["Service providers", "IT companies", "Government agencies", "Educational institutions"]
    }
  };

  const handleAnswer = (scores: { [key: string]: number }) => {
    const newAnswers = { ...answers };
    Object.entries(scores).forEach(([career, score]) => {
      newAnswers[career] = (newAnswers[career] || 0) + score;
    });
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopCareers = () => {
    const sortedCareers = Object.entries(answers)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
    return sortedCareers.map(([career, score]) => ({
      career,
      score,
      details: careerPaths[career as keyof typeof careerPaths]
    }));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const topCareers = getTopCareers();
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <Target className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Career Quiz Results</h1>
              <p className="text-gray-600">Based on your responses, here are your top career matches</p>
            </div>

            <div className="space-y-6">
              {topCareers.map((result, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-green-600' : index === 1 ? 'bg-blue-600' : 'bg-purple-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{result.details.name}</h3>
                        <p className="text-gray-600">{result.details.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{Math.round((result.score / 18) * 100)}%</div>
                      <div className="text-sm text-gray-500">Match</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Salary Range</h4>
                      <p className="text-gray-600 text-sm">{result.details.salary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {result.details.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        {result.details.skills.length > 3 && (
                          <span className="text-gray-500 text-xs">+{result.details.skills.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Top Companies</h4>
                    <p className="text-gray-600 text-sm">{result.details.companies.join(', ')}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href={`/department/${result.career}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/jobs"
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
                    >
                      View Jobs
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={resetQuiz}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Career Assessment Quiz</h1>
              <span className="text-sm text-gray-500">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.scores)}
                  className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">{option.text}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>This assessment will help identify careers that match your interests and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;