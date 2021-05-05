// pasar por valor o por referencia

// Declaración de la funcion
function hola(nombre){
	return `hola ${nombre}, Saludos`;
}

// Uso o llamada a una función
hola('Demian');

const x = hola('eric');

console.log('x:',x);

const otraFuncion = hola; // se agrego la funcion dentro de una variable sin ejecutarse

const res = otraFUncion('Otra');

console.log('res');


