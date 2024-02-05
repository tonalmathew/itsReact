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
          <p>
            <Link className="route-link" to='/project4'>Project 4</Link>
          </p>
          <p>
            <Link className="route-link" to='/project5'>Project 5</Link>
          </p>
          <p>
            <Link className="route-link" to='/project6'>Project 6</Link>
          </p>
          <p>
            <Link className="route-link" to='/project7'>Project 7</Link>
          </p>
      </nav>
    </>
  )
}