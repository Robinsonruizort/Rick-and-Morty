const axios = require("axios");
const { character } = require ("../src/DB_connection")

const getApiData = async () => {
    try {
        let allCharacters = []; 
        for (let index = 1; index < 6; index++) {
            let apiData = await axios (`https://rickandmortyapi.com/api/character?page=${index}`);
            const pageCharacter = apiData.data.results.map( char => {
                return {
                    id:char.id,
                    name: char.name,
                    species: char.status,
                    status: char.status,
                    origin: char?.origin?.name,
                    gender: char.gender,
                    image: char.image
                };
            });
            allCharacters = [...allCharacters, ...pageCharacter];
        }
        // console.log(allCharacters);
        return allCharacters;
        } catch (error) {   
            return { msg: error.message };     
    }
};

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData();
        await character.bulkCreate(allCharacters);
        return allCharacters;
    } catch (error) {
        return { msg: error.message };
    }
};

module.exports = saveApiData;




