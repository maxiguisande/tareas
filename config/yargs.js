const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea a realizar'
}

const completado = {
    default: true,
    alias: 'c'
}

const optsCrear = {
    descripcion
};

const optsBorrar = {
    descripcion
};

const optsActualizar = {
    descripcion,
    completado
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', optsCrear)
    .command('actualizar', 'Actualiza una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea', optsBorrar)
    .help()
    .argv;

module.exports = {
    argv
};