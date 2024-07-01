const db = require('../db/db')

const mostrarError = (res, numero, objeto) => {
    return res.status(numero).json(objeto)
}


const carritos = (req, res) => {
    const sql = "SELECT * FROM carrito"

    db.query(sql, (err, rows) => {
        if (err) {
            return mostrarError(res, 500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }
        if (rows.length < 1) {
            return mostrarError(res, 404, {error: "No existe el elemento"})
        }
        res.status(200).json(rows)
    })
}

const carrito = (req, res) => {
    const sql = "SELECT * FROM catalogo RIGHT JOIN lista_de_productos ON idcatalogo = id_catalogo WHERE id_carrito = ?"
    const {id} = req.params

    db.query(sql, [id], (err, rows) => {
        if (err) {
            return mostrarError(res, 500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }

        if (rows.length < 1){
            return mostrarError(res, 404, "El carrito está vacío")
        }
        res.status(200).json(rows)
    })
}

const agregar = (req, res) => {
    const sql = "INSERT INTO carrito (created_at) values (?)"
    const date = new Date()

    db.query(sql, [date], (err, rows) => {
        if (err) {
            return mostrarError(res, 500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }
        res.status(201).json({message: `Se creo el carrito con el id ${rows.insertId}`})
    })
}

const agregarProducto = (req, res) => {
    const sql = "INSERT INTO lista_de_productos (id_carrito, id_catalogo) VALUES ( ?, ? )"
    const {id, id_catalogo} = req.params

    db.query(sql, [id, id_catalogo], (err, row) => {
        if (err) {
            return mostrarError(res, 500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }
        res.status(201).json(row)
    })
}

const editarProducto = (req, res) => {
    const sql = "UPDATE lista_de_productos SET cantidad=? WHERE id_carrito = ? AND id_catalogo = ?"
    const {cantidad} = req.body
    const {id, id_producto} = req.params

    db.query(sql, [cantidad, id, id_producto], (err, result) => {
        if (err){
            return mostrarError(res, 500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }

        if (result.affectedRows == 0) {
            return mostrarError(res, 404, {message: "No existe el registro"})
        }

        res.status(201).json(result.affectedRows)
    })
}

const borrarCarrito = (req, res) => {
    const sql = "DELETE FROM carrito WHERE idcarrito = ?"
    const {id} = req.params

    db.query(sql, [id], (err, result) => {
        if (err){
            return mostrarError(res, 500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }

        if (result.affectedRows == 0) {
            return mostrarError(res, 404, {message: "No existe el registro"})
        }

        res.status(201).json(result)
    })
}

const borrarProducto = (req, res) => {
    const sql = "DELETE FROM lista_de_productos WHERE id_carrito = ? AND id_catalogo = ?"
    const {id, id_producto} = req.params

    db.query(sql, [id, id_producto], (err, result) => {
        if (err){
            return mostrarError(500, {error: "Ha ocurrido un error. Intente nuevamente en unos minutos"})
        }

        if (result.affectedRows == 0) {
            return mostrarError(404, {message: "No existe el registro"})
        }

        res.status(201).json(result)
    })

}

module.exports = {
    carritos,
    carrito,
    agregar,
    agregarProducto,
    editarProducto,
    borrarCarrito,
    borrarProducto
}