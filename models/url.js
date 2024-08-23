const mongooes = require('mongoose');
const urlSchema = new mongooes.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,
    },
    totelClicks: {
        type: Number,
    },
    visitHistory: [{ timestamp: { type: Number } }],

},
    {
        timestamps: true
    }
);

const URL = mongooes.model('url', urlSchema);

module.exports = URL;