import React from "react";
import './Navbar.css'
import meme from '../../../assets/meme.svg'

export default function Navbar() {
  return (
    <div className="Navbar" >
      <div className="head">
        <img src={meme} width="40px" /> 
        <p className="title-text">MemeGenerator</p>
      </div>
    </div>
  )
}