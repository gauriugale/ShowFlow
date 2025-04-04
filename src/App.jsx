import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import CardsRow from './CardsRow.jsx';
import LoginForm from './login.jsx';
import SignUpForm from './signup.jsx';
import ContactUsForm from './contactus.jsx';
import Footer from './footer.jsx';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      
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
