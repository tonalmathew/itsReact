import React from "react";
import { Link } from "react-router-dom";

import './Home.css'

export default function Home() {
  return (
        <>
    <nav className="Home">
          <p>
            <Link className="route-link" to='/project1'>Project 1</Link>
          </p>
          <p>
            <Link className="route-link" to='/project2'>Project 2</Link>
          </p>
      </nav>
      
      
    </>
  )
}