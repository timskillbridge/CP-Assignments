
randIm = () => {


imgNum = randImg()
    
    img = document.createElement('img')

    img.src =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + imgNum +".png"
}

swap = () => {
    let images = document.body.getElementsByTagName('img')
    for (let i = images.length-1;i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
            // let text = document.createTextNode(image.alt)
            let text = document.createElement('p')
            text.innerText = image.alt
            image.parentNode.replaceChild(text,image)
        }
    }
}