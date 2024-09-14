import React from "react";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "12" },
    { text: "Companies Work", count: "04" },
  ];
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#1e1e1e', 
    color: '#ffffff', 
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#e0e0e0', 
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    color: '#b0b0b0', 
    textAlign: 'center',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  };

  const infoStyle = {
    fontSize: '1.5rem',
    color: '#e0e0e0', 
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#ff5722',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background-color 0.3s ease',
    textAlign: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e64a19', 
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <section id="about" style={sectionStyle}>
      <div>
        <h3 style={headingStyle}>
          About <span style={{ color: '#ff5722' }}>Me</span>
        </h3>
        <p style={subheadingStyle}>My introduction</p>
        <p style={{ color: '#b0b0b0', textAlign: 'center', marginBottom: '2rem' }}>
          I am a passionate developer with a diverse set of skills and a commitment to continuous learning. I strive to deliver quality solutions and am excited about collaborating on innovative projects.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', marginBottom: '2rem' }}>
            {info.map((content) => (
              <div key={content.text} style={{ textAlign: 'center' }}>
                <h3 style={infoStyle}>
                  {content.count}
                  {/* <span style={{ color: '#ff5722' }}>+</span> */}
                </h3>
                <span style={{ fontSize: '1rem', color: '#b0b0b0' }}>{content.text}</span>
              </div>
            ))}
          </div>
          <a href="./src/assets/th.pdf" download>
            <button
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
