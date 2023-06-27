const router = require('express').Router();

const { User } = require("../../models");

router.get('/', (req, res) => {
    console.log("Get from the api/users");
    res.send("hi");
})

module.exports = router; 