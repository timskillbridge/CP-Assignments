import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [speakerImg, setSpeakerImg] = useState("./icons/on.svg")
  
  const onOff = () => {
    if (speakerImg == '../icons/on.svg') {
      setSpeakerImg('../icons/off.svg')
    } else {setSpeakerImg('../icons/on.svg')}

  }

  useEffect(() => {
    console.log(`The speaker is ${speakerImg == './icons/on.svg'? 'on':'off'}`)
  },[speakerImg]);

  return (
    <>
      <img src={speakerImg} onClick = {() => onOff()}/>
    </>
  )
}

export default App
