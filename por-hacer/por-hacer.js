const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puedo grabar', err)
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    let index = getIndex(descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    let index = getIndex(descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true;
    } else {
        return false;
    }
}


function getIndex(descripcion) {
    return listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
}

module.exports = {
    crear,
    cargarDB,
    getListado,
    actualizar,
    borrar
}