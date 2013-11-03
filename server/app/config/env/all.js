var path = require('path'),
rootPath = path.normalize(__dirname + '/../../../../');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000
    //TODO: (martin) mongo details should be comes from env*.json file (so we don't show sensitive information e.g. password etc.)
//    db: process.env.MONGOHQ_URL
    //  mongo: {
    //    dbUser: 'chitter',
    //    dbPassword: 'chitter123',
    //    dbName: 'chitter'
    //  },
}
