export class PhotographerFactory {

    constructor(photographer) {
        this.photographer = photographer
    }

    // Méthode pour crée la card du photographe
    createPhotographerCard() {
        const link = document.createElement('a');
        link.ariaLabel = "Link to " + this.photographer.name + "'s page" +
            "from" + this.photographer.city + ", " + 
            "description : " + this.photographer.taglineEnglish + ", " 
            +this.photographer.price + "€ per day";

        const article = document.createElement('article');

        const image = document.createElement('img');
        image.alt = "Profile picture of " + this.photographer.name;

        const nom = document.createElement('h2');
        nom.className = "nom";

        const ville = document.createElement('div');
        ville.className = "ville";

        const description = document.createElement('div');
        description.className = "description";

        const prix = document.createElement('div');
        prix.className = "prix";

        link.appendChild(article);
        article.appendChild(image);
        article.appendChild(nom);
        article.appendChild(ville);
        article.appendChild(description);
        article.appendChild(prix);

        link.href = "photographer-page.html?id=" + this.photographer.id;
        image.src = "public/images/Photographers/" + this.photographer.portrait;
        nom.innerText = this.photographer.name;
        ville.innerText = this.photographer.city + ", " + this.photographer.country;
        description.innerText = this.photographer.tagline;
        prix.innerText = this.photographer.price + "€/jour";

        return link;
    }

    // Méthode pour crée le header du photographe
    createPhotographerHeader() {
        const name = document.getElementById("name");
        const city = document.getElementById("city");
        const desc = document.getElementById("desc");
        const img = document.getElementById("img");

        name.innerText = this.photographer.name;

        city.innerText = this.photographer.city + ", " + this.photographer.country;

        desc.innerText = this.photographer.tagline;
        desc.ariaLabel = this.photographer.taglineEnglish;

        img.src = "public/images/Photographers/" + this.photographer.portrait;
        img.alt = this.photographer.name + "'s profile picture";
    }
}