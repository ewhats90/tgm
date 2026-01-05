
import React from 'react';
import { CONTACT_INFO, Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact TGM Connect</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Have questions? We're here to help you get connected and stay secure.</p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-blue-600"><Icons.Phone /></div>
                    <div>
                      <p className="font-bold">Call Us</p>
                      <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-green-500"><Icons.Whatsapp /></div>
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <p className="text-slate-600">{CONTACT_INFO.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-blue-600"><Icons.Mail /></div>
                    <div>
                      <p className="font-bold">Email Us</p>
                      <p className="text-slate-600">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-blue-600"><Icons.Location /></div>
                    <div>
                      <p className="font-bold">Office Address</p>
                      <p className="text-slate-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-600 text-white rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <p className="text-blue-100">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-8">Send Us A Message</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                      <input required type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input required type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows={5} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="mt-8 bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center">
                <h3 className="text-xl font-bold mb-4">Quick Call Back Request</h3>
                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Request sent!'); }}>
                  <input required placeholder="Your Phone Number" className="flex-1 p-4 bg-white border border-slate-300 rounded-xl" />
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black">Request Call Back</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="w-full h-[450px] bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.593630659616!2d28.2324!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzUyLjQiUyAyOMKwMTMnNTYuNiJF!5e0!3m2!1sen!2sza!4v1634567890123!5m2!1sen!2sza" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="TGM Connect Office Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
