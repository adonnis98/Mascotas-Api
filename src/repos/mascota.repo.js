import pool from "../config/db.js";

export async function obtenerTodos() {
  const query = "SELECT * FROM mascota ORDER BY id";
  const { rows } = await pool.query(query);
  return rows;
}

export async function obtenerPorId(id) {
  const query = "SELECT * FROM mascota WHERE id = $1";
  const { rows } = await pool.query(query, [id]);
  return rows[0]; 
}

export async function obtenerPorEspecie(especie) {
  const query =
    "SELECT * FROM mascota WHERE LOWER(especie) = LOWER($1) ORDER BY id";
  const { rows } = await pool.query(query, [especie]);
  return rows;
}

export async function crear(mascota) {
  const { nombre, especie, raza, sexo, fecha_nacimiento } = mascota;

  const query = `INSERT INTO mascota (nombre, especie, raza, sexo, fecha_nacimiento)
                 VALUES ($1, $2, $3, $4, $5)
                 RETURNING id, nombre, especie, raza, sexo, fecha_nacimiento`;

  const { rows } = await pool.query(query, [
    nombre,
    especie,
    raza,
    sexo,
    fecha_nacimiento,
  ]);

  return rows[0];
}

export async function actualizar(id, mascota) {
  const { nombre, especie, raza, sexo, fecha_nacimiento } = mascota;

  const query = `UPDATE mascota SET
                 nombre=$2,
                 especie=$3,
                 raza=$4,
                 sexo=$5,
                 fecha_nacimiento=$6
                 WHERE id = $1
                 RETURNING id, nombre, especie, raza, sexo, fecha_nacimiento`;

  const { rows } = await pool.query(query, [
    id,
    nombre,
    especie,
    raza,
    sexo,
    fecha_nacimiento,
  ]);
  return rows[0];
}

export async function eliminar(id) {
  const query = "DELETE FROM mascota WHERE id = $1";
  const { rowCount } = await pool.query(query, [id]);

  return rowCount > 0;
}