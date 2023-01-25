// let code = 0;

// generarIdUnico1 = () => { 
//     code= Math.random().toString(30).substring(2);           
// }

// generarIdUnico1();

// class ProductManager{
//     constructor(title, description, price, thumbnail, code, stock){
//         this.title = title;
//         this.description=description;
//         this.price=price;
//         this.thumbnail=thumbnail;
//         this.code= code;
//         this.stock=stock;

//     }
// }

// const product1 = new ProductManager
//     ("productoprueba 1","Este es un producto prueba", 200, 'Este es un producto prueba', code, 23)
// Object.freeze(product1.code) si pudiera poner funciones en la creación ahorraria codigo, no me funciono;

// generarIdUnico1();
// const product2 = new ProductManager
//     ("productoprueba 2","Este es un producto prueba2", 350, 'Este es un producto prueba2', code, 20)

//  console.log(`este el el codigo id del producto ${product1.code}`);
//  console.log(`este el el codigo id del producto ${product2.code}`);

//  getProducts =() => {
//     console.log(product1, product2)
    
//  }

//  getProductsById = () => {
//     let busqueda = prompt("¿Qué ID de producto buscas?");
//         if (busqueda = product1.code) {
//             alert(`este es tu producto ${product1.title}`)
//         } else if (busqueda = product2.code) {
//             alert(`este es tu producto ${product2.title}`)
//         } else
//             alert("error");
//  } no funciono al no tener un dom para mostrar 
// let busqueda = product2.code

// getProductsById = () => {
   
//         if (busqueda == product1.code) {
//             console.log(`este es tu producto ${product1.title}`)
//         } if (busqueda == product2.code) {
//             console.log(`este es tu producto ${product2.title}`)
//         } else
//             console.log("error, no existe ningún producto con ese id");
//  }

// getProducts();
// console.log("esta es la variable busqueda: " + busqueda)
// getProductsById();


// function busXfind(busqueda) {
//     return busqueda === product2.code;
// }
// const BusquedaXFind = product2.find(busqueda);
// console.log(BusquedaXFind) no anda y esta fue la útima experimentacion

const products=[
    {title:"prueba1",price:100,stock:5,thumpbnail:"https://buenosairesimport.com/4532-large_default/iphone-13-256-gb.jpg",code:1,id:1,description:"descripcion prueba"},
    {title:"prueba2",price:200,stock:10,thumpbnail:"https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",code:2,id:2,description:"lorem xxxxx"},
    {title:"prueba3",price:300,stock:15,thumpbnail:"https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/06/iphone-se-family-select-202203.jpeg",code:3,id:3,description:"agniXI"},
    {title:"prueba4",price:400,stock:30,thumpbnail:"https://buenosairesimport.com/4191-home_default/iphone-13-pro-1-tb.jpg" ,code:4,id:4,description:"diauraxjapan"},
    {title:"prueba5",price:500,stock:60,thumpbnail:"https://buenosairesimport.com/4547-large_default/iphone-13-pro-256-gb.jpg",code:5,id:5,description:"polyphia"},
    {title:"prueba6",price:600,stock:120,thumpbnail:"https://jrtechtienda.com.ar/wp-content/uploads/2021/02/iphone_11_02.jpg",code:6,id:6,description:"micheleluppi"},
    {title:"prueba7",price:700,stock:240,thumpbnail:"https://cbafederal.net/wp-content/uploads/2021/02/i-12.png",code:7,id:7,description:"jonbonjovi"}];

class ProductManager {
  constructor(title,price,stock,thumpbnail,code,id,description)
  {
      this.title=title;
      this.description=description;
      this.price=price;
      this.thumpbnail=thumpbnail;
      this.code=code;
      this.stock=stock;
      this.id=id;
  }    
  addToProduct=(data)=>{
      if (products.includes((produ)=>{produ.code===data.code}) && data.code){
         console.log("se encontro tu producto");
         return
      }
      const lastProductId=Math.max(...products.map(o => o.id));
      console.log("no se encontro, es un nuevo producto con el codigo id: "+lastProductId);
      data.id=lastProductId+1;
      const newProduct= new ProductManager(data);
      products.push(newProduct);
  }
  getProducts=(data)=>{   
      let mensaje="";
      data.forEach(produ => {
          mensaje += `
                 ${produ.id} : ${produ.title} - stock ${produ.stock} $${produ.price}
              `
        }
        )
  }
  getProductById=(id)=>{return (products.find(prod =>prod.id!==id) ? (console.log("not found"),false) : true)};                                                                  

}



let productAdd = new ProductManager("otra prueba",600,350,"https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202212130344",4444,2,"otraprueba");

console.log("este es la muestra",productAdd)

if (!productAdd.getProductById(productAdd.code)) {
  productAdd.addToProduct(productAdd)
}