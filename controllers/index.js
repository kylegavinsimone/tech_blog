const router = require('express').Router();
const apiRoutes = require('./api');
const dashboard = require("./dashboard")
const homeRoutes = require("./homeRoutes")
router.use('/api', apiRoutes);
router.use('/', dashboard);
router.use('/', homeRoutes);
module.exports = router;
