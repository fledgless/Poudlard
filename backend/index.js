const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const MatiereRoutes = require("./Routes/MatiereRoute");

app.use("/matiere", MatiereRoutes);


app.get("/test", (req, res) => {
  res.send("Hello World! test ok, nous pouvons continuer !");
});

app.use((req, res) => {
  res.status(404).send("Route non trouvée");
});

app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});

// app.listen(3002);
