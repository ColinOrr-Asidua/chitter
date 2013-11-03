var Cheep = require('../models/cheep');

exports.index = function(req, res) {
    res.render('index');
};

/**
 * HTTP GET /cheeps
 * Returns: the list of cheeps
 */
exports.getCheeps = function(req, res) {
    console.info('Retrieving all cheeps');
    return Cheep.find({}).sort({posted: 'descending'}).exec(function(err, cheeps) {
        if (!err) {
            return res.send(cheeps);
        } else {
            return console.log(err);
        }
    });
};

/**
 * HTTP GET /cheeps/:id
 * Find a cheep by id
 * Param: id of the cheep to find
 * Returns: the cheep corresponding to the specified id
 */
exports.getCheep = function (req, res) {
    var id = req.params.id;
    console.info('Retrieving cheep: ' + id);
    return Cheep.findById(id, function (err, cheep) {
        if (!err) {
            if(cheep === null) {
                return res.status(404).send('Sorry, cheep not found :-(');
            } else {
                return res.send(cheep);
            }
        } else {
            return console.error(err);
        }
    });
};

/**
 * HTTP POST /cheep
 * Create a cheep
 * Param: cheep details to save
 */
exports.postCheep = function(io) {
    return function(req, res) {
        var cheep = new Cheep({
            author: req.body.author,
            posted: new Date(),
            body: req.body.body
        });

        console.log("Adding Cheep: " + JSON.stringify(cheep));
        cheep.save(function (err) {
            if (!err) {
                io.sockets.emit('cheep', cheep);
                console.info("Cheep created");
                return res.send(cheep._id);
            } else {
                return res.send(err);
            }
        });
    };
};

