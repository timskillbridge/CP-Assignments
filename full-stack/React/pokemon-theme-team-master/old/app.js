



// https://pokeapi.co/api/v2/{endpoint}/

const getTeam = async() => {
    let rand = Math.floor(Math.random()*150);
    let url = `https://pokeapi.co/api/v2/pokemon/${rand}/`;
    let response = await axios.get(url)
    // console.log(response)
    const pokeLeaderImg = response['data']['sprites']['front_default']
    const responseTypes = response['data']['types']
    const leadTypes = []
    for(x=0;x<responseTypes.length;x++) {
        leadTypes.push(responseTypes[x]['type'].name)
    }
    url = 'https://pokeapi.co/api/v2/pokemon?limit=699'
    response = await axios.get(url)
    // console.log(response)
    full_list = []
    responseData = response['data']['results']
    
    for (x=0;x<responseData.length;x++) {
            full_list.unshift(responseData[x].url)
        }
    match_type = []
    for (x=0;x<full_list.length;x++) {
        url = full_list[x]
        response = await axios.get(url)
        types = response['data']['types']


        for(y=0; y<responseTypes.length; y++) {
            for (z=0;z<types.length;z++) {
                // console.log(`${types[z]['type'].name} and ${responseTypes[y]['type'].name}`)
            if (types[z]['type'].name == responseTypes[y]['type'].name && match_type.includes(url) == false){

                match_type.push(response['data']['sprites']['front_default'])
            }
        }
        }
        
    }
    teamPics = []
    matchLength = match_type.length-1
    for (x=0;x<5;x++) {
        rand = Math.floor(Math.random()*matchLength)
        if(match_type[rand] != pokeLeaderImg) {
            teamPics.push(match_type[rand])
        }
    }
    let containTeam = document.querySelector("#containLead")
    let containMembers = document.querySelector("#containMembers")
    let leadImg = document.createElement('img')
    leadImg.src = pokeLeaderImg
    crew = []
    containTeam.appendChild(leadImg)
    for(x=0;x<5;x++) {
    crew.push(document.createElement('img'))
    crew[x].src = match_type[x]
    containMembers.appendChild(crew[x])
    }
    // console.log(crew)




    
}