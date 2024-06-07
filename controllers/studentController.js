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

 const getStudentById = async(req,res)=>{
    const studentId = req.params.id;
    if(!studentId) return res.status(404).json({status:false , message:"Invalid your student id or missing."});

    const data =await db.query(`SELECT * FROM students WHERE id=?`,[studentId])
    try {
        if(!data){
            return res.status(400).json({status:false,message:"No record found."})
        
        }
      
            return  res.status(200).json({status:true,message:"Success." , data:data[0]})
       
        
    } catch (error) {
        res.status(500).json({status:false,message:"Error In Get Student API"})
    }

}

const createStudent = async (req,res)=>{
    try {
        const {name} = req.body;
        if(name.length<1) return res.status(500).json({status:false,message:"Please fill in all fields"});
       const data =  await db.query(`INSERT INTO students (name) VALUES(?)`,[name]);
       if(!data) return res.status(404).json({status:false,message:"Error In INSERT QUERY" , data})


        res.status(201).json({status:true,message:"New student record created."})
    } catch (error) {
         res.status(500).json({status:false,message:'Error In Create Student API'})
    }
   


}
module.exports = {getStudents , getStudentById,createStudent}