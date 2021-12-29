const axios = require('axios');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character')
    //reestructuración mas profunda de la data
    let { data: {results} } = response;
    let personajes = results.map((character) => {
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
        };
        /*Agrego un map para retornar unicamente los valores */
    })
    .map((personaje) => Object.values(personaje).join(','))
    .join('\n')
    //Realizo un join con un salto de linea, a la vez que me convierte todo en un strig
    console.log(personajes);
};

main();