"use client"

import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <h3 className={styles.content}>CONTENTS</h3>
              <div className={styles.links}>
                <ul className={styles.dropdown}>
                  <li>
                  <Link href="/dbconnection" className={styles.link}>
                  <p>DB Connections</p>
                  </Link>
                    <ul className={styles.works}>
                      <li><Link href='/' className={styles.linked}>connect</Link></li>
                      <li><Link href='/' className={styles.linked}>db</Link></li>
                      <li><Link href='/' className={styles.linked}>data</Link></li>
                      <li><Link href='/' className={styles.linked}>save</Link></li>
                    </ul>
                  </li>
                  </ul>
                  
                  <Link href="/" className={styles.link}>
                  <p>Flat Files</p>
                  </Link>
              </div>
        </div>
    </div>
  )
}

export default Sidebar
