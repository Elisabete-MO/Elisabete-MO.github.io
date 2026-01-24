import '../Header/Header.js';
import '../PageContent/PageContent.js';
import '../SkillsCards/SkillsCards.js';
import '../ProjectsContent/ProjectsContent.js';
import '../Footer/Footer.js';
import { loadCss } from "/utils/loadCss.js";

loadCss("/components/Load/Load.css");

class Layout extends HTMLElement {
  connectedCallback() {
    const header = document.createElement('app-header');
    const pageContent = document.createElement('page-content');
    const skillsCards = document.createElement('skills-cards');
    const projectsContent = document.createElement('projects-content');
    const footer = document.createElement('app-footer');

    this.append(header, pageContent, skillsCards, projectsContent, footer);
  }
}

customElements.define('app-layout', Layout);
