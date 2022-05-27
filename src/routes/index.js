const { Router } = require('express');
const router = Router();

const { getAlumno, createAlumno, getAlumnoById, deleteAlumno, updateAlumno, getMateria, createMateria, getMateriaById, deleteMateria, updateMateria } = require('../controllers/index.controller');


router.get('/alumno', getAlumno);
router.get('/alumno/:id', getAlumnoById);
router.post('/alumno', createAlumno);
router.delete('/alumno/:id', deleteAlumno);
router.put('/alumno/:id', updateAlumno);
router.get('/materia', getMateria);
router.get('/materia/:id', getMateriaById);
router.post('/materia', createMateria);
router.delete('/materia/:id', deleteMateria);
router.put('/materia/:id', updateMateria);

console.log('test')

module.exports = router;