const db = require('../config/db')
const getStudents = async(req,res)=>{
    try {
        const data = await db.query('SELECT * FROM students');
        if(!data){
            return res.status(400).json({
                message:'No records found.'
            })
        }
        else{
            res.status(200).json({
                message:'All students records.',
                data:data[0]
            })
        }
    } catch (error) {
            res.status(500).message({
                message:'Error in get all student API',
                error
            })
    }
}
module.exports = {getStudents}