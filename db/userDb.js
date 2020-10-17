const mysql = require("mysql");

pool = mysql.createPool({
password : 'SmartXchange',
user: 'SmartXChange',
database: 'mydb',
host: 'localhost',
port: '3306' 
});

module.exports.getAll=()=>{
  return new Promise((resolve, reject) => { 
    pool.query('SELECT * FROM mydb.User', (err, result) => {
        if(err){
            return reject(err);
        }
        return resolve(result);
    })
  }); 
};
