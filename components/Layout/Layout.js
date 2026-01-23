import '../Header/Header.js';
import '../PageContent/PageContent.js';
import '../Footer/Footer.js';
import { loadCss } from "/utils/loadCss.js";

loadCss("/components/Load/Load.css");

class Layout extends HTMLElement {
  connectedCallback() {
    const header = document.createElement('app-header');
    const pageContent = document.createElement('page-content');
    const footer = document.createElement('app-footer');

    this.append(header, pageContent, footer);
  }
}

customElements.define('app-layout', Layout);
