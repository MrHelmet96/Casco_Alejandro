/* a) Lista el apellido de todos los empleados */
SELECT apellido FROM empleados;

/* b) Lista el apellido de los empleados eliminando los apellidos que estén repetidos */
SELECT DISTINCT apellido FROM empleados;

/* c) Lista todas las columnas de la tabla 'empleados' */
SELECT * FROM empleados;

/* d) Lista el nombre y apellido de todos los 'empleados' */
SELECT nombre, apellido FROM empleados;

/* e) Lista el cuit/cuil de los departamentos de los empleados que aparecen en la tabla 'empleados' */
SELECT e.cuil_cuit, d.departamento_id FROM empleados e 
INNER JOIN departamentos d ON e.departamento = d.departamento_id;

/* f) Lista el nombre y apellido de los empleados en una única columna */
SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM empleados;

/* g) Lista el nombre y apellido de los empleados en una única columna, convirtiendo todos los caracteres en mayúscula */
SELECT UPPER(CONCAT(nombre, ' ', apellido)) AS nombre_completo_mayuscula FROM empleados;

/* h) Lista el nombre y apellido de los empleados en una única columna, convirtiendo todos los caracteres en minúscula */
SELECT LOWER(CONCAT(nombre, ' ', apellido)) AS nombre_completo_minuscula FROM empleados;

/* i) Lista el nombre de los departamentos y el valor del presupuesto actual ordenado de forma ascendente */
SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto ASC;

/* j) Lista el nombre de todos los departamentos ordenados de forma ascendente */
SELECT nombre FROM departamentos ORDER BY nombre ASC;

/* k) Lista el nombre de todos los departamentos ordenados de forma descendente */
SELECT nombre FROM departamentos ORDER BY nombre DESC;

/* l) Lista el apellido y el nombre de todos los empleados, ordenados de forma alfabética 
teniendo en cuenta en primer lugar su apellido y luego su nombre */
SELECT apellido, nombre FROM empleados ORDER BY apellido ASC;

/* m) Devuelve una lista con el nombre y el presupuesto de los 3 departamentos que tienen mayor presupuesto */
SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto DESC
LIMIT 3;

/* n) Devuelve una lista con el nombre y el presupuesto de los 3 departamentos que tienen menor presupuesto */
SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto ASC
LIMIT 3;

/* o) Devuelve una lista con el nombre de los departamentos y 
el presupuesto de aquellos que tienen un presupuesto mayor o igual a $150,000 */
SELECT nombre, presupuesto FROM departamentos WHERE presupuesto >= 150000;

/* p) Devuelve una lista con el nombre de los departamentos y el presupuesto, 
de aquellos que tienen un presupuesto entre $100,000 y $200,000 sin utilizar el operador BETWEEN */
SELECT nombre, presupuesto FROM departamentos WHERE presupuesto >= 100000 AND presupuesto <= 200000;

/* q) Devuelve una lista con el nombre de los departamentos que no tienen un presupuesto entre $100,000 y $200,000 
sin utilizar el operador BETWEEN */
SELECT nombre FROM departamentos WHERE presupuesto < 100000 OR presupuesto > 200000;

/* r) Devuelve una lista con el nombre de los departamentos que tienen un presupuesto entre $100,000 y $200,000 
utilizando el operador BETWEEN */
SELECT nombre FROM departamentos WHERE presupuesto BETWEEN 100000 AND 200000;

/* s) Devuelve un listado con los empleados y los datos de los departamentos donde trabaja cada uno */
SELECT e.nombre, e.apellido, d.nombre AS departamento, d.presupuesto
FROM empleados e JOIN departamentos d ON e.departamento = d.departamento_id;

/* t) Para obtener un listado de empleados y los datos de los departamentos donde trabajan, 
ordenado primero por el nombre del departamento y luego por apellido y nombre de los empleados */
SELECT e.apellido, e.nombre, d.nombre AS nombre_departamento 
FROM empleados e JOIN departamentos d ON e.departamento = d.departamento_id ORDER BY d.nombre, e.apellido, e.nombre;

/* u) Para obtener un listado con el código y nombre de los departamentos que tienen empleados */
SELECT d.departamento_id, d.nombre FROM departamentos d JOIN empleados e ON d.departamento_id = e.departamento;

/* v) Para obtener el nombre del departamento donde trabaja el empleado que tiene el cuit '27-38382980-3' */
SELECT d.nombre FROM empleados e JOIN departamentos d ON e.departamento = d.departamento_id
WHERE e.cuil_cuit = '27-38382980-3';

/* w) Para obtener el nombre del departamento donde trabaja el empleado Pepe Ruiz */
SELECT d.nombre FROM empleados e JOIN departamentos d ON e.departamento = d.departamento_id
WHERE e.nombre = 'Pepe' AND e.apellido = 'Ruiz';

/* x) Para obtener un listado con los datos de los empleados que trabajan en el departamento de I+D y ordenar el resultado alfabéticamente */
SELECT * FROM empleados e JOIN departamentos d ON e.departamento = d.departamento_id WHERE d.nombre = 'I+D'
ORDER BY e.apellido, e.nombre;

/* y) Para obtener un listado con los datos de los empleados que trabajan en los departamentos de Sistemas, Contabilidad o I+D, y ordenar el resultado alfabéticamente */
SELECT * FROM empleados e JOIN departamentos d ON e.departamento = d.departamento_id 
WHERE d.nombre IN ('Sistemas', 'Contabilidad', 'I+D') ORDER BY e.apellido, e.nombre;

/* z) Para obtener una lista con el nombre de los empleados que tienen los departamentos que no tienen un presupuesto entre $100000 y $200000 */
SELECT e.nombre, e.apellido FROM empleados e
JOIN departamentos d ON e.departamento = d.departamento_id WHERE d.presupuesto < 100000 OR d.presupuesto > 200000;