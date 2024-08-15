const mongoose = require('mongoose');

const {Schema} = mongoose;

const NewsletterSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.ObjectId,
            ref: "User",
            required: true
        },
        mediaList: [{
            type: Schema.ObjectId,
            ref: "Media",
            required: true
        }],
        time: [{
            type: Date,
            required: true,
        }],
        location: [{
            type: String,
            enum: ["email", "inApp", "telegram", "whatsapp"],
            required: true,
        }],
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: Date,
    },
    {optimisticConcurrency: true},
);

module.exports = mongoose.model('Newsletter', NewsletterSchema);
