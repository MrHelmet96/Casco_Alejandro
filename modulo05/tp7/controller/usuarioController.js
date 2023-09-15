require('rootpath')();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var Modelusuario = require("Modelo/usuarioM.js");

app.get('/', getAll);
app.post('/', createUser);
app.put('/:id_usuario', updateUser);
app.delete('/:id_usuario', deleteUser);


// -------------------------------------------------------- 
// ---------FUNCIONES UTILIZADAS EN ENDPOINTS ------------- 
// -------------------------------------------------------- 

//req : datos enviados desde el frontend para que lo utilicemos
//res : respuesta enviada desde el servidor al frontend

function getAll(req, res) {
    Modelusuario.getAll((err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(resultado);
        }
    });
};

app.get('/mail', Cmail) 
function Cmail(req, res) {
    Modelusuario.Cmail((err,resultado) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(resultado)
        }
    })
};

app.post('/', createUser);
function createUser(req, res) {
    let usuario = req.body;
    Modelusuario.createUser(usuario, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });
}


app.put('/', modificar);
function modificar(req, res) {
    let usuario = req.body;
    Modelusuario.modificar(usuario,(err,resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado)
        }
    })
}


app.delete('/:mail', borrar);
function borrar(req, res) {
    let usuario = req.params.mail;
    Modelusuario.borrar(usuario, (err, result) =>{
        if(err){
            res.status(500).send(err);
        } else {
            if (result_model.detail.affectedRows == 0) {
                res.status(404).send(result_model.message);
            } else {
                res.send(result_model.message);
            }
        }
    });
}

module.exports = app;
