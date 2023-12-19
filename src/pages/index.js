//src/pages/index.js// src/pages/index.js

import React from 'react';
import Header from '../components/Header';
import AppointmentForm from '../components/AppointmentForm';
import Portfolio from '../components/Portfolio';
import SocialMediaIntegration from '../components/SocialMediaIntegration';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <AppointmentForm />
        <Portfolio />
        <SocialMediaIntegration />
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default Home;
