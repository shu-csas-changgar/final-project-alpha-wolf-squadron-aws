const express = require('express');
const vendor = express.Router();

const db = require('../db');

//Insert vendor
vendor.post('/createVendor', (req, res)=>{
    let sql = 'INSERT INTO vendor SET ?';
    let newVendor = {
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "fk_address_id": req.body.fk_address_id
    };
    let query = db.query(sql, newVendor, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});

//Select all vendors
vendor.get('/readAllVendors', (req, res)=>{
            let sql = 'SELECT * From vendor'
            db.query(sql, (err, results) =>{
                if(err) throw err;
                console.log(results);
                res.json(results);
            });
        });

//Select vendor based on id
vendor.get('/readVendor/:id', (req, res)=>{
    let sql = 'SELECT * From vendor where vendor_id = ' + db.escape(req.params.id);
    db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    });
});

//Update vendor based on id
vendor.put('/updateVendor/:id', (req, res)=>{
    let newVendor = {
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "fk_address_id": req.body.fk_address_id
    };
    let sql = 'UPDATE vendor Set ? WHERE vendor_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newVendor, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});


//Delete vendor based on id
vendor.delete('/deleteVendor/:id', (req, res) => {
    let sql = 'DELETE FROM vendor WHERE vendor_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("It worked!");
    });
});



module.exports = vendor;