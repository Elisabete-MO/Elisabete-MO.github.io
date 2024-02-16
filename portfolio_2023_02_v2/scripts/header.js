const headerContent = `
<img src="./images/devil.jpeg" alt=":P" width="100px" height="100px">
<h1>My-Name</h1>
<nav>
  <ul>
    <li><a href="#anc_post" class="header__top__link">Home</a></li>
    <li><a href="#" class="header__top__link">About me</a></li>
    <li><a href="#" class="header__top__link">Contact</a></li>
    <li><a href="#" class="header__top__link">Formacao</a></li>
    <li><a href="#" class="header__top__link">Experiencia</a></li>
    <li><a href="#" class="header__top__link">Projetos</a></li>
    <li><a href="#" class="header__top__link">Skills</a></li>
    <li><a href="#" class="header__top__link">Contato</a></li>
    <li><a href="#" class="header__top__link">Curriculo</a></li>
  </ul>
</nav> `;

document.getElementsByClassName('header__top')[0].innerHTML = headerContent;
