// src/pages/index.js

import React from 'react';
import Header from '../components/Header';
import AppointmentForm from '../components/AppointmentForm';
import Portfolio from '../components/Portfolio';
import SocialMediaIntegration from '../components/SocialMediaIntegration';


const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="appointment-form">
          <AppointmentForm />
        </section>
        <section className="portfolio">
          <Portfolio />
        </section>
        <section className="social-media-integration">
          <SocialMediaIntegration />
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default Home;
