import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Building, ChevronRight, ExternalLink, GraduationCap, Shield, Heart, Target } from 'lucide-react';

const CollegeAdministrationPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const administrationTeam = [
    {
      name: "His Holiness Mar Thomas Mathews",
      position: "MANAGING TRUSTEE & PATRON",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      email: "patron@college.edu",
      phone: "+91-9876543210",
      bio: "His Holiness stands for education with spiritual enlightenment, adhering to the principles of academic integrity, thereby transforming students into technically competent professionals, for a bright and promising future of the society and nation."
    },
    {
      name: "Most Rev. Dr. Joseph Kallarangatt",
      position: "METROPOLITAN & MANAGER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      email: "manager@college.edu",
      phone: "+91-9876543211",
      bio: "Imparting Education along moral values, ethics and concern for the fellow beings has been the focus of our institution. We believe in raising a generation of students with enthusiasm and passion who serve as responsible leaders focused on identifying human and environmental problems and finding solutions for them."
    },
    {
      name: "Rev. Fr. Thomas Varghese",
      position: "DIRECTOR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      email: "director@college.edu",
      phone: "+91-9876543212",
      bio: "Noble as our thoughts- our institution has one of the finest and most efficient administration network in place. We realize the importance of an effective administration in education and our students' results is proof of the pudding. The college has grown by leaps and bounds thanks to the efforts of many individuals and the students."
    },
    {
      name: "Prof. Dr. L. Padma Suresh",
      position: "PRINCIPAL",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      email: "principal@college.edu",
      phone: "+91-9876543213",
      bio: "The college is truly blessed to be under the guidance of Prof. Dr. L. Padma Suresh, M.E, Ph.D (EEE), Ph.D (CSE), MISTE, with his vast experience and knowledge, he is certainly one of our most prized possessions. The College is sure to go places under his able and effective administration."
    }
  ];

  const governingBody = [
    { name: "His Holiness Mar Thomas Mathews", position: "Chairman & Patron" },
    { name: "Most Rev. Dr. Joseph Kallarangatt", position: "Metropolitan" },
    { name: "Rev. Fr. Thomas Varghese", position: "Director" },
    { name: "Prof. Dr. L. Padma Suresh", position: "Principal" },
    { name: "Dr. Sarah Wilson", position: "Vice Principal (Academic)" },
    { name: "Dr. Michael Johnson", position: "Vice Principal (Administration)" },
    { name: "Prof. Mary Thomas", position: "Controller of Examinations" },
    { name: "Dr. James Rodriguez", position: "Dean of Student Affairs" }
  ];

  const committees = [
    { name: "Anti-ragging Committee", head: "Dr. Sarah Wilson" },
    { name: "Women Cell", head: "Prof. Mary Thomas" },
    { name: "SC/ST Committee", head: "Dr. Michael Johnson" },
    { name: "Grievance Redressal Committee", head: "Dr. James Rodriguez" },
    { name: "Anti-sexual Harassment Committee", head: "Prof. Lisa Anderson" },
    { name: "Exam Cell", head: "Dr. Robert Chen" },
    { name: "Discipline Committee", head: "Rev. Fr. Thomas Varghese" },
    { name: "Career Guidance and Placement Unit", head: "Dr. Emily Davis" },
    { name: "Student Welfare Committee", head: "Prof. David Martinez" },
    { name: "Library Council", head: "Dr. Rachel Green" },
    { name: "Counselling Cell", head: "Dr. Alex Kumar" },
    { name: "Alumni Association", head: "Prof. Maria Santos" },
    { name: "Online Grievance Redressal Portal", head: "Dr. Tech Support" }
  ];

  const departments = [
    { name: "Computer Science & Engineering", hod: "Dr. Rajesh Kumar" },
    { name: "Electronics & Communication", hod: "Prof. Priya Sharma" },
    { name: "Mechanical Engineering", hod: "Dr. Arun Patel" },
    { name: "Civil Engineering", hod: "Prof. Lakshmi Nair" },
    { name: "Information Technology", hod: "Dr. Suresh Babu" },
    { name: "Mathematics", hod: "Prof. Kavitha Menon" },
    { name: "Physics", hod: "Dr. Deepak Singh" },
    { name: "Chemistry", hod: "Prof. Anita Joshi" }
  ];

  const objectives = [
    "To provide quality technical education with moral and ethical values",
    "To develop technically competent and socially responsible engineers",
    "To promote research and innovation in engineering and technology",
    "To foster industry-academia collaboration for practical learning",
    "To create leaders who can contribute to national development",
    "To maintain high standards of academic excellence and integrity"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E9F7FF' }}>
      {/* Header */}
      <header className="shadow-lg" style={{ background: 'linear-gradient(135deg, #1276CC 0%, #49C2F1 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">ADMINISTRATION</h1>
            <p className="text-xl opacity-90">Excellence in Technical Education</p>
            <div className="flex justify-center items-center mt-4 space-x-4 text-sm">
              <span>Home</span>
              <ChevronRight size={16} />
              <span style={{ color: '#49C2F1' }}>Our Team</span>
            </div>

          {/* Right Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-4">
              <div className="p-4" style={{ backgroundColor: '#1276CC' }}>
                <h3 className="text-white font-bold text-lg">Administration</h3>
              </div>
              <nav className="p-2">
                {[
                  { id: 'governing-body', label: 'Governing Body', icon: Shield },
                  { id: 'our-team', label: 'Our Team', icon: Users },
                  { id: 'directors-message', label: "Director's Message", icon: User },
                  { id: 'principals-message', label: "Principal's Message", icon: GraduationCap },
                  { id: 'deans', label: 'Deans', icon: Award },
                  { id: 'organogram', label: 'Organogram', icon: Building },
                  { id: 'objectives', label: 'Objectives', icon: Target },
                  { id: 'vision', label: 'Vision', icon: Heart },
                  { id: 'functions-benefits', label: 'Functions & Benefits', icon: BookOpen },
                  { id: 'committees', label: 'Committees & Cell', icon: Users }
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      style={activeTab === item.id ? { backgroundColor: '#49C2F1' } : {}}
                    >
                      <IconComponent size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Our Team Section */}
            {activeTab === 'our-team' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: '#1276CC' }}>
                    <h2 className="text-2xl font-bold text-white">Our Team</h2>
                  </div>
                  
                  <div className="grid gap-8">
                    {administrationTeam.map((member, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                          <div className="md:w-1/4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-64 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-3/4 p-6">
                            <h3 className="text-xl font-bold mb-1" style={{ color: '#1276CC' }}>
                              {member.name}
                            </h3>
                            <p className="font-medium mb-4 text-sm" style={{ color: '#49C2F1' }}>
                              {member.position}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                              {member.bio}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Mail size={14} />
                                <span>{member.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone size={14} />
                                <span>{member.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Governing Body Section */}
            {activeTab === 'governing-body' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: '#1276CC' }}>
                  <h2 className="text-2xl font-bold text-white">Governing Body</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {governingBody.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#49C2F1' }}>
                        <User size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium" style={{ color: '#1276CC' }}>{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Objectives Section */}
            {activeTab === 'objectives' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: '#1276CC' }}>
                  <h2 className="text-2xl font-bold text-white">Objectives</h2>
                </div>
                <div className="space-y-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 border-l-4 border-blue-200 bg-blue-50">
                      <Target size={20} style={{ color: '#49C2F1' }} className="mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vision Section */}
            {activeTab === 'vision' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: '#1276CC' }}>
                  <h2 className="text-2xl font-bold text-white">Vision & Mission</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#1276CC' }}>Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be a center of excellence in technical education, fostering innovation, research, and holistic development of students while upholding moral and ethical values to create globally competent engineers and leaders.
                    </p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#1276CC' }}>Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our mission is to provide quality technical education integrated with spiritual and moral values, promote research and innovation, foster industry collaboration, and develop socially responsible engineers who contribute to the betterment of society and nation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Committees Section */}
            {activeTab === 'committees' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: '#1276CC' }}>
                  <h2 className="text-2xl font-bold text-white">Committees & Cells</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {committees.map((committee, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#49C2F1' }}></div>
                        <h4 className="font-medium text-sm" style={{ color: '#1276CC' }}>{committee.name}</h4>
                      </div>
                      <p className="text-xs text-gray-600">Head: {committee.head}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Default/Other sections with placeholder content */}
            {!['our-team', 'governing-body', 'objectives', 'vision', 'committees'].includes(activeTab) && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: '#1276CC' }}>
                  <h2 className="text-2xl font-bold text-white capitalize">{activeTab.replace('-', ' ')}</h2>
                </div>
                <div className="p-8 text-center text-gray-500">
                  <BookOpen size={48} className="mx-auto mb-4" />
                  <p>Content for this section is being updated. Please check back soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-lg mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Tresvance. All rights reserved. | 
              <span className="ml-2">Excellence in Technical Education with Moral Values</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollegeAdministrationPage;