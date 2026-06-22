const fs = require('fs').promises;
const path = require('path');
const { Coleccion } = require('../models/coleccionModel');

const ejecutarSeederColeccion = async () => {
    try {
        const cantidadColeccion = await Coleccion.count();

        if (cantidadColeccion > 0) {
            console.log('Las colecciones ya fueron cargadas.')
        }

        console.log('Comenzando la carga de colecciones.')
        
        const rutaJson = path.join(__dirname, '../data/colecciones.json');

        const dataRaw = await fs.readFile(rutaJson, 'utf-8');
        const listaColecciones = JSON.parse(dataRaw);

        if (!Array.isArray(listaColecciones) || listaColecciones.length === 0) {
            console.error('Formato no válido/archivo colecciones.json vacío.')
            return;
        }

        await Coleccion.bulkCreate(listaColecciones);

        console.log(`Se cargaron ${listaColecciones.length} colecciones exitosamente.`);
    } catch (error) {
        console.error('Error a la hora de ejecutar el seeder de colecciones', error.message);
    }
};

module.exports = { ejecutarSeederColeccion };