import { loadCss } from "/utils/loadCss.js";
class Nav extends HTMLElement {
  connectedCallback() {
    loadCss("/components/Nav/Nav.css");
    const nav = document.createElement('nav');
    nav.className = 'nav';

    const links = [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' }
    ];

    links.forEach(({ label, href }) => {
      const a = document.createElement('a');
      a.textContent = label;
      a.href = href;
      nav.appendChild(a);
    });

    this.appendChild(nav);
  }
}

customElements.define('app-nav', Nav);
