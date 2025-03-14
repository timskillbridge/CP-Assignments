
import { useState, useEffect } from 'react'
import React from 'react'
import '../App.css'

export default function Moles() {

 const [mole,setMole] = useState(() => {
                                     const initialField = new Array(9).fill(false)
                                     return initialField});
 const [score,setScore] = useState(0);
 
 const setMoleFieldVisibility = ((index,isVis) => {
   setMole((m) => {
     const newField = [...m]
     newField[index] = isVis
     return newField
   })
 })
 
 const increaseScore = (() => {
   const currScore = score
   setScore(currScore+100)
 })
 
 const whack = ((index) => {
   if(mole[index]) {
   setMoleFieldVisibility(index,false)
   setScore(increaseScore)
   
 }})
 
 useEffect(() => {
   const _ = setInterval(() => {
     const randIndex = Math.floor(Math.random()*mole.length)
     const randIndex1 = Math.floor(Math.random()*mole.length)
     const randIndex2 = Math.floor(Math.random()*mole.length)
     
     setMoleFieldVisibility(randIndex,true);
     setMoleFieldVisibility(randIndex1,true);
 
     setTimeout(() => {
       setMoleFieldVisibility(randIndex,false)
     },1200)
     setTimeout(() => {
       setMoleFieldVisibility(randIndex1,false)
     },900)
     if (randIndex2 %2 == 0) {
       console.log('\nbonus mole')
       setTimeout(() => {
       setMoleFieldVisibility(randIndex2,true);
     },800);
     }
   },Math.floor(Math.random()*600)+1400);
 },[])
 
 
   return (
     <>
     <div className="scoreBox"><h3>Score:{score}</h3></div>
     <div id="mole_field">

       {/* Apparently it's good practice to name unused variables '_' in funcitons */}
       {mole.map((_,index) => (
        
         // onclick needs to be followed by '{' because what follows is javascript, not what is prior to
         <div key={index} className="hole_or_mole" onClick={() => {
            
           console.log(`
             ${mole[index]? "\ngonna whack the mole at " + index:"\nno mole at "+index}
           `)
           whack(index);
 
       }}>
 
         {`${mole[index]? "Mole":""}`}</div>
    
       ))}
       </div>
     </>
   )
 }
 

 

