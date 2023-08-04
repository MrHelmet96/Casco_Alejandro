const express = require('express');
const mysql = require('mysql2');

console.log('Hola soy un programa');
//
const operacion = require("./programa.js")
// LLamado al objeto operacion
operacion.sumar(4, 3)