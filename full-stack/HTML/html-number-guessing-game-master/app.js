
// Your function(s) should go here that will interact with the webpage or DOM

let guess = Math.floor(Math.random()*100)
// alert(guess)

handleGuess = (evt) => {
    evt.preventDefault()
    let guessesSoFar = []
    let formData = new FormData(evt.target)
    let passedObj = Object.fromEntries(formData)
    let placeDown = document.querySelector('#displayGuess')
    let btn = document.createElement('button')
    btn.classList.add('btn')
    let appendText = ""
    for (let key in passedObj) {
        appendText += `${passedObj[key]}`


    }
    if (parseInt(appendText)*1 == guess) {
        document.getElementById('guide').innerText = "You guessed it!"
    } else if (parseInt(appendText) > guess) {
        document.getElementById('guide').innerText = "Too High"
    } else {document.getElementById('guide').innerText = "Too Low"}
    
    let guessbox = document.getElementById('guessbox')
    guessbox.value = ""
    btn.name = appendText

    let buttons = placeDown.querySelectorAll('button')
    let isThere = false    
    buttons.forEach(function(button) {

        if (button.innerText == appendText) {
            isThere = true
        }
});

    if (appendText != null && !isNaN(appendText)){
        if(isThere == false){
            guessesSoFar.push(appendText)
            btn.innerText = appendText
            placeDown.appendChild(btn)
        }
        else {
            document.getElementById('guide').innerText = "Already Guessed That"
        }


    }
}