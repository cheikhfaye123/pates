import React, { useState } from 'react';

const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    areaInterest: 'kitchen',
    resume: null as File | null
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      position: '',
      areaInterest: 'kitchen',
      resume: null
    });
    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
  };

  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Join Our Team</h1>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Position</label>
              <input
                type="text"
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="e.g., Chef, Server, Manager"
              />
            </div>
            
            <div>
              <label htmlFor="areaInterest" className="block text-gray-700 font-medium mb-2">Area of Interest</label>
              <select
                id="areaInterest"
                value={formData.areaInterest}
                onChange={(e) => setFormData({ ...formData, areaInterest: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="kitchen">Kitchen</option>
                <option value="service">Service</option>
                <option value="management">Management</option>
                <option value="administration">Administration</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Resume/CV</label>
              <input
                type="file"
                id="resume"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                accept=".pdf,.doc,.docx"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition-colors font-medium"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;