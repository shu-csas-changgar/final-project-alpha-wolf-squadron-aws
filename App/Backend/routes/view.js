const express = require('express');
const view = express.Router();

const db = require('../db');

//retrieve view of equipment for main view page
view.get('/view', (req, res)=>{
    let sql = 'select e.equipment_id, e.name, t.type, e.active, e.fk_lease_id, v.name as vendor, i.fk_employee_id, i.fk_room_id from equipment as e join type as t on e.fk_type_id = t.type_id join vendor as v on v.vendor_id = e.fk_vendor_id join inventory as i on i.fk_equipment_id = e.equipment_id;'
    db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    });
});


module.exports = view;