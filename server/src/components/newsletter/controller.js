const Newsletter = require("./model");
const logger = require("../../config/logger");
const catchAsync = require('./middlewares/catchAsync');
const User = require("../user/model");

const createNewsletter = catchAsync(async (req, res) => {
    const {name, mediaList, time, location} = req.body;
    try {
        let newsletter = await Newsletter.findOne({name, userId: req.user._id});
        if (!newsletter) {
            newsletter = await Newsletter.create({name, mediaList, time, location, userId: req.user._id})
            res.status(201).send(newsletter);
        } else {
            res.status(400).send({error: "Newsletter exists"});
        }
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});

const updateNewsletter = catchAsync(async (req, res) => {
    const {name, mediaList, time, location} = req.body;
    const {newsletterId} = req.params;
    try {
        let newsletter = await Newsletter.findById(newsletterId)
        if (!newsletter) {
            res.status(404).send({error: "Newsletter not found"});
        } else {
            const updatedNewsletter = await Newsletter.updateOne({"_id": newsletterId}, {
                name: name ?? newsletter.name,
                mediaList: mediaList ?? newsletter.mediaList,
                time: time ?? newsletter.time,
                location: location ?? newsletter.location
            })
            res.status(200).send(updatedNewsletter);
        }
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});


const deleteNewsletter = catchAsync(async (req, res) => {
    const { objectId } = req.params;
    try {
        await User.findByIdAndDelete(objectId);
        res.status(201).send("Ok");
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});

module.exports = {
    createNewsletter,
    updateNewsletter,
    deleteNewsletter
}
