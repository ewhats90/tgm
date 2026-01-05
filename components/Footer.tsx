
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center">
              <span className="bg-blue-600 text-white px-2 py-1 rounded mr-2">TGM</span>
              CONNECT
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted partner for smart technology solutions. Providing high-speed internet, security, and power systems since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/internet" className="hover:text-blue-400 transition-colors">Wireless Internet</Link></li>
              <li><Link to="/cctv" className="hover:text-blue-400 transition-colors">CCTV Systems</Link></li>
              <li><Link to="/alarms" className="hover:text-blue-400 transition-colors">Alarm Systems</Link></li>
              <li><Link to="/solar" className="hover:text-blue-400 transition-colors">Solar Power</Link></li>
              <li><Link to="/electrical" className="hover:text-blue-400 transition-colors">Electrical Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/book" className="hover:text-blue-400 transition-colors">Book Installation</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Check Coverage</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-3 mt-1"><Icons.Location /></span>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3"><Icons.Phone /></span>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3"><Icons.Mail /></span>
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>Copyright &copy; 2026 TGM Connect. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
