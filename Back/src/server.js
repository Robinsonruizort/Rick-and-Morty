const express = require('express');
const app = express();
const axios = require("axios");
const cors = require("cors")
const { character} = require ("../src/DB_connection")
app.use(express.json());
app.use(cors());

app.get("/rickandmorty/all", async (req, res) => {
   try {
      const allCharacters = await character.findAll();
      res.status(200).json(allCharacters);
   } catch (error) {
      res.status(400).json({msg: error.message});
   }
})

app.get("/rickandmorty/character/:character", async (req, res) => {
   try {
      const { character } = req.params;
      const response = await axios(`https://rickandmortyapi.com/api/character/${character}`);
      const data = response.data;
      const infoCharacter = {
         id : data.id,
         name : data.name,
         species : data.species,
         gender : data.gender,
         image : data.image
      }
      res.status(200).json(infoCharacter);
   } catch (error) {
         res.status(404).send(error.message);
   }
})

app.get("/rickandmorty/detail/:detailId", async (req, res) => {
   try {
      const { detailId } = req.params;
      const response = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data
      const detailCharacter = {
         id : response.id,
         name : response.name,
         status: response.status,
         species : response.species,
         gender: response.gender,
         origin: response?.origin?.name,
         image: response.image,
         location: response?.location?.name
      }
      res.status(200).json(detailCharacter)
   } catch (error) {
      res.status(404).send(error.message);
   }
})

let fav = [];

app.get("/rickandmorty/fav", (req, res) => {
   res.status(200).json(fav);
})

app.post("/rickandmorty/fav", (req, res) => {
   fav.push(req.body);

   res.status(200).send("Se guardaron correctamente")
})

app.delete("/rickandmorty/fav/:id", (req, res) => {
   const { id } = req.params;
   const favFiltered = fav.filter(char => char.id !== parseInt(id))
   fav = favFiltered;
   res.status(200).send("Se elimino correctamente")
})



module.exports = app;
