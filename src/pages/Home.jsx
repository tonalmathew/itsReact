import React from "react";
import { Link } from "react-router-dom";

import styles from './Home.module.css'

export default function Home() {
  return (
        <>
    <nav className={styles.Home}>
          <p>
            <Link className="route-link" to='/project1'>Project 1</Link>
          </p>
          <p>
            <Link className="route-link" to='/project2'>Project 2</Link>
          </p>
          <p>
            <Link className="route-link" to='/project3'>Project 3</Link>
          </p>
      </nav>
    </>
  )
}