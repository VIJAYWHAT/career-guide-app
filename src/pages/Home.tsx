import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  MapPin,
  Building,
} from "lucide-react";

const Home = () => {
  const stats = [
    { number: "12+", label: "Career Paths", icon: Briefcase },
    { number: "500+", label: "Job Opportunities", icon: TrendingUp },
    { number: "50+", label: "Top Companies", icon: Building },
    { number: "1000+", label: "Success Stories", icon: Award },
  ];

  const features = [
    {
      title: "Detailed Career Paths",
      description:
        "Explore comprehensive career roadmaps with salary information and growth prospects.",
      icon: "🎯",
    },
    {
      title: "Tamil Nadu Focus",
      description:
        "Specialized insights for the Tamil Nadu IT industry with local company information.",
      icon: "📍",
    },
    {
      title: "Industry Connections",
      description:
        "Connect with professionals and alumni in your field of interest.",
      icon: "🤝",
    },
    {
      title: "Skill Development",
      description:
        "Access curated resources for building in-demand technical and soft skills.",
      icon: "📚",
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Your Career Journey Starts Here
            </h1>
            <p className='text-xl md:text-2xl mb-8 opacity-90'>
              Comprehensive career guidance in Tamil Nadu's thriving IT industry
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/departments'
                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2'
              >
                Explore Career Paths
                <ArrowRight className='h-5 w-5' />
              </Link>
              <Link
                to='/quiz'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
              >
                Take Career Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                  <stat.icon className='h-8 w-8 text-blue-600' />
                </div>
                <div className='text-3xl font-bold text-gray-900 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Why Choose Career Guide?
            </h2>
            <p className='text-xl text-gray-600'>
              Everything you need to make informed career decisions
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tamil Nadu IT Hub Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Tamil Nadu: The IT Powerhouse
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg'>
                <MapPin className='h-12 w-12 text-blue-600 mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  Chennai IT Corridor
                </h3>
                <p className='text-gray-600'>
                  Home to 2000+ IT companies including TCS, Infosys, and Wipro
                </p>
              </div>
              <div className='bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg'>
                <Users className='h-12 w-12 text-green-600 mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  1.5M+ IT Professionals
                </h3>
                <p className='text-gray-600'>
                  Largest IT workforce in India with growing opportunities
                </p>
              </div>
              <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg'>
                <TrendingUp className='h-12 w-12 text-purple-600 mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  15% Annual Growth
                </h3>
                <p className='text-gray-600'>
                  Fastest growing IT sector in South India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Start Your Career Journey?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Join thousands of students who have found their dream careers
          </p>
          <Link
            to='/departments'
            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2'
          >
            Explore Career Paths
            <ArrowRight className='h-5 w-5' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
