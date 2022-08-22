import React from "react";
import { Link } from "react-router-dom";

import './Home.css'

export default function Home() {
  return (
        <>
    <nav className="Home">
        <ul>
          <li className="router-bullet">
            <Link className="route-link" to='/project1'>Project 1</Link>
          </li>
          <li className="router-bullet">
            <Link className="route-link" to='/project2'>Project 2</Link>
          </li>
        </ul>
      </nav>
      
      
    </>
  )
}