import './AppHeader.js';
import './AppFooter.js';

class AppLayout extends HTMLElement {
  connectedCallback() {
    const header = document.createElement('app-header');
    const main = document.createElement('main');
    const footer = document.createElement('app-footer');

    this.append(header, main, footer);
  }
}

customElements.define('app-layout', AppLayout);
