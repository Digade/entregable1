let code = 0;

generarIdUnico1 = () => { 
    code= Math.random().toString(30).substring(2);           
}

generarIdUnico1();

class ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code= code;
        this.stock=stock;

    }
}

const product1 = new ProductManager
    ("productoprueba 1","Este es un producto prueba", 200, 'Este es un producto prueba', code, 23)
// Object.freeze(product1.code) si pudiera poner funciones en la creación ahorraria codigo, no me funciono;

generarIdUnico1();
const product2 = new ProductManager
    ("productoprueba 2","Este es un producto prueba2", 350, 'Este es un producto prueba2', code, 20)

 console.log(`este el el codigo id del producto ${product1.code}`);
 console.log(`este el el codigo id del producto ${product2.code}`);

 getProducts =() => {
    console.log(product1, product2)
    
 }

//  getProductsById = () => {
//     let busqueda = prompt("¿Qué ID de producto buscas?");
//         if (busqueda = product1.code) {
//             alert(`este es tu producto ${product1.title}`)
//         } else if (busqueda = product2.code) {
//             alert(`este es tu producto ${product2.title}`)
//         } else
//             alert("error");
//  } no funciono al no tener un dom para mostrar 
let busqueda = product2.code

getProductsById = () => {
   
        if (busqueda == product1.code) {
            console.log(`este es tu producto ${product1.title}`)
        } if (busqueda == product2.code) {
            console.log(`este es tu producto ${product2.title}`)
        } else
            console.log("error, no existe ningún producto con ese id");
 }

getProducts();
console.log("esta es la variable busqueda: " + busqueda)
getProductsById();


// function busXfind(busqueda) {
//     return busqueda === product2.code;
// }
// const BusquedaXFind = product2.find(busqueda);
// console.log(BusquedaXFind) no anda y esta fue la útima experimentacion