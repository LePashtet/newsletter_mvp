const express = require('express');
const Joi = require("joi");

const validate = require('./middlewares/validate');
const controller = require('./controller');

const router = express.Router();
const routerPath = "/newsletter"

router.post(`/add`, validate({
    body: Joi.object().keys({
        name: Joi.string().max(20).required(),
        mediaList: Joi.array().items(Joi.string()),
        time: Joi.array().items(Joi.date()),
        location: Joi.array().items(Joi.string().valid("email", "inApp", "telegram", "whatsapp"))
    })
}), controller.createNewsletter);


module.exports = {
    router,
    routerPath
}
