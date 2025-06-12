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
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
  const menuItems = [
    {
      id: "sbar-home",
      title: "Home",
      icon: Home,
    },
    {
      id: "sbar-about",
      title: "About Us",
      icon: Users,
      submenu: ["ABOUT BMCE", "OUR CAMPUS", "Accreditation"],
    },
    {
      id: "sbar-administration",
      title: "Administration",
      icon: Shield,
      submenu: ["Principal", "Director's Message", "Our Team"],
    },
    {
      id: "sbar-academics",
      title: "Academics",
      icon: BookOpen,
      submenu: ["Student Assesment", "Faculty Assesment"],
    },
    {
      id: "sbar-courses",
      title: "Courses & Departments",
      icon: Layers,
      submenu: [
        {
          title: "B.Tech (4 Year)",
          subsubmenu: [
            "Computer Science and Engineering",
            "Civil Engineering",
            "Electronics and Electrical Engineering",
            "Electronics and Communication Engineering",
            "Mechanical Engineering",
          ],
        },
        {
          title: "Diploma (3 Year)",
          subsubmenu: ["Civil Engineering", "Mechanical Engineering"],
        },
        {
          title: "MBA (2 Year)",
          subsubmenu: ["Finance", "Marketing", "Human Resource"],
        },
      ],
    },
    {
      id: "sbar-activities",
      title: "Activities",
      icon: Activity,
      submenu: ["Sports", "IEDC", "IEEE", "Student Council", "NSS"],
    },
    {
      id: "sbar-placement",
      title: "Placement",
      icon: Briefcase,
      submenu: ["Placement Cell", "CGPU", "Placement Details"],
    },
    {
      id: "sbar-research",
      title: "Research",
      icon: Search,
      submenu: ["Research at a Glance", "Publications"],
    },
    {
      id: "sbar-facilities",
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
      id: "sbar-gallery",
      title: "Gallery",
      icon: Image,
    },
    {
      id: "sbar-contact",
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
    setActiveSubSubmenu(null);
  };
  const handleSubmenuClick = (subItemTitle) => {
    setActiveSubSubmenu(
      activeSubmenu === "sbar-courses" && activeSubSubmenu === subItemTitle
        ? null
        : subItemTitle
    );
  };

  return (
    <>
      <div
        className="sbar-hamburger-menu"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span className="sbar-hamburger-line"></span>
        <span className="sbar-hamburger-line"></span>
        <span className="sbar-hamburger-line"></span>
      </div>
      {/* Sidebar */}
      <div className={`sbar-sidebar ${isOpen ? "sbar-sidebar-open" : ""}`}>
        <div className="sbar-sidebar-header">
          <h2 className="sbar-sidebar-title">
            BASELIOUS MATHEWS II COLLEGE OF ENGINEERING
          </h2>
          <button
            className="sbar-close-btn"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="sbar-sidebar-nav">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSubmenu === item.id;

            return (
              <div key={item.id} className="sbar-menu-item-container">
                <div
                  className={`sbar-menu-item ${isActive ? "sbar-active" : ""}`}
                  onClick={() => handleMenuClick(item.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="sbar-menu-item-content">
                    <IconComponent size={24} className="sbar-menu-icon" />
                    <span className="sbar-menu-text">{item.title}</span>
                  </div>
                  {item.submenu && (
                    <ChevronRight
                      size={20}
                      className={`sbar-chevron ${isActive ? "sbar-chevron-rotated" : ""}`}
                    />
                  )}
                </div>

                <div className="sbar-separator-line" />

                {/* Submenu */}
                {isActive && item.submenu && (
                  <div className="sbar-submenu">
                    {item.id === "sbar-courses"
                      ? item.submenu.map((subItem, subIndex) => (
                          <div key={subItem.title}>
                            <div
                              className="sbar-submenu-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubmenuClick(subItem.title);
                              }}
                              style={{ animationDelay: `${subIndex * 0.05}s` }}
                            >
                              {subItem.title}
                              {subItem.subsubmenu && (
                                <ChevronRight
                                  size={16}
                                  className={`sbar-chevron ${activeSubSubmenu === subItem.title ? "sbar-chevron-rotated" : ""}`}
                                  style={{ marginLeft: 8 }}
                                />
                              )}
                            </div>
                            {/* Sub-Submenu */}
                            {activeSubSubmenu === subItem.title &&
                              subItem.subsubmenu && (
                                <div className="sbar-subsubmenu">
                                  {subItem.subsubmenu.map(
                                    (subSub, subSubIdx) => (
                                      <div
                                        key={subSub}
                                        className="sbar-subsubmenu-item"
                                        style={{
                                          animationDelay: `${subSubIdx * 0.03}s`,
                                        }}
                                      >
                                        {subSub}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        ))
                      : item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subItem}
                            className="sbar-submenu-item"
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
