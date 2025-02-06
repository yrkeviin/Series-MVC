class SerieList {
    constructor() {
        this.series = [];
    }
    addSerie(serie) {
        this.series.push(serie);
    }
    getAllSeries() {
        return this.series;
    }
    getSerieById(id) {
        const serie = this.series.find((serie) => serie.id == id);
        if(!serie) {
            throw new Error("Série não encontrada!");
        }
        return serie;
    }
    updateSerie(id, updateData) {
        const serie = this.getSerieById(id);
        Object.assign(serie, updateData);
        return serie;
    }
    deleteSerie(id) {
        this.series = this.series.filter((serie) => serie.id != id);
    }
    getTotalSeries() {
        return this.series.length;
    }
    getTop10Series() {
        return this.series.sort((a, b) => b.plays - a.plays).slice(0, 10);
    }
}

module.exports = SerieList;
