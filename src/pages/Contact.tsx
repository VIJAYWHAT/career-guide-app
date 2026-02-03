import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: in production you would send to an API or mail service
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "careers@careerguide.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Chennai, Tamil Nadu",
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Contact Us</h1>
            <p className='text-xl opacity-90'>
              Have questions about career paths, jobs, or resources? We’d love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact info */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Get in touch
              </h2>
              <p className='text-gray-600 mb-8'>
                Reach out for career guidance, partnership inquiries, or
                feedback. We typically respond within 1–2 business days.
              </p>
              <div className='space-y-6'>
                {contactInfo.map((item) => (
                  <div key={item.label} className='flex items-start gap-4'>
                    <div className='bg-blue-100 rounded-lg p-3'>
                      <item.icon className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-900'>{item.label}</p>
                      <p className='text-gray-600'>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className='bg-white rounded-xl shadow-lg p-8'>
              <div className='flex items-center gap-2 mb-6'>
                <MessageSquare className='h-6 w-6 text-blue-600' />
                <h2 className='text-2xl font-bold text-gray-900'>
                  Send a message
                </h2>
              </div>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='you@example.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  >
                    <option value=''>Select a topic</option>
                    <option value='career'>Career guidance</option>
                    <option value='jobs'>Job opportunities</option>
                    <option value='partnership'>Partnership</option>
                    <option value='feedback'>Feedback</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none'
                    placeholder='Your message...'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'
                >
                  <Send className='h-5 w-5' />
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
