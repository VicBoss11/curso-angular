const fs = require('fs');

// CALLBACKS
//
// console.log('Inicio');
//
// fs.readFile('./1.txt', (err, data) => {
//   console.log('Datos: ' + data.toString());
// })
//
// fs.readFile('./2.txt', (err, data) => {
//   console.log('Datos: ' + data.toString());
// })
//
// fs.readFile('./3.txt', (err, data) => {
//   console.log('Datos: ' + data.toString());
// })
//
// console.log('Fin');
//
// fs.readFile('./1.txt', (err, data) => {
//   console.log('Datos: ' + data.toString());
//
//   fs.readFile('./2.txt', (err, data) => {
//     console.log('Datos: ' + data.toString());
//
//     fs.readFile('./3.txt', (err, data) => {
//       console.log('Datos: ' + data.toString());
//     })
//   })
// })

// PROMISES
//
const fsp = fs.promises;
//
// const mensaje = new Promise(((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('El canario está en la jaula');
//     reject('El canario se ha escapado por la ventana')
//   }, 2000);
// }))
//
// console.log(mensaje);
//
// mensaje
//   .then(mensaje => {
//     console.log(mensaje);
//   })
//   .catch(err => {
//     console.error(err);
//   });
//
// const fsp = fs.promises;
//
// fsp.readFile('./1.txt')
//   .then(data => {
//     console.log(data.toString());
//   })
//   .catch(err => {
//     console.error(err);
//   });
//
// fsp.readFile('./1.txt')
//   .then(data => {
//     console.log(data.toString());
//
//     return fsp.readFile('./2.txt')
//   })
//   .catch()
//   .then(data => {
//     console.log(data.toString());
//
//     return fsp.readFile('./3.txt')
//   })
//   .then(data => {
//     console.log(data.toString());
//   })

// ASYNC / AWAIT

async function fn() {
  let data;

  try {
    data = await fsp.readFile('./1.txt');

    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }

  data = await fsp.readFile('./2.txt');

  console.log(data.toString());

  data = await fsp.readFile('./3.txt');

  console.log(data.toString());
}

fn();
