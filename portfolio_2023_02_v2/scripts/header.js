const headerContent = `
<img src="./images/devil.jpeg" alt=":P" width="100px" height="100px">
<h1>My-Name</h1>
  <nav class="nav" role="navigation" aria-label="Main">
      <ul>
          <li><a href="#about" class="header__top__link">About</a></li>
          <li><a href="#certs" class="header__top__link">Certifications</a></li>
          <li><a href="#skills" class="header__top__link">Skills</a></li>
          <li><a href="#projects" class="header__top__link">Projects</a></li>
      </ul>
  </nav> `;

document.getElementsByClassName('header__top')[0].innerHTML = headerContent;
