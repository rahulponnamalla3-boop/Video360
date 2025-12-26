import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import '../Styles/Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Check window resize to toggle mobile/desktop behavior
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
    if (window.innerWidth >= 992) setShowSidebar(false); // reset mobile overlay
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
// inside return()

    <div className="layout d-flex flex-column" style={{backgroundColor:"#121212"}}>
    
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar Section */}
        <Sidebar
          collapsed={!isMobile && showSidebar} // collapse icons only on desktop
          overlay={isMobile} // overlay only on mobile
          active={showSidebar && isMobile} // show overlay only when mobile + toggled
        />

        {/* Main Section */}
        <div
          className="main-section flex-grow-1"
          style={{
            marginLeft:
              isMobile ? 0 : showSidebar ? '70px' : '220px',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <div className="p-3 " style={{backgroundColor:"#121212"}}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;