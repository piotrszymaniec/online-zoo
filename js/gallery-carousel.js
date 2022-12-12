const petsCardsData = [
  {
    name: 'alligators',
    description: 'Native to Southeastern U.S.',
    food: 'fish',
    image: '/images/photo-alligator.webp',
  },
  {
    name: 'cheetahs',
    description: 'Native to Africa',
    food: 'fish',
    image: '/images/photo-cheetahs.webp',
  },
  {
    name: 'eagles',
    description: 'Native to South america',
    food: 'fish',
    image: '/images/photo-eagle.webp',
  },
  {
    name: 'giant pandas',
    description: 'Native to Southwest China',
    food: 'fruit',
    image: '/images/photo-pandas.webp',
  },
  {
    name: 'gorillas',
    description: 'Native to Congo',
    food: 'fruit',
    image: '/images/photo-gorilla.webp',
  },
  {
    name: 'gorillas',
    description: 'Native to Congo',
    food: 'fruit',
    image: '/images/photo-gorilla-2.webp',
  },
  {
    name: 'two-toed sloth',
    description: 'Mesoamerica, South America',
    food: 'fruit',
    image: '/images/photo-two-toed-sloth.webp',
  },
  {
    name: 'penguins',
    description: 'Native to Antarctica',
    food: 'fish',
    image: '/images/photo-penguin.webp',
  },
]

function setCardHTMLContent(dataItem) {
  console.log(dataItem)
  const { name, description, food, image } = dataItem
  return `<div class="card-image">
              <img src="${image}" alt="${name}">
            </div>
            <div class="card-footer">
              <div class="card-content">
                <div class="card-title">
                 ${name.toUpperCase()}
                </div>
                <div class="card-decription">${description}</div>
              </div>
              <div class="card-icon">
                <img src="./images/icons/pet-food-${food}.svg" alt="banana">
              </div>
            </div>
          `;
}

function createSet(quantity, dataArray) {
  const _set = new Set()
  while (_set.size < quantity) {
    let randomIndex = Math.ceil(Math.random() * dataArray.length - 1)
    _set.add(dataArray[randomIndex])
  }
  return Array.from(_set)
}

document.querySelector('.cards-nav-left').addEventListener('click', (e) => {
  console.log('left-click')
  // changeCards()
  changeCardImages()
  //block clicking for x sec
  //this el set attribute to disabled
  //addcards
  //preppend - because of left click
  //after animation is over destroy last 3/2 cards
  //unblock button
})
document.querySelector('.cards-nav-right').addEventListener('click', (e) => {
  console.log('right-click')
  // changeCards()
  changeCardImages()

  //block clicking for x sec
  //this el set attribute to disabled
  //addcards
  //preppend - because of left click
  //after animation is over destroy last 3/2 cards
  //unblock button
})


function changeCards() {
  const cardQuantity = matchMedia("(max-width:1000px)").matches ? 4 : 6;
  const set = createSet(cardQuantity, petsCardsData)
  document.querySelectorAll('.pet-card').forEach((card, idx) => {
    card.innerHTML = setCardHTMLContent(set[idx])
  })
}

function changeCardImages() {
  const cardQuantity = matchMedia("(max-width:1000px)").matches ? 4 : 6;
  const set = createSet(cardQuantity, petsCardsData)
  document.querySelectorAll('.card-image img').forEach((img, idx) => {
    img.setAttribute('src', set[idx].image)
  })
}