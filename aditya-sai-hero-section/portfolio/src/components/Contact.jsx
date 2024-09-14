import React, { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [salary, setSalary] = useState("");
  const [submittedDetails, setSubmittedDetails] = useState(() => {
    const storedDetails = JSON.parse(localStorage.getItem("submittedDetails"));
    return storedDetails || [];
  });
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const correctEmail = "sashi@gmail.com";
  const correctPassword = "password123";

  useEffect(() => {
    localStorage.setItem("submittedDetails", JSON.stringify(submittedDetails));
  }, [submittedDetails]);

  useEffect(() => {
    if (isLoggedIn && submittedDetails.length > 0) {
      if (isFiltered) {
        setFilteredList(submittedDetails.filter((detail) => detail.salary > 5000000));
      } else {
        setFilteredList([]);
      }
    }
  }, [isLoggedIn, submittedDetails, isFiltered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDetails = {
      name: name,
      email: email,
      message: message,
      salary: salary,
    };
    const updatedDetails = [...submittedDetails, newDetails];
    setSubmittedDetails(updatedDetails);
    setName("");
    setEmail("");
    setMessage("");
    setSalary("");
    setMessageSent(true);
  };

  const handleLogin = () => {
    if (loginEmail === correctEmail && loginPassword === correctPassword) {
      setIsLoggedIn(true);
      setShowLoginForm(false);
      setShowFilterButton(true);
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleViewEntries = () => {
    setShowLoginForm(true);
  };

  const handleClearStorage = () => {
    localStorage.removeItem("submittedDetails");
    setSubmittedDetails([]);
    setIsFiltered(false);
    setFilteredList([]);
  };

  const handleFilter = () => {
    setIsFiltered(!isFiltered);
  };

  return (
    <section id="contact" style={{ padding: '2.5rem 1rem', color: 'white', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '600', color: '#ff9800' }}>
          Contact <span style={{ color: '#00bcd4' }}>Me</span>
        </h3>
        <p style={{ color: '#b0bec5', marginTop: '1rem', fontSize: '1.125rem' }}>Get in touch</p>

        <div style={{
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '60rem',
          backgroundColor: '#424242',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          margin: '0 auto',
        }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: '0.75rem',
                borderRadius: '0.25rem',
                border: '1px solid #666',
                backgroundColor: '#333',
                color: '#e0e0e0',
                outline: 'none',
              }}
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '0.75rem',
                borderRadius: '0.25rem',
                border: '1px solid #666',
                backgroundColor: '#333',
                color: '#e0e0e0',
                outline: 'none',
              }}
            />
            <input
              type="number"
              placeholder="Your Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              style={{
                padding: '0.75rem',
                borderRadius: '0.25rem',
                border: '1px solid #666',
                backgroundColor: '#333',
                color: '#e0e0e0',
                outline: 'none',
              }}
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                padding: '0.75rem',
                borderRadius: '0.25rem',
                border: '1px solid #666',
                backgroundColor: '#333',
                color: '#e0e0e0',
                outline: 'none',
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                backgroundColor: '#00bcd4',
                color: '#333',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#018786';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#00bcd4';
                e.currentTarget.style.color = '#333';
              }}
            >
              Send Message
            </button>
            {messageSent && (
              <p style={{ color: '#4caf50' }}>Your data has been stored. We will send a response to you shortly.</p>
            )}
          </form>

          <button
            onClick={handleViewEntries}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.25rem',
              border: 'none',
              backgroundColor: '#00bcd4',
              color: '#333',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#018786';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#00bcd4';
              e.currentTarget.style.color = '#333';
            }}
          >
            View Entries
          </button>

          {showLoginForm && !isLoggedIn && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #666',
                  backgroundColor: '#333',
                  color: '#e0e0e0',
                  outline: 'none',
                }}
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #666',
                  backgroundColor: '#333',
                  color: '#e0e0e0',
                  outline: 'none',
                }}
              />
              <button
                onClick={handleLogin}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.25rem',
                  border: 'none',
                  backgroundColor: '#00bcd4',
                  color: '#333',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#018786';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#00bcd4';
                  e.currentTarget.style.color = '#333';
                }}
              >
                Login
              </button>
            </div>
          )}

          {isLoggedIn && (
            <div>
              {submittedDetails.length > 0 && (
                <div>
                  <button
                    onClick={handleClearStorage}
                    style={{
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.25rem',
                      border: 'none',
                      backgroundColor: '#f44336',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'background-color 0.3s, color 0.3s',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#d32f2f';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#f44336';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    Clear Data
                  </button>
                  {showFilterButton && (
                    <button
                      onClick={handleFilter}
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.25rem',
                        border: 'none',
                        backgroundColor: '#00bcd4',
                        color: '#333',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s, color 0.3s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#018786';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#00bcd4';
                        e.currentTarget.style.color = '#333';
                      }}
                    >
                      {isFiltered ? "Show All" : "Filter"}
                    </button>
                  )}
                </div>
              )}
              {(isFiltered ? filteredList : submittedDetails).map((detail, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#00bcd4' }}>
                    Submitted Details
                  </h4>
                  <p>Name: {detail.name}</p>
                  <p>Email: {detail.email}</p>
                  <p>Salary: {detail.salary}</p>
                  <p>Message: {detail.message}</p>
                  <p>Your data has been saved</p>
                </div>
              ))}
              <button
                onClick={handleLogout}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.25rem',
                  border: 'none',
                  backgroundColor: '#f44336',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#d32f2f';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f44336';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
