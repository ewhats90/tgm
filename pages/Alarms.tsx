
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const Alarms: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" alt="Alarm Header" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Total Alarm Protection</h1>
          <p className="text-xl max-w-3xl mx-auto">Modern security alarms for peace of mind, day and night.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Professional Installation & Maintenance</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              An alarm system is only as good as its installation. Our certified technicians ensure every sensor is perfectly placed for maximum detection coverage.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600">
                <span className="font-bold text-slate-900">Motion Sensors</span>
                <p className="text-sm text-slate-500">Dual-tech detection</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600">
                <span className="font-bold text-slate-900">Door/Window Contacts</span>
                <p className="text-sm text-slate-500">Perimeter protection</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600">
                <span className="font-bold text-slate-900">Panic Buttons</span>
                <p className="text-sm text-slate-500">Instant emergency help</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600">
                <span className="font-bold text-slate-900">Outdoor Beams</span>
                <p className="text-sm text-slate-500">Early warning systems</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">24/7 Protection Concept</h3>
            <p className="text-slate-400 mb-8">
              We provide smart alarm systems that can be linked to your mobile phone and armed response services. Get notified instantly when an alarm triggers.
            </p>
            <Link 
              to="/book" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-bold transition-all shadow-xl"
            >
              Book Security Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Upgrade Your Current System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h4 className="font-bold text-xl mb-4">Old Alarm System?</h4>
              <p className="text-slate-600 mb-6">We can service and upgrade existing wired systems to support modern wireless sensors and mobile control.</p>
              <Link to="/contact" className="text-blue-600 font-bold hover:underline">Get Upgrade Advice &rarr;</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h4 className="font-bold text-xl mb-4">Moving into a new home?</h4>
              <p className="text-slate-600 mb-6">Get a professional security audit and a customized protection plan before you move in.</p>
              <Link to="/book" className="text-blue-600 font-bold hover:underline">Book New Setup &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alarms;
