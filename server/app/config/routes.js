//TODO: (martin) check our prototype how RESTFUL/domain is working there https://github.com/martinmicunda/chitter-prototype/tree/master/server/
module.exports = function(app, io) {
    //Cheeps Routes
    var cheeps = require('../controllers/cheeps');
    app.get('/', cheeps.index);
    app.get('/cheeps', cheeps.getCheeps);
    app.get('/cheeps/:id', cheeps.getCheep);
    app.post('/cheeps', cheeps.postCheep(io));

    //Decks Routes
    var decks = require('../controllers/decks');
    app.get('/decks/design', decks.design);
};