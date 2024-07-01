const express = require('express')
const app = express()
const port = 3000
const carritoRouter = require('./routes/carrito.router')

app.use(express.json())
app.use("/carrito", carritoRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})