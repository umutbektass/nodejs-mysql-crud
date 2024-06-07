const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
    host:'95.173.180.21',
    user:'umutwebc_root',
    password:'CF.7$bS8cJ}N',
    database:'umutwebc_students_db',
})



module.exports = mySqlPool;