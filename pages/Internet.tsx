
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const packages = [
  { speed: '2Mbps', desc: 'Light browsing & WhatsApp', bestFor: 'Individuals / Light use' },
  { speed: '4Mbps', desc: 'Social media & streaming', bestFor: 'Small households' },
  { speed: '6Mbps', desc: 'Work from home', bestFor: 'Video calls & office work' },
  { speed: '8Mbps', desc: 'Business & HD streaming', bestFor: 'Power users / Small offices' },
  { speed: '10Mbps', desc: 'Heavy usage & offices', bestFor: 'Multi-device environments' },
];

const Internet: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Wireless Internet Solutions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience high-speed, uncapped Fixed Wireless internet designed for maximum stability and minimum latency.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Wifi />
              </div>
              <h3 className="text-xl font-bold mb-3">Uncapped Options</h3>
              <p className="text-slate-600">No data limits. Surf, stream, and work without worrying about top-ups or throttling.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Bolt />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Installation</h3>
              <p className="text-slate-600">Professional setup of outdoor CPE and indoor router by our expert team.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Shield />
              </div>
              <h3 className="text-xl font-bold mb-3">Stable Speeds</h3>
              <p className="text-slate-600">Fixed Wireless provides a dedicated link to our towers, ensuring consistency even during peak times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Internet Packages</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800">
                  <th className="p-4 rounded-tl-xl">Plan Speed</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4">Description</th>
                  <th className="p-4 rounded-tr-xl text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                    <td className="p-6">
                      <div className="text-2xl font-extrabold text-blue-400">{pkg.speed}</div>
                    </td>
                    <td className="p-6 font-medium">{pkg.bestFor}</td>
                    <td className="p-6 text-slate-400">{pkg.desc}</td>
                    <td className="p-6 text-center">
                      <Link 
                        to="/book" 
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                      >
                        Book Installation
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coverage Check */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Check Your Coverage</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Street Address" 
                className="md:col-span-2 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all"
                onClick={(e) => { e.preventDefault(); alert('Request received! We will check coverage and call you back.'); }}
              >
                Check Now
              </button>
            </form>
            <p className="mt-4 text-slate-500 text-sm italic">
              * Coverage depends on line-of-sight to our towers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internet;
