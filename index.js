const axios = require('axios');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character')
    //reestructuración mas profunda de la data
    let { data: {results} } = response;
    let personajes = results.map((personaje) => {
        return{
            id: CharacterData.id,
            name: CharacterData.name,
        };
    });
    // console.log(personajes);
};

main();