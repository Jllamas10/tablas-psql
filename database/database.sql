CREATE DATABASE firstapi;

CREATE TABLE alumno(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) UNIQUE,
    secondName VARCHAR(20),
    groupId VARCHAR(30),
    promedio decimal,
    age integer,
    status integer,
    created_at TIMESTAMPTZ,
    update_at TIMESTAMPTZ
);

INSERT INTO alumno(name, secondName, groupId, promedio, age, status) VALUES 
('Eduardo', 'Hernandez', 'salkn32o42423sa12', 9.3, 23, 0);

CREATE TABLE materia(
    id SERIAL PRIMARY KEY,
    idAlumno VARCHAR(40) UNIQUE,
    name VARCHAR(40),
    score decimal
);

INSERT INTO materia( idAlumno, name, score) VALUES
('saoj3p4ip2i3j', 'Biologia', 8.9),
('seoj4p5ip6i7j', 'Matematicas', 9.9),
('sioj5p6ip7i8j', 'Historia', 9.8);