const router = require('express').Router();

const userRoutes = require('./userRoutes.js');

const groupRoutes = require('./groupRoutes.js');

router.use('/users', userRoutes);

router.use('/groups', groupRoutes);

module.exports = router; 