const mongoose = require('mongoose');

const {Schema} = mongoose;

const MediaSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        filters: {
            type: Array,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: Date,
    },
    {optimisticConcurrency: true},
);

module.exports = mongoose.model('Medias', MediaSchema);
