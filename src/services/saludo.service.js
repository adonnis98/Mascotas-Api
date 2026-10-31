export async function crearSaludo(nombre) {
    const saludo = {
        nombreRecibido: nombre,
        mensaje: `Hola ${nombre}` 
    }

    return saludo;
}