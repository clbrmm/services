// src/components/Header.js
import React from 'react';
import Link from 'next/link'; // Para navegação Next.js
import styles from '../styles/Header.module.css'; // CSS Modules

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Professional Services</h1>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.navLink}>Portfolio</a>
        </Link>
        <Link href="/services">
          <a className={styles.navLink}>Services</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

