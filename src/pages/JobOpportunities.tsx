import React, { useState } from 'react';
import { MapPin, Building, Users, TrendingUp, Filter, Search } from 'lucide-react';

const JobOpportunities = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const cities = [
    {
      name: 'Chennai',
      companies: 2000,
      growth: '15%',
      description: 'IT capital of Tamil Nadu with major tech parks',
      majorCompanies: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Zoho'],
      areas: ['OMR', 'Sholinganallur', 'Porur', 'Tambaram']
    },
    {
      name: 'Coimbatore',
      companies: 300,
      growth: '12%',
      description: 'Emerging IT hub with growing startup ecosystem',
      majorCompanies: ['TIDEL Park', 'Software Technology Parks', 'Regional offices'],
      areas: ['Peelamedu', 'Saravanampatti', 'Kalapatti']
    },
    {
      name: 'Madurai',
      companies: 150,
      growth: '18%',
      description: 'Growing tech hub with government support',
      majorCompanies: ['Government IT initiatives', 'Emerging startups'],
      areas: ['Anna Nagar', 'Bypass Road', 'Sellur']
    },
    {
      name: 'Trichy',
      companies: 100,
      growth: '20%',
      description: 'New IT destination with infrastructure development',
      majorCompanies: ['ELCOT', 'IT Park', 'Service companies'],
      areas: ['Thillai Nagar', 'Cantonment', 'Puthur']
    }
  ];

  const jobTypes = [
    {
      type: 'Product Companies',
      count: 150,
      avgSalary: '₹6-15 LPA',
      description: 'Work on innovative products with global impact',
      companies: ['Zoho', 'Freshworks', 'PayPal', 'Amazon', 'Microsoft']
    },
    {
      type: 'Service Companies',
      count: 800,
      avgSalary: '₹3-8 LPA',
      description: 'Client projects and enterprise solutions',
      companies: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant']
    },
    {
      type: 'Startups',
      count: 200,
      avgSalary: '₹4-12 LPA',
      description: 'Fast-paced environment with equity opportunities',
      companies: ['Fintech', 'EdTech', 'HealthTech', 'E-commerce']
    },
    {
      type: 'Government',
      count: 50,
      avgSalary: '₹4-10 LPA',
      description: 'Stable career with good benefits',
      companies: ['ELCOT', 'NIC', 'CDAC', 'State IT departments']
    }
  ];

  const initiatives = [
    {
      name: 'Tamil Nadu Technology Hub',
      description: 'State initiative to promote IT industry growth',
      benefits: ['Skill development programs', 'Industry partnerships', 'Job placement support']
    },
    {
      name: 'ELCOT (Electronics Corporation of Tamil Nadu)',
      description: 'Government agency promoting electronics and IT',
      benefits: ['Infrastructure development', 'Industry support', 'Training programs']
    },
    {
      name: 'Startup Tamil Nadu',
      description: 'Initiative to support startup ecosystem',
      benefits: ['Funding support', 'Incubation centers', 'Mentorship programs']
    }
  ];

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredJobTypes = jobTypes.filter(job => 
    selectedType === '' || job.type === selectedType
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Opportunities in Tamil Nadu</h1>
          <p className="text-xl text-gray-600">Discover your next career opportunity in the IT capital of South India</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by city or company..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">All Types</option>
                {jobTypes.map(job => (
                  <option key={job.type} value={job.type}>{job.type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">IT Cities in Tamil Nadu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCities.map((city, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{city.name}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Companies</div>
                      <div className="font-bold text-blue-600">{city.companies}+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Growth</div>
                      <div className="font-bold text-green-600">{city.growth}</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{city.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Major Companies</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.majorCompanies.map((company, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.map((area, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Job Types Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobTypes.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{job.type}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Avg. Salary</div>
                    <div className="font-bold text-green-600">{job.avgSalary}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Opportunities</span>
                    <span className="font-bold text-blue-600">{job.count}+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${Math.min(job.count / 10, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.companies.map((company, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Government Initiatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Government IT Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{initiative.name}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {initiative.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Statistics */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Tamil Nadu IT Success Story</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">1.5M+</div>
                <div className="text-white/90">IT Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹2.5L Cr</div>
                <div className="text-white/90">Annual Revenue</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-white/90">IT Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15%</div>
                <div className="text-white/90">Annual Growth</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobOpportunities;