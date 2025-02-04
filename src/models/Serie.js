const { v4: uuid4 } = require("uuid");

class Serie {
    constructor(title, genre, classification, plays = 0) {
        this.id = uuid4();
        this.title = title;
        this.genre = genre;
        this.classification = classification;
        this.plays = plays;
    }
    play() {
        this.plays += 1;
    }
}

module.exports = Serie;
