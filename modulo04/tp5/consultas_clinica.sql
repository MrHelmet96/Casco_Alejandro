-- a) Agregar un nuevo paciente en la base de datos con los siguientes datos:
-- nss = 22558, nombre = Antonio, apellido = Magallanes, domicilio = Dos Pindo 260, codigo_postal = 3640, telefono = null, nro_historial_clinico = 1932, observaciones = null

INSERT INTO tp5.paciente(nss, nombre, apellido, domicilio, codigo_postal, telefono, nro_historial_clinico, observaciones)
VALUES (22558, 'Antonio', 'Magallanes', 'Dos Pindo 260', 3640, null, 1932, null);

-- b) Actualizar el numero de teléfono de éste ultimo paciente agregado, asignando el dato: 3745-589174

UPDATE tp5.paciente SET telefono = '3745-589174' WHERE nro_historial_clinico = 1932;

-- c) Obtener un listado con una columna llamada “paciente” donde aparezca el apellido y nombre de cada paciente separado por una coma luego del apellido, y una segunda columna llamada
-- “observacion_registrada” donde aparezca su correspondiente observación. En dicho listado solamente deben aparecer los pacientes con alguna observación.

SELECT concat(apellido, ', ', nombre) AS paciente, observaciones AS observacion_registrada From tp5.paciente WHERE observaciones IS NOT NULL;

-- d) Listar los pacientes (apellido y nombre separado por una coma en una sola columna) junto a la especialidad requerida en cada uno de los ingresos registrados en la base de datos.

select concat(paciente.apellido, ', ', paciente.nombre) AS paciente, medico.especialidad FROM tp5.ingreso
inner JOIN tp5.paciente ON ingreso.nro_historial_paciente = paciente.nro_historial_clinico
inner join tp5.medico on ingreso.matricula_medico = medico.matricula;

-- e) Eliminar de la base de datos aquellos médicos que no hay sido solicitados por ningún paciente.

DELETE FROM tp5.medico where matricula NOT IN (SELECT DISTINCT matricula_medico FROM tp5.ingreso);

-- f) Obtener una tabla con dos columnas, donde la primera corresponda al numero de cama y la segunda, llamada "usos" que corresponda a la cantidad de veces que se ha utilizado dicha cama en los ingresos.
-- Dichos datos debes estar ordenados de mayor a menor en cuanto a la cantidad de usos.

SELECT nro_cama AS numero_cama, COUNT(*) AS usos FROM tp5.ingreso GROUP BY nro_cama ORDER BY usos DESC;
