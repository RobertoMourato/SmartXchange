const mysql = require("mysql");

pool = mysql.createPool({
password : 'SmartXchange',
user: 'SmartXChange',
database: 'mydb',
host: 'database',
port: '3306' 
});

module.exports.getMyStocks=(username)=>{
  return new Promise((resolve, reject) => { 
    pool.query('SELECT * FROM mydb.Stock WHERE ownerId = ( SELECT userId FROM mydb.User WHERE username = ?)', [username], (err, result) => {
        console.log(username);
        if(err){
            return reject(err);
        }
        return resolve(result);
    })
  }); 
};
