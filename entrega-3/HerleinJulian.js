const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

//const {Contenedor} = require('./contenedor')

// const objecto1 = {
//     title:"Silla",
//     price:100,
//     thumbnail:"https://desillas.com/img/productos/OAJIEW_13.jpg"
// }

// const objecto2 = {
//     title:"Mesa",
//     price:500,
//     thumbnail:"https://desillas.com/img/productos/eames120blanca.jpg"
// };

// const objecto3 = {
//     title:"Luz",
//     price:50,
//     thumbnail:"https://http2.mlstatic.com/D_NQ_NP_680831-MLA47248547003_082021-O.webp"
// };

// productos = new Contenedor('./files/productos.txt')

// async function testMethods(){
//     await productos.save(objecto1)   
//     await productos.save(objecto2)    
//     await productos.save(objecto3)     
// }


// testMethods()
const productos = fs.readFileSync('./files/productos.txt')


const server = app.listen(PORT,() => {
    console.log(`Servidor escuchando al puerto ${server.address().port}`)
})

app.get('/',(req,res) =>{
    res.send(`<h1> Main page </h1>
            <ul>
            <li><a href = "./productos"> Productos </a></li>
            <li><a href = "./productoRandom"> Producto random </a></li>
            </ul>`)
})

app.get('/productos',(req,res) => {    
    res.send(JSON.parse(productos))
})

app.get('/productoRandom',(req,res)=>{
    const jsonProductos = JSON.parse(productos)
    min = 1
    max = jsonProductos.length + 1    
    idRandom = Math.floor(Math.random() * (max - min)) + min  
    console.log(idRandom)  
    res.send(jsonProductos.filter(producto => producto.id === idRandom))
})

