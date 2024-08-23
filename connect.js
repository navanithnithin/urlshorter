const mongooes = require('mongoose');
async function connectToMongoDB(url) {
    return mongooes.connect(url);
}

module.exports = {
    connectToMongoDB
}


