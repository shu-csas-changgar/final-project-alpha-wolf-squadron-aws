const express = require('express');
const lease = express.Router();

const db = require('../db');

//Insert lease
lease.post('/createLease', (req, res)=>{
    let sql = 'INSERT INTO lease SET ?';
    let newLease = {
        "start_date": req.body.start_date, 
        "end_date": req.body.end_date 
    };
    let query = db.query(sql, newLease, (err, result) => {
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

//Select all leases
lease.get('/readAllLeases', (req, res)=>{
            let sql = 'SELECT * From lease'
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

//Select lease based on id
lease.get('/readLease/:id', (req, res)=>{
    let sql = 'SELECT * From lease where lease_id = ' + db.escape(req.params.id);
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

//Update lease based on id
lease.put('/updateLease/:id', (req, res)=>{
    let newLease = {
        "start_date": req.body.start_date, 
        "end_date": req.body.end_date 
    };
    let sql = 'UPDATE lease Set ? WHERE lease_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newLease, (err, result) => {
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


//Delete lease based on id
lease.delete('/deleteLease/:id', (req, res) => {
    let sql = 'DELETE FROM lease WHERE lease_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err){
            res.json({msg: "Error: Entry could not be deleted"});
            console.log(err)
        }
    });
});


module.exports = lease;