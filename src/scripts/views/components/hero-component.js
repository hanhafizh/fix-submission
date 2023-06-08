class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-overlay">
              <div class="hero-inner">
                <h1 class="hero-title">RESTORANT</h1>
                <p class="hero-tag">Mencari restoran dengan mudah di Website Restorant.</p>
              </div>
            </div>
        </div>
        `;
  }
}

customElements.define("hero-component", HeroComponent);
