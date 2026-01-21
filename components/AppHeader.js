class AppHeader extends HTMLElement {
  connectedCallback() {
    this.replaceChildren();

    const header = document.createElement('header');
    header.classList.add('header', 'surface');

    const clock = document.createElement('app-clock');
    const nav = document.createElement('app-nav');

    header.append(clock, nav);
    this.appendChild(header);
  }
}

customElements.define('app-header', AppHeader);
