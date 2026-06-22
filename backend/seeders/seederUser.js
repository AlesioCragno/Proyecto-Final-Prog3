const bcrypt = require('bcryptjs');
const { User } = require('../models/userModel');

const ejecutarSeederUsuario = async () => {
    try {
        const emailTest = "admin@correo.com";
        const passwordPlana = "Admin1234";

        const usuarioExistente = await User.findOne ({ where: { email: emailTest}});

        if (usuarioExistente) {
            console.log('El usuario ya existe. Seeder salteado.');
            return;
        }

        console.log('Comenzando la carga del usuario.');

        const salt = await bcrypt.genSalt(10);
        const passwordHasheada = await bcrypt.hash(passwordPlana, salt);

        await User.create({
            nombre: "Admin",
            email:emailTest,
            password: passwordHasheada
        });

        console.log('Se cargó al usuario exitosamente.');
    } catch (error) {
        console.error('Error a la hora de ejecutar el seeder del usuario', error.message);
    }
};

module.exports = { ejecutarSeederUsuario };