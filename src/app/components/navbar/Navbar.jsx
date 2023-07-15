import Link from 'next/link'
import styles from './page.module.css'
import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const Navbar = () => {
    
  return (
    <div className={styles.container}>
     <div className={styles.start}>
      <Link href="/" className={styles.link}>
      <Image src="/logo.jpeg" width={32} height={32} 
      alt='Logo'/>
      {"  "}
      <span className={styles.title}>Silzila</span>
      </Link>
     </div>
     <div className={styles.button}>
     <Button url="/" text="Logout"/>
     </div>
    </div> 
  )
}

export default Navbar
