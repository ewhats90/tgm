
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const CCTV: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="bg-blue-600 px-3 py-1 rounded text-sm font-bold uppercase tracking-widest mb-4 inline-block">Security First</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Advanced CCTV Monitoring</h1>
              <p className="text-lg text-slate-300 mb-8">
                Protect your property with crystal clear 4K surveillance systems. Monitor your home or business from anywhere in the world.
              </p>
              <Link to="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold inline-block">Request A Quote</Link>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" alt="CCTV System" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Remote Viewing', desc: 'Live feed access on your smartphone or tablet 24/7.', icon: <Icons.Wifi /> },
              { title: 'Night Vision', desc: 'Superior clarity even in total darkness with IR technology.', icon: <Icons.Camera /> },
              { title: 'Smart Alerts', desc: 'Motion detection notifications sent directly to your phone.', icon: <Icons.Shield /> },
              { title: 'Cloud/Local Recording', desc: 'Store weeks of footage on DVR/NVR or secure cloud.', icon: <Icons.Bolt /> },
            ].map((f, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-blue-600 mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 flex-1">
              <h3 className="text-2xl font-bold mb-6">Home CCTV</h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li>• Front door monitoring</li>
                <li>• Garden & perimeter security</li>
                <li>• Internal pet/nanny cams</li>
                <li>• Integration with home WiFi</li>
              </ul>
              <Link to="/book" className="block text-center border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all">Book Home Assessment</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 flex-1">
              <h3 className="text-2xl font-bold mb-6">Business CCTV</h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li>• Multi-camera DVR setups</li>
                <li>• POS & Till monitoring</li>
                <li>• Loading bay surveillance</li>
                <li>• Remote site management</li>
              </ul>
              <Link to="/book" className="block text-center border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all">Book Business Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCTV;
