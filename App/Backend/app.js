//import modules
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//All routes
const addressRoute = require('./routes/address')
const cityRoute = require('./routes/city');
const countryRoute = require('./routes/country');
const employeeRoute = require('./routes/employee');
const equipmentRoute = require('./routes/equipment')
const inventoryRoute = require('./routes/inventory')
const leaseRoute = require('./routes/lease')
const officeRoute = require('./routes/office')
const roomRoute = require('./routes/room')
const typeRoute = require('./routes/type')
const vendorRoute = require('./routes/vendor')
const viewRoute = require('./routes/view');

const port = 3000;



//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
//app.use(express.static(path.join(__dirname, 'public')));

//api extension for routes
app.use('/api', addressRoute);
app.use('/api', cityRoute);
app.use('/api', countryRoute);
app.use('/api', employeeRoute);
app.use('/api', equipmentRoute);
app.use('/api', inventoryRoute);
app.use('/api', leaseRoute);
app.use('/api', officeRoute);
app.use('/api', roomRoute);
app.use('/api', typeRoute);
app.use('/api', vendorRoute);
app.use('/api', viewRoute);

//testing server
app.get('/', (req, res)=> {
        res.send('helloworld');
});

app.listen(port, ()=>{
    console.log('Server started at port: ' + port);
});