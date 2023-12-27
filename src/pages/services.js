// src/pages/services.js

import React from 'react';
import Services from '../components/Services'; // Importando o componente Services
import Header from '../components/Header';
import SocialMediaIntegration from '../components/SocialMediaIntegration';

const ServicesPage = () => {
    return (
        <div>
          <Header />
          <main>
            <Services />
            <SocialMediaIntegration />
            {/* Add more sections as needed */}
          </main>
        </div>
  );
};

export default ServicesPage;
