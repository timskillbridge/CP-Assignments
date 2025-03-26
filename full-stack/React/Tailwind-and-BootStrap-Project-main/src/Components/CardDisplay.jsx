import App from "../App.jsx";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from './Title.jsx'

export default function CardDisplay({ singleMon, flash}) {
  const [pokemonData, setPokemonData] = useState(null);
//   const [singleMon, setSingleMon] = useState(Math.floor(Math.random() * 500));

  useEffect(() => {
    const getImg = async () => {
      const GetPokemon = singleMon;
      const url = `https://pokeapi.co/api/v2/pokemon/${GetPokemon}`;
      console.log(`SingleMon: ${singleMon}\nUrl: ${url}`);
      const { data } = await axios.get(url);
      console.log(data)
      setPokemonData(data);
    };
    getImg();
  }, [singleMon]);


  const backImage =
    "https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg";

  const displayMove = (() => {
    const moveLength = pokemonData.moves.length;
    console.log(moveLength);
    // const readyMove =
      return pokemonData.moves[Math.floor(Math.random() * moveLength)].move.name;
    // console.log(readyMove);
    // return readyMove;
  });



  // console.log(pokemonData)

  return (
    <>
      <div className={`flip-container ${flash? 'flashing-div':''}` }>
        <div className={`flipper`}>
          <div className="front"  style={{ backgroundImage: `url(${backImage})` }}>
            <div className="frontBorder">
            {pokemonData && pokemonData.sprites ? (
    <Container>
    <Row>
      <Col>
      <Card.Img
        src={pokemonData.sprites.front_default}
        className={"card-Img"}/>
        </Col>
      <Col>
      <Card.Title className={"pokemon-name"}>
        
        {`${pokemonData.name.replace(/\b\w/g, (s) =>s.toUpperCase())}`}
        
    </Card.Title>
    </Col>
    </Row>
    <Row>
      <div className={"cardText"}>{`Height: ~${(
                        parseInt(pokemonData.height) *
                        3.28 *
                        0.1
                      ).toFixed(2)} ft`}
</div>
      <div className={"cardText"}>{`Weight: ${pokemonData.weight} lbs`}</div>
      <br />
      <div className={"dispWarning"}>{`Watch out, he's using `}</div><div className={"dispMove"}>{`${displayMove()}`}</div>
    </Row>
  </Container>

 ) 
 : (
              <p>That isn't a valid Pokemon...</p>
            )}
          </div>
          </div>
          <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
            
          </div>
        </div>
      </div>
    </>
  );
}
