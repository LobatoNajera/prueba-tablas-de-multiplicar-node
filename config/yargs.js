const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea un archivo de la tabla de multiplicar que se le envio como parametro', options)
    .help()
    .argv;

module.exports = {
    argv
}