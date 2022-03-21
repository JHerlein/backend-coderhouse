const express = require('express');
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
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')




app.listen(port,console.log(`Listening on port ${port}`))


// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.


app.get('/products',(req,res) => {
    console.log("hola")
    res.render('products.html')
})

// app.get('/api/productos',getAllProducts)


// app.get('/api/productos/:id',(req,res) => {
//     res.send("Producto con el id x")
// })

// app.post('/api/productos',(req,res) => {
//     res.send("Agrego un producto")
// })

// app.put('/api/productos/:id',(req,res) => {
//     res.send("Actualizo un producto")
// })

// app.delete('/api/productos/:id',(req,res) => {
//     res.send("Borro un producto")
// })
