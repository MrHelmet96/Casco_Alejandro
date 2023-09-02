require('rootpath')();
const { query } = require('express');
const mysql = require('mysql');
const configuracion = require("config.json");

var PconsultaAbd = {};
var conexion = mysql.createConnection(configuracion.database);

conexion.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("base de datos de persona enlazada");
    }
});

PconsultaAbd.getAll = function (funCallback) {
    var consulta = 'SELECT * FROM persona';
    conexion.query(consulta, function (err, rows) {
        if (err) {
            funCallback(err);
            return;
        } else {
            funCallback(undefined, rows);
        }
    });
}

PconsultaAbd.getUserByPersona = function (dni, funcallback) {
    conexion.query("select * from persona where dni = ?", dni, (err, respuesta) => {
        if (err) {
            funcallback({
                mensajito: "a ocurrido algun error, posiblemente de sintaxis en buscar la persona",
                detalle: err
            });
        } else if (respuesta.length == 0) {
            funcallback(undefined, {
                mensajito: "no se encontro la persona buscada",
                detalle: respuesta
            });
        } else {
            consulta = "select nickname from usuario INNER JOIN persona on usuario.persona = persona.dni and usuario.persona = ?";
            conexion.query(consulta, dni, (err, r) => {
                if (err) {
                    funcallback({
                        mensajito: "a ocurrido algun error, posiblemente de sintaxis en buscar el nickname",
                        detalle: err
                    });
                } else if (r.length == 0) { 
                    funcallback(undefined, {
                        mensajito: "la persona seleccionada no posee usuario registrado en la base de datos",
                    });
                } else {
                    funcallback(undefined, {
                        mensajito: `El nikname de la persona seleccionada es ${r[0]['nickname']}`,
                        detalle: r
                    });
                }
            });
        }
    });
}

PconsultaAbd.Bapellido = function(apellido, funcallback) {
    // consulta = "SELECT apellido FROM persona";
    // params = apellido;
    // conexion.query(consulta, params, (err, resultado) => {

    conexion.query("select * from persona where apellido = ?;", apellido, (err, respuesta) => {
        if (err) {
            funcallback({
                mensajito: "Error encontrado en busqueda del apellido",
                detalle: err
            });
        } else {
            funcallback(respuesta);
        }
    });
};

PconsultaAbd.getByDNI = function (dni, funCallback) {
    conexion.query("select * from persona where dni = ?;", dni, (err, respuesta) => {
        if (err) {
            funCallback({
                mensajito: "a ocurrido algun error inesperado al buscar la persona ",
                detalle: err
            });
        } else if (respuesta.length == 0) {
            funCallback(undefined, {
                mensajito: `no se encontro la persona con el dni: ${dni}`,
                detalle:  "No hay datos a mostrar"
            });
        }else {

            funCallback(undefined, {
                mensajito: `los datos de la persona con el dni ${dni} son:`,
                detalle: respuesta
            });
        }
    });
    
}

PconsultaAbd.create = function (persona, funcallback) {
    consulta = "INSERT INTO persona (dni, nombre, apellido) VALUES (?,?,?);";
    params = [persona.dni, persona.nombre, persona.apellido];

    conexion.query(consulta, params, (err, detail_bd) => {
        if (err) {

            if (err.code == "ER_DUP_ENTRY") {
                funcallback({
                    mensajito: "Ya se ah registrado esta persona con el dni: "+ persona.dni,
                });
            } else {
                funcallback({
                    mensajito: "Error encontrado",
                    detalle: err
                });
            }
        } else {
            funcallback(undefined, {
                mensajito: "Se ah creado a la persona:  " + persona.nombre + persona.apellido,
                detalle: detail_bd
            });
        }
    });
}

PconsultaAbd.modificar = function(persona, funcallback) {
    const consulta = "UPDATE persona SET nombre = ?, apellido = ? WHERE dni = ?";
    const params = [persona.nombre, persona.apellido, persona.dni];

    conexion.query(consulta, params, (err, resultado) => {
        if (err) {
            funcallback(err);
        } else {
            funcallback(null, resultado);
        }
    });
};

PconsultaAbd.borrar = function (id_p_e, retorno) {
    consulta = "DELETE FROM persona WHERE dni = ?";
    parametro = id_p_e;

    conexion.query(consulta, parametro, (err, result) => {
        if (err) {
            retorno({ mensajito: err.code, detail: err }, undefined);
        } else { if (result.affectedRows == 0) {
                retorno(undefined, { mensajito: "No se encontro a la persona con este DNI: " + id_p_e, detail: result });
            } else {
                retorno(undefined, { mensajito: "Persona Eliminada con el DNI: "+ id_p_e, detail: result });
            }
        }
    });
}
module.exports = persona_db;