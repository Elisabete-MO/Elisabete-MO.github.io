document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.projects__track');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const CARD_WIDTH = 280 + 32;

  if (!track || !next || !prev) return;

  fetch('https://api.github.com/users/Elisabete-MO/repos')
    .then(res => res.json())
    .then(repos => {
      repos
        .filter(repo => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .forEach(repo => {
          const card = document.createElement('article');
          card.className = 'project__card';

          card.innerHTML = `
          
            <h3 class="project__title">${repo.name}</h3>
            <p>${repo.description || 'Sem descrição.'}</p>
            <div class="project__footer">
              <small>🛠 ${repo.language || '—'}</small>
              <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
            </div>
          `;

          track.appendChild(card);
        });
    });

  next.addEventListener('click', () => {
    track.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
  });
});

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
  track.scrollBy({ left: 320, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  track.scrollBy({ left: -320, behavior: 'smooth' });
});