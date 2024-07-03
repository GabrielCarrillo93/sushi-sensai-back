const database = require('mysql2');

const conexion = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sushi'
})

conexion.connect((err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Conectado');
})

module.exports = conexion;