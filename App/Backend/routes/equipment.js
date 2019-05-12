const express = require('express');
const equipment = express.Router();

const db = require('../db');

//Insert equipment
equipment.post('/createEquipment', (req, res)=>{
    let sql = 'INSERT INTO equipment SET ?';
    let newEquipment = {
        "name": req.body.name,
        "active": req.body.active,
        "warranty_end_date": req.body.warranty_end_date,
        "fk_lease_id": req.body.fk_lease_id,
        "fk_vendor_id": req.body.fk_vendor_id,
        "fk_type_id": req.body.fk_type_id
    };
    let query = db.query(sql, newEquipment, (err, result) => {
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

//Select all equipment
equipment.get('/readAllEquipment', (req, res)=>{
            let sql = 'SELECT * From equipment'
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

//Select equipment based on id
equipment.get('/readEquipment/:id', (req, res)=>{
    let sql = 'SELECT * From equipment where equipment_id = ' + db.escape(req.params.id);
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

//Update equipment based on id
equipment.put('/updateEquipment/:id', (req, res)=>{
    let newEquipment = {
        "name": req.body.name,
        "active": req.body.active,
        "warranty_end_date": req.body.warranty_end_date,
        "fk_lease_id": req.body.fk_lease_id,
        "fk_vendor_id": req.body.fk_vendor_id,
        "fk_type_id": req.body.fk_type_id
    };
    let sql = 'UPDATE equipment Set ? WHERE equipment_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newEquipment, (err, result) => {
        if(err){
            res.json({msg: "Error: Entry could not be udpated"});
            console.log(err)
        }
        else{
            console.log(result);
            res.json(result);
        }
    });
});


//Delete equipment based on id
equipment.delete('/deleteEquipment/:id', (req, res) => {
    let sql = 'DELETE FROM equipment WHERE equipment_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err){
            res.json({msg: "Error: Entry could not be deleted"});
            console.log(err)
        }
    });
});



module.exports = equipment;