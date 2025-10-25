// Import des modules
// Import du framework
import express from "express";
// Import du middleware
import cors from "cors";
// Import configuration
import dotenv from "dotenv";
// Import de la librairie pour la communication entre Node.js et JavaScript
import mongoose from "mongoose";
// Chargement du .env
dotenv.config();
// Creation de l'app express
const app = express();
// Middlewares globaux
/* 
Autorise les requetes cross-origin du frontend vers le backend
*/
app.use(cors());
/*
Permet la lecture du JSON dans le body des requetes
*/
app.use(express.json()); 
// Conexion MongoDB via Mongoose
/*
Se connecter à mongoDB avec les paramètres stocker
*/
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection à mongoDB réussie."))
    .catch((err) => console.error("Connexion à mongoDB échouée.", err));
// API
/*
Test d'api
*/
app.post("/api/accueil", async (requestAnimationFrame, res) => {

});
// Demarrage du serveur
const PORT = process.env.PORT || 5000;
// Param
app.listen(PORT, () => console.log(`Le serveur a démarré sur http://localhost:${PORT}`));