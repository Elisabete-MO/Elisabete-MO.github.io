class AppNav extends HTMLElement {
  connectedCallback() {
    const nav = document.createElement('nav');
    nav.className = 'nav';

    const links = [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' }
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

customElements.define('app-nav', AppNav);
