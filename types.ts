
// Import React to resolve React namespace for React.ReactNode
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface InternetPackage {
  speed: string;
  description: string;
  bestFor: string;
}

export type ServiceType = 
  | 'Wireless Internet'
  | 'CCTV Systems'
  | 'Alarm Systems'
  | 'Solar Power'
  | 'Electrical Services';

export interface AppointmentForm {
  fullName: string;
  phone: string;
  email: string;
  service: ServiceType | '';
  date: string;
  time: string;
  message: string;
}