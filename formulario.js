const express = require('express');

const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "usuarios_sushi",
    user: "root",
    password: "gue55me",
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("registro");
});

app.post("/validar", (req, res) => {
    const datos = req.body;
    console.log(datos);

    let dniID = datos.dni;
    let nombre = datos.Nombre;
    let apellido = datos.Apellido;
    let correo = datos.Correo;
    let contrasena = datos.Contrasena;

    let buscar = "SELECT * FROM tabla_usuarios WHERE dni_ID = " + dniID + " ";

    conexion.query(buscar, function (error, row) {
        if (error) {
            throw error;
        } else {
            if (row.length > 0) {
                console.log("No se puede registrar, usuario existente");
            } else {
                let registrar = "INSERT INTO tabla_usuarios (dni_ID, Nombre, Apellido, Correo, Contrasena) VALUES ('" + dniID + "', '" + nombre + "','" + apellido + "', '" + correo + "', '" + contrasena + "')";

                conexion.query(registrar, function (error) {
                    if (error) {
                        throw error;
                    } else {
                        console.log("Datos almacenados correctamente. ¡Muchas gracias!")
                    }
                });
            }
        }
    });



});

app.listen(3000, () => {
    console.log(`Tu servidor se escucha en el puerto 3000`);
});


