const { response } = require('express');
const res = require('express/lib/response');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Llamas1992',
    database: 'firstapi',
    port: '5432'

});

const getAlumno = async (req, res) => {
    const response = await pool.query('SELECT * FROM alumno');
    res.status(200).json(response.rows);
};

const getAlumnoById = async (req, res) => {
    const id = req.params.id;
    const {name, secondName, groupId, promedio, age, status} = req.body;
    console.log('id', id);
    if (id === undefined||name === undefined||secondName === undefined||groupId === undefined||promedio === undefined||age === undefined||status === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('SELECT * FROM alumno WHERE id = $1', [id]);
    res.json(response.rows);
}

const createAlumno = async (req, res) => {
    const { name, secondName, groupId, promedio, age, status } = req.body;
    if (name === undefined||secondName === undefined||groupId === undefined||promedio === undefined||age === undefined||status === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('INSERT INTO getAlumno(name, secondName, groupId, promedio, age, status) VALUES ($1, $2, $3, $4, $5, $6)', [name, secondName, groupId, promedio, age, status]);
    console.log(response);
    res.json({
        message: 'Alumno Added Succesfully',
        body: {
            user: {name, secondName, groupId, promedio, age, status}
        }
    })
};

const updateAlumno = async (req, res) => {
    const id = req.params.id;
    const { name, secondName, groupId, promedio, age, status } = req.body;
    console.log('id', id);
    if (id === undefined||name === undefined||secondName === undefined||groupId === undefined||promedio === undefined||age === undefined||status === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('UPDATE alumno SET name = $1, secondName = $2 WHERE id = $3', [
        name,
        secondName,
        id
    ]);
    console.log(response);
    res.json('Alumno Updated successfuly');
};

const deleteAlumno = async (req, res) => {
    const id = req.params.id;
    const {name, secondName, groupId, promedio, age, status} = req.body;
    console.log('id', id);
    if (id === undefined||name === undefined||secondName === undefined||groupId === undefined||promedio === undefined||age === undefined||status === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('DELETE FROM alumno WHERE id = $1', [id]);
    console.log(response);
    res.json(`Alumno ${id} deleted successfully`);
    
};

const getMateria = async (req, res) => {
    const response = await pool.query('SELECT * FROM materia');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const getMateriaById = async (req, res) => {
    const id = req.params.id;
    const {idAlumno, name, score} = req.body;
    console.log('id', id);
    if (id === undefined||idAlumno === undefined||name === undefined||score === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('SELECT * FROM materia WHERE id = $1', [id]);
    res.json(response.rows);
}

const createMateria = async (req, res) => {
    const { idAlumno, name, score } = req.body;
    if (idAlumno === undefined||name === undefined||score === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('INSERT INTO materia (idAlumno, name, score) VALUES ($1, $2, $3)', [idAlumno, name, score]);
    console.log(response);
    return res.json({
        message: 'Materia Added Succesfully',
        body: {
            materia: {idAlumno, name, score}
        }
    })
};

const updateMateria = async (req, res) => {
    const id = req.params.id;
    const { idAlumno, name, score } = req.body;
    if (idAlumno === undefined||name === undefined||score === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('UPDATE materia SET idAlumno = $1, name = $2, score = $3 WHERE id = $4', [
        idAlumno,
        name,
        score,
        id
    ]);
    console.log(response);
    res.json('Materia Update successfully');
};

const deleteMateria = async (req, res) => {
    const id = req.params.id;
    const {idAlumno, name, score} = req.body;
    console.log('id', id);
    if (id === undefined||idAlumno === undefined||name === undefined||score === undefined){
        return res.json({
            message: 'Valores Faltantes'
        })            
    } 
    const response = await pool.query('DELETE FROM materia WHERE id = $1', [id])
    console.log(response);
    res.json(`Materia ${id} deleted succesfully`);
};



module.exports = {
    getAlumno,
    getAlumnoById,
    createAlumno,
    deleteAlumno,
    updateAlumno,
    getMateria,
    createMateria,
    getMateriaById,
    deleteMateria,
    updateMateria
}
