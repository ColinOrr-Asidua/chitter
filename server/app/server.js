var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Module dependencies.
 */
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    config = require('./config/config.js');

/**
 * Main application entry file.
 * Note that the order of loading is important.
*/
//TODO: (martin) continue once we get mongoose working
//,mongoose = require('mongoose');
//Bootstrap db connection
//var db = mongoose.connect(config.db);
var db;

//express settings
require('./config/express')(app, db);

//Bootstrap routes
require('./config/routes')(app);

var port = process.env.PORT || config.port;

// dev environments
app.configure('development', function(){
    // Start up the server on the port specified in the config
    server.listen(port, 'localhost', 511, function() {
        // Once the server is listening automatically open up a browser
        var open = require('open');
        open('http://localhost:' + port + '/');
    });
    console.info('Chitter app started on port: ' + port);
});

// production environments
app.configure('production', function(){
    app.listen(port, function() {
        console.info('Chitter app started on port: ' + port);
    });
});

//expose app
exports = module.exports = app;

