import { Router } from 'express';
import * as controller from '../controllers/mascota.controller.js';
import { validarApiKey } from '../middlewares/global.middleware.js';

const router = Router();

router.get('/', controller.obtenerTodos);
router.get('/especie/:especie', controller.obtenerPorEspecie);
router.get('/:id', controller.obtenerPorId);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

export default router;