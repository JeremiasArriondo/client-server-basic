const axios = require('axios');
//fs para trabajar con file system, este a su vez trabaja con promesas
const fs = require('fs').promises;
//path para generar una ruta
const path = require('path');

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
    .join('\n');
    /**
     * Creacion de un archivo csv
     * Writefile recibe dos parametros:
     * El primero es el path donde se va a escribir el archivo, incluyendo el nombre del archivo
     * El segundo son los datos a almacenar en ese archivo
     */
    await fs.writeFile(path.join(__dirname, 'data.csv'), personajes);
    //Realizo un join con un salto de linea, a la vez que me convierte todo en un strig
    // console.log(personajes);
};

main();