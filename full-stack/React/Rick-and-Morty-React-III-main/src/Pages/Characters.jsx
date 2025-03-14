
import { useEffect, useState } from 'react'

import { useNavigate, Link, useOutletContext } from 'react-router-dom'
import axios from 'axios'


export default function Characters() {
 const [characters, setCharacters] = useState([])

const getChars = async() => {
  try {
  let {data} = await axios.get("https://rickandmortyapi.com/api/character")
  console.log(data)
  const meh = ['bland']

  setCharacters(data['results'])
  } catch (err) {
    alert(err)
  }
 }

 const navigate = useNavigate();

 const validateResponse = async (characterID) => {
  let {data} = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}/`)
  data['response'] = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}/`, {validateStatus: () => true,});
  console.log(data)
  if(data.response.status == 200) {
    // alert("worked");
    navigate(`/characters/${characterID}`)
  } else {
    alert("Data wasn't retrieved")
  }
  }

useEffect(() => {
  getChars()
},[])

  // const {addToFaves, isFave, removeFromFaves} = useOutletContext();

  return (
    <>
  <h1>Rick and Morty Character List</h1>
 
    <ul>
    {
        characters.map((item,index) => (
          
        <li key={index} onClick ={() => {console.log(`index: ${index}`)
          validateResponse(index+1)}}>{item.name}</li>
        ))
    }
    </ul>
 



    </>
  )
}


