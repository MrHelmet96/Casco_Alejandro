require('rootpath')();
const { query } = require('express');
const mysql = require('mysql');
const configuracion = require("config.json");

var UconsultaAbd = {};
var conexion = mysql.createConnection(configuracion.database);

conexion.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("base de datos de usuario enlazada");
    }
});

UconsultaAbd.getAll = function (funCallback) {
    var consulta = 'SELECT * FROM usuario';
    conexion.query(consulta, function (err, rows) {
        if (err) {
            funCallback(err);
            return;
        } else {
            funCallback(undefined, rows);
        }
    });
}

UconsultaAbd.createUser = function (usuario, funcallback) {
    consulta = "INSERT INTO usuario (mail, nickname, clave, persona) VALUES (?,?,?,?);";
    params = [usuario.mail, usuario.nickname, usuario.clave, usuario.persona];

    conexion.query(consulta, params, (err, detail_bd) => {
        if (err) {

            if (err.code == "ER_DUP_ENTRY") {
                funcallback({
                    mensajito: "Ya se ah registrado este usuario con el nickname: " + usuario.nickname,
                });
            } else {
                funcallback({
                    mensajito: "Error encontrado",
                    detalle: err
                });
            }
        } else {
            funcallback(undefined, {
                mensajito: "Se creo el usuario: " + usuario.nickname,
                detalle: detail_bd
            });
        }
    });
}

UconsultaAbd.modificar = function(usuario, funcallback) {
    const consulta = "UPDATE usuario SET nickname = ?, clave = ? WHERE mail = ?";
    const params = [usuario.nickname, usuario.clave, usuario.mail];

    conexion.query(consulta, params, (err, resultado) => {
        if (err) {
            funcallback(err);
        } else {
            funcallback(null, resultado);
        }
    });
};

UconsultaAbd.borrar = function (id_p_e, retorno) { 
    consulta = "DELETE FROM usuario WHERE mail = ?";
    parametro = id_p_e;

    conexion.query(consulta, parametro, (err, result) => {
        if(err) {
            retorno({message: err.code, detail: err}, undefined);
        }else{ if (result.affectedRows == 0) {
            retorno(undefined, { mensajito: "No se encontro al usuario con el mail " + id_p_e});
        } else {
            retorno(undefined, { mensajito: "Usuario eliminado con el mail: "+ id_p_e });
        }
    }
    })
};

UconsultaAbd.getByEmail = function(mail, funcallback) {
    const consulta = "SELECT mail FROM usuario";
    const params = mail;

    conexion.query(consulta, params, (err, resultado) => {
        if (err) {
            funcallback(err);
        } else {
            funcallback(null, resultado);
        }
    });
};


module.exports = UconsultaAbd;

module.exports = usuario_db;