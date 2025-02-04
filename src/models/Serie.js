const { v4: uuid4 } = require("uuid");

class Serie {
    constructor(title, genre, classification) {
        this.id = uuid4();
        this.title = title;
        this.genre = genre;
        this.classification = classification;
    }
}

module.exports = Serie;
