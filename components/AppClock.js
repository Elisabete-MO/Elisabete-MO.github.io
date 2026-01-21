class AppClock extends HTMLElement {
  connectedCallback() {
    this.setAttribute("aria-label", "Current time");
    this.updateClock();

    this.intervalId = setInterval(() => {
      this.updateClock();
    }, 60000);
  }

  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateClock() {
    const now = new Date();
    this.textContent = this.formatDateTimeUS(now);
  }

  formatDateTimeUS(now) {
    const date = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(now);

    const day = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(now);

    const time = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(now);

    return `${date} · ${day} · ${time}`;
  }
}

customElements.define("app-clock", AppClock);
