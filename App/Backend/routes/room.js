const express = require('express');
const room = express.Router();

const db = require('../db');

//Insert room
room.post('/createRoom', (req, res)=>{
    let sql = 'INSERT INTO room SET ?';
    let newRoom = {
        "room": req.body.room,
        "floor": req.body.floor,
        "fk_office_id": req.body.fk_office_id
    };
    let query = db.query(sql, newRoom, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});

//Select all rooms
room.get('/readAllRooms', (req, res)=>{
            let sql = 'SELECT * From room'
            db.query(sql, (err, results) =>{
                if(err) throw err;
                console.log(results);
                res.json(results);
            });
        });

//Select room based on id
room.get('/readRoom/:id', (req, res)=>{
    let sql = 'SELECT * From room where room_id = ' + db.escape(req.params.id);
    db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    });
});

//Update room based on id
room.put('/updateRoom/:id', (req, res)=>{
    let newRoom = {
        "room": req.body.room,
        "floor": req.body.floor,
        "fk_office_id": req.body.fk_office_id
    };
    let sql = 'UPDATE room Set ? WHERE room_id = ' + db.escape(req.params.id);
    let query = db.query(sql, newRoom, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("it worked");
    });
});


//Delete room based on id
room.delete('/deleteRoom/:id', (req, res) => {
    let sql = 'DELETE FROM room WHERE room_id = ' + db.escape(req.params.id);
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("It worked!");
    });
});



module.exports = room;