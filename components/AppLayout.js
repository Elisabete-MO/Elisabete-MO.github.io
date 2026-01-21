class AppLayout extends HTMLElement {
  connectedCallback() {
    this.replaceChildren();

    const header = document.createElement("app-header");

    const main = document.createElement("main");
    main.setAttribute("role", "main");

    const footer = document.createElement("app-footer");

    this.append(header, main, footer);
  }
}

customElements.define("app-layout", AppLayout);
