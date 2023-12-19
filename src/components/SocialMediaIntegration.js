// src/components/SocialMediaIntegration.js

import React from 'react';

const SocialMediaIntegration = () => {
  // Add your actual social media links
  const socialMediaLinks = [
    { platform: 'Twitter', url: 'https://twitter.com/clbrmm' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/clbrmm' },
    // Add more social media links as needed
  ];

  return (
    <section>
      <h2>Connect on Social Media</h2>
      <div>
        {socialMediaLinks.map((link) => (
          <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.platform}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaIntegration;
