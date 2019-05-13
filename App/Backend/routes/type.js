const express = require('express');
const type = express.Router();

const db = require('../db');

//Insert type
type.post('/createType', (req, res)=>{
    let sql = 'INSERT INTO type SET ?';
    let newType = {
        "type": req.body.type
    };
    let query = db.query(sql, newType, (err, result) => {
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

//Select all types
type.get('/readAllTypes', (req, res)=>{
            let sql = 'SELECT * From type'
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

//Select type based on id
type.get('/readType/:id', (req, res)=>{
    let sql = 'SELECT * From type where type_id = ' + db.escape(req.params.id);
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

//Update type based on id
type.put('/updateType/:id', (req, res)=>{
    let newType = {
        "type": req.body.type
    };
    let sql = 'UPDATE type Set ? WHERE type_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newType, (err, result) => {
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


//Delete type based on id
type.delete('/deleteType/:id', (req, res) => {
    let sql = 'DELETE FROM type WHERE type_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err){
            res.json({msg: "Error: Entry could not be deleted"});
            console.log(err)
        }
        else{
            console.log(results);
            res.json(results);
        }
    });
});



module.exports = type;