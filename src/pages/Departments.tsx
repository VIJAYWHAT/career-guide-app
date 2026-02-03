import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Code, Globe, BarChart3, Smartphone, Shield, Palette, Cloud, Brain, Database, Network, Megaphone } from 'lucide-react';
import { departments } from '../data/departments';

const iconMap = {
  Code, Globe, BarChart3, Smartphone, Shield, Palette, Cloud, Brain, Database, Network, Megaphone
};

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSalary = selectedSalary === '' || 
                         (selectedSalary === 'low' && dept.overview.salaryRange.includes('₹2-')) ||
                         (selectedSalary === 'medium' && (dept.overview.salaryRange.includes('₹4-') || dept.overview.salaryRange.includes('₹3-'))) ||
                         (selectedSalary === 'high' && dept.overview.salaryRange.includes('₹5-'));
    
    const matchesColor = selectedColor === '' || dept.color === selectedColor;
    
    return matchesSearch && matchesSalary && matchesColor;
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Code className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Career Path</h1>
          <p className="text-xl text-gray-600">Explore 12 exciting career opportunities in the IT industry</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search career paths..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedSalary}
                onChange={(e) => setSelectedSalary(e.target.value)}
              >
                <option value="">All Salaries</option>
                <option value="low">₹2-4 LPA</option>
                <option value="medium">₹3-6 LPA</option>
                <option value="high">₹5+ LPA</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="blue">Development</option>
                <option value="green">Design</option>
                <option value="purple">Analytics</option>
                <option value="red">Security</option>
              </select>
            </div>
          </div>
        </div>

        {/* Department Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept) => (
            <Link key={dept.id} to={`/department/${dept.id}`} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${getColorClasses(dept.color)} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    {getIcon(dept.icon)}
                    <div className="text-right">
                      <div className="text-sm opacity-90">Starting from</div>
                      <div className="font-bold">
                        {dept.overview.salaryRange.split('|')[0].trim()}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-white/90 text-sm">{dept.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.skills.technical.slice(0, 3).map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                      {dept.skills.technical.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          +{dept.skills.technical.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Top Companies</h4>
                    <div className="text-sm text-gray-600">
                      {dept.companies.slice(0, 3).join(', ')}
                      {dept.companies.length > 3 && ` +${dept.companies.length - 3} more`}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Tamil Nadu Demand</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                        <div className={`bg-gradient-to-r ${getColorClasses(dept.color)} h-2 rounded-full`} style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredDepartments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No career paths found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSalary('');
                setSelectedColor('');
              }}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;