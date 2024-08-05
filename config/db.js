const mysql = require('mysql2');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

const db = mysql.createConnection({
    host:process.env.DB_HOST, 
    user:process.env.DB_USER, 
    password:process.env.DB_PASS,
    database:process.env.DB_NAME 
});

db.connect((err) => {
    if(err){
        console.error('erro ao conectar ao Banco de Dados.', err); 
    return;
}
    console.log(`conectado ao Banco de Dados Mysql, ${process.env.DB_NAME}`); 
});

module.exports=db;