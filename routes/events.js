const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const router = Router();

//Obtener eventos

router.get('/', getEventos);


//crear un nuevo evento crearEvento

router.post('/', crearEvento);


/// Actualizar un evento put actualizarEvento

router.put('/:id', actualizarEvento);



//borrar evento     delete  eliminarEvento
router.delete('/:id', eliminarEvento);


module.exports = router;
