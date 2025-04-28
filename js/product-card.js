class CatalogoProducto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.loadStyles().then(() => {
      this.render();
    });
  }

  async loadStyles() {
    const response = await fetch('css/product-card.css');
    const cssText = await response.text();
    const sheet = new CSSStyleSheet();
    await sheet.replace(cssText);
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }

  render() {
    const nombre = this.getAttribute('nombre');
    const precio = this.getAttribute('precio');
    const imagen = this.getAttribute('imagen');
    const modelo = this.getAttribute('modelo');
    const origen = this.getAttribute('origen');
    const descripcion = this.getAttribute('descripcion')

    this.shadowRoot.innerHTML += `
      <div class="producto">
        <img src="${imagen}" alt="${nombre}">
        <h2>${nombre}</h2>
        <p>${origen}</p>
        <p><b>${precio}</b></p>
      </div>
    `;

    const producto = this.shadowRoot.querySelector('.producto');
    producto.addEventListener('click', () => {
      window.location.href = `model.html?modelo=${encodeURIComponent(modelo)}&descripcion=${encodeURIComponent(descripcion)}`;
    });
  }
}

customElements.define('catalogo-producto', CatalogoProducto);
