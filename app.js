
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
let o = {
    nombre: "Juan",
    "apellido": "Perez",
    'nombre completo': "Juan Perez"
}
function foo(){
    // logica
}

console.log(typeof(o))          // object
console.log(typeof( [1,2,3] ))  // object
console.log(typeof( foo ))      // function

let objeto = { x: 1 };
let copia = objeto;
console.log( objeto === copia )

let m = { x: 1 };
let p = { x: 1 };
console.log( m === p )


let u = { x: 1 };
let v = u;
console.log( u === v )
console.log(u)
console.log(v)

u.x = 100;
console.log(u);
console.log(v);

