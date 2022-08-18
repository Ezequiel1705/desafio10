const express = require('express')

const ProductosApi = require('../api/productos.js')

const productosApi = new ProductosApi()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//Set engine

app.set('views', './views');
app.set('view engine', 'pug');

//--------------------------------------------

app.post('/productos', (req, res) => {
    ProductosApi.push(req.body);
    res.redirect('/');
});

app.get('/productos', (req, res) => {
    res.render('index', {productosApi})
});

//--------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))