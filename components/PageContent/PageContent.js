import { loadCss } from "/utils/loadCss.js";

function renderMusic(item) {
  const li = document.createElement('li');

  const emoji = document.createElement('span');
  emoji.setAttribute('role', 'img');
  emoji.setAttribute('aria-label', 'Música');
  emoji.textContent = item.emoji;

  li.appendChild(emoji);
  li.append(' ');

  item.artists.forEach((artist, index) => {
    const a = document.createElement('a');
    a.href = artist.link;
    a.textContent = artist.name;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    li.appendChild(a);

    if (index < item.artists.length - 1) {
      li.append(' / ');
    }
  });

  return li;
}

function createEmoji(emoji, label = 'item') {
  const span = document.createElement('span');
  span.setAttribute('role', 'img');
  span.setAttribute('aria-label', label);
  span.textContent = emoji;
  return span;
}

class PageContent extends HTMLElement {
  connectedCallback() {
    loadCss("/components/PageContent/PageContent.css");
    loadCss("/styles/components/surface.css");
    this.replaceChildren(); // Limpa conteúdo se já existir

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content', 'surface');

    // --- HOME SECTION ---
    const homeSection = document.createElement('section');
    homeSection.id = 'home';
    homeSection.classList.add('home', 'anchor');

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('home__title');

    homeTitle.innerHTML = `
      Elisabete M. de Oliveira
      <span class="home__cursor" aria-hidden="true">▋</span>
    `;

    const homeSubtitle = document.createElement('p');
    homeSubtitle.classList.add('home__subtitle');
    homeSubtitle.textContent = 'Since MS-DOS...';

    homeSection.append(homeTitle, homeSubtitle);

    // --- ABOUT SECTION ---
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.classList.add('about', 'post');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('post__title');
    aboutTitle.textContent = 'About';

    const aboutList = document.createElement('ul');
    aboutList.classList.add('about__list');

    const aboutItems = [
      { emoji: '🎓', label: 'Formada em Processamento de Dados e Licenciatura em Matemática' },
      { emoji: '📍', label: 'Cotia/SP' },
      { emoji: '🌱', label: 'Conservação ambiental como princípio' },
      { emoji: '💻', label: 'Apaixonada por Cálculo e Java' },
      { emoji: '🎮', label: 'World of Warcraft Player', link: 'https://www.worldofwarcraft.com/pt-br/' },
      {
        emoji: '🎵',
        artists: [
          { name: 'Jack White', link: 'https://www.jackwhiteiii.com/' },
          { name: 'Måneskin', link: 'https://maneskin.com/' },
          { name: 'My Chemical Romance', link: 'https://www.mychemicalromance.com/' }
        ]
      },
      { emoji: '🐾', label: 'Mãe da Pitty' }
    ];

    aboutItems.forEach(item => {
      // 🎵 caso especial: música com vários links
      if (item.artists) {
        aboutList.appendChild(renderMusic(item));
        return;
      }

      const li = document.createElement('li');
      const emojiNode = createEmoji(item.emoji, item.label);
      li.appendChild(emojiNode);
      li.append(' ');

      // 🔗 item com link único
      if (item.link) {
        const a = document.createElement('a');
        a.href = item.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = item.label;
        li.appendChild(a);
      } else {
        li.append(item.label);
      }

      aboutList.appendChild(li);
    });

    aboutSection.append(aboutTitle, aboutList);

    // Adiciona seções ao pageContent
    pageContent.append(homeSection, aboutSection);

    // Adiciona pageContent ao componente
    this.appendChild(pageContent);
  }
}

customElements.define('page-content', PageContent);