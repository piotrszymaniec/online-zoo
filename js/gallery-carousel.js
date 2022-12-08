import Control from "./common/control";

const data = [
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

const createItem = ({ name, description, food }) {
  const parentEl = document.createElement('div');
  const item = new Control(parentEl, 'div', 'card');
}