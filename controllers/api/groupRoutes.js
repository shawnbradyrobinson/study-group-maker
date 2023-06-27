const router = require('express').Router();

const { Group } = require('../../models');

router.get('/', (req, res, next) => {

console.log("api/groups message");

res.send("hi");
next()

})


module.exports = router; 