import React from 'react';
import { Users, Building, Award, TrendingUp, BookOpen, Target, CheckCircle, ArrowRight } from 'lucide-react';
import './cgpu.css'; // Import the CSS file

const PlacementPage = () => {
  const stats = [
    {
      number: "95%",
      label: "Placement Rate",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      number: "200+",
      label: "Recruiting Companies",
      icon: <Building className="w-8 h-8" />
    },
    {
      number: "₹12 LPA",
      label: "Average Package",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "₹42 LPA",
      label: "Highest Package",
      icon: <Target className="w-8 h-8" />
    }
  ];

const recruiters = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wipro_logo_2020.svg/1200px-Wipro_logo_2020.svg.png" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cognizant_logo_2022.svg/1200px-Cognizant_logo_2022.svg.png" },
  { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/HCL_Technologies_logo.svg/1200px-HCL_Technologies_logo.svg.png" },
  { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tech_Mahindra_Logo.svg/1200px-Tech_Mahindra_Logo.svg.png" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Capgemini_Logo.svg/1200px-Capgemini_Logo.svg.png" }
];

  const services = [
    {
      title: "Career Guidance",
      description: "Personalized career counseling and guidance sessions",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Skill Development",
      description: "Training programs to enhance technical and soft skills",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Industry Connections",
      description: "Strong network with leading companies across sectors",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and industry interaction sessions",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const topRowImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop"
  ];

  const bottomRowImages = [
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop"
  ];


  return (
    <div className="cgpuplacement-page">
      {/* Hero Section */}
     <section className="cgpucareer-hero">
          <img 
            src="../placements/placement.png" 
            alt="Career Development and Placement" 
            className="cgpucareer-hero__image" 
          />
          <div className="cgpucareer-hero__overlay">
            <div className="cgpucareer-hero__content">
              <h1 className="cgpucareer-hero__title">
                CAREER DEVELOPMENT & PLACEMENT
                <br />
                <span className="cgpucareer-hero__highlight">CELL</span>
              </h1>
            </div>
          </div>
        </section>


      {/* Stats Section */}
     
      {/* About Section */}
      <section className="cgpuabout-section">
        <div className="cgpucontainer">
          <div className="cgpusection-content">
            <div className="cgpucontent-left">
              <h2 className="cgpusection-title">ABOUT OUR PLACEMENT CELL</h2>
              <div className="cgpucontent-text">
                <p>
                  The Career Development and Placement Cell at University Name is 
                  dedicated to providing comprehensive career guidance, industry 
                  connections, and placement opportunities to our students. Our mission is 
                  to bridge the gap between academic knowledge and professional 
                  requirements, preparing students for successful careers.
                </p>
                <p>
                  With a strong network of corporate partnerships spanning across various 
                  sectors including IT, Finance, Healthcare, Manufacturing, and more, we 
                  strive to provide our students with the best career opportunities aligned 
                  with their skills and aspirations.
                </p>
                <p>
                  Our dedicated team of placement officers, career counselors, and industry 
                  experts work tirelessly to ensure each student receives personalized 
                  guidance and support throughout their placement journey. We conduct 
                  regular training sessions, workshops, mock interviews, and industry 
                  interactions to keep our students updated with the latest industry trends 
                  and requirements.
                </p>
              </div>
            </div>
            <div className="cgpucontent-right">
              <div className="cgpuhighlight-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="cgpuhighlight-stat">
                    <div className="highlight-number">{stat.number}</div>
                    <div className="highlight-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="placement-gallery-section">
    <h2 className="cgpusection-title">Placement Highlights</h2>

  {/* Top Row - Scrolling Left */}
  <div className="scroll-cgpucontainer">
    <div className="scroll-track scroll-left">
      {[...topRowImages, ...topRowImages].map((image, index) => (
        <div key={`top-${index}`} className="cgpuimage-card">
          <img src={image} alt={`Placement highlight ${index + 1}`} />
          <div className="cgpuimage-overlay">
            <div className="overlay-content">
              <span className="image-label">Campus Drive</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Bottom Row - Scrolling Right */}
  <div className="scroll-cgpucontainer">
    <div className="scroll-track scroll-right">
      {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
        <div key={`bottom-${index}`} className="cgpuimage-card">
          <img src={image} alt={`Placement highlight ${index + 9}`} />
          <div className="cgpuimage-overlay">
            <div className="overlay-content">
              <span className="image-label">Interview Session</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* Services Section */}

      {/* Recruiters Section */}
 <section className="recruiters">
    <div className="recruiters__cgpucontainer cgpucontainer">
      <h2 className="recruiters__title">Top Recruiters</h2>
      <div className="recruiters__grid">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="recruiter-card">
            <img 
              src={recruiter.logo} 
              alt={recruiter.name} 
              className="recruiter-card__logo"
              loading="lazy" // Optimized loading
            />
          </div>
        ))}
      </div>
    </div>
  </section>

    </div>
  );
};

export default PlacementPage;