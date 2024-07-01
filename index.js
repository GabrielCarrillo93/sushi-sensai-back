require("dotenv").config();

const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/productoSushi", require("./routes/productoSushi.router"));

app.get("/", (req, res) => {
    res.send("Backend listado de Sushi Sensai"); 
});

app.get("/productoSushi/:id", (req, res) => {
	console.log(req.params.id);
    res.send("Producto:" + req.params.id);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
