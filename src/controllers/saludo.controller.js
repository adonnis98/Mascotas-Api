import * as saludoService from '../services/saludo.service.js';

export const saludar = async (req, res) => {
    res.send('Hola Mundo');
};

export const saludarUsandoNombreEnQueryParameter = async (req, res) => {

    const { nombre } = req.query;

    if(nombre === undefined){
        res.status(400).send('No ha incluido el nombre');
        return;
    }

    const saludo = await saludoService.crearSaludo(nombre);
    res.json(saludo);

};

export const saludarUsandoNombreEnUrl = async (req, res) => {

    const { nombre } = req.params;

    if(nombre === undefined){
        res.status(400).send('No ha incluido el nombre');
        return;
    }

    const saludo = await saludoService.crearSaludo(nombre);
    res.json(saludo);

}