import Control from "./common/control";
const petsCardsData = [
  {
    name: 'alligators',
    environment: 'native to southeastern u. s.',
    food: 'meat',
    img: '../images/photo-alligator.webp',
  },
  {
    name: 'cheetahs',
    environment: 'native to africa',
    food: 'meat',
    img: '../images/photo-cheetah.webp',
  },
  {
    name: 'eagles',
    environment: 'native to south america',
    food: 'meat',
    img: '../images/photo-eagle.webp',
  },
  {
    name: 'giant pandas',
    environment: 'native to southwest china',
    food: 'fruit',
    img: '../images/photo-panda.webp',
  },
  {
    name: 'gorillas',
    environment: 'native to congo',
    food: 'fruit',
    img: '../images/photo-gorilla.webp',
  },
  {
    name: 'gorillas',
    environment: 'native to congo',
    food: 'fruit',
    img: '../images/photo-gorilla-2.webp',
  },
  {
    name: 'two-toed sloth',
    environment: 'mesoamerica, south america',
    food: 'fruit',
    img: '../images/photo-two-toed-sloth.webp',
  },
  {
    name: 'penguins',
    environment: 'native to antarctica',
    food: 'meat',
    img: '../images/photo-penguin.webp',
  },
]
const cardsData = [
  { name: "animal 00", description: "description", food: "fish" },
  { name: "animal 01", description: "description", food: "fish" },
  { name: "animal 02", description: "description", food: "fish" },
  { name: "animal 03", description: "description", food: "fish" },
  { name: "animal 04", description: "description", food: "fish" },
  { name: "animal 05", description: "description", food: "fish" },
  { name: "animal 06", description: "description", food: "fish" },
  { name: "animal 07", description: "description", food: "fish" },
  { name: "animal 08", description: "description", food: "fish" },
]

function createCard({ name, environment, food }) {
  const parentEl = document.createElement('div');
  const item = new Control(parentEl, 'div', 'card');
  return
}
const cardDeck = cardsData.map(dataItem => createCard(dataItem))

//clicking button calls a function