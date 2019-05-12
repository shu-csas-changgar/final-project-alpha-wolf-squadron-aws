const express = require('express');
const city = express.Router();

const db = require('../db');

//Insert city
city.post('/createCity', (req, res)=>{
    let sql = 'INSERT INTO city SET ?';
    let newCity = {
        "city": req.body.city,
        "fk_country_id": req.body.fk_country_id
    };
    let query = db.query(sql, newCity, (err, result) => {
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

//Select all cities
city.get('/readAllcities', (req, res)=>{
            let sql = 'SELECT * From city'
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

//Select city based on id
city.get('/readcity/:id', (req, res)=>{
    let sql = 'SELECT * From city where city_id = ' + db.escape(req.params.id);
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

//Update city based on id
city.put('/updatecity/:id', (req, res)=>{
    let newCity = {
        "city": req.body.city,
        "fk_country_id": req.body.fk_country_id
    };
    let sql = 'UPDATE city Set ? WHERE city_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newCity, (err, result) => {
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


//Delete city based on id
city.delete('/deleteCity/:id', (req, res) => {
    let sql = 'DELETE FROM city WHERE city_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err){
            res.json({msg: "Error: Entry could not be deleted"});
            console.log(err)
        }
    });
});



module.exports = city;