
const getDog = async() => {
    let url = 'https://random.dog/woof.json'
    let response = await fetch(url);
    let data = await response.json()
    let passUrl = data['url']
    generateCard(passUrl)


}

generateCard = (url) => {
    let container = document.querySelector('#image-container')
    let newCard = document.createElement('div')
    newCard.classList.add('dogcard')
    let cardImage = document.createElement('img')
    cardImage.src = url
    cardImage.classList.add('dogImg')
    newCard.appendChild(cardImage)
    container.appendChild(newCard)
}