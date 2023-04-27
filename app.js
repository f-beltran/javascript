
//-------------------------------------------------------------------- ESTRUCTURA LEXICA
// -------------------------------------------------------------------------------------

// ---------------------------------------------------------------------- case-sensitive
// let A = 10;
// if ( a > 5) {
//     console.log('Es mayor')
// }
// ------------------------------------------------------------------------- comentarios
// Comentario de una linea
/* 
    linea 1
    linea 2
*/ 
// ---------------------------------------------------------------------------- literal
// 10;
// 'HOLA MUNDO';
// true;
// false;
// ---------------------------------------------------------------------- identificadores
// let nombre = 'Juan';   // Valido
// let $precio = 100.5;   // Valido
// // let 5var = 10;      // No valido
// let _foo = 'c'; 
// ------------------------------------------------------------------- palabras reservadas
// break
// case
// .....
// ------------------------------------------------------------------------- punto y coma
// Permite separar instrucciones
// let x = 0;
// let y = 10;
//---------------------------------------------------------------------------------------
// let z = 12
// let w = 10



//------------------------------------------------------ VALORES, VARIABLES Y CONSTANTES
// -------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------- valores
// 10;
// 20;
// 'Hola';
// true;
// -------------------------------------------------------------- variables y constantes
// let x;
// x = 10;
// const PI = 3.14;
// -------------------------------------------------------------------- ambito de bloque
// let a = 10;
// let b = 20;
// let c;

// if (a < b){
    // let x = 'Hola mundo'
    // console.log('1: ', x)
// }
// console.log('2:', a);
//console.log('3:', x);
// console.log('4:', c);
// --------------------------------------------------------------------------------------
// let a = 10;
// let b = 20;

// if (a < b){
//     let x = 'Hola mundo'
//     console.log('1: ', x)
//     if ( a ===  10){
//         console.log('2: ', x)
//     }
// }
// ------------------------------------------------------------------------ ambito global 
// let x = 100;
// if(true){
//     if(true){
//         if(true){
//             if(true){
//                 console.log('1: ', x)
//             }    
//         }     
//     }
// }

// ---------------------------------------------------------------- declaraciones repetidas

// let x = 10;
// console.log('1:', x)
// x = 'HOLA'
// console.log('2:', x)
// ------------------------------------------------------------------------- TIPOS DE DATOS
// ----TIPOS PRIMITIVOS
// ----inmutables
// console.log(typeof(123))       // number
// console.log(typeof("HOLA"))    // string 
// console.log(typeof(true))      // boolean
// console.log(typeof(undefined)) // undefined
// console.log(typeof(null))      // object
// -- Valores de tipo number
// console.log(Infinity/Infinity)  // NaN
// console.log(0/-0)               // NaN
// console.log(-0/0)               // NaN
// console.log(Infinity + 1)       // Infinity
// console.log(Infinity / 1)       // Infinity
// console.log(Infinity * 1)       // Infinity
// console.log(Infinity * 0)       // NaN
// -- Valores de tipo string
// let texto = "HOLA";
// console.log(texto.length)
// let corazon = '❤';
// console.log(corazon.length)
// let feliz = '😊';
// console.log(feliz.length)
//-- valor null
// ausencia de valor
// --valos undefined
// let mi_var;
// console.log(mi_var)

// ----TIPOS OBJETO
// ----mutables
// let o = {
//     nombre: "Juan",
//     "apellido": "Perez",
//     'nombre completo': "Juan Perez"
// }
// function foo(){
//     // logica
// }

// console.log(typeof(o))          // object
// console.log(typeof( [1,2,3] ))  // object
// console.log(typeof( foo ))      // function

// let objeto = { x: 1 };
// let copia = objeto;
// console.log( objeto === copia )

// let m = { x: 1 };
// let p = { x: 1 };
// console.log( m === p )


// let u = { x: 1 };
// let v = u;
// console.log( u === v )
// console.log(u)
// console.log(v)

// u.x = 100;
// console.log(u);
// console.log(v);

 // ----- prototipos  (algo como la herencia)
// let objeto = {x: 1}
// console.log(Object.getPrototypeOf(objeto))
// ------------------------como crear objetos

// Usando un constructor
//  let arreglo1 = new Array()
//  arreglo1[0] = 0;
//  arreglo1[1] = 1;
//  arreglo1[2] = 2;
//  console.log(arreglo1)
// let arreglo2 = [1,2,3]
// console.log(arreglo2)

// let fecha = new Date()
// console.log(fecha)
// console.log(fecha.toString())

// --- usando Object.create (Definimos el prototipo)

// let x = { a: 1}
// let y = Object.create(x)  // el prototipo de y es x

// let z = Object.prototype(null)

// --- usando notacion literal
let o = {
    nombre: "Juan",
    apellido: 'Perez',
    "nombre completo": "Juan perez",
    edad: 15 + 5,
    direccion: {
        calle: "Beni",
        numero: 54
    }
}

console.log(o)

// Obtener el valor de una propiedad
console.log('######################', o.nombre)
console.log('######################', o["nombre completo"])
console.log('######################', o.edad)
console.log('######################', o["nombre"])
console.log('######################', o.direccion.calle)
// establecer / actualizar  propiedades
o.nombre = "Pedro";
console.log('**********************', o)
o.ci = 7852456;
console.log('**********************', o)
 // Eliminar propieades
 delete(o.apellido)
 console.log('**********************', o)

 // INSTRUCCIONES
 // Instruccion bloque
 {
    // instrunccion 1;
    // instrunccion 2;
    // instrunccion 3;
 }
//  INSTRUCCION VACIA
;
// INSTRUCCIONES CONDICIONALES
if( true ){

}

//--------------------------
if (true) {
    /*-----------*/
}else {
    /***********/
}
//--------------------------
if(true){

}else if (false){

}else if(true){

}else{

}
//-------------------------
switch(2+2){
    case 1: 
    //instrucciones;
    break;
    case 2:
    //instrucciones
    break;
    default: 
    //instrucciones
    break;
}