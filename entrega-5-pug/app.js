const express = require('express');
const fs = require('fs')
const app = express();
const router = require('./routes/products')
const {getAllProducts,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
} = require('./controllers/products')

const port = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/products',router)
app.use(express.static('./public'))
app.set('view engine', 'pug')
app.set('views','./views')

app.listen(port,console.log(`Listening on port ${port}`))


// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.

// app.get('/api/productos',getAllProducts)


app.get('/products', async (req,res) => {
    try {
        let file = await fs.promises.readFile('./files/products.txt')        
        file = new Array(file)
        file = JSON.parse(file)        
        res.render('hello.pug',{mensaje: file})      
    } catch (error) {
        res.send(error)
    }
    
})
