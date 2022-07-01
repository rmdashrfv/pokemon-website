const pokemon = [
  {name: 'Bulbasaur', id: '001'},
  {name: 'Charmander', id: '004'},
  {name: 'Squirtle', id: '007'},
]

const userRoster = []

const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')

newBtn.addEventListener('click', async () => {
  if (userRoster.length >= 6) return;
  let num = prompt('ENTER A POKEMON NUMBER')
  console.log('Number entered', num)
  let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
  let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
  let req = await fetch(dataUrl)
  let res = await req.json()
  let name = res.forms[0].name
  let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
  let audio = document.createElement('audio')
  let source = document.createElement('source')
  source.setAttribute('src', audioUrl)
  source.setAttribute('type', 'audio/mpeg')
  audio.append(source)
  let h3 = document.createElement('h3')
  h3.innerText = name
  let img = document.createElement('img')
  img.setAttribute('src', imgUrl)
  img.setAttribute('class', 'roster-img')
  let btn = document.createElement('button')
  btn.innerText = "X"
  let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)
  position.addEventListener('click', () => {
    position.classList.add('animate__animated')
    position.classList.add('animate__shakeX')
    setTimeout(() => {
      position.classList.remove('animate__shakeX')
      position.classList.remove('pokemon-card-flash')
    }, 1300)
    audio.play()
  })
  btn.addEventListener('click', () => {
    position.removeEventListener('click')
    source.setAttribute('src', '')
    audio.innerHTML = ''
    position.innerHTML = ''
  })
  position.append(img, h3, audio, btn)
  userRoster.push(num)
})

// DOM = Document Object Model
// loop over every ID
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

const createPokemon = (pokemonName, imgUrl) => {
  let div = document.createElement('div') // adding a div to house the img element
  let h3 = document.createElement('h3')
  h3.innerText = pokemonName
  div.setAttribute('class', 'pokemon-card') // setting the class of the div
  let img = document.createElement('img') // creating the img element itself
  let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName.toLowerCase()}.mp3`
  let audio = document.createElement('audio')
  let source = document.createElement('source')
  source.setAttribute('src', audioUrl)
  source.setAttribute('type', 'audio/mpeg')
  audio.append(source)
  div.addEventListener('click', () => {
    div.classList.add('animate__animated')
    div.classList.add('animate__shakeX')
    setTimeout(() => {
      div.classList.remove('animate__shakeX')
      div.classList.remove('pokemon-card-flash')
    }, 1300)
    audio.play()
  })
  img.src = imgUrl
  div.append(img, h3, audio)
  return div;
}

pokemon.map((element, index) => {
  console.log(element)
  let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
  const pokemonElement = createPokemon(element.name, imgUrl)
  containerDiv.append(pokemonElement)
})
