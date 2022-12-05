import Control from "./common/control.js"; './common/control.js'


// burgerMenu.addEventListener('click', (e) => {
//   //show menu

// })

class BurgerMenu extends Control {
  constructor(parentNode) {
    super(parentNode = null, tagName = 'div', className = 'burger-menu')
    this.node.addEventListener('click', this.toggle)
    this.visible = false;
  }
  toggle() {
    if (this.visible) {
      this.node.styles.display = 'block';
    } else {
      this.node.styles.display = 'none';
    }
    this.visible = !this.visible
  }
}
// const burgerMenu = new BurgerMenu(document.body, 'div');

function showMenu() {
  document.querySelector(".burger-menu").styles.display = 'block'
}