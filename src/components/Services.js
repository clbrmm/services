// src/components/Services.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Services.module.css';
import data from '../data/services.json'; // Arquivo JSON com dados dos serviços

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(data.services);
  }, []);

  return (
    <ul className={styles.list}>
      {services.map((service) => (
        <li key={service.id} className={styles.item}>
          <Link href={`/services/${service.id}`}>
            <a className={styles.link}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Services;
