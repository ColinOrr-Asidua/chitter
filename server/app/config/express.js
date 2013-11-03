/**
 * Module dependencies.
 */
var express = require('express'),
    config = require('./config.js');

module.exports = function(app, db) {
    app.set('showStackError', true);

    //Prettify HTML
    app.locals.pretty = true;

    //Setting the fav icon and static folder
    //TODO: (martin) the static directory should be '/client' but for some reason 'grunt bower-install' generate wrong directory into head.jade (figure out why this is happening)
//    app.use(express.static(config.root + '/client'));
    app.use(express.static(config.root));
    app.use(express.favicon(config.root + 'client/assets/img/teeth.png'));

    //Set views path, template engine and default layout
    app.set('views', config.root + 'server/app/views');
    app.set('view engine', 'jade');

    //Set stylus engine
    app.use(require('stylus').middleware(config.root + '/assets'));

    // all environments
    app.configure(function(){
        app.use(express.logger('dev'));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

        //bodyParser should be above methodOverride
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        //TODO: (martin) mongoose database connection should be somewhere here.
        // Database connection
//        var MONGOLAB_URI = 'mongodb://' + config.mongo.dbUser + ':' + config.mongo.dbPassword + '@ds029798.mongolab.com:29798/' + config.mongo.dbName;
//        mongoose.connect(MONGOLAB_URI);
//        mongoose.connection.on('open', function() {console.info('Connected to Chitter MongoDB successfully!')});
//        mongoose.connection.on('error', function(err) {console.error('ERROR connecting to: ' + '"' + MONGOLAB_URI + '" ' + err)});

        //routes should be at the last
        app.use(app.router);
    });
};
