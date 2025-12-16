export function loadSkills() {
  const skillsContent = `
    <h2> 🚀 Skills </h2>  

    <div class="skills__grid">

      <article class="skills__card">
        <h3>Languages</h3>
        <ul class="skills__icons">
          <li><a href="https://java.com/" target="_blank"><img alt="Java" src="https://www.vectorlogo.zone/logos/java/java-icon.svg" width="40" /></a></li>
          <li><a href="https://www.javascript.com/"><img src="https://upload.vectorlogo.zone/logos/javascript/images/806c2e30-cf85-4b36-81bb-037049603c34.svg" alt="JavaScript" width="40" /></a></li>
          <li><a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="TypeScript" width="40" /> </a></li>
          <li><a href="https://kotlinlang.org/" target="_blank"><img alt="Kotlin" src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" width="40" /></a></li>
          <li><a href="https://python.org/" target="_blank"><img alt="Python" src="https://www.vectorlogo.zone/logos/python/python-icon.svg" width="40" /></a></li>
        </ul>
      </article>

      <article class="skills__card">
        <h3>Backend</h3>
        <ul class="skills__icons">
          <li><a href="https://spring.io/" target="_blank"><img alt="Spring Framework"        src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" width="40" /></a></li>
          <li><a href="https://hibernate.org/" target="_blank"><img alt="Hibernate" src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" width="40" /></a></li>
          <li><a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Nodejs" width="40" /> </a></li>
          <li><a href="http://expressjs.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="Express" width="40" /> </a></li>
          <li><a href="https://sequelize.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="Sequelize" width="40" /></a></li>
        </ul>
      </article>

      <article class="skills__card">
        <h3>Frontend</h3>
        <ul class="skills__icons">
          <li><a href="https://angular.io/" target="_blank"><img alt="Angular" src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" width="40" /></a></li>
          <li><a href="https://reactjs.org/"><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="ReactJS" width="40" /></a></li>
          <li><a href="https://html.spec.whatwg.org/multipage/"><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="HTML 5" width="40" /></a></li>
          <li><a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="CSS" width="40" /></a></li>
        </ul>
      </article>

      <article class="skills__card">
        <h3>Databases</h3>
        <ul class="skills__icons">
          <li><a href="https://www.MySQL.com/" target="_blank"><img alt="MySQL" src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" width="40"/></a></li>
          <li><a href="https://www.postgresql.org/"><img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="PostgreSQL" width="40" /></a></li>
          <li><a href="https://www.mongodb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="Mongodb" width="40" /> </a></li>
        </ul>
      </article>

      <article class="skills__card">
        <h3>Tools & DevOps</h3>
        <ul class="skills__icons">
          <li><a href="https://github.com/"><img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" width="40" /></a></li>
          <li><a href="https://www.docker.com/" target="_blank"><img alt="Docker" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" width="40" /></a></li>
          <li><a href="https://jwt.io/" target="_blank"> <img src="https://img.icons8.com/color/512/java-web-token.png" alt="JsonWebToken" width="40" /> </a></li>
          <li><a href="https://commonmark.org/"><img src="https://www.vectorlogo.zone/logos/commonmark/commonmark-icon.svg" alt="Markdown" width="40" /></a></li>
          <li><a href="https://aws.amazon.com/"><img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="Amazon Web Services" width="40" /></a></li>
          <li><a href="https://oracle.com/"><img src="https://github.com/user-attachments/assets/794febd9-0a02-42ec-9a71-2f0c84e63633" alt="Oracle Cloud Infrastructure" width="40" /></a></li>
        </ul>
      </article>

    </div>
      `;


  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    skillsSection.innerHTML = skillsContent;
  }
}
