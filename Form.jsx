import React, { useEffect } from 'react'
import './FormStyle.css'
import { useState } from 'react'




const Form = () => {

  const [meme, setMeme] = useState({ topText: '', bottomText: ''})
  const [allMemes, setAllMemes] = useState([])
  const [memeImg, setMemeImg] = useState('https://i.imgflip.com/1ur9b0.jpg')
  
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  console.log('I got it',meme)

  function handleChange(e) {
    const { name, value } = e.target 
    setMeme(prevState => {
      return {
        ...prevState,
        [name]:value
      }
    })
  }


  // Get Meme Image Function
  function getMemeImage(){
    const randomNum = Math.floor(Math.random() * allMemes.length)
    console.log('random num', randomNum)
    const url = allMemes[randomNum].url
    setMemeImg(url)
  }

  // const memeArray = data.data.memes

  
  return (
    <main className='memeContainer'>
      {/* Form Starts  */}
      <form className='form'>
        <input type='text' placeholder='Start Text' className='form-input'
        name='topText' value={meme.topText} onChange={handleChange}/>
        <input type='text' placeholder='End Text' className='form-input'
        name='bottomText' value={meme.bottomText} onChange={handleChange}/>
      </form>
      {/* Form Ends */}
    

      <button className='form-button' onClick={getMemeImage}>Get A New Meme Image 🖼</button>

      <p className='memeName'>{name}</p>

      {/* Showing Meme Image Starts */}
      <div className="imgContainer">
        <img src={memeImg} alt='' className='memeimg' />
        <h3 className='meme--text top'>{meme.topText}</h3>
        <h3 className='meme--text bottom'>{meme.bottomText}</h3>
      </div>
      {/* Showing Meme Image Ends */}



    </main>
  )
}

export default Form