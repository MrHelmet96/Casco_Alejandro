CREATE TABLE ALUMNO
(
  cod_matricula INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  dni INT NOT NULL,
  fecha_nac DATETIME NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (cod_matricula),
  UNIQUE (dni),
  UNIQUE (email)
);

CREATE TABLE CURSO
(
  cod_curso INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR
(
  profesor_id INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  especialidad VARCHAR(60) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE inscripto_en
(
  cod_matricula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matricula, cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

CREATE TABLE imparte
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id)
);

/* Insertar valores en la tabla alumno */
INSERT INTO ALUMNO (cod_matricula, nombre, dni, fecha_nac, email)
VALUES (1, 'Leo Messi', 12345678, '1987-06-24', 'elmessias@hotmail.com'),
(2, 'Emiliano Martinez', 23456789, '1992-09-02', 'dibujitocampeon@gmail.com'),
(3, 'Ursula Gómez', 34567890, '1994-02-20', 'ursu_gomez@yahoo.com');

/* Insertar valores en la tabla curso */
INSERT INTO CURSO (cod_curso, nombre)
VALUES (1, 'Matemáticas'), (2, 'Historia'), (3, 'Programación');

/* Insertar valores en tabla profesor */
INSERT INTO PROFESOR (profesor_id, nombre, especialidad, email)
VALUES (1, 'Carlos Rodríguez', 'Matemáticas', 'carlosrrr@gmail.com'),
(2, 'Ana García', 'Historia', 'anamariagarcia@gmail.com'),
(3, 'Lucas Podkowa', 'Programación', 'elprofe_lucas@gmail.com');

/* Insertar datos en tabla inscripto */
INSERT INTO inscripto_en (cod_matricula, cod_curso)
VALUES (1, 1), (2, 2), (3, 3);

/* Insertar datos en tabla imparte */
INSERT INTO imparte (cod_curso, profesor_id)
VALUES (1, 1), (2, 2), (3, 3);