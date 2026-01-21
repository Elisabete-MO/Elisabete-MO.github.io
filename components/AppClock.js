class AppClock extends HTMLElement {
  connectedCallback() {
    this.update();
    this.interval = setInterval(() => this.update(), 60000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  update() {
    const now = new Date();

    const formatted = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(now);

    this.textContent = formatted;
    this.classList.add('header__clock');
  }
}

customElements.define('app-clock', AppClock);
