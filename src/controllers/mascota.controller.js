import * as service from '../services/mascota.service.js';

export const obtenerTodos = async (req, res) => {
    const resultado = await service.obtenerTodos();
    res.json(resultado);
};

export const obtenerPorId = async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ mensaje: 'El id debe ser un número' });
    }

    const parsedId = parseInt(id);
    const mascota = await service.obtenerPorId(parsedId);

    if (!mascota || mascota.length === 0) {
        return res.status(404).json({ mensaje: `La mascota con id ${parsedId} no existe` });
    }

    res.json(mascota);
};

export const obtenerPorEspecie = async (req, res) => {
    const { especie } = req.params;

    const mascotas = await service.obtenerPorEspecie(especie);

    if (!mascotas || mascotas.length === 0) {
        return res.status(404).json({ mensaje: `No se encontraron mascotas de especie "${especie}"` });
    }

    res.json(mascotas);
};

export const crear = async (req, res) => {
    const { nombre, especie, raza, sexo, fecha_nacimiento } = req.body;
    const mascotaCreada = await service.crearMascota({ nombre, especie, raza, sexo, fecha_nacimiento });

    res.status(201).json({
        mensaje: 'Mascota creada exitosamente', mascota: mascotaCreada
    });
};

export const actualizar = async (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ mensaje: 'El id debe ser un número' });
    }

    const parsedId = parseInt(id);
    const mascotaExistente = await service.obtenerPorId(parsedId);

    if (!mascotaExistente || mascotaExistente.length === 0) {
        return res.status(404).json({ mensaje: `La mascota con id ${parsedId} no existe` });
    }

    const mascotaActualizada = await service.actualizar(parsedId, datos);
    res.json({ mensaje: 'La mascota fue actualizada', mascota: mascotaActualizada });
};

export const eliminar = async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ mensaje: 'El id debe ser un número' });
    }

    const parsedId = parseInt(id);
    const mascotaExistente = await service.obtenerPorId(parsedId);

    if (!mascotaExistente || mascotaExistente.length === 0) {
        return res.status(404).json({ mensaje: `La mascota con id ${parsedId} no existe` });
    }

    await service.eliminar(parsedId);
    res.json({ mensaje: 'Mascota eliminada correctamente' });
};