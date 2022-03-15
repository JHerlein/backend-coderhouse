const fs = require('fs');

class Contenedor {

    constructor(path_file){
        this.path_file = path_file
    }
    
    async save(objecto){        
        await fs.promises.readFile(this.path_file,"utf-8")
        .then(async contenido =>{
            let jsonArray = new Array(contenido)
            if(jsonArray[0] == ""){
                jsonArray.pop()            
            }
            else{
                jsonArray = JSON.parse(jsonArray);
            }
            objecto.id = jsonArray.length + 1         
            jsonArray.push(objecto)                                                
            await fs.promises.writeFile(this.path_file,JSON.stringify(jsonArray,null,2))
            console.log(`Objecto con ID ${objecto.id} agregado`)            
        })
        .catch(err =>{
            console.log("Error de lectura!",err)
        })             
        
    }

    async getById(id){
        await fs.promises.readFile(this.path_file,"utf-8")
        .then(contenido => {         
            let jsonArray = new Array(contenido);        
            jsonArray = JSON.parse(jsonArray);        
            let idFiltered = jsonArray.filter(function(entry){   
                return entry.id===id            
            })
            if (idFiltered.length === 0){
                idFiltered = null
            }
            console.log(idFiltered)
            return idFiltered
        })
        .catch(err => {
            console.log(err)
        })
    }

    async getAll(){
        await fs.promises.readFile(this.path_file,"utf-8")
        .then(contenido => {
            let jsonArray = new Array(contenido);
            jsonArray = JSON.parse(jsonArray);
            console.log(jsonArray)
            return jsonArray
        })
        .catch(err => {
            console.log(err)
        })
        

    }
    async deleteById(id){
        await fs.promises.readFile(this.path_file,"utf-8")
        .then(contenido => {
            let jsonArray = new Array(contenido);        
            jsonArray = JSON.parse(jsonArray);        
            jsonArray = jsonArray.filter(function(entry){   
                return entry.id!==id            
            })
            console.log(jsonArray)
            // if you want to reset the id of the new array
            // let newId = 1;
            // jsonArray.forEach(function(entry){
            //     entry.id = newId
            //     newId ++;

            // })
            fs.promises.writeFile(this.path_file,JSON.stringify(jsonArray,null,2))
        })
        .catch(err => {
            console.log(err)
        })       

    }

    async deleteAll(){        
        await fs.promises.writeFile(this.path_file,"")
    }
}


const objecto1 = {
    title:"Silla",
    price:100,
    thumbnail:"https://desillas.com/img/productos/OAJIEW_13.jpg"
}

const objecto2 = {
    title:"Mesa",
    price:500,
    thumbnail:"https://desillas.com/img/productos/eames120blanca.jpg"
};

const objecto3 = {
    title:"Luz",
    price:50,
    thumbnail:"https://http2.mlstatic.com/D_NQ_NP_680831-MLA47248547003_082021-O.webp"
};

productos = new Contenedor('./files/productos.txt')

async function testMethods(){
    await productos.save(objecto1)   
    await productos.save(objecto2)    
    await productos.save(objecto3)
    //await productos.getById(5)
    // await productos.getAll()
    // await productos.deleteById(2)
    // await productos.deleteAll()        
}


testMethods()

module.exports(Contenedor);