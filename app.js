const argv = require('./config/yargs').argv;
let colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((resultado) => console.log(`*** Resultado: ***\n${ resultado }`))
            .catch((error) => console.log(error));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${ archivo }`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no identificado');

}

//console.log(`limite: ${ argv.limite }\nbase: ${ argv.base }`);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);