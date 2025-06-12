import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Add path properties for navigation
  const menuItems = [
    {
      id: "sbar-home",
      title: "Home",
      icon: Home,
      path: "/",
    },
    {
      id: "sbar-about",
      title: "About Us",
      icon: Users,
      submenu: [
        { title: "ABOUT BMCE", path: "/about" },
        { title: "OUR CAMPUS", path: "/our-campus" },
        { title: "Accreditation", path: "/accreditation" },
      ],
    },
    {
      id: "sbar-administration",
      title: "Administration",
      path: "/administration",
      icon: Shield,
      submenu: [
        { title: "Principal", path: "/administration/principal" },
        { title: "Director's Message", path: "/administration/director" },
        { title: "Our Team", path: "/administration/team" },
      ],
    },
    {
      id: "sbar-academics",
      title: "Academics",
      icon: BookOpen,
      submenu: [
        { title: "Student Assesment", path: "/academics/student-assesment" },
        { title: "Faculty Assesment", path: "/academics/faculty-assesment" },
      ],
    },
    {
      id: "sbar-courses",
      title: "Courses & Departments",
      icon: Layers,
      submenu: [
        {
          title: "B.Tech (4 Year)",
          subsubmenu: [
            {
              title: "Computer Science and Engineering",
              path: "/department/csedept",
            },
            { title: "Civil Engineering", path: "/department/civildept" },
            {
              title: "Electronics and Electrical Engineering",
              path: "/department/eeedept",
            },
            {
              title: "Electronics and Communication Engineering",
              path: "/department/ecedept",
            },
            { title: "Mechanical Engineering", path: "/department/mechdept" },
          ],
        },
        {
          title: "Diploma (3 Year)",
          subsubmenu: [
            { title: "Civil Engineering", path: "/departments/diploma-civil" },
            {
              title: "Mechanical Engineering",
              path: "/departments/diploma-mech",
            },
          ],
        },
        {
          title: "MBA (2 Year)",
          subsubmenu: [
            { title: "Finance", path: "/departments/mba-finance" },
            { title: "Marketing", path: "/departments/mba-marketing" },
            { title: "Human Resource", path: "/departments/mba-hr" },
          ],
        },
      ],
    },
    {
      id: "sbar-activities",
      title: "Activities",
      icon: Activity,
      submenu: [
        { title: "Sports", path: "/activities/sports" },
        { title: "IEDC", path: "/iedc" },
        { title: "IEEE", path: "/activities/ieee" },
        { title: "Student Council", path: "/activities/student-council" },
        { title: "NSS", path: "/nss" },
      ],
    },
    {
      id: "sbar-placement",
      title: "Placement",
      icon: Briefcase,
      submenu: [
        { title: "Placement Cell", path: "/placement/cell" },
        { title: "CGPU", path: "/placements/cgpu" },
        { title: "Placement Details", path: "/placement/details" },
      ],
    },
    {
      id: "sbar-research",
      title: "Research",
      icon: Search,
      submenu: [
        { title: "Research at a Glance", path: "/research/glance" },
        { title: "Publications", path: "/research/publications" },
      ],
    },
    {
      id: "sbar-facilities",
      title: "Facilities",
      icon: Building,
      submenu: [
        { title: "Library", path: "/facilities/library" },
        { title: "Laboratories", path: "/facilities/laboratories" },
        { title: "Hostels", path: "/facilities/hostels" },
        { title: "Cafeteria", path: "/facilities/cafeteria" },
        { title: "Transportation", path: "/facilities/transportation" },
        { title: "Medical Center", path: "/facilities/medical-center" },
      ],
    },
    {
      id: "sbar-gallery",
      title: "Gallery",
      icon: Image,
      path: "/gallery",
    },
    {
      id: "sbar-contact",
      title: "Contact",
      icon: Phone,
      path: "/contact",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
  };

  const handleMenuClick = (item) => {
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === item.id ? null : item.id);
      setActiveSubSubmenu(null);
    } else if (item.path) {
      setIsOpen(false);
      setActiveSubmenu(null);
      setActiveSubSubmenu(null);
      navigate(item.path);
    }
  };

  const handleSubmenuClick = (subItem) => {
    if (subItem.subsubmenu) {
      setActiveSubSubmenu(
        activeSubSubmenu === subItem.title ? null : subItem.title
      );
    } else if (subItem.path) {
      setIsOpen(false);
      setActiveSubmenu(null);
      setActiveSubSubmenu(null);
      navigate(subItem.path);
    }
  };

  const handleSubSubmenuClick = (subSubItem) => {
    if (subSubItem.path) {
      setIsOpen(false);
      setActiveSubmenu(null);
      setActiveSubSubmenu(null);
      navigate(subSubItem.path);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Menu */}
      <div
        className={`sbar-hamburger-menu${scrolled ? " sbar-hamburger-scrolled" : ""}`}
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
                  onClick={() => handleMenuClick(item)}
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
                                handleSubmenuClick(subItem);
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
                                        key={subSub.title}
                                        className="sbar-subsubmenu-item"
                                        style={{
                                          animationDelay: `${subSubIdx * 0.03}s`,
                                        }}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleSubSubmenuClick(subSub);
                                        }}
                                      >
                                        {subSub.title}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        ))
                      : item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subItem.title}
                            className="sbar-submenu-item"
                            style={{ animationDelay: `${subIndex * 0.05}s` }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSubmenuClick(subItem);
                            }}
                          >
                            {subItem.title}
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
