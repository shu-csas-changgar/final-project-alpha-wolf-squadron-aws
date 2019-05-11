const mysql = require('mysql')
const express = require('express')
const router = express.Router();

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: "mydb"
});

//connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mySql Connected...");
});

module.exports = db