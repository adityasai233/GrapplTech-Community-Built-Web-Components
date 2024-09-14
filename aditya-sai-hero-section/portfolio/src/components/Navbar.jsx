import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: sticky ? '#ffffff' : 'rgba(0, 0, 0, 0.8)',
    color: sticky ? '#333333' : '#ffffff',
    fontFamily: 'Roboto, sans-serif',
    transition: 'background-color 0.3s ease-in-out',
  };

  const navbarContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  };

  const navbarLogoStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: sticky ? '#333333' : '#ffffff',
  };

  const navbarMenuStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const navbarMenuStickyStyle = {
    backgroundColor: sticky ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
  };

  const navbarLinkStyle = {
    color: '#ffffff',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    display: 'inline-block',
  };

  const navbarLinkHoverStyle = {
    color: '#00bcd4',
    backgroundColor: '#333333',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const navbarToggleStyle = {
    display: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
  };

  const navbarMobileMenuStyle = {
    position: 'absolute',
    top: 0,
    right: open ? '0' : '-100%',
    width: '60%',
    height: '100vh',
    backgroundColor: '#ffffff',
    color: '#333333',
    transition: 'right 0.3s ease-in-out',
    padding: '1rem 2rem',
  };

  const navbarMobileLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const navbarMobileLinkStyle = {
    margin: '1rem 0',
    fontSize: '1.25rem',
    color: '#333333',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    display: 'inline-block',
  };

  const navbarMobileLinkHoverStyle = {
    color: '#00bcd4',
    backgroundColor: '#f1f1f1',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarContainerStyle}>
        <div style={{ marginLeft: '1.5rem', marginRight: '1.5rem' }}>
          <h4 style={navbarLogoStyle}>Portfolio</h4>
        </div>
        <div style={{ ...navbarMenuStyle, ...navbarMenuStickyStyle }}>
          <ul style={{ display: 'flex', gap: '1rem', padding: 0, margin: 0 }}>
            {menuLinks.map((menu, i) => (
              <li key={i}>
                <a
                  href={menu.link}
                  style={navbarLinkStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = navbarLinkHoverStyle.color;
                    e.currentTarget.style.backgroundColor = navbarLinkHoverStyle.backgroundColor;
                    e.currentTarget.style.boxShadow = navbarLinkHoverStyle.boxShadow;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = navbarLinkStyle.color;
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          style={{ ...navbarToggleStyle, color: open ? '#333333' : '#ffffff' }}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div style={navbarMobileMenuStyle}>
          <ul style={navbarMobileLinksStyle}>
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
              >
                <a
                  href={menu.link}
                  style={navbarMobileLinkStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = navbarMobileLinkHoverStyle.color;
                    e.currentTarget.style.backgroundColor = navbarMobileLinkHoverStyle.backgroundColor;
                    e.currentTarget.style.boxShadow = navbarMobileLinkHoverStyle.boxShadow;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = navbarMobileLinkStyle.color;
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
