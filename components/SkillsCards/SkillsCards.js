import { loadCss } from "/utils/loadCss.js";

class SkillsCards extends HTMLElement {
  connectedCallback() {
    loadCss("/components/SkillsCards/SkillsCards.css");
    this.innerHTML = `
      <section id="skills" class="skills surface">
        <h2>🚀 Skills</h2>

        <div class="skills__grid">

          <article class="skills__card">
            <h3>Languages</h3>
            <ul class="skills__icons">
              <li><a href="https://java.com/" target="_blank"><img alt="Java" src="https://www.vectorlogo.zone/logos/java/java-icon.svg"/></a></li>
              <li><a href="https://www.javascript.com/" target="_blank"><img alt="JavaScript" src="https://upload.vectorlogo.zone/logos/javascript/images/806c2e30-cf85-4b36-81bb-037049603c34.svg"/></a></li>
              <li><a href="https://www.typescriptlang.org/" target="_blank"><img alt="TypeScript" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"/></a></li>
              <li><a href="https://kotlinlang.org/" target="_blank"><img alt="Kotlin" src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"/></a></li>
              <li><a href="https://python.org/" target="_blank"><img alt="Python" src="https://www.vectorlogo.zone/logos/python/python-icon.svg"/></a></li>
            </ul>
          </article>

          <article class="skills__card">
            <h3>Backend</h3>
            <ul class="skills__icons">
              <li><a href="https://spring.io/" target="_blank"><img alt="Spring" src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"/></a></li>
              <li><a href="https://hibernate.org/" target="_blank"><img alt="Hibernate" src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg"/></a></li>
              <li><a href="https://nodejs.org/" target="_blank"><img alt="Node.js" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"/></a></li>
              <li><a href="https://expressjs.com/" target="_blank"><img alt="Express" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"/></a></li>
              <li><a href="https://sequelize.org/" target="_blank"><img alt="Sequelize" src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"/></a></li>
            </ul>
          </article>

          <article class="skills__card">
            <h3>Frontend</h3>
            <ul class="skills__icons">
              <li><a href="https://angular.io/" target="_blank"><img alt="Angular" src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg"/></a></li>
              <li><a href="https://reactjs.org/" target="_blank"><img alt="React" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/></a></li>
              <li><a href="https://html.spec.whatwg.org/" target="_blank"><img alt="HTML" src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"/></a></li>
              <li><a href="https://www.w3.org/Style/CSS/" target="_blank"><img alt="CSS" src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"/></a></li>
            </ul>
          </article>

          <article class="skills__card">
            <h3>Databases</h3>
            <ul class="skills__icons">
              <li><a href="https://mysql.com/" target="_blank"><img alt="MySQL" src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"/></a></li>
              <li><a href="https://postgresql.org/" target="_blank"><img alt="PostgreSQL" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"/></a></li>
              <li><a href="https://mongodb.com/" target="_blank"><img alt="MongoDB" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"/></a></li>
            </ul>
          </article>

          <article class="skills__card">
            <h3>Tools & DevOps</h3>
            <ul class="skills__icons">
              <li><a href="https://github.com/" target="_blank"><img alt="GitHub" src="https://www.vectorlogo.zone/logos/github/github-icon.svg"/></a></li>
              <li><a href="https://docker.com/" target="_blank"><img alt="Docker" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"/></a></li>
              <li><a href="https://aws.amazon.com/" target="_blank"><img alt="AWS" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"/></a></li>
              <li><a href="https://oracle.com/" target="_blank"><img alt="OCI" src="https://github.com/user-attachments/assets/794febd9-0a02-42ec-9a71-2f0c84e63633"/></a></li>
            </ul>
          </article>

        </div>
      </section>
    `;
  }
}

customElements.define('skills-cards', SkillsCards);
