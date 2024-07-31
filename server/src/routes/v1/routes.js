const { Router } = require('express');
const {router: userRouter, routerPath} = require('../../components/user/routes');

const router = Router();

router.use(routerPath, userRouter);

module.exports = router;
