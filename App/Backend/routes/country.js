const express = require('express');
const country = express.Router();

const db = require('../db');

//Insert country
country.post('/createCountry', (req, res)=>{
    let sql = 'INSERT INTO country SET ?';
    let newCountry = {
        "country": req.body.country
    };
    let query = db.query(sql, newCountry, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});

//Select all countries
country.get('/readAllCountries', (req, res)=>{
            let sql = 'SELECT * From country'
            db.query(sql, (err, results) =>{
                if(err) throw err;
                console.log(results);
                res.json(results);
            });
        });

//Select country based on id
country.get('/readCountry/:id', (req, res)=>{
    let sql = 'SELECT * From country where country_id = ' + db.escape(req.params.id);
    db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    });
});

//Update country based on id
country.put('/updateCountry/:id', (req, res)=>{
    let newCountry = {
        "country": req.body.country
    };
    let sql = 'UPDATE country Set ? WHERE country_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newCountry, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});


//Delete country based on id
country.delete('/deleteCountry/:id', (req, res) => {
    let sql = 'DELETE FROM country WHERE country_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("It worked!");
    });
});




module.exports = country;