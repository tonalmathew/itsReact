import React from "react";
import styles from './Project3.module.css'
import Navbar from '../components/Project3/Navbar/Navbar'
import Body from '../components/Project3/Body/Body'

export default function Project3() {
  return (
    <div className={styles.Project3}>
      <Navbar />
      <Body />
    </div>
  )
}