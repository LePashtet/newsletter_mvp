const express = require('express');
const Joi = require("joi");

const {objectId} = require('./validation');

const validate = require('./middlewares/validate');
const controller = require('./controller');

const router = express.Router();
const routerPath = "/user"

router.post(`/add`, validate({body: Joi.object().keys({
        email: Joi.string().email({tlds: {allow: false}}).required(),

    })}), controller.createUser);


router.get('/:objectId', validate({params: Joi.object().keys({
        objectId: objectId.required()
    })}), controller.getUserById);

router.get('/referral/generate', controller.getUserReferralCodeById);


router.delete('/:objectId',validate({params: Joi.object().keys({
        objectId: objectId.required()
    })}), controller.deleteUser);

module.exports = {
    router,
    routerPath
}
