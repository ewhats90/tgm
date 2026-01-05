
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const Solar: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-amber-500 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Sustainable Power for Everyone</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Ditch load-shedding and reduce your electricity bills with our customized solar and backup solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Solar Supply & Installation</h2>
              <p className="text-slate-600 mb-6 text-lg">
                From simple backup inverters to full off-grid systems, we provide high-quality components from leading brands.
              </p>
              <div className="space-y-4">
                {[
                  'Hybrid Inverters (3kW, 5kW, 8kW+)',
                  'Tier-1 Solar Panels',
                  'Lithium Iron Phosphate (LiFePO4) Batteries',
                  'Full COC (Certificate of Compliance)',
                  'Customized energy audits',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-amber-800 font-bold">Flexible Payment Options Available</p>
                <p className="text-amber-700 text-sm">Ask us about our monthly payment plans to suit your budget.</p>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=800" alt="Solar Panels" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                <p className="text-slate-900 font-bold text-2xl">40% Savings</p>
                <p className="text-slate-500 text-sm italic">Average energy bill reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Solar Solutions</h2>
            <p className="text-slate-400">Tailored to your specific energy needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Backup Only</h3>
              <p className="text-slate-400 mb-6">Inverter and battery system to keep your lights, TV, and WiFi on during load-shedding.</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-8">
                <li>• No panels needed</li>
                <li>• Fast charging from grid</li>
                <li>• Automatic switch-over</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border-t-4 border-amber-500">
              <h3 className="text-xl font-bold mb-4">Hybrid Solution</h3>
              <p className="text-slate-400 mb-6">The best of both worlds. Use solar during the day and grid/battery during the night.</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-8">
                <li>• Major cost savings</li>
                <li>• High ROI</li>
                <li>• Load-shedding proof</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Off-Grid</h3>
              <p className="text-slate-400 mb-6">Complete independence from the national grid. Ideal for remote locations.</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-8">
                <li>• Zero monthly bills</li>
                <li>• Fully autonomous</li>
                <li>• Maximum sustainability</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link to="/book" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg inline-block">Book Solar Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solar;
