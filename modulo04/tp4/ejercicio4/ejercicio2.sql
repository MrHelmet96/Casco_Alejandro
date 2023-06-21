CREATE TABLE PAIS
(
  pais_id INT NOT NULL AUTO_INCREMENT,
  nombre_pais VARCHAR(60) NOT NULL,
  PRIMARY KEY (pais_id),
  UNIQUE (nombre_pais)
);

CREATE TABLE PROVINCIA
(
  provincia_id INT NOT NULL AUTO_INCREMENT,
  nombre_provincia VARCHAR(60) NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_localidad INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL,
  dni INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  telefono BIGINT NOT NULL,
  fecha_alta DATETIME NOT NULL,
  email VARCHAR(100) NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad),
  UNIQUE (dni),
  UNIQUE (email)
);

/* Valores en la tabla PAIS */
INSERT INTO PAIS (nombre_pais) VALUES ('Argentina'), ('Brasil'), ('Paraguay');

/* Valores en la tabla PROVINCIA */
INSERT INTO PROVINCIA (nombre_provincia, pais_id) VALUES ('Misiones', 1), ('Paraná', 2), ('Distrito capital', 3);

/* Valores en la tabla LOCALIDAD */
INSERT INTO LOCALIDAD (nombre, codigo_postal, provincia_id) VALUES ('Posadas', 3300, 1), ('Curitiba', 80010, 2), ('Asunción', 1308, 3);

/* Valores en la tabla EMPLEADO */
INSERT INTO EMPLEADO (empleado_id, dni, nombre, telefono, fecha_alta, email, codigo_localidad) 
VALUES (1, 37456721, 'Alejandro Casco', 3764123489, '2023-04-06', 'alejandromatias@ejemplo.com', 1),
(2, 87654321, 'María Aguilar', 3784667788, '2022-01-12', 'maria_aguilar@example.com', 2),
(3, 98765432, 'Pedro Pascal', 4802128832, '2022-08-03', 'pascal_pedro_poderoso@gmail.com', 3);