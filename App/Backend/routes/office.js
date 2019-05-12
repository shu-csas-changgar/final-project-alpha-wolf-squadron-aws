const express = require('express');
const office = express.Router();

const db = require('../db');

//Insert office
office.post('/createOffice', (req, res)=>{
    let sql = 'INSERT INTO office SET ?';
    let newOffice = {
        "office": req.body.office,
        "phone_number": req.body.phone_number,
        "equipment_contact": req.body.equipment_contact,
        "fk_address_id": req.body.fk_address_id
    };
    let query = db.query(sql, newOffice, (err, result) => {
        if(err){
            res.json({msg: "Error: Entry not added"});
            console.log(err)
        }
        else{
            console.log(result);
            res.json(result);
        }
    });
});

//Select all offices
office.get('/readAllOffices', (req, res)=>{
            let sql = 'SELECT * From office'
            db.query(sql, (err, results) =>{
                if(err){
                    res.json({msg: "Error: Entry could not be read"});
                    console.log(err)
                }
                else{
                    console.log(results);
                    res.json(results);
                }
            });
        });

//Select office based on id
office.get('/readOffice/:id', (req, res)=>{
    let sql = 'SELECT * From office where office_id = ' + db.escape(req.params.id);
    db.query(sql, (err, results) =>{
        if(err){
            res.json({msg: "Error: Entry could not be read"});
            console.log(err)
        }
        else{
            console.log(results);
            res.json(results);
        }
    });
});

//Update office based on id
office.put('/updateOffice/:id', (req, res)=>{
    let newOffice = {
        "office": req.body.office,
        "phone_number": req.body.phone_number,
        "equipment_contact": req.body.equipment_contact,
        "fk_address_id": req.body.fk_address_id
    };
    let sql = 'UPDATE office Set ? WHERE office_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newOffice, (err, result) => {
        if(err){
            res.json({msg: "Error: Entry could not be updated"});
            console.log(err)
        }
        else{
            console.log(result);
            res.json(result);
        }
    });
});


//Delete office based on id
office.delete('/deleteOffice/:id', (req, res) => {
    let sql = 'DELETE FROM office WHERE office_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err){
            res.json({msg: "Error: Entry could not be deleted"});
            console.log(err)
        }
    });
});



module.exports = office;