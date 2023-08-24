require('rootpath')();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var usuarioDb = require("model/user.js");

//req : es lo que llega desde el frontend (en nuestro caso Postman)
//res : respuesta enviada desde el servidor al frontend

//atendiendo el endpoint /api/persona mediante el metodo GET 
// |--> llamar a la funcion getAll() que está en el archivo encargado de hestionar lo relacionado a la tabla PERSONA en la BD
//      y procesara la respuesta en una funcion callback
// |--> GetAll() enviara como respuesta un error (que le enviará la base de datos) o los datos en caso de exito   


app.getAll('/', getAll);
app.post('/', createUser);
app.put('/:id_usuario', updateUser);


function getAll (err, res) {
    usuarioDb.getAll((err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(resultado);
        }
    });
}

function createUser(req, res) {
    let usuario = req.body;
    usuarioDb.create(usuario, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });
}

function updateUser(req, res) {
    let usuario = req.body;
    let id_usuario = req.params
    usuarioDb.create(usuario,(err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });
}

usuario_db.update = function(usuario, funcallback) {
    const consulta = "UPDATE usuario_id SET mail = ?, contraseña = ? WHERE usurio_id = ?";
    const params = [usuario.nickname, usuario.pass, usuario.mail];

    connection.query(consulta, params, (err, resultado) => {
        if (err) {
            funcallback(err);
        } else {
            funcallback(null, resultado); // Pasar "null" como primer parámetro indica que no hay error.
        }
    });
};

module.exports = app;



