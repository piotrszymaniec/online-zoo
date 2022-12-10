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



function createCard(dataItem) {
  console.log(dataItem)
  const { name = 2, description, food, image } = dataItem

  const item = document.createElement('div');
  item.classList.add('pet-card')
  item.innerHTML = `<div class="pet-card">
            <div class="card-image">
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
          </div> `
  return item
}

function createSet(quantity, dataArray) {
  const _set = new Set()
  while (_set.size < quantity) {
    let randomIndex = Math.ceil(Math.random() * dataArray.length - 1)
    _set.add(dataArray[randomIndex])
  }
  return Array.from(_set)
}

//make 4/6 call
const cardDeckHtmlElements = createSet(6, petsCardsData).map(dataItem => createCard(dataItem))

const rowsNodes = document.querySelectorAll('.cards-container .cards-row')

function createNewGallery(parentRow1, parentRow2, elementsUniqueArray) {
  elementsUniqueArray
    .forEach((element, index) => {
      if (index % 2 == 0) {
        parentRow1.append(element)
      } else {
        parentRow2.append(element)
      }
    });
}

// createNewGallery(rowsNodes[0], rowsNodes[1], cardDeckHtmlElements)


//dodaj karty do rows w kontenerach rzeby mozna bylo przesuwac karty jak w testimonial
//a co z destroyem (Жахн)
document.querySelector('#card-container-1')
document.querySelector('#card-container-2')

document.querySelector('.cards-nav-left').addEventListener('click', (e) => {
  console.log('left-click')
  //block clicking for x sec
  //this el set attribute to disabled
  //addcards
  //preppend - because of left click
  //after animation is over destroy last 3/2 cards
  //unblock button
})
document.querySelector('.cards-nav-right').addEventListener('click', (e) => {
  console.log('right-click')
  //block clicking for x sec
  //this el set attribute to disabled
  //addcards
  //preppend - because of left click
  //after animation is over destroy last 3/2 cards
  //unblock button
})



// import Control from "./common/control";
//clicking button calls a function

// class CardView extends Control {
//   constructor(parentEl) {
//     super(parentEl, 'div', 'pet-card')
//   }
// }

// class CarouselView extends Control {
//   constructor(parentEl) {
//     super(parentEl, 'div', 'cards-container')
//   }

// }
//