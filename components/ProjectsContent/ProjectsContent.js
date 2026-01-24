import { loadCss } from "/utils/loadCss.js";

class ProjectsContent extends HTMLElement {
  connectedCallback() {
    loadCss("/components/ProjectsContent/ProjectsContent.css");
    loadCss("/styles/components/surface.css");
    this.innerHTML = `
      <section id="projects" class="surface">
      <h2>🧩 Projects</h2>
        <div class="projects__carousel">
          <button class="carousel__btn prev">‹</button>

          <div class="projects__viewport">
            <div class="projects__track"></div>
          </div>

          <button class="carousel__btn next">›</button>
        </div>
      </section>
    `;

    this.initProjects();
  }

  initProjects() {
    const track = this.querySelector('.projects__track');
    const next = this.querySelector('.next');
    const prev = this.querySelector('.prev');
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
  }
}

customElements.define('projects-content', ProjectsContent);
