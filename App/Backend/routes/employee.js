const express = require('express');
const employee = express.Router();

const db = require('../db');

//retrieve employee
employee.get('/getEmployee', (req, res)=>{
            let sql = 'SELECT * From employee';
            db.query(sql, (err, results) =>{
                if(err) throw err;
                console.log(results);
                res.json(results);
            });
        });


module.exports = employee;