import axios from 'axios';
import React from 'react'
import './Body.css'
import memeData from '../../../../api/memeData'

export default function Body() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImage, setAllMemeImage] = React.useState(memeData)

  function getMemeImage() {
    const memeArray = allMemeImage.data.memes
    const randomNumber = Math.floor(Math.random()*memeArray.length)
    const url = memeArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
      randomImage: url
    }))
  }

  function inputData(event){
    // console.log(event.target.value)
    const {name, value} = event.target;
    setMeme(prevMeme => (
      {
        ...prevMeme,
        [name]: value
      }
    ))
  }

  return (
    <div className='Body'>
      <div className='form'>
        <input 
        type="text"
        placeholder='Top Text' 
        className='input'
        name='topText'
        value={meme.topText}
        onChange={inputData}
         />
        <input 
        type="text"
        placeholder='Bottom Text' 
        className='input'
        name='bottomText'
        value={meme.bottomText}
        onChange={inputData}
         />
        <button className='button-submit' onClick={getMemeImage} type='submit'>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}