
import {useState,useEffect} from 'react'
import react from 'react'
import App from '../App.jsx'

// const GBox = (wordDict,updateDict) => {  <---- old incorrect declaration caused errors saying passes props weren't valid, fixed but left here
    const GBox = ({ wordDict, updateDict, guessedLetters, updateGuesses }) => {
    const [guess, setGuess] = useState("")

    const clearGuess = () => {
        setGuess("")
      }

      const checkGuess = (guess) => {
        if(wordDict[guess]) {
            alert("You already guessed that")
            console.log(guess)
        } else {
            updateDict(guess,guess);
            updateGuesses(guess)
            // console.log(wordDict)

        }
      }

return (
    <>   
    <form onSubmit={(event) => [event.preventDefault(), clearGuess(), checkGuess(guess)]}>

        <input
            className='guessBox'
            type="text"
            value={guess}
            maxLength={1}
            onChange={(event) => setGuess(event.target.value)} />
        <input type="submit" value="Guess" />
    </form><br />
    </>
    
);
        };
        
export default GBox

