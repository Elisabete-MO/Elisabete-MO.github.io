export function loadHeader() {
  const headerContent = `
    <div class="header__clock" aria-label="Current time"></div>
    <nav class="nav" aria-label="Main navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </nav>
  `;

  const header = document.querySelector('.header__top');
  if (header) {
    header.innerHTML = headerContent;
  }
}
