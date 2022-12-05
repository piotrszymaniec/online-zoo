class Control extends HTMLElement {
  node;
  constructor(parentNode = null, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.className = className;
    el.innerHTML = content;
    if (parentNode) {
      parentNode.append(el);
    }
    this.node = el
  }

  destroy() {
    this.node.remove();
  }

}

export default Control;
