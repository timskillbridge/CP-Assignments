
import axios from 'axios'
import {useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Character() {

    const [character,SetCharacter] = useState(null);
    const {characterID} = useParams();

    const getCharacterData = async () => {
        try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}/`)
        SetCharacter(data)
        } catch(err) {alert(err)}
    }

    useEffect(() => {
        getCharacterData()
    },[])

    useEffect(() => {
        console.log(character)
    },[character])
    

  return (
<>
{character? (
<>

<Card style={{ width: '18rem' }}>
<Card.Title>
    {`${character.name}`}
</Card.Title>
<Card.Img variant="top" src={character.image} />
<Card.Body>
<Card.Text>
{`${character.name.split(" ")[0]} is ${character.species} and can be found around the ${character.location.name}. Origin is ${character.origin.name}.}`}
   
  </Card.Text>

</Card.Body>
</Card>

</>





    // <img src={character.image}></img>
    
)
: <p>loading</p>
}




</>

)
}
