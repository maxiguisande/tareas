const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
porHacer.cargarDB()

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('===========Por Hacer============'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('================================'.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        actualizado ? console.log('Registro actualizado correctamente') : console.log('No se pudo actualizar el registro');
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        borrado ? console.log('Registro eliminado correctamente') : console.log('No se pudo eliminar el registro');
        break;

    default:
        console.log('comando desconocido');
        break;
}