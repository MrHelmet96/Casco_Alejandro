require('rootpath')();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var modelpersona = require("Modelo/personaM.js");

app.get('/', getAll); //ruta de escucha
function getAll(req, res) {
    modelpersona.getAll(function (err, resultado) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(resultado);
        }
    });
}

app.get('/persona/:persona', getUserByPersona); //ruta de escucha
function getUserByPersona(req, res) {
    modelpersona.getUserByPersona(req.params.persona, (err, result_model) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result_model.mensajito);
        }
    });
}

app.get('/apellido/:apellido', Bapellido); //ruta de escucha
function Bapellido(req, res) {
    modelpersona.Bapellido(req.params.apellido,(err,resultado) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(resultado)
        }
    })
};

app.get('/dni/:dni', getByDNI); //ruta de escucha
function getByDNI(req, res) {
    modelpersona.getByDNI(req.params.dni, (err, result_model) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result_model);
        }
    });
}

app.post('/', create); //ruta de escucha
function create(req, res) {
    let persona = req.body;
    modelpersona.create(persona, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });

}

app.put("/", modificar); //ruta de escucha
function modificar (req, res) {
    let persona = req.body;
    modelpersona.modificar(persona, (err,resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });
};
 
app.delete('/:dni', borrar); //ruta de escucha
function borrar(req, res) {
    let id_persona_a_eliminar = req.params.dni;
    modelpersona.borrar(id_persona_a_eliminar, (err, result_model) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result_model.detail.affectedRows == 0) {
                res.status(404).send(result_model.mensajito);
            } else {
                res.send(result_model.mensajito);
            }
        }
    });
}



module.exports = app;