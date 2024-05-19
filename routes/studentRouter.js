const express = require('express');
const {getStudents} = require('../controllers/studentController')


const router = express.Router();

router.get("/getAll",getStudents)

module.exports = router
