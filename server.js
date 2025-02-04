require("dotenv").config();

const express = require("express");
const cors = require("cors");
const serieRoutes = require("./src/routes/serieRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", serieRoutes);

app.get("/api", serieRoutes);

app.get("/", (req, res) => {
    res.send("EUUUU AMOOO BACK");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
