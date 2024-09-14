import React, { useEffect, useState } from "react";
const TypingAnimation = () => {
  const [text, setText] = useState("");
  const phrases = ["Frontend Developer", "DevOps Developer", "Cloud Developer"];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    let timer;
    const phrase = phrases[index];
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(phrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(phrase.substring(0, text.length + 1));
        if (text.length === phrase.length) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h4 style={{ fontSize: '1.5rem', color: '#00bcd4', fontWeight: 'bold' }}>
      {text}
    </h4>
  );
};

const Hero = () => {
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#121212', 
    color: '#ffffff',
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#f39c12', 
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    color: '#00bcd4', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#e74c3c', 
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginTop: '2rem',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#c0392b', 
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
  };

  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialIconsStyle = {
    marginTop: '2rem',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    color: '#ffffff',
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={titleStyle}>
          <span style={{ color: '#00bcd4' }}>Hello!</span>
          <br />
          My Name is <span style={{ color: '#f39c12' }}>Rohit</span>
        </h1>
        <h4 style={subtitleStyle}>
          <span style={{ color: '#00bcd4' }}>I am a</span> <TypingAnimation />
        </h4>
        <button
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
        >
          Contact Me
        </button>
        <div style={socialIconsStyle}>
          <div onClick={() => window.open("https://github.com/", "_blank")} style={{ cursor: 'pointer' }}>
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <div onClick={() => window.open("https://www.linkedin.com/", "_blank")} style={{ cursor: 'pointer' }}>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <div onClick={() => window.open("https://twitter.com/", "_blank")} style={{ cursor: 'pointer' }}>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
