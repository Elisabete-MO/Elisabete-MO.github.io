class AppHeader extends HTMLElement {
  connectedCallback() {
    this.replaceChildren();

    const clock = document.createElement("app-clock");
    const nav = document.createElement("app-nav");

    this.appendChild(clock);
    this.appendChild(nav);
  }
}

customElements.define("app-header", AppHeader);
