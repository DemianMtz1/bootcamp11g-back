/* Adaptacion del ejemplo del muro usando callbacks con Promises */
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


construir({})
    .then((muroConstruido) => {
        console.log('muroConstruido: ', muroConstruido);
        aplanar(muroConstruido)
            .then((muroAplanado) => {
                console.log('muroAplanado: ', muroAplanado);
                pintar(muroAplanado)
                    .then((muroPintado) => {
                        console.log('muroPintado: ', muroPintado);
                        console.log('Muro completado :D')
                    }).catch((err) => {
                        console.error(err)
                    });
            }).catch((err) => {
                console.error('ERROR: ', err)
            });

    }).catch((err) => {
        console.log('ERROR: ', err)
    });
