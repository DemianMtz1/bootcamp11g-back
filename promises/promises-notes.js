// Las promesas son objetos y nacen pendientes

// Constructor
// resolve  = funcion -> pasa la promesa de pendiente a resuleto
// reject = funcion -> pasa la promesa de pendiente a rechazado
const promesa = new Promise((resolve, reject) => {
    let todoCool = true;
    if (todoCool) {
        resolve('ok')
    } else {
        reject('not ok :c')
    }
});

// Los objetos promesas tienen 2 metodos:
// - then que se ejecuta cuando la promesa se ejecuta satisfactoriamente -> rewcibe lo que pasamos a la funcion resolve
// - catch se ejecuta cuando la promesa paso de pendiente a rechazado -> recibe lo que le pasamos a la funcion reject
promesa
    .then((resultado)=>{ console.log(resultado)})
    .catch((err)=>{console.error(err)})