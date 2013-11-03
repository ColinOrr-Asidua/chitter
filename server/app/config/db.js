//TODO (martin) Colin could we remove this code as it not using any more?
//var mongojs = require('mongojs');
//
////	Development connection string
//var connection = 'test';
//
////  Cloud 9 connection string
//if(process.env.IP) {
//	connection = process.env.IP + '/test';
//}
//
////  AppFog connection string
//if(process.env.VCAP_SERVICES) {
//  var env = JSON.parse(process.env.VCAP_SERVICES);
//  var cfg = env['mongodb-1.8'][0].credentials;
//
//  connection = "mongodb://" + cfg.username + ":" + cfg.password + "@" + cfg.hostname + ":" + cfg.port +"/" + cfg.db;
//}
//
//module.exports = mongojs(connection, ['cheeps']);

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('./config.js');

module.exports = function() {

    // connect to mongoDB
    mongoose.connect(config.db.uri, config.db.options);

    /**
     * CONNECTION EVENTS
     */
    // When successfully connected
    mongoose.connection.on('open', function () {
        console.info('Mongoose default connection open to ' + config.db.uri);
    });

    // If the connection throws an error
    mongoose.connection.on('error',function (err) {
        console.error('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.info('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};
