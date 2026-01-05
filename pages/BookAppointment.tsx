
import React, { useState } from 'react';
import { ServiceType } from '../types';

const BookAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '' as ServiceType | '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    // Phone validation: only digits and spaces
    const phoneRegex = /^[\d\s]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only digits and spaces';
    } else if (formData.phone.replace(/\s/g, '').length < 10) {
      newErrors.phone = 'Phone number is too short';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = 'Appointment date is required';
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = 'Time slot is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form data:', formData);
      // Simulate API call
      setSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  const services: ServiceType[] = [
    'Wireless Internet',
    'CCTV Systems',
    'Alarm Systems',
    'Solar Power',
    'Electrical Services',
  ];

  const inputClasses = (fieldName: string) => `
    w-full p-4 bg-slate-50 border rounded-xl outline-none transition-all
    ${errors[fieldName] 
      ? 'border-red-500 ring-1 ring-red-500 bg-red-50' 
      : 'border-slate-200 focus:ring-2 focus:ring-blue-500'}
  `;

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Booking Received!</h1>
        <p className="text-lg text-slate-600 mb-8">
          Thank you, <strong>{formData.fullName}</strong>. One of our consultants will contact you shortly on <strong>{formData.phone}</strong> to confirm your appointment for {formData.date}.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              service: '',
              date: '',
              time: '',
              message: '',
            });
          }}
          className="text-blue-600 font-bold hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Book An Appointment</h1>
        <p className="text-lg text-slate-600">Fill in the form below and our team will get back to you to confirm a time.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-6 text-white text-center">
          <p className="font-bold">Fast & Professional Service Guarantee</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 md:p-12" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className={inputClasses('fullName')}
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({...formData, fullName: e.target.value});
                  if (errors.fullName) setErrors({...errors, fullName: ''});
                }}
              />
              {errors.fullName && <p className="text-red-500 text-xs font-semibold">{errors.fullName}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Phone Number</label>
              <input
                type="tel"
                placeholder="012 345 6789"
                className={inputClasses('phone')}
                value={formData.phone}
                onChange={(e) => {
                  setFormData({...formData, phone: e.target.value});
                  if (errors.phone) setErrors({...errors, phone: ''});
                }}
              />
              {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className={inputClasses('email')}
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: ''});
                }}
              />
              {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Select Service</label>
              <select
                className={inputClasses('service')}
                value={formData.service}
                onChange={(e) => {
                  setFormData({...formData, service: e.target.value as ServiceType});
                  if (errors.service) setErrors({...errors, service: ''});
                }}
              >
                <option value="">-- Choose a Service --</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="text-red-500 text-xs font-semibold">{errors.service}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Preferred Date</label>
              <input
                type="date"
                className={inputClasses('date')}
                value={formData.date}
                onChange={(e) => {
                  setFormData({...formData, date: e.target.value});
                  if (errors.date) setErrors({...errors, date: ''});
                }}
              />
              {errors.date && <p className="text-red-500 text-xs font-semibold">{errors.date}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Preferred Time</label>
              <select
                className={inputClasses('time')}
                value={formData.time}
                onChange={(e) => {
                  setFormData({...formData, time: e.target.value});
                  if (errors.time) setErrors({...errors, time: ''});
                }}
              >
                <option value="">-- Select Time Slot --</option>
                <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                <option value="Afternoon (12:00 - 17:00)">Afternoon (12:00 - 17:00)</option>
              </select>
              {errors.time && <p className="text-red-500 text-xs font-semibold">{errors.time}</p>}
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="block text-sm font-bold text-slate-700">Additional Message</label>
            <textarea
              placeholder="Tell us more about your requirements..."
              rows={4}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-xl font-extrabold text-xl shadow-lg hover:bg-blue-700 hover:scale-[1.01] transition-all"
          >
            Confirm Booking Request
          </button>
          
          <p className="mt-6 text-center text-slate-500 text-sm">
            By submitting this form, you agree to our privacy policy. We will never share your details.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
