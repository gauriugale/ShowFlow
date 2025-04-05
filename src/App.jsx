import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import CardsRow from './CardsRow.jsx';
import LoginForm from './login.jsx';
import SignUpForm from './signup.jsx';
import ContactUsForm from './contactus.jsx';
import Footer from './footer.jsx';
import LandingPage from './LandingPage.jsx';

const App = () => {
  const [showLanding, setShowLanding] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowLanding(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  if (showLanding) {
    return <LandingPage onDone={() => setShowLanding(false)} />;
  }

  return (
    <>
      <Router>
        <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />

        <Routes>
          <Route path="/" element={<CardsRow />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/contact" element={<ContactUsForm />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
