
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Internet', path: '/internet' },
    { name: 'CCTV', path: '/cctv' },
    { name: 'Alarms', path: '/alarms' },
    { name: 'Solar', path: '/solar' },
    { name: 'Electrical', path: '/electrical' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-blue-600 flex items-center">
              <span className="bg-blue-600 text-white px-2 py-1 rounded mr-2">TGM</span>
              <span className="text-slate-900">CONNECT</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600 transition-colors'
                } text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-3 py-3 rounded-md text-base font-bold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
