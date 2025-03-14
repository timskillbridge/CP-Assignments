import React, { useState, useEffect } from 'react'
import './App.css'
import Title from './Components/Title.jsx'
import CardDisplay from './Components/CardDisplay.jsx'

export default function App() {
  const [pokeData,setPokeData] = useState([])//moved this all to card display
  const [singleMon, setSingleMon] = useState(Math.floor(Math.random() * 1020));
  const [flash,setFlash] = useState(false)



  return (
    <>
    <div>
     <Title setSingleMon={setSingleMon} setFlash={setFlash}/>
     </div>
     <div>
      <CardDisplay singleMon={singleMon} flash={flash}/>
     </div>
    </>
  )
}


