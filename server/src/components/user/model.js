const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
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

module.exports = mongoose.model('user', UserSchema);