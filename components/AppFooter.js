class AppFooter extends HTMLElement {
    connectedCallback() {
        this.replaceChildren();

        const pAuthor = document.createElement("p");
        pAuthor.textContent = "Created by Elisabete Oliveira © 2025";

        const pCredits = document.createElement("p");

        const linkIcon = document.createElement("a");
        linkIcon.href = "https://icons8.com/icon/T12wf6pMSu6F/horda-de-world-of-warcraft";
        linkIcon.target = "_blank";
        linkIcon.rel = "noopener noreferrer";
        linkIcon.textContent = "World of Warcraft Horde";

        const linkIcons8 = document.createElement("a");
        linkIcons8.href = "https://icons8.com";
        linkIcons8.target = "_blank";
        linkIcons8.rel = "noopener noreferrer";
        linkIcons8.textContent = "Icons8";

        pCredits.append(
            linkIcon,
            document.createTextNode(" icon by "),
            linkIcons8
        );

        this.append(pAuthor, pCredits);
    }
}

customElements.define("app-footer", AppFooter);
