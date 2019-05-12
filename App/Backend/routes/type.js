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
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});

//Select all types
type.get('/readAllTypes', (req, res)=>{
            let sql = 'SELECT * From type'
            db.query(sql, (err, results) =>{
                if(err) throw err;
                console.log(results);
                res.json(results);
            });
        });

//Select type based on id
type.get('/readType/:id', (req, res)=>{
    let sql = 'SELECT * From type where type_id = ' + db.escape(req.params.id);
    db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    });
});

//Update type based on id
type.put('/updateType/:id', (req, res)=>{
    let newType = {
        "type": req.body.type
    };
    let sql = 'UPDATE type Set ? WHERE type_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newType, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});


//Delete type based on id
type.delete('/deleteType/:id', (req, res) => {
    let sql = 'DELETE FROM type WHERE type_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("It worked!");
    });
});



module.exports = type;