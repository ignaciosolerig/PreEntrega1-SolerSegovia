// Condicional
alert("Bienvenidos a un algoritmo con condicional")
const usuarioIngresar = `indiosolari`;
const contraseniaIngresar = 12345;
let usuarioIngresado = prompt(`Ingrese el nombre de usuario autorizado: `);
let contraseniaIngresado = parseInt(prompt(`Ingresa la contraseña autorizada: `));

if (usuarioIngresado === usuarioIngresar && contraseniaIngresado === contraseniaIngresar) {
    alert(`Usuario y contraseña correcta.`);
}else if (usuarioIngresado === usuarioIngresar && contraseniaIngresado !== contraseniaIngresar) {
    alert(`Contraseña incorrecta bloqueado.`);
    
}else if (usuarioIngresado !== usuarioIngresar && contraseniaIngresado === contraseniaIngresar) {
    alert(`El usuario es incorrecto!.`);
    
}else {
    alert(`Usuario y contraseña incorrectas!.`);   
}

//Ciclo
alert("Bienvenidos a un algoritmo con un ciclo")
function imprimirNumerosPares(max) {
for (let i = 0; i <= max; i++) {
      if (i % 2 === 0) {
        console.log(`${i}`);
}}}
  imprimirNumerosPares(10);




// Simulador interactivo
alert("Bienvenidos al simulador interactivo")
const userIngresar = `ignaciosoler_`;
const passwordIngresar = 123;
let userIngresado = prompt(`Ingrese el nombre de usuario autorizado: `);
let passwordIngresado = parseInt(prompt(`Ingresa la contraseña autorizada: `));

if (userIngresado === userIngresar && passwordIngresado === passwordIngresar) {
    alert(`Usuario y contraseña correcta.`);
    let cantidadProductos = prompt("Ingrese la cantidad de productos que desea agregar:");
let productos = [];
for (let i = 0; i < cantidadProductos; i++) {
  let producto = {};
  producto.nombre = prompt("Ingrese el nombre del producto " + (i+1) + ":");
  producto.precio = parseFloat(prompt("Ingrese el precio del producto " + (i+1) + ":"));
  productos.push(producto);
}
let descuento = 0.1;
for (let i = 0; i < productos.length; i++) {
  productos[i].precio = productos[i].precio * (1 - descuento);
}
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre + ": $" + productos[i].precio.toFixed(2));
}

}else if(userIngresado === userIngresar && passwordIngresado !== passwordIngresar) {
    alert(`Contraseña incorrecta bloqueado.`);
}else if (userIngresado !== userIngresar && passwordIngresado === passwordIngresar) {
    alert(`El usuario es incorrecto, bloqueado!.`);
    
}else {
    alert(`Usuario y contraseña incorrectas, bloqueado!.`);   
}

