const express = require('express');
const inventory = express.Router();

const db = require('../db');

//Insert inventory
inventory.post('/createInventory', (req, res)=>{
    let sql = 'INSERT INTO inventory SET ?';
    let newInventory = {
        "fk_equipment_id": req.body.fk_equipment_id,
        "fk_employee_id": req.body.fk_employee_id,
        "fk_room_id": req.body.fk_room_id
    };
    let query = db.query(sql, newInventory, (err, result) => {
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

//Select all inventory
inventory.get('/readAllInventory', (req, res)=>{
            let sql = 'SELECT * From inventory'
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

//Select inventory based on id
inventory.get('/readInventory/:id', (req, res)=>{
    let sql = 'SELECT * From inventory where inventory_id = ' + db.escape(req.params.id);
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

//Update inventory based on id
inventory.put('/updateInventory/:id', (req, res)=>{
    let newInventory = {
        "fk_equipment_id": req.body.fk_equipment_id,
        "fk_employee_id": req.body.fk_employee_id,
        "fk_room_id": req.body.fk_room_id
    };
    let sql = 'UPDATE inventory Set ? WHERE inventory_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newInventory, (err, result) => {
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


//Delete inventory based on id
inventory.delete('/deleteInventory/:id', (req, res) => {
    let sql = 'DELETE FROM inventory WHERE inventory_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err){
            res.json({msg: "Error: Entry could not be deleted"});
            console.log(err)
        }
    });
});



module.exports = inventory;