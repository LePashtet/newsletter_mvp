const { Router } = require('express');
const {router: userRouter, routerPath: userRouterPath} = require('../../components/user/routes');
const {router: mediaRouter, routerPath: mediaRouterPath} = require('../../components/media/routes');

const router = Router();

router.use(userRouterPath, userRouter);
router.use(mediaRouterPath, mediaRouter);

module.exports = router;
