export function initClock() {
  const clock = document.querySelector('.header__clock');
  if (!clock) return;

  function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const day = now.toLocaleDateString('en', {
      weekday: 'long'
    });

    function formatDateTimeUS(now) {
      const date = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }).format(now);

      const day = new Intl.DateTimeFormat('en-US', {
        weekday: 'short'
      }).format(now);

      const time = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(now);

      return `${date} · ${day} · ${time}`;
    }

    clock.textContent = formatDateTimeUS(now);
  }

  updateClock();
  setInterval(updateClock, 60000);
}
