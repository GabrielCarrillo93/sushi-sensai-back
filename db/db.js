const database = require('mysql2');

const conexion = database.createConnection({
    host: 'mysql-gabrielcarrillo93.alwaysdata.net',
    user: '364383',
    password: 'Mustaine228',
    database: 'gabrielcarrillo93_sushi'
})

conexion.connect((err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Conectado');
})

module.exports = conexion;