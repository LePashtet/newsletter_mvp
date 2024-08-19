const express = require('express');
const Joi = require("joi");

const validate = require('./middlewares/validate');
const controller = require('./controller');
const {objectId} = require("../user/validation");

const router = express.Router();
const routerPath = "/newsletter"

router.post(`/add`, validate({
    body: Joi.object().keys({
        name: Joi.string().max(20).required(),
        mediaList: Joi.array().items(Joi.string()).required(),
        time: Joi.array().items(Joi.date()).required(),
        location: Joi.array().items(Joi.string().valid("email", "inApp", "telegram", "whatsapp")).required()
    })
}), controller.createNewsletter);

router.put(`/update/:newsletterId`, validate({
    params: Joi.object().keys({
        newsletterId: objectId.required()
    }),
    body: Joi.object().keys({
        name: Joi.string().max(20),
        mediaList: Joi.array().items(Joi.string()),
        time: Joi.array().items(Joi.date()),
        location: Joi.array().items(Joi.string().valid("email", "inApp", "telegram", "whatsapp"))
    })
}), controller.updateNewsletter);

router.delete(`/delete/:newsletterId`, validate({
    params: Joi.object().keys({
        newsletterId: objectId.required()
    }),
}), controller.deleteNewsletter);


module.exports = {
    router,
    routerPath
}
