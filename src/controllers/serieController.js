const Serie = require("../models/Serie");
const SerieList = require("../models/SerieList");

const lista = new SerieList();

const serie1 = new Serie("The Vampire Diaries", "Drama", 18, 34);
lista.addSerie(serie1);

lista.addSerie(new Serie("PLL", "Suspense", 16, 239));

const router = {
    addSerie: (req, res) => {
        try {
            const { title, genre, classification, plays } = req.body;
            if(!title || !genre || !classification) {
                throw new Error("Preencha todos os campos!");
            }
            const serie = new Serie(title, genre, classification, plays);
            lista.addSerie(serie);
            res.status(200).json({ message: "Criado com sucesso!", music });
        } catch (error) {
            res.status(400).json({ message: "Erro ao criar série!", error: error.message,
            })
        }
    },

    getAllSeries: (req, res) => {
        try {
            const series = lista.getAllSeries();
            res.status(200).json(series);
        } catch {
            res.status(404).json({
                message: "Erro ao buscar músicas!", error: error.message,
            });
        }
    },

    getSerieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getSerieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar série por id",
                error: error.message,
            });
        }
    },

    updateSerie: (req, res) => {
        try {
            res.status(200).json(lista.updateSerie(req.params.id, req.body));  
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar", error: error.message,
            });
        }
    },

    deleteSerie: (req, res) => {
        try {
            const serie = req.params.id;
            lista.deleteSerie(serie);
            res.status(200).json({
                message: "Série deletada com sucesso!",
                serie,
            });
        } catch (error) {
            res.status(404).sjon ({
                message: "Erro ao deletar música",
                error: error.message,
            });
        }
    },

    getTop10Series: (req, res) => {
        try {
            const series = lista.getTop10Series();
            res.status(200).json(series);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar Top10",
                error: error.message,
            });
        }
    },
};

module.exports = router;
