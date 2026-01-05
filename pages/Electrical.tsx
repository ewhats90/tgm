
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const Electrical: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-emerald-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-white">
              <h1 className="text-5xl font-extrabold mb-6">Certified Electrical Services</h1>
              <p className="text-xl opacity-90 mb-8">
                Safety-first electrical work for residential, commercial, and industrial clients. From repairs to new installations.
              </p>
              <div className="flex gap-4">
                <div className="bg-emerald-700 px-4 py-2 rounded-lg text-sm font-bold">24/7 Emergency</div>
                <div className="bg-emerald-700 px-4 py-2 rounded-lg text-sm font-bold">Certified Electricians</div>
              </div>
            </div>
            <div className="md:w-1/2">
               <div className="bg-white p-8 rounded-3xl shadow-2xl">
                 <h3 className="text-emerald-900 text-2xl font-bold mb-6">Need an Electrician?</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border border-emerald-100 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors">
                      <div className="text-emerald-600"><Icons.Bolt /></div>
                      <div>
                        <p className="font-bold text-slate-900">Fault Finding</p>
                        <p className="text-sm text-slate-500">Tripping breakers & wiring issues</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-emerald-100 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors">
                      <div className="text-emerald-600"><Icons.Sun /></div>
                      <div>
                        <p className="font-bold text-slate-900">New Installations</p>
                        <p className="text-sm text-slate-500">Lighting, plugs & geysers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-emerald-100 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors">
                      <div className="text-emerald-600"><Icons.Shield /></div>
                      <div>
                        <p className="font-bold text-slate-900">Compliance</p>
                        <p className="text-sm text-slate-500">Electrical COCs for sale/insurance</p>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Specialties</h2>
              <div className="space-y-6">
                <div className="group">
                  <h4 className="text-xl font-bold text-emerald-700 mb-2">DB Board Upgrades</h4>
                  <p className="text-slate-600">Old distribution boards can be fire hazards. we modernize your board with the latest surge protection and safety switches.</p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-emerald-700 mb-2">Energy Efficient Lighting</h4>
                  <p className="text-slate-600">Upgrade to LED and smart lighting systems to reduce your monthly costs and improve ambiance.</p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-emerald-700 mb-2">Surge Protection</h4>
                  <p className="text-slate-600">Protect your sensitive electronics from grid surges and lightning with professional surge arrestors.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6">Commercial Work</h3>
              <p className="text-slate-600 mb-6">
                We handle office fit-outs, maintenance for shopping centers, and industrial wiring requirements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">• 3-Phase power installations</li>
                <li className="flex gap-3">• Emergency lighting systems</li>
                <li className="flex gap-3">• Power backup for servers</li>
                <li className="flex gap-3">• Planned preventative maintenance</li>
              </ul>
              <Link to="/book" className="block text-center bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors">Book An Electrician</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electrical;
