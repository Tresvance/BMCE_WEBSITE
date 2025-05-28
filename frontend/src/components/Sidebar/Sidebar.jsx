import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Home,
  Users,
  Shield,
  BookOpen,
  Layers,
  Activity,
  Briefcase,
  Search,
  Building,
  Image,
  Phone,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    {
      id: "home",
      title: "Home",
      icon: Home,
    },
    {
      id: "about",
      title: "About Us",
      icon: Users,
      submenu: [
        "Our History",
        "Vision & Mission",
        "Leadership Team",
        "Accreditation",
        "Awards",
      ],
    },
    {
      id: "administration",
      title: "Administration",
      icon: Shield,
      submenu: [
        "Principal",
        "Vice Principal",
        "Administrative Staff",
        "Board of Governors",
      ],
    },
    {
      id: "academics",
      title: "Academics",
      icon: BookOpen,
      submenu: [
        "Academic Calendar",
        "Curriculum",
        "Examination",
        "Results",
        "Academic Policies",
      ],
    },
    {
      id: "courses",
      title: "Courses & Departments",
      icon: Layers,
      submenu: [
        "Engineering",
        "Science",
        "Arts",
        "Commerce",
        "Management",
        "Computer Science",
      ],
    },
    {
      id: "activities",
      title: "Activities",
      icon: Activity,
      submenu: [
        "Sports",
        "Cultural Events",
        "Clubs & Societies",
        "Student Council",
        "Competitions",
      ],
    },
    {
      id: "placement",
      title: "Placement",
      icon: Briefcase,
      submenu: [
        "Placement Cell",
        "Career Guidance",
        "Industry Partners",
        "Alumni Network",
        "Job Portal",
      ],
    },
    {
      id: "research",
      title: "Research",
      icon: Search,
      submenu: [
        "Research Centers",
        "Publications",
        "Projects",
        "Conferences",
        "Innovation Hub",
      ],
    },
    {
      id: "facilities",
      title: "Facilities",
      icon: Building,
      submenu: [
        "Library",
        "Laboratories",
        "Hostels",
        "Cafeteria",
        "Transportation",
        "Medical Center",
      ],
    },
    {
      id: "gallery",
      title: "Gallery",
      icon: Image,
    },
    {
      id: "contact",
      title: "Contact",
      icon: Phone,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const handleMenuClick = (itemId) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId);
  };

  return (
    <>
      {/* Gradient Strip - only show when sidebar is closed */}
      {!isOpen && (
        <div className="gradient-strip">
          <div
            className="hamburger-menu"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">
            BASELIOUS MATHEWS II COLLEGE OF ENGINEERING
          </h2>
          <button
            className="close-btn"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSubmenu === item.id;

            return (
              <div key={item.id} className="menu-item-container">
                <div
                  className={`menu-item ${isActive ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="menu-item-content">
                    <IconComponent size={24} className="menu-icon" />
                    <span className="menu-text">{item.title}</span>
                  </div>
                  {item.submenu && (
                    <ChevronRight
                      size={20}
                      className={`chevron ${isActive ? "chevron-rotated" : ""}`}
                    />
                  )}
                </div>

                {/* Separator Line */}
                <div className="separator-line" />

                {/* Submenu */}
                {isActive && item.submenu && (
                  <div className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <div
                        key={subItem}
                        className="submenu-item"
                        style={{ animationDelay: `${subIndex * 0.05}s` }}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
