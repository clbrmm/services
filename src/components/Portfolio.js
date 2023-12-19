// src/components/Portfolio.js

import React from 'react';

const Portfolio = () => {
  // Assuming you have a list of portfolio items from a data source
  const portfolioItems = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1.',
      image: 'portfolio-image1.jpg', // Add actual image file name
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2.',
      image: 'portfolio-image2.jpg', // Add actual image file name
    },
    // Add more portfolio items as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {portfolioItems.map((item) => (
          <div key={item.id}>
            <img src={`/images/${item.image}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
