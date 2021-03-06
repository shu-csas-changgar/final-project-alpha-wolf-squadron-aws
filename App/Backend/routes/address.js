const express = require('express');
const address = express.Router();

const db = require('../db');

//Insert Address
address.post('/createAddress', (req, res)=>{
    let sql = 'INSERT INTO address SET ?';
    let newAddress = {
        "address": req.body.address,
        "address2": req.body.address2,
        "district": req.body.district,
        "postal_code": req.body.postal_code,
        "fk_city_id": req.body.fk_city_id
    };
    let query = db.query(sql, newAddress, (err, result) => {
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

//Select all addresses
address.get('/readAllAddresses', (req, res)=>{
            let sql = 'SELECT * From address'
            db.query(sql, (err, results) =>{
                if(err){
                    res.json({msg: "Error: Entry not could not be read"});
                    console.log(err)
                }
                else{
                    console.log(results);
                    res.json(results);
                }
            });
        });

//Select address based on id
address.get('/readAddress/:id', (req, res)=>{
    let sql = 'SELECT * From address where address_id = ' + db.escape(req.params.id);
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

//Update address based on id
address.put('/updateAddress/:id', (req, res)=>{
    let newAddress = {
        "address": req.body.address,
        "address2": req.body.address2,
        "district": req.body.district,
        "postal_code": req.body.postal_code,
        "fk_city_id": req.body.fk_city_id
    };
    let sql = 'UPDATE address Set ? WHERE address_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newAddress, (err, result) => {
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


//Delete address based on id
address.delete('/deleteAddress/:id', (req, res) => {
    let sql = 'DELETE FROM address WHERE address_id = ' + db.escape(req.params.id);
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




module.exports = address;