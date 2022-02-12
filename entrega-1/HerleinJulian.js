class Usuario {

    constructor(nombre, apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        
    };

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    };

    addMascota(mascota){
        this.mascotas.push(mascota);
    };

    countMascotas(){
        return this.mascotas.length;
    };

    addBook(book,autorVar){
        let newIndex = this.libros.length;
        this.libros[newIndex] = {nombre:book,autor:autorVar};
    };

    getBookNames(){
        const bookArray = []
        this.libros.forEach(book => {
            bookArray.push(book.nombre)
        });
        return bookArray;
    };

};

const usuario1 =  new Usuario("Julian","Herlein",[{nombre:"HP",autor:"JK Rowling"}],["Perro"]);

console.log(usuario1.getFullName());
usuario1.addMascota("Gato");
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
usuario1.addBook("LOR","Tolkien");
console.log(usuario1.getBookNames());


