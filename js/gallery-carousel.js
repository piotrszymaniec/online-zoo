import Control from "./common/control";
const petsCardsData = [
  {
    name: 'alligators',
    description: 'Native to Southeastern U.S.',
    food: 'meat',
    img: '/images/photo-alligator.webp',
  },
  {
    name: 'cheetahs',
    description: 'Native to Africa',
    food: 'meat',
    img: '/images/photo-cheetah.webp',
  },
  {
    name: 'eagles',
    description: 'Native to South america',
    food: 'meat',
    img: '/images/photo-eagle.webp',
  },
  {
    name: 'giant pandas',
    description: 'Native to Southwest China',
    food: 'fruit',
    img: '/images/photo-panda.webp',
  },
  {
    name: 'gorillas',
    description: 'Native to Congo',
    food: 'fruit',
    img: '/images/photo-gorilla.webp',
  },
  {
    name: 'gorillas',
    description: 'Native to Congo',
    food: 'fruit',
    img: '/images/photo-gorilla-2.webp',
  },
  {
    name: 'two-toed sloth',
    description: 'Mesoamerica, South America',
    food: 'fruit',
    img: '/images/photo-two-toed-sloth.webp',
  },
  {
    name: 'penguins',
    description: 'Native to Antarctica',
    food: 'meat',
    img: '/images/photo-penguin.webp',
  },
]


function createCard({ name, description, food }) {
  const parentEl = document.createElement('div');
  const item = new Control(parentEl, 'div', 'card');
  return
}
const cardDeck = petsCardsData.map(dataItem => createCard(dataItem))

//clicking button calls a function

class CardView extends Control {
  constructor(parentEl) {
    super(parentEl, 'div', 'pet-card')
  }
}

class CarouselView extends Control {
  constructor(parentEl) {
    super(parentEl, 'div', 'cards-container')
  }

}