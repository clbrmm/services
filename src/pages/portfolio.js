// src/pages/portfolio.js

import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import SocialMediaIntegration from '../components/SocialMediaIntegration';

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Portfolio />
        <SocialMediaIntegration />
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default PortfolioPage;
