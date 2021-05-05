function irACasa () {
	console.log('llendo a casa ...');
	console.log('llegamos a casa :D');
}

irACasa();

function llamarAMama(){
	console.log('Hola ma, ya llegue')
}

irACasa(llamarAMama);

// Factory functions
function a(b){
	console.log('a');
	return function(){
		console.log('b:',b);
	}
}

a('hola')();

const funcB = a('hola')
funcB()

// segundo ejemplo factory

function generadorDeValidadoresDeRoles(roles){
	return function(rol){
		if(roles.includes(rol)){
			console.log('Permitido')
		}else{
			console.log('Denegado')
		}
	}
}


const soloAdmin = generadorDeValidadoresDeRoles(['admin']);
const adminYuser = generadorDeValidadoresDeRoles(['admin','user']);

soloAdmin('admin');
soloAdmin('user');

console.log('------');

adminYuser('admin');
adminYuser('user');
