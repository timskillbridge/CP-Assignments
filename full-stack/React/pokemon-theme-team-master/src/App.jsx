import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";


export default function App() {
  

  const getTeam = async (evt) => {
    evt.preventDefault()
    let followerbox = document.querySelector("#team")

    followerbox.innerHTML = ""
    let randPokemon = Math.floor(Math.random() * 1025)+1;
    let leader = await getPokemon(randPokemon)
    let allyList = await grabTypes(leader.type[0])
    let roster = await buildmembers(allyList)
    let teamlead = document.createElement('div')
    let leadTtile= document.createElement('h3')
    leadTtile.innerText = "Team Leader"
    leadTtile.className = "Team_label"
    teamlead.appendChild(leadTtile)
    teamlead.className = 'teamMember'
    teamlead.appendChild(leader.image)
    teamlead.appendChild(leader.display)
    followerbox.appendChild(teamlead)



    for (let x=0;x<roster.length;x++) {
      let label = document.createElement('h3')
      label.className = 'Team_label'
      label.innerText = `Follower ${x+1}`
      let teamBox = document.createElement('div')
      teamBox.appendChild(label)
      teamBox.className = 'teamMember'
      teamBox.appendChild(roster[x].image)
      teamBox.appendChild(roster[x].display)
      // teamBox.innerHTML = `Name: ${roster[x].name} <br> Types: ${roster[x].type.join(', ')} <br> Abilities: ${roster[x].abilities}`
      
      followerbox.appendChild(teamBox)
      console.log(roster[x].image)
    }
    
    

  };

  let getPokemon = async (passedMon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${passedMon}/`;
    let { data } = await axios.get(url);

    let type = data["types"].map((x) => {
      let returnTypes = x.type.name;
      return returnTypes;
    });

    let moves = data["abilities"].map((x) => {
      let returnMoves = x["ability"]["name"];
      return returnMoves;
    });
    
    // let Img = () => {
    //   if (data.sprites['front_default'] != "null") {
    //     let tmpImg1 = document.createElement('img')
    //     tmpImg1.src = data.sprites['front_default']
    //     return tmpImg1
    //   } else {
    //       let tmpImg1= document.createElement('div')
    //       tmpImg1.innerHTML = "<h3>This one's shy,<br>no image available</h3>"
    //       return tmpImg1
    //   }
    // }

      let Img = document.createElement('img')
      Img.src = data.sprites['front_default']
   
    let dataSpan = document.createElement('div')
    dataSpan.innerHTML = `Name: ${data['name']} <br> Types: ${type.join(', ')} <br> Abilities: ${moves.join(', ')}`
        let returnPokemon = {

        name: data["name"],
        type: type,//.join(", "),
        abilities: moves.join(", "),
        image: Img,
        display: dataSpan
      }
      // console.log(data)
      return returnPokemon
    }
    let grabTypes = async (type) => {
      let typeUrl = `https://pokeapi.co/api/v2/type/${type}/`
      let {data} = await axios.get(typeUrl)
      let listOfTypes = data['pokemon'].map((x) =>{
        let pokeTypeList = x['pokemon']['name']
        return pokeTypeList
      })
      return listOfTypes
    }

    let buildmembers = async (roster) => {
      let rosterLen = roster.length
      let bench = []
      let duplicate = false
      while (bench.length <5) {
        let randint = Math.floor(Math.random()*rosterLen)
        duplicate = false        
        for (let x=0;x<bench.length;x++) {

          if (roster[randint] == bench[x]) {
            duplicate = true
          }
        }
        if (duplicate == false) {
          let addToRoster = await getPokemon(roster[randint])
          bench.push(addToRoster)
        }
      }
      return bench
    }

  return (
    <>
      <div id="header">
        <h1 className="titleClass">Pokemon Team</h1>
        <br />
        <button onClick={(event) => getTeam(event)}>Get Your Team</button>
      </div>
      {/* <div id="teamContainer"> */}

        <div id="team"></div>
      {/* </div> */}
    </>
  );
}


