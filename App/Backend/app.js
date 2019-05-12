//import modules
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//All routes
const employeeRoute = require('./routes/employee');
const viewRoute = require('./routes/view');
const addressRoute = require('./routes/address');
const countryRoute = require('./routes/country');
const cityRoute = require('./routes/city')

const port = 3000;



//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
//app.use(express.static(path.join(__dirname, 'public')));

//api extension for routes
app.use('/api', employeeRoute);
app.use('/api', viewRoute);
app.use('/api', addressRoute);
app.use('/api', countryRoute);
app.use('/api', cityRoute);

//testing server
app.get('/', (req, res)=> {
        res.send('helloworld');
});

app.listen(port, ()=>{
    console.log('Server started at port: ' + port);
});