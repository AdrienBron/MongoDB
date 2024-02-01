// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Salle = require('./models/mainModel');
dotenv.config();
const app = express();




// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());


// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur!');
});


// Route pour afficher toute les salles
app.get('/salles', async (req, res) => {
  try {
    const salles = await Salle.find();
    res.json(salles);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des utilisateurs');
  }
});


// Connexion à la base de données
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à la base de données réussie');
    // ouverture du port
    app.listen(3000, ()=>{
      console.log('Running port 3000')
    })
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
  });
