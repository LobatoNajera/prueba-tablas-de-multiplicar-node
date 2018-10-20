// requires
const fs = require('fs');
let colors = require('colors');

let listarTabla = async(base, limite) => {

    if (base == undefined) {
        throw new Error(`No introdujo la base`);
    } else
    if (!Number(base)) {
        throw new Error(`El dato introducido como base: ${ base }, no es un numero`);
    } else {
        let resultado = `============================\n\tTabla del ${ base }\n============================\n`.green;

        for (let i = 1; i <= limite; i++) {
            resultado += `\t${ base } x ${ i } = ${ (base * i) }\n`;
        }

        return resultado;
    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } x ${ i } = ${ (base * i) }\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-del-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${ base }-al-${ limite }.txt`.green);
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}