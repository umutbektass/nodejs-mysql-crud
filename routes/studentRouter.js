const express = require('express');
const {getStudents,getStudentById,createStudent} = require('../controllers/studentController')


const router = express.Router();

router.get("/getAll",getStudents)

router.get("/get/:id",getStudentById)

router.post("/create",createStudent)


module.exports = router
