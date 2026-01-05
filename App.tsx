
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import Internet from './pages/Internet';
import CCTV from './pages/CCTV';
import Alarms from './pages/Alarms';
import Solar from './pages/Solar';
import Electrical from './pages/Electrical';
import BookAppointment from './pages/BookAppointment';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/cctv" element={<CCTV />} />
            <Route path="/alarms" element={<Alarms />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
