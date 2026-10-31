CREATE TABLE mascota (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(40),
    especie VARCHAR(40),
    raza VARCHAR(40),
    sexo Varchar(40),   
    fecha_nacimiento DATE 
)


/*
DATOS PARA SQL HACER PRUEBA
select *
from mascota

INSERT INTO mascota 
VALUES (DEFAULT, 'NOMBRE', 'ESPECIE', 'RAZA', 'SEXO', 'FECHA_NACIEMIENTO');*/