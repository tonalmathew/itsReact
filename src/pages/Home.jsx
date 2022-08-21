import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Project1 from './Project1'
import Project2 from './Project2'
import './Home.css'

export default function Home() {
  return (
        <>
    <nav className="Home">
        <ul>
          <li className="router-bullet">
            <Link className="route-link" to='/project1' element={<Project1 />}>Project 1</Link>
          </li>
          <li className="router-bullet">
            <Link className="route-link" to='/project2'>Project 2</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/project1" element={<Project1 />}/>
        <Route path="/project2" element={<Project2 />}/>
      </Routes>
    </>
  )
}