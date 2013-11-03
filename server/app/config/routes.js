// RESTful API Handlers
var handlers = {
    cheeps: require('../controllers/cheeps'),
    decks: require('../controllers/decks')
};

module.exports = function(app, io) {

    // CHEEPS RESTful
    app.get('/', handlers.cheeps.index);
    app.get('/cheeps', handlers.cheeps.getCheeps);
    app.get('/cheeps/:id', handlers.cheeps.getCheep);
    app.post('/cheeps', handlers.cheeps.postCheep(io));

    // DECKS RESTful
    app.get('/decks/design', handlers.decks.design);
};