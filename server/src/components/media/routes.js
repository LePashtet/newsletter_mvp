const express = require('express');

const controller = require('./controller');

const router = express.Router();
const routerPath = "/media"



router.get('/all', controller.getAll);

module.exports = {
    router,
    routerPath
}
