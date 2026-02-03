import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, MapPin, BookOpen, Briefcase, DollarSign, Clock, Star } from 'lucide-react';
import { departments } from '../data/departments';

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const department = departments.find(dept => dept.id === id);

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <Link to="/departments" className="text-blue-600 hover:text-blue-800">
            Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      purple: 'bg-purple-600 text-white',
      indigo: 'bg-indigo-600 text-white',
      red: 'bg-red-600 text-white',
      pink: 'bg-pink-600 text-white',
      cyan: 'bg-cyan-600 text-white',
      orange: 'bg-orange-600 text-white',
      emerald: 'bg-emerald-600 text-white',
      teal: 'bg-teal-600 text-white',
      yellow: 'bg-yellow-600 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getBorderColor = (color: string) => {
    const colorMap = {
      blue: 'border-blue-200 bg-blue-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
      indigo: 'border-indigo-200 bg-indigo-50',
      red: 'border-red-200 bg-red-50',
      pink: 'border-pink-200 bg-pink-50',
      cyan: 'border-cyan-200 bg-cyan-50',
      orange: 'border-orange-200 bg-orange-50',
      emerald: 'border-emerald-200 bg-emerald-50',
      teal: 'border-teal-200 bg-teal-50',
      yellow: 'border-yellow-200 bg-yellow-50'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`${getColorClasses(department.color)} py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/departments" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Career Paths
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{department.name}</h1>
            <p className="text-xl text-white/90 mb-6">{department.description}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Salary Range</span>
                </div>
                <p className="text-white/90">{department.overview.salaryRange}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Growth Rate</span>
                </div>
                <p className="text-white/90">High Demand</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-white/90">Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Career Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What is {department.name}?</h3>
              <p className="text-gray-600 mb-4">{department.overview.whatIs}</p>
              <h4 className="font-semibold mb-2">Why Choose This Career?</h4>
              <p className="text-gray-600">{department.overview.whyChoose}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
              <p className="text-gray-600 mb-4">{department.overview.industryDemand}</p>
              <div className={`${getBorderColor(department.color)} border-l-4 pl-4`}>
                <p className="font-semibold text-gray-900">Tamil Nadu Market</p>
                <p className="text-gray-600 text-sm">Strong demand with excellent growth prospects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills Required</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Technical Skills
              </h3>
              <div className="space-y-2">
                {department.skills.technical.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Soft Skills
              </h3>
              <div className="space-y-2">
                {department.skills.soft.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                Certifications
              </h3>
              <div className="space-y-2">
                {department.skills.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Path Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Path Timeline</h2>
          <div className="space-y-8">
            {/* Entry Level */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Entry Level (0-2 years)</h3>
                  <p className="text-gray-600">{department.careerPath.entry.salary}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Job Roles</h4>
                  <ul className="text-gray-600 space-y-1">
                    {department.careerPath.entry.roles.map((role, index) => (
                      <li key={index}>• {role}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                  <ul className="text-gray-600 space-y-1">
                    {department.careerPath.entry.responsibilities.map((resp, index) => (
                      <li key={index}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mid Level */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Mid Level (2-5 years)</h3>
                  <p className="text-gray-600">{department.careerPath.mid.salary}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Job Roles</h4>
                  <ul className="text-gray-600 space-y-1">
                    {department.careerPath.mid.roles.map((role, index) => (
                      <li key={index}>• {role}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                  <ul className="text-gray-600 space-y-1">
                    {department.careerPath.mid.responsibilities.map((resp, index) => (
                      <li key={index}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Senior Level */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Senior Level (5+ years)</h3>
                  <p className="text-gray-600">{department.careerPath.senior.salary}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Job Roles</h4>
                  <ul className="text-gray-600 space-y-1">
                    {department.careerPath.senior.roles.map((role, index) => (
                      <li key={index}>• {role}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                  <ul className="text-gray-600 space-y-1">
                    {department.careerPath.senior.responsibilities.map((resp, index) => (
                      <li key={index}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              <ul className="text-gray-600 space-y-2">
                {department.howToStart.education.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Projects</h3>
              <ul className="text-gray-600 space-y-2">
                {department.howToStart.projects.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Internships</h3>
              <ul className="text-gray-600 space-y-2">
                {department.howToStart.internships.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Freelancing</h3>
              <ul className="text-gray-600 space-y-2">
                {department.howToStart.freelancing.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Companies in Tamil Nadu</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {department.companies.map((company, index) => (
                <div key={index} className={`${getBorderColor(department.color)} border-l-4 pl-4 py-2`}>
                  <span className="font-semibold text-gray-900">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DepartmentDetail;