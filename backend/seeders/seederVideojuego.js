const fs = require('fs').promises;
const path = require('path');
const { Videojuego } = require('../models/videojuegoModel');

const ejecutarSeederVideojuego = async () => {
    try {
        const cantidadJuegos = await Videojuego.count();

        if (cantidadJuegos > 0) {
            console.log('Los videojuegos ya fueron cargados.')
        }

        console.log('Comenzando la carga de videojuegos.')
        
        const rutaJson = path.join(__dirname, '../data/videojuegos.json');

        const dataRaw = await fs.readFile(rutaJson, 'utf-8');
        const listaJuegos = JSON.parse(dataRaw);

        if (!Array.isArray(listaJuegos) || listaJuegos.length === 0) {
            console.error('Formato no válido/archivo videojuegos.json vacío.')
            return;
        }

        await Videojuego.bulkCreate(listaJuegos);

        console.log(`Se cargaron ${listaJuegos.length} videojuegos exitosamente`);
    } catch (error) {
        console.error('Error a la hora de ejecutar el seeder de videojuegos', error.message);
    }
};

module.exports = { ejecutarSeederVideojuego };