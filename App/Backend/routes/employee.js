const express = require('express');
const employee = express.Router();

const db = require('../db');

//Insert employee
employee.post('/createEmployee', (req, res)=>{
    let sql = 'INSERT INTO employee SET ?';
    let newEmployee = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "phone_number": req.body.phone_number,
        "work_phone_number": req.body.work_phone_number,
        "email": req.body.email,
        "username": req.body.username,
        "password": req.body.password,
        "active": req.body.active,
        "fk_address_id": req.body.fk_address_id,
        "fk_room_id": req.body.fk_room_id
    };
    let query = db.query(sql, newEmployee, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});

//Select all employees
employee.get('/readAllEmployees', (req, res)=>{
            let sql = 'SELECT * From employee'
            db.query(sql, (err, results) =>{
                if(err) throw err;
                console.log(results);
                res.json(results);
            });
        });

//Select employee based on id
employee.get('/readEmployee/:id', (req, res)=>{
    let sql = 'SELECT * From employee where employee_id = ' + db.escape(req.params.id);
    db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    });
});

//Update employee based on id
employee.put('/updateEmployee/:id', (req, res)=>{
    let newEmployee = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "phone_number": req.body.phone_number,
        "work_phone_number": req.body.work_phone_number,
        "email": req.body.email,
        "username": req.body.username,
        "password": req.body.password,
        "active": req.body.active,
        "fk_address_id": req.body.fk_address_id,
        "fk_room_id": req.body.fk_room_id
    };
    let sql = 'UPDATE employee Set ? WHERE employee_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newEmployee, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});


//Delete employee based on id
employee.delete('/deleteEmployee/:id', (req, res) => {
    let sql = 'DELETE FROM employee WHERE employee_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("It worked!");
    });
});



module.exports = employee;