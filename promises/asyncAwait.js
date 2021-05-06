/* Ejercicio del muro usando async await */
const ejemploMuro = {
    construido: false,
    aplanado: false,
    pintado: false
}

const TIME = 1000;
function construir(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.construido = true;
            if (muro.construido) {
                resolve(muro);
            } else {
                const err = new Error('No se pudo construir D:');
                reject(err);
            }
        }, TIME);
    })
}
function aplanar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.aplanado = true;
            if (muro.aplanado) {
                resolve(muro);
            } else {
                const err = new Error('No se pudo construir D:');
                reject(err);
            }
        }, TIME);
    })
}
function pintar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.pintado = true;
            if (muro.pintado) {
                resolve(muro);
            } else {
                const err = new Error('No se pudo construir D:');
                reject(err);
            }
        }, TIME);
    })
}

async function principal(){
    const muroConstruido = await construir({});
    const muroAplanado = await aplanar(muroConstruido);
    const muroPintado = await pintar(muroAplanado);
    console.log(muroPintado)
}

principal()