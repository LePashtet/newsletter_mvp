const { Router } = require('express');
const {router: authRouter, routerPath: authRouterPath} = require('../../components/auth/routes');
const router = Router();

router.use(authRouterPath, authRouter);

module.exports = router;
