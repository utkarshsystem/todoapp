const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


// create express app
const app = express();
app.use(cors()) // Cross Origin Resource Sharing 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Todo Application - ............"});
});

require('./app/routes/todo.routes.js')(app);

// listen for requests
app.listen(8001, () => {
    console.log("Server is listening on port 8001");
});
