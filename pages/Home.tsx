
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const services = [
  {
    title: 'Wireless Internet',
    description: 'High-speed uncapped fixed wireless internet for your home or business.',
    icon: <Icons.Wifi />,
    link: '/internet',
    color: 'bg-blue-500',
  },
  {
    title: 'CCTV Systems',
    description: 'Advanced monitoring solutions with remote viewing and night vision.',
    icon: <Icons.Camera />,
    link: '/cctv',
    color: 'bg-indigo-500',
  },
  {
    title: 'Alarm Systems',
    description: 'Comprehensive security alarms with 24/7 protection and smart alerts.',
    icon: <Icons.Shield />,
    link: '/alarms',
    color: 'bg-red-500',
  },
  {
    title: 'Solar Power',
    description: 'Sustainable energy solutions, inverters, and load-shedding backups.',
    icon: <Icons.Sun />,
    link: '/solar',
    color: 'bg-amber-500',
  },
  {
    title: 'Electrical Services',
    description: 'Certified electrical installations, maintenance, and DB board upgrades.',
    icon: <Icons.Bolt />,
    link: '/electrical',
    color: 'bg-emerald-500',
  },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Reliable <span className="text-blue-400">Wireless Internet</span> &<br />
            Smart Power Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Fast internet, professional security, solar energy & electrical services tailored for homes and businesses in your area.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Check Coverage
            </Link>
            <Link 
              to="/book" 
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <Link 
                key={idx} 
                to={s.link}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 border-b-4 hover:border-blue-600"
              >
                <div className={`${s.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {s.description}
                </p>
                <div className="text-blue-600 font-bold flex items-center group-hover:underline">
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Tech" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Choose TGM Connect?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Fast Installation', desc: 'Get connected or secured within 48 hours of approval.' },
                  { title: 'Affordable Monthly Plans', desc: 'No hidden fees. Just transparent, reliable service billing.' },
                  { title: 'Professional Technicians', desc: 'Our team is certified, experienced, and highly rated.' },
                  { title: 'Home & Business Solutions', desc: 'Custom packages tailored for any scale of operations.' },
                  { title: 'Local Support', desc: 'Quick turnaround for maintenance with our local support center.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to get connected?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of satisfied customers who trust TGM Connect for their digital and security needs.
          </p>
          <Link 
            to="/book" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-extrabold text-xl hover:bg-slate-100 transition-all shadow-xl"
          >
            Get Connected Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
