import { useState } from 'react'
import './App.css'
import wordList from './wordArray.json'
import { useEffect } from 'react'
import GBox from './Components/guessInput.jsx'


export default function App() {
  const[gameWord,setGameWord] = useState(wordList[Math.floor(Math.random()*wordList.length-1)+1])
  const[word,setWord] = useState("")
  const[visWord,setVisWord] = useState("")
  const[wordDict,setWordDict] = useState({})
  const [guessedLetters,setGuessedLetters] = useState([])

// Update the dictionary containing guesses, utilizes spread operator and the prior version of the dictionary (w) 
  const updateDict = (key,value) => {
    setWordDict((w) => ({ ...w,[key]:value}));
    console.log(`${value} key`)
  };

  //Keeps track of the array displaying guessed letters. Utilizes strucutred clone to duplicate array
  const updateGuesses = (guess) => {
    let tempArr = structuredClone(guessedLetters)
    tempArr.push(`${guess.toUpperCase()} `)
    console.log(tempArr)
    setGuessedLetters(() => tempArr)

  }
// Keeps track of guessed letters, functions as the game reset function if six incorrect guesses are made
  useEffect(() => {
    let count = guessedLetters.length
    let remainingLetters = (new Array(new Set(visWord)).length-1)-count
    console.log(visWord)

    if (remainingLetters == -6) {
      alert("You're out of guesses; the hangman has arrived")
      setVisWord("")
      setGameWord(wordList[Math.floor(Math.random()*wordList.length-1)+1])
      setGuessedLetters([])
      setWordDict({})
    }
  },[guessedLetters])

// keeps track of the word dictionary of guesses, displays the '_'s and correct letters

  useEffect(() => {
    let word = gameWord
    let wordSpace = []
    for(let x=0;x<word.length;x++) {
      wordDict[word[x]] ? wordSpace.push(word[x])
       : wordSpace.push("_")
    }
    setWord(wordSpace.join(' ').toUpperCase())
    setVisWord(word)

  },[wordDict])

  useEffect(() => {

  })

  return (
    <>
      <h1>Hangman: {word} </h1>{/*{visWord} */}
    {/* Calls the  guessInput component containing the function GBox, passes props*/}
      <GBox wordDict={wordDict} updateDict={updateDict} guessedLetters={guessedLetters} updateGuesses={updateGuesses}/>
      {/* <form onSubmit=
        {(event) => [event.preventDefault(), clearGuess()]}>

          <input
          className='guessBox'
          type="text"
          value = {guess}
          maxLength={1}
          onChange = {
            (event) => setGuess(event.target.value)
          }
          />
          <input type="submit" value="Guess" />
      </form>
      <br /> */}
      <div className='guessedBox'>
        Guessed Letters
        <br />
        {guessedLetters}
        </div>
    </>
  )
}


