import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Career Guide</h3>
            <p className='text-gray-400 mb-4'>
              Your comprehensive guide to career opportunities in Tamil Nadu's
              IT industry.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-blue-400 transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-blue-400 transition-colors'
              >
                <Twitter className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-blue-400 transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/departments'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Career Paths
                </Link>
              </li>
              <li>
                <Link
                  to='/jobs'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to='/resources'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to='/quiz'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Career Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4 text-gray-400' />
                <span className='text-gray-400'>+91 98765 43210</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4 text-gray-400' />
                <span className='text-gray-400'>careers@guide.com</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4 text-gray-400' />
                <span className='text-gray-400'>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
            <p className='text-gray-400 mb-4'>
              Get monthly career tips and job updates
            </p>
            <div className='flex'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; 2025 Career Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
