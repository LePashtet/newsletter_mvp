const Media = require("./model");
const logger = require("../../config/logger");
const catchAsync = require('./middlewares/catchAsync');


const getAll = catchAsync(async (req, res) => {
    try {
        const medias = await Media.find();
        res.send(medias);
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
})


module.exports = {
    getAll
}
