class AppNav extends HTMLElement {
  connectedCallback() {
    this.replaceChildren();

    const nav = document.createElement("nav");
    nav.className = "nav";
    nav.setAttribute("aria-label", "Main navigation");

    const ul = document.createElement("ul");

    const links = [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
    ];

    links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = link.href;
      a.textContent = link.label;

      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    this.appendChild(nav);
  }
}

customElements.define("app-nav", AppNav);
