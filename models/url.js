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
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'users '
    }

},
    {
        timestamps: true
    }
);

const URL = mongooes.model('url', urlSchema);

module.exports = URL;