import { loadCss } from "/utils/loadCss.js";

loadCss("/components/Clock/Clock.css");

class Clock extends HTMLElement {
  connectedCallback() {
    this.classList.add('header__clock');
    this.update();
    this.interval = setInterval(() => this.update(), 60000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  update() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    const parts = formatter.formatToParts(now);

    this.innerHTML = parts
      .map(p => {
        if (p.type === 'literal' && p.value === ':') {
          return `<span class="separator">:</span>`;
        }
        return `<span>${p.value}</span>`;
      })
      .join('');
  }
}

customElements.define('app-clock', Clock);
