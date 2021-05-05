const ejemploMuro = {
  construido: false,
  aplanado: false,
  pintado: false
}


const TIME = 3000;
function construir(muro, cb) {
  setTimeout(() => {
    muro.construido = true
    cb(false, muro)
  }, TIME)
}
function aplanar(muro, cb) {
  setTimeout(() => {
    muro.aplanado = true
    cb(false, muro)
  }, 1000);
}
function pintar(muro, cb) {
  setTimeout(() => {
    muro.pintado = true
    cb(false, muro)
  }, TIME);
}

// definimos la funcion y luego la pasamos
/*
function alConstruir(err, muroConstruido){
  console.log('muroConstruido: ', muroConstruido)
}
construir(ejemploMuro, alConstruir)
*/


// deifnimos la funcion directamente donde la necesitamos
// esto se denomina como callback hell
construir({}, (error, muroConstruido) => {
  if(error){
    console.error('No se pudo consturir');
    return;
  }
  console.log('muro constrido:', muroConstruido)
  aplanar(muroConstruido, (error, muroAplanado)=>{
    if(error){
      console.error('No se pudo aplanar');
      return;
    }
    console.log('muro aplanado:', muroAplanado)
    pintar(muroAplanado, (error, muroPintado)=>{
      if(error){
        console.error('No se pudo pintar');
        return;
      }
      console.log('muro pintado: ', muroPintado)
    })
  })
})


/* 
Falsy en JS
Valores que evaluan a falso cuando hacemos preguntas logicas sobre ellos


false => false
'' => false
null => false
undefined => false
0 => false

Truthy en JS
Valores que evaluan a true cuando hacemos preguntas logicas sobre ellos

true => true
'adas' => true
[]{} => true
1.2.3.4 => true
*/